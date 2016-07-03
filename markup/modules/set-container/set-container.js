/* global Droppable, Draggable, classie */

'use strict';

/* eslint-disable */
function getElIndex(el) {
  for (var i = 0; el = el.previousElementSibling; i++);
  return i;
}
/* eslint-enable */

/**
 * Gets the stack.
 *
 * @param      {string}  rootElement  The element
 * @param      {object}  stack        The stack
 * @return     {object}  The stack.
 */
function getStack( rootElement, stack = {} ) {
  if ( typeof rootElement === 'undefined' || typeof stack !== 'object' ) {
    return false;
  }

  [].slice.call( document.querySelectorAll( rootElement ) ).forEach( ( rootEl ) => {
    let children = rootEl.children;
    for ( let item in children ) {
      if ( {}.hasOwnProperty.call( children, item ) ) {
        stack[ item ] = {
          itemId: children[ item ].firstElementChild ? children[ item ].firstElementChild.firstElementChild.value : null,
          image: children[ item ].firstElementChild ? children[ item ].firstElementChild.style.backgroundImage.match(/url\("(.*)"\)/)[1] : ''
        };
      }
    }
  });
  return stack;
}

function addItem( item, image, stack = getStack( '#drop-area' ) ) {
  for ( let index in stack ) {
    if ( {}.hasOwnProperty.call( stack, index ) && stack[ index ].itemId === null ) {
      stack[ index ].itemId = item;
      stack[ index ].image = image;
      break;
    }
  }
  return stack;
}

var STACK = {};

function onClickAdd( event, stack = STACK ) {
  let item = event.currentTarget.dataset.good,
    image = event.currentTarget.dataset.drag,
    newStack = addItem( item, image, getStack( '#drop-area' ), stack );
  [].slice.call( document.querySelectorAll( '.set-cell' ) ).forEach( ( rootEl ) => {
    let children = rootEl.children;
    for ( let child in children ) {
      if ( {}.hasOwnProperty.call( children, child ) && newStack[ child ].itemId !== null ) {
        children[ child ].innerHTML = `<div style="background-image: url(${ newStack[ child ].image });" class="set-cell-content">
                                         <input type="hidden" name="options[composition][${ child }]" class="set-cell-content__id" value="${ newStack[ child ].itemId }" form="order">
                                       </div>`;
        children[ child ].firstChild.addEventListener( 'click', remove => {
          remove.preventDefault();
          remove.srcElement.remove();
          document.querySelectorAll( '.button_add-to-card' )[0].disabled = true;
          document.getElementById( 'drop-area' ).classList.remove( 'drop-area_completed' );
        });
      }
    }
  });
}



(function () {

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
          instance.el.innerHTML = `<div style="background-image: url(${ dragEl.dataset.drag });" class="set-cell-content">
                                     <input type="hidden" name="options[composition][${ getElIndex( instance.el ) }]" class="set-cell-content__id" value="${dragEl.dataset.good}" form="order">
                                   </div>`;
          instance.el.firstChild.addEventListener( 'click', event => {
            event.preventDefault();
            event.srcElement.remove();
            document.querySelectorAll( '.button_add-to-card' )[0].disabled = true;
            dropArea.classList.remove( 'drop-area_completed' );
          });
          // debugger; // eslint-disable-line
          // show checkmark inside the droppabe element
          classie.add( instance.el, this.feedbackClass );
          clearTimeout( instance.checkmarkTimeout );
          instance.checkmarkTimeout = setTimeout( () => {
            classie.remove( instance.el, this.feedbackClass );
          }, 800 );

          if ( document.querySelectorAll( '.set-cell__item' ).length ===
               document.querySelectorAll( '.set-cell-content' ).length ) {
            document.querySelectorAll( '.button_add-to-card' )[0].disabled = false;
            dropArea.classList.add( 'drop-area_completed' );
          }
        }
      } ) );
    } );

    // initialize draggable(s)
    [].slice.call(document.querySelectorAll( '.' + gridItem )).forEach( el => {
      el.addEventListener( 'click', (event) => {
        onClickAdd( event );
      }, false );
      new Draggable( el, droppableArr, {
        scroll: true,
        scrollable: '#drop-area',
        scrollSpeed: 40,
        scrollSensitivity: 50,
        draggabilly: {
          containment: '.dragdrop'
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
            dropAreaTimeout = setTimeout( afterDropFn, 400 );
          }
        }
      } );
    } );
  }
})();
