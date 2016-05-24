/* global Droppable, Draggable, classie */

'use strict';

/* eslint-disable */
function getElIndex(el) {
  for (var i = 0; el = el.previousElementSibling; i++);
  return i;
}
/* eslint-enable */

(function () {

  let initElem = document.querySelectorAll( '.dragdrop' )[0];

  if (initElem) {
    let body = document.body,
      dropArea = document.getElementById( 'drop-area' ),
      dropAreaItem = 'drop-area__item',
      droppableArr = [],
      dropAreaTimeout,
      gridItem = 'grid__item';

    // initialize droppables
    [].slice.call( document.querySelectorAll( '.' + dropAreaItem )).forEach( el => {
      droppableArr.push( new Droppable( el, {
        highlightClass: dropAreaItem + '_highlight',
        feedbackClass: dropAreaItem + '_feedback',

        onDrop: function ( instance, dragEl ) {
          instance.el.innerHTML = `<div style="background-image: url(${ dragEl.dataset.drag });" class="set-cell-content">
                                     <input type="hidden" name="cell[${ getElIndex( instance.el ) }]" class="set-cell-content__id" value="${dragEl.dataset.good}">
                                   </div>`;
          instance.el.firstChild.addEventListener( 'click', event => {
            event.preventDefault();
            event.srcElement.remove();
          });
          // debugger; // eslint-disable-line
          // show checkmark inside the droppabe element
          classie.add( instance.el, this.feedbackClass );
          clearTimeout( instance.checkmarkTimeout );
          instance.checkmarkTimeout = setTimeout( () => {
            classie.remove( instance.el, this.feedbackClass );
          }, 800 );
          // ...
        }
      } ) );
    } );

    // initialize draggable(s)
    [].slice.call(document.querySelectorAll( '.' + gridItem )).forEach( el => {
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
