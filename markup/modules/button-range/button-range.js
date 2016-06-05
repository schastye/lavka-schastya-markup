/* global */

'use strict';

(function () {
  let initElem = document.querySelectorAll( '.button-range' );
  if ( initElem ) {
    [].slice.call( initElem ).forEach( buttonRange => {
      let input = buttonRange.querySelectorAll( '.button-range__value' )[ 0 ];
      [].slice.call( buttonRange.querySelectorAll( '.button-range__button' ) )
        .forEach( buttonRangeButton => {
          buttonRangeButton.addEventListener( 'click', event => {
            event.preventDefault();
            switch ( event.currentTarget.value ) {
              case 'cart/remove':
                if ( input.value === input.getAttribute( 'min' ) ) {
                  input.value = input.getAttribute( 'min' );
                } else {
                  input.value--;
                }
                break;
              case 'cart/add':
                if ( input.value === input.getAttribute( 'max' ) ) {
                  input.value = input.getAttribute( 'max' );
                } else {
                  input.value++;
                }
                break;
              default:
                break;
            }
            let currentPrice = document.querySelectorAll( '.box-variant__select:checked' ).length
                             ? document.querySelectorAll( '.box-variant__select:checked' )[0].value
                             : document.getElementById( 'price__value' ).dataset.price;
            document.getElementById('price__value').innerText = currentPrice * input.value;
          } );
        } );
    } );
  }
} )();
