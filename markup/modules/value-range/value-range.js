/* global */

'use strict';

(function () {
  let initElem = document.querySelectorAll( '.value-range' );
  if ( initElem ) {
    [].slice.call( initElem ).forEach( valueRange => {
      let input = valueRange.querySelectorAll( '.value-range__value' )[ 0 ];
      [].slice.call( valueRange.querySelectorAll( '.value-range__button' ) )
        .forEach( valueRangeValue => {
          valueRangeValue.addEventListener( 'click', event => {
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
          } );
        } );
    } );
  }
} )();
