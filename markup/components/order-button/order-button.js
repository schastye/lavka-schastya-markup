/* global */

'use strict';

(function () {
  let initElem = document.querySelectorAll( '.order-button' );
  for ( let orderButton of initElem ) {
    if ( initElem.length && window.localStorage.getItem( 'order_updated' ) === 'true' ) {
      orderButton.classList.add( 'order-button_update' );
    } else {
      orderButton.classList.remove( 'order-button_update' );
    }
  }

} )();
