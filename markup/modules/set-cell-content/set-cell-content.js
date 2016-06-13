'use strict';

(function () {

  let initElem = document.querySelectorAll( '.set-cell-content' );

  if ( initElem.length ) {
    [].slice.call( initElem ).forEach( el => {
      el.addEventListener( 'click', event => {
        event.preventDefault();
        event.srcElement.remove();
      });
    } );
  }

} )();