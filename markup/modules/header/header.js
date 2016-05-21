/* global classie, ScrollMagic */

'use strict';

let headerNavigation = document.getElementById( 'header__navigation' );
if (headerNavigation) {
  headerNavigation.addEventListener( 'click', event => {
    event.preventDefault();
    classie.remove( document.getElementById( 'header-order' ), 'header__menu_show' );
    classie.toggle( document.getElementById( 'header-menu' ), 'header__menu_show' );
  });
}

let headerOrder = document.getElementById( 'header__order' );
if (headerOrder) {
  headerOrder.addEventListener( 'click', event => {
    event.preventDefault();
    classie.remove( document.getElementById( 'header-menu' ), 'header__menu_show' );
    classie.toggle( document.getElementById( 'header-order' ), 'header__menu_show' );
  });
}

(function () {

  let initElem = document.querySelectorAll( '.header-logo' );

  if (initElem) {
    [].slice.call( initElem ).forEach( el => {

      setTimeout( () => {
        if ( !el.classList.contains( 'header-logo_collapse' ) ) {
          el.classList.add( 'header-logo_collapse' );
        }
      }, 3000 );
    } );
  }

} )();
