/* global showOrderModal */

'use strict';

(function () {
  let minicartButton = document.querySelector( '.header-shopping-footer__link' );
  if (minicartButton && minicartButton.classList.contains( 'noauthorized' ) ) {
    minicartButton.addEventListener('click', showOrderModal.bind( null, '.order-modal' ));
  }
})();
