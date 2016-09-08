'use strict';

function updateMiniCart( fromForm ) {
  console.log('update cart!');
  let xhr = new XMLHttpRequest();
  let dataFromForm = new FormData( fromForm );
  xhr.open('POST', 'https://lavkaschastya.com/api/getMiniCart');
  xhr.send( dataFromForm );

  xhr.onload = function () {
    console.log( 'xhr loaded' );
    console.log( xhr );
    if (xhr.readyState === xhr.DONE) {
      if (xhr.status === 200) {
        let miniCart = document.getElementById('header-order');
        miniCart.innerHTML = xhr.response;
        [].slice.call( miniCart.querySelectorAll( '.header-shopping-item form' ) ).forEach( function ( removeButton ) {
          removeButton.addEventListener('submit', function ( event ) {
            event.preventDefault();
            updateMiniCart( this );
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
      let addToCart = document.querySelector( '.button_add-to-card' );
      if ( addToCart.classList.contains( 'button_add-to-card_added' ) ) {
        event.preventDefault();
        window.location.href = 'https://lavkaschastya.com/order';
      } else {
        event.preventDefault();
        updateMiniCart( this );
        addToCart.classList.add( 'button_add-to-card_added' );
        addToCart.querySelector( '.button__caption' ).textContent = 'Перейти к заказу';
      }
    }, false);

  }
  let removeFromMiniCart = document.querySelectorAll( '.header-shopping-item form' );
  if ( removeFromMiniCart.length ) {
    [].slice.call( removeFromMiniCart ).forEach( function ( removeButton ) {
      removeButton.addEventListener( 'submit', function ( event ) {
        event.preventDefault();
        updateMiniCart( this );
      }, false);
    } );
  }
})();
