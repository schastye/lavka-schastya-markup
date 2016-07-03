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
    children.forEach( ( el, index ) => {
      stack[ index ] = {
        itemId: el.firstElementChild ? el.firstElementChild.firstElementChild.value : null
      };
    });
  });
  return stack;
}

function addStack( rootElement, stack = {} ) {
  [].slice.call( document.querySelectorAll( rootElement ) ).forEach( ( el ) => {
    console.log( el.children );
  });
}

// function addItem( item, stack = getStack( '.drop-area__item' ) ) {
//   for ( let index in stack ) {
//     if ( {}.hasOwnProperty.call( stack, index ) && stack[ index ].itemId === null ) {
//       stack[ index ].itemId = item;
//       break;
//     }
//   }
//   return stack;
// }

function onClickAdd( event ) {
  // console.log( event.currentTarget.dataset.good );
  getStack( '#drop-area' );
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

          console.log( document.querySelectorAll( '.set-cell__item' ).length -
           document.querySelectorAll( '.set-cell-content' ).length );
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
      el.addEventListener( 'click', onClickAdd, false );
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
