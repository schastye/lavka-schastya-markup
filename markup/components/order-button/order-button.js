/* global */

'use strict';

(function () {
  let initElem = document.querySelectorAll( '.order-button' );
  for (let i = 0; i < initElem.length; i++) {
    if ( initElem.length && window.localStorage.getItem( 'order_updated' ) === 'true' ) {
      initElem[i].classList.add( 'order-button_update' );
    } else {
      initElem[i].classList.remove( 'order-button_update' );
    }
  }
} )();
