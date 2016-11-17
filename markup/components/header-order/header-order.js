/* global showOrderModal */

'use strict';

function updateMiniCart( fromForm, action ) {
  let xhr = new XMLHttpRequest();
  let dataFromForm = new FormData( fromForm );
  switch ( action ) {
    case 'add':
      dataFromForm.append( 'ms2_action', 'cart/add' );
      break;
    case 'remove':
      dataFromForm.append( 'ms2_action', 'cart/remove' );
      break;
    default:
      dataFromForm.append( 'ms2_action', 'cart/update' );
      break;
  }
  xhr.open('POST', '//lavkaschastya.com/api/getMiniCart');
  xhr.send( dataFromForm );
  xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
      if (xhr.status === 200) {
        let miniCart = document.getElementById('header-order');
        miniCart.innerHTML = xhr.response;
        [].slice.call( miniCart.querySelectorAll( '.header-shopping-item form' ) ).forEach( function ( removeButton ) {
          removeButton.addEventListener('submit', function ( event ) {
            event.preventDefault();
            updateMiniCart( this, 'remove' );
          });
        } );
      }
    }
  };
}

(function () {
  let formOrder = document.querySelector('form#order');
  if ( formOrder ) {
    formOrder.addEventListener( 'submit', function ( event ) {
      console.log( 'event' );
      event.preventDefault();
      let addToCart = document.querySelector( '.button_add-to-card' );
      if ( addToCart.classList.contains( 'button_add-to-card_added' )
        && addToCart.classList.contains( 'noauthorized' ) ) {
        showOrderModal('#order-modal');
      } else if ( addToCart.classList.contains( 'button_add-to-card_added' )
        && addToCart.classList.contains( 'authorized' ) ) {
        window.location.href = '//lavkaschastya.com/order';
      } else {
        console.log( 'ready to update' );
        updateMiniCart( this, 'add' );
        addToCart.classList.add( 'button_add-to-card_added' );
        document.querySelector('.order-button').classList.add('order-button_update');
        window.localStorage.setItem( 'order_updated', true );
        addToCart.querySelector( '.button__caption' ).textContent = 'Перейти к заказу';
      }
    }, false);
  }

  let removeFromMiniCart = document.querySelectorAll( '.header-shopping-item form' );
  if ( removeFromMiniCart.length ) {
    [].slice.call( removeFromMiniCart ).forEach( function ( removeButton ) {
      removeButton.addEventListener( 'submit', function ( event ) {
        event.preventDefault();
        updateMiniCart( this, 'remove' );
      }, false);
    } );
  }
})();
