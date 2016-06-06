'use strict';

(function () {

  let initElem = document.querySelectorAll( '.textarea_expanded' );

  if ( initElem.length ) {
    [].slice.call( initElem ).forEach( el => {
      el.style.height = '50px';
      el.addEventListener( 'focus', event => {
        event.preventDefault();
        event.srcElement.style.height = '200px';
      });
      el.addEventListener( 'blur', event => {
        event.preventDefault();
        if ( event.srcElement.value === '' ) {
          event.srcElement.style.height = '50px';
        }
      });
    } );
  }

} )();
