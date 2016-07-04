/* global Draggabilly, Modernizr, getStyleProperty, classie, updateStack */

( function () {

  'use strict';

  let body = document.body,
    docElem = window.document.documentElement,
    transEndEventNames = {
      'WebkitTransition': 'webkitTransitionEnd',
      'MozTransition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'msTransition': 'MSTransitionEnd',
      'transition': 'transitionend'
    },
    transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
    support = {
      transitions: Modernizr.csstransitions
    };

  // https://remysharp.com/2010/07/21/throttling-function-calls
  function throttle(fn, threshhold = 250, scope) {
    let last,
      deferTimer;

    return function () {
      let context = scope || this;
      let now = +new Date(),
        args = arguments;
      if (last && now < last + threshhold) {
        // hold on to it
        clearTimeout(deferTimer);
        deferTimer = setTimeout( () => {
          last = now;
          fn.apply(context, args);
        }, threshhold);
      } else {
        last = now;
        fn.apply(context, args);
      }
    };
  }

  function getViewportH() {
    let client = docElem.clientHeight, inner = window.innerHeight;
    return client < inner ? inner : client;
  }

  function scrollX() {
    return window.pageXOffset || docElem.scrollLeft;
  }

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  // gets the offset of an element relative to the document
  function getOffset( el ) {
    let offset = el.getBoundingClientRect();
    return {
      top: offset.top + scrollY(),
      left: offset.left + scrollX()
    };
  }

  function setTransformStyle( el, tval ) {
    el.style.transform = tval;
  }

  function onEndTransition( el, callback ) {

    let onEndCallbackFn = () => {
      if ( support.transitions ) {
        el.removeEventListener( transEndEventName, onEndCallbackFn );
      }
      if ( callback && typeof callback === 'function' ) {
        callback.call();
      }
    };

    if ( support.transitions ) {
      el.addEventListener( transEndEventName, onEndCallbackFn );
    } else {
      onEndCallbackFn();
    }
  }

  function extend( a, b ) {
    for ( let key in b ) {
      if ( b.hasOwnProperty( key ) ) {
        a[key] = b[key];
      }
    }
    return a;
  }

  let is3d = !!getStyleProperty( 'perspective' );

  function Droppable( droppableEl, options ) {
    this.el = droppableEl;
    this.options = extend( {}, this.options );
    extend( this.options, options );
  }

  Droppable.prototype.options = {
    highlightClass: 'highlight',

    onDrop: function () {
      return false;
    }
  };

  // based on http://stackoverflow.com/a/2752387 : checks if the droppable
  // element is ready to collect the draggable: the draggable element must
  // intersect the droppable in half of its width or height.
  Droppable.prototype.isDroppable = function ( draggableEl ) {
    let offset1 = getOffset( draggableEl ),
      width1 = draggableEl.offsetWidth,
      height1 = draggableEl.offsetHeight,
      offset2 = getOffset( this.el ),
      width2 = this.el.offsetWidth,
      height2 = this.el.offsetHeight;

    return !(offset2.left > offset1.left + width1 - width1 / 2 ||
             offset2.left + width2 < offset1.left + width1 / 2 ||
             offset2.top > offset1.top + height1 - height1 / 2 ||
             offset2.top + height2 < offset1.top + height1 / 2 );
  };

  // highlight the droppable if it's ready to collect the draggable
  Droppable.prototype.highlight = function ( draggableEl ) {
    if ( this.isDroppable( draggableEl ) ) {
      classie.add( this.el, this.options.highlightClass );
    } else {
      classie.remove( this.el, this.options.highlightClass );
    }
  };

  // accepts a draggable element...
  Droppable.prototype.collect = function ( draggableEl ) {
    // remove highlight class from droppable element
    classie.remove( this.el, this.options.highlightClass );
    this.options.onDrop( this, draggableEl );
  };

  function Draggable( draggableEl, droppables, options ) {
    this.el = draggableEl;
    this.options = extend( {}, this.options );
    extend( this.options, options );
    this.droppables = droppables;
    this.scrollableEl = this.options.scrollable === window
      ? window
      : document.querySelector( this.options.scrollable );
    this.scrollIncrement = 0;
    if ( this.options.helper ) {
      this.offset = {
        left: getOffset( this.el ).left,
        top: getOffset( this.el ).top
      };
    }
    this.draggie = new Draggabilly( this.el, this.options.draggabilly );
    this.initEvents();
  }

  Draggable.prototype.options = {
    // auto scroll when dragging
    scroll: false,
    // element to scroll
    scrollable: window,
    // scroll speed (px)
    scrollSpeed: 20,
    // minimum distance to the scrollable element edges to trigger the scroll
    scrollSensitivity: 10,
    // draggabilly options
    draggabilly: {},
    // if the item should animate back to its original position
    animBack: true,
    // clone the draggable and insert it on the same position while dragging
    // the original one
    helper: false,

    // classes
    activeClass: 'is-active',
    droppedClass: 'is-dropped',
    completeClass: 'is-complete',
    draggingClass: 'is-dragging',
    helperClass: 'helper',
    animateClass: 'animate',

    // callbacks
    onStart: function () {
      return false;
    },
    onDrag: function () {
      return false;
    },
    onEnd: function () {
      return false;
    }
  };

  Draggable.prototype.initEvents = function () {
    this.draggie.on( 'dragStart', this.onDragStart.bind(this) );
    this.draggie.on( 'dragMove', throttle( this.onDragMove.bind(this), 5 ) );
    this.draggie.on( 'dragEnd', this.onDragEnd.bind(this) );
  };

  Draggable.prototype.onDragStart = function () {
    let instance = this.draggie;
    // callback
    this.options.onStart( instance );

    // save left & top
    this.position = {
      left: instance.position.x,
      top: instance.position.y
    };
    // create helper
    if ( this.options.helper ) {
      this.createHelper( instance.element );
    }
    // add class is-active to the draggable element
    // (control the draggable z-index)
    classie.add( instance.element, this.options.activeClass );
    // highlight droppable elements if draggables intersect
    this.highlightDroppables();
  };

  Draggable.prototype.onDragMove = function ( instance ) {
    // callback
    this.options.onDrag();

    // scroll page if at viewport's edge
    if ( this.options.scroll ) {
      this.scrollPage( instance.element );
    }
    // highlight droppable elements if draggables intersect
    this.highlightDroppables();
  };

  Draggable.prototype.onDragEnd = function () {
    let instance = this.draggie;
    if ( this.options.helper ) {
      instance.element.style.left = instance.position.x + this.position.left + 'px';
      instance.element.style.top = instance.position.y + this.position.top + 'px';
    }

    if ( this.options.scroll ) {
      // reset this.scrollIncrement
      this.scrollIncrement = 0;
    }

    // if the draggable && droppable elements intersect
    // then "drop" and move back the draggable
    let dropped = false;
    for ( let i = 0, len = this.droppables.length; i < len; ++i ) {
      let droppableEl = this.droppables[i];
      if ( droppableEl.isDroppable( instance.element ) ) {
        dropped = true;
        droppableEl.collect( instance.element );
      }
    }

    // callback
    this.options.onEnd( dropped );

    let withAnimation = true;

    if ( dropped ) {
      // add class is-dropped to draggable ( controls how the draggable
      // appears again at its original position)
      classie.add( instance.element, this.options.droppedClass );
      // after a timeout remove that class to trigger the transition
      let _this = this;
      setTimeout( () => {
        classie.add( instance.element, _this.options.completeClass );
        onEndTransition( instance.element, () => {
          classie.remove( instance.element, _this.options.completeClass );
          classie.remove( instance.element, _this.options.droppedClass );
        } );
      }, 25 );
    }

    // move back with animation - track if the element moved away
    // from its initial position or if it was dropped in a droppable element
    if ( this.position.left === instance.position.x &&
         this.position.top === instance.position.y ||
         dropped ) {
      // in this case we will not set a transition for the item to move back
      withAnimation = false;
    }

    // move back the draggable element (with or without a transition)
    this.moveBack( withAnimation );
  };

  Draggable.prototype.highlightDroppables = function () {
    for ( let i = 0, len = this.droppables.length; i < len; ++i ) {
      this.droppables[i].highlight( this.el );
    }
  };

  Draggable.prototype.createHelper = function () {
    // clone the original item (same position)
    let clone = this.el.cloneNode( true );

    clone.addEventListener( 'click', ( event ) => {
      updateStack( event.currentTarget.dataset.good, event.currentTarget.dataset.drag );
    }, false );
    // because the original element started the dragging, we need to remove
    // the is-dragging class
    classie.remove( clone, this.options.draggingClass );
    this.el.parentNode.replaceChild( clone, this.el );
    // initialize Draggabilly on the clone…
    let draggable = new Draggable( clone, this.droppables, this.options );
    // the original item will be absolute on the page - need to set correct
    // position values..
    classie.add( this.el, this.options.helperClass );
    this.el.style.left = draggable.offset.left + 'px';
    this.el.style.top = draggable.offset.top + 'px';

    // save new left/top
    this.position.left = draggable.offset.left;
    this.position.top = draggable.offset.top;

    let image = this.el.querySelectorAll( '.variant-item__image' )[ 0 ];
    image.setAttribute( 'src', this.el.dataset.drag );

    body.appendChild( this.el );
  };

  // move back the draggable to its original position
  Draggable.prototype.moveBack = function ( withAnimation ) {
    let anim = this.options.animBack && withAnimation;

    // add animate class (where the transition is defined)
    if ( anim ) {
      classie.add( this.el, this.options.animateClass );
    }
    // reset translation value
    setTransformStyle( this.el, is3d ? 'translate3d(0,0,0)' : 'translate(0,0)' );
    // apply original left/top
    this.el.style.left = this.position.left + 'px';
    this.el.style.top = this.position.top + 'px';
    // remove class animate (transition) and is-active to the draggable
    // element (z-index)
    let callbackFn = function () {
      if ( anim ) {
        classie.remove( this.el, this.options.animateClass );
      }
      classie.remove( this.el, this.options.activeClass );
      if ( this.options.helper ) {
        body.removeChild( this.el );
      }
    }.bind( this );

    if ( anim ) {
      onEndTransition( this.el, callbackFn );
    } else {
      callbackFn();
    }
  };

  // check if element is outside of the viewport.
  // TODO: check also for right and left sides
  Draggable.prototype.outViewport = function () {
    let scrollSensitivity = Math.abs( this.options.scrollSensitivity ) || 0,
      scrolled = scrollY(),
      viewed = scrolled + getViewportH(),
      elT = getOffset( this.el ).top,
      // elHalfPos = elT + this.el.offsetHeight / 2,
      belowViewport = elT + this.el.offsetHeight + scrollSensitivity > viewed,
      aboveViewport = elT - scrollSensitivity < scrolled;

    if ( belowViewport ) {
      this.scrolldir = 'down';
    } else if ( aboveViewport ) {
      this.scrolldir = 'up';
    }

    return belowViewport || aboveViewport;
  };

  // force the scroll on the page when dragging..
  Draggable.prototype.scrollPage = function () {
    // check if draggable is "outside" of the viewport
    if ( this.outViewport( this.el ) ) {
      this.doScroll();
    } else {
      // reset this.scrollIncrement
      this.scrollIncrement = 0;
    }
  };

  // just considering scroll up and down
  // this.scrollIncrement is used to accelerate the scrolling.
  // But mainly it's used to avoid the draggable flickering due
  // to the throttle when dragging
  // todo: scroll right and left
  // todo: draggabilly multi touch scroll:
  // see https://github.com/desandro/draggabilly/issues/1
  Draggable.prototype.doScroll = function () {
    let speed = this.options.scrollSpeed || 20;
    this.scrollIncrement++;
    let val = this.scrollIncrement < speed ? this.scrollIncrement : speed;

    if ( this.scrollableEl === window) {
      this.scrollableEl.scrollBy( 0, this.scrolldir === 'up' ? val * -1 : val );
    } else {
      this.scrollableEl.scrollTop += this.scrolldir === 'up' ? val * -1 : val;
    }
  };

  window.Droppable = Droppable;
  window.Draggable = Draggable;
})();
