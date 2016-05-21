/* global jump */

'use strict';

(function () {
  let initElem = document.querySelectorAll( '.box-variant__item' );
  if ( initElem ) {
    // let event =
    [].slice.call(initElem).forEach( el => {
      el.addEventListener( 'click', event => {
        event.stopPropagation();
        let slide = event.srcElement.dataset.slide;
        let preview = document.querySelectorAll( '.box-preview' )[0];
        // preview.style.opacity = '0.5';
        console.log( preview );
        preview.style.backgroundImage = 'url(' + slide + ')';
        // preview.style.opacity = 1;
        // jump('.good-information', {
        //   duration: 100,
        //   offset: 100
        // });
      }, false);
    } );
  }

} )();
