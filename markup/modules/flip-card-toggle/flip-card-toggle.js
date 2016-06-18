/* global */

'use strict';

(function () {
  let initElem = document.querySelectorAll( '.flip-card-toggle' );
  if ( initElem.length ) {
    [].slice.call(initElem).forEach( ( el ) => {
      el.addEventListener( 'click', () => {
        [].slice.call( document.querySelectorAll( '.flip-card__container' ) ).forEach( ( flipCardContainer ) => {
          flipCardContainer.classList.toggle( 'flip-card__container_flip' );
        } );
      }, false);
    } );
  }

} )();
