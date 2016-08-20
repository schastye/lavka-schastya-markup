/* global Peppermint, zenscroll */

'use strict';

(function () {
  let initElem = document.querySelectorAll( '.box-variant__item' );
  if ( initElem.length ) {
    let slider = [],
      initSlide = 0;
    [].slice.call(initElem).forEach( ( el, item ) => {
      initSlide = el.querySelectorAll( '.box-variant__select' )[ 0 ].checked ? item : initSlide;
      el.addEventListener( 'click', event => {
        event.preventDefault();
        if ( window.zenscroll ) {
          zenscroll.setup(500, window.innerWidth >= 1024 ? 20 : 150);
          zenscroll.to( document.getElementById( 'good-information__box' ) );
        }
        let select = event.currentTarget.querySelectorAll( '.box-variant__select' )[ 0 ];
        select.checked = true;
        let inputQuantity = document.querySelectorAll( '.button-range__value' )[ 0 ].value;
        document.getElementById('price__value').innerText = select.dataset.price * inputQuantity;
        for (let i = 0; i < slider.length; i++) {
          slider[i].slideTo( item );
        }
      }, false);
    } );

    [].slice.call( document.querySelectorAll( '.box-variant-gallery' ) ).forEach( ( el, index ) => {
      slider[index] = new Peppermint( el, {
        speed: 500,
        touchSpeed: 500,
        mouseDrag: true,
        startSlide: initSlide,
        onSlideChange: function ( slide ) {
          initElem[ slide ].querySelectorAll( '.box-variant__select' )[ 0 ]
            .checked = true;
        }
      } );
    });
  }

} )();
