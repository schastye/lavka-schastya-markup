'use strict';

function hideOrderModal( selector ) {
  selector.classList.toggle( 'popup_show' );
  document.querySelector( '.page' ).classList.toggle( 'page_modal' );
}

function showOrderModal( selector ) {
  let modal = document.querySelector( selector );
  if ( modal ) {
    modal.classList.toggle( 'popup_show' );
    modal.querySelector( '.popup__close' )
      .addEventListener( 'click', hideOrderModal.bind( null, modal ) );
    document.querySelector( '.page' ).classList.toggle( 'page_modal' );
  }
}
