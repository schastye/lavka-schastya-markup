/* global */

'use strict';

(function () {
  let initElem = document.querySelectorAll( '.order-button' );
  if ( initElem.length && window.localStorage.getItem( 'order_updated' ) === 'true' ) {
    [].slice.call(initElem).forEach( ( el ) => {
      el.classList.add( 'order-button_update' );
    } );
  }

} )();
