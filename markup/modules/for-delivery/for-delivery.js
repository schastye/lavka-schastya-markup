'use strict';

(function () {
  let initElement = document.querySelectorAll( '.for-delivery' );
  if ( initElement.length ) {
    [].slice.call( document.querySelectorAll( '.delivery__checked') ).forEach( deliveryRadio => {
      deliveryRadio.addEventListener( 'change', function (event) {
        let thisRadio = this;
        [].slice.call( initElement ).forEach( showElement => {
          if ( thisRadio.classList.contains( 'for-delivery-item' ) ) {
            showElement.classList.add( 'for-delivery_show' );
          } else {
            showElement.classList.remove( 'for-delivery_show' );
          }
        });
      } );
    });
  }
})();
