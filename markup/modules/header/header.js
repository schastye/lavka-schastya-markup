/* global classie, Peppermint */

'use strict';

(function () {
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

      // Remove header menu indicator
      let orderButton = document.querySelectorAll( '.order-button_update' );
      if ( orderButton.length ) {
        [].slice.call( orderButton ).forEach( ( orderButtonElement ) => {
          orderButtonElement.classList.remove( 'order-button_update' );
        });
        window.localStorage.removeItem( 'order_updated' );
      }
    });
  }

  let headerLogo = document.querySelectorAll( '.header-logo' );
  if (headerLogo.length) {
    [].slice.call( headerLogo ).forEach( el => {

      setTimeout( () => {
        if ( !el.classList.contains( 'header-logo_collapse' ) ) {
          el.classList.add( 'header-logo_collapse' );
        }
      }, 3000 );
    } );
  }

  let headerCity = document.querySelectorAll( '.header__city' );
  if (headerCity.length) {
    [].slice.call( headerCity ).forEach( headerCityItem => {
      let slider = new Peppermint( headerCityItem, {
        speed: 500,
        touchSpeed: 500,
        mouseDrag: true,
        startSlide: window.localStorage.getItem( 'cityID' ) || 0
      } );

      let headerCityPrev = headerCityItem.querySelectorAll( '.city-select__prev' );
      [].slice.call( headerCityPrev ).forEach( headerCityPrevItem => {
        headerCityPrevItem.addEventListener( 'click', event => {
          event.preventDefault();
          slider.prev();
          window.localStorage.setItem( 'cityID', slider.getCurrentPos() );
        } );
      } );

      let headerCityNext = headerCityItem.querySelectorAll( '.city-select__next' );
      [].slice.call( headerCityNext ).forEach( headerCityNextItem => {
        headerCityNextItem.addEventListener( 'click', event => {
          event.preventDefault();
          slider.next();
          window.localStorage.setItem( 'cityID', slider.getCurrentPos() );
        } );
      } );
    } );
  }



} )();
