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

  let headerPhone = document.getElementById( 'header__phone-modal' );
  if (headerPhone) {
    headerPhone.addEventListener( 'click', event => {
      event.preventDefault();
      let t = document.querySelector('#modal');
      // Во время выполнения заполняем src.
      // t.content.querySelector('.popup__content').textContent = 'Hello';
      document.body.appendChild( t.content.cloneNode( true ) );

      [].slice.call( document.querySelectorAll( '.popup__close' ) ).forEach( popupClose => {
        popupClose.addEventListener( 'click', function (e) {
          let srcEl = e.target || e.srcElement;
          srcEl.parentNode.parentNode.removeChild( srcEl.parentNode );
          console.log('close!');
        }, false );
      });
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
      [].slice.call( headerCityItem.children ).forEach( headerCityFigure => {
        headerCityFigure.style.display = 'block';
      });
      let slider = new Peppermint( headerCityItem, {
        speed: 500,
        touchSpeed: 500,
        mouseDrag: true,
        startSlide: parseInt( window.localStorage.getItem( 'cityID' ), 10 ) || 0,
        onSlideChange: function ( selectedCity ) {
          window.localStorage.setItem( 'cityID', selectedCity );
        }
      } );

      let headerCityButton = headerCityItem.querySelectorAll( '.city-select__prev, .city-select__next' );
      [].slice.call( headerCityButton ).forEach( headerCityButtonItem => {
        if ( headerCityButtonItem.classList.contains('city-select__next') ) {
          headerCityButtonItem.addEventListener( 'click', slider.next, false );
        } else {
          headerCityButtonItem.addEventListener( 'click', slider.prev, false );
        }
      } );
    } );
  }



} )();
