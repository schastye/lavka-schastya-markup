/* global */

'use strict';

(function () {

  let initElem = document.querySelectorAll( '.set-cell' );

  if ( initElem.length ) {
    [].slice.call( document.querySelectorAll( '.button_add-to-card' ) ).forEach( el => {
      el.disabled = true;
    } );
  }

} )();
