/* global Droppable, Draggable, classie */

'use strict';

/* eslint-disable */
function getElIndex(el) {
  for (var i = 0; el = el.previousElementSibling; i++);
    return i;
}
/* eslint-enable */

(function () {

  function Stack( stackRootDOM ) {
    if ( typeof stackRootDOM === 'undefined' ) {
      return false;
    }

    this.root = document.querySelectorAll( stackRootDOM );
    this.stack = this.get();
  }

  Stack.prototype.get = function ( stack = {} ) {
    [].slice.call( this.root ).forEach( ( rootEl ) => {
      let children = rootEl.children;

      for ( let item = 0; item < children.length; item++ ) {
        stack[ item ] = {
          itemId: children[ item ].firstElementChild ? children[ item ].firstElementChild.firstElementChild.value : null,
          image: children[ item ].firstElementChild ? children[ item ].firstElementChild.style.backgroundImage.slice(4, -1) : null
        };
      }
    });
    return stack;
  };

  Stack.prototype.add = function ( item, image, position, stack = this.stack ) {
    if ( typeof item === 'undefined' || typeof image === 'undefined' ) {
      return false;
    }
    if ( position ) {
      stack[ position ].itemId = item;
      stack[ position ].image = image;
    } else {
      for ( let index in stack ) {
        if ( {}.hasOwnProperty.call( stack, index ) && stack[ index ].itemId === null ) {
          stack[ index ].itemId = item;
          stack[ index ].image = image;
          break;
        }
      }
    }

    return this.update( stack );
  };

  Stack.prototype.remove = function ( position, event ) {
    let newStack = this.stack;
    newStack[ position ].itemId = null;
    newStack[ position ].image = null;

    return this.update( newStack );
  };

  Stack.prototype.status = function ( count ) {
    if ( count === 0 ) {
      [].slice.call( this.root ).forEach( root => {
        root.classList.add( 'drop-area_completed' );
      } );
      [].slice.call( document.querySelectorAll( '.button_add-to-card' ) ).forEach( ( button ) => {
        button.disabled = false;
      } );
    } else {
      [].slice.call( this.root ).forEach( root => {
        root.classList.remove( 'drop-area_completed' );
      } );
      [].slice.call( document.querySelectorAll( '.button_add-to-card' ) ).forEach( ( button ) => {
        button.disabled = true;
      } );
    }
    // console.log( count );
  };

  Stack.prototype.update = function ( newStack = this.get() ) {
    let stack = newStack || {};
    let stackLength = Object.keys( stack ).length;

    [].slice.call( this.root ).forEach( ( rootEl ) => {
      let children = rootEl.children;
      for ( let item = 0; item < children.length; item++ ) {
        if ( stack[ item ].itemId !== null ) {
          children[ item ].innerHTML = `<div style="background-image: url(${ stack[ item ].image });" class="set-cell-content">
                                          <input type="hidden" name="options[composition][${ item }]" class="set-cell-content__id" value="${ stack[ item ].itemId }" form="order">
                                        </div>`;
          children[ item ].firstChild.addEventListener( 'click', this.remove.bind( this, item, event ), false );
          stackLength--;
        } else {
          children[ item ].innerHTML = '';
        }
      }
      this.status( stackLength );
      return stack;
    });
  };

  let setStack = new Stack( '#drop-area' );
  window.Stack = setStack;

  let initElem = document.querySelectorAll( '.dragdrop' );

  if ( initElem.length ) {
    let body = document.body,
      dropArea = document.getElementById( 'drop-area' ),
      dropAreaItem = 'drop-area__item',
      droppableArr = [],
      dropAreaTimeout,
      gridItem = 'grid__item';

    // initialize droppables
    [].slice.call( document.querySelectorAll( '.' + dropAreaItem )).forEach( ( el ) => {
      droppableArr.push( new Droppable( el, {
        highlightClass: dropAreaItem + '_highlight',
        feedbackClass: dropAreaItem + '_feedback',

        onDrop: function ( instance, dragEl ) {
          setStack.add( dragEl.dataset.good, dragEl.dataset.drag, getElIndex( instance.el ) );

          // show checkmark inside the droppabe element
          classie.add( instance.el, this.feedbackClass );
          clearTimeout( instance.checkmarkTimeout );
          instance.checkmarkTimeout = setTimeout( () => {
            classie.remove( instance.el, this.feedbackClass );
          }, 800 );
        }
      } ) );
    } );

    // initialize draggable(s)
    [].slice.call(document.querySelectorAll( '.' + gridItem ) ).forEach( el => {
      function clickEvent( event ) {
        let _event = event || window.event;
        let _element = _event.currentTarget ? _event.currentTarget : _event.srcElement;
        setStack.add( _element.dataset.good, _element.dataset.drag );
      }
      el.addEventListener( 'click', clickEvent, false );
      // el.addEventListener( 'touchstart', clickEvent, false );
      if (document.documentElement.clientWidth >= 1024) {
        new Draggable( el, droppableArr, {
          scroll: true,
          scrollable: '#drop-area',
          scrollSpeed: 40,
          scrollSensitivity: 50,
          draggabilly: {
            containment: '.good-part'
          },
          helper: true,

          activeClass: 'js-dragActive',
          droppedClass: 'is-dropped',
          completeClass: 'is-complete',
          draggingClass: 'is-dragging',
          helperClass: gridItem + '_helper',
          animateClass: gridItem + '_animate',
          showClass: 'drop-area_show',

          onStart: function () {
            // add class activeClass to body
            classie.add( body, this.activeClass );
            // clear timeout: dropAreaTimeout (toggle drop area)
            clearTimeout( dropAreaTimeout );
            // show dropArea
            classie.add( dropArea, this.showClass );
          },
          onEnd: function ( wasDropped ) {
            let showClass = this.showClass,
              activeClass = this.activeClass,
              afterDropFn = function () {
                // hide dropArea
                classie.remove( dropArea, showClass );
                // remove class activeClass from body
                classie.remove( body, activeClass );
              };

            if ( !wasDropped ) {
              afterDropFn();
            } else {
              // after some time hide drop area and remove class activeClass from body
              clearTimeout( dropAreaTimeout );
              dropAreaTimeout = setTimeout( afterDropFn, 1200 );
            }
          }
        } );
      }
    } );
  }
})();
