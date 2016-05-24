/* global */

'use strict';

(function () {
  let initElem = document.querySelectorAll( '.button_add-to-card' );
  if ( initElem ) {
    [].slice.call(initElem).forEach( ( el ) => {
      el.addEventListener( 'click', event => {
        if ( !event.currentTarget.classList.contains( 'button_add-to-card_added' ) ) {
          event.preventDefault();
          event.currentTarget.classList.add( 'button_add-to-card_added' );
          event.currentTarget.querySelectorAll( '.button__caption' )[ 0 ]
            .innerText = 'Перейти к заказу';
        } else {
          console.log( 'Go to order!' );
        }
      }, false);
    } );
  }

} )();
