/* global Peppermint, zenscroll */

'use strict';

(function () {
  let initElem = document.querySelectorAll( '.box-variant__item' );
  if ( initElem.length ) {
    let slider,
      initSlide = 0;
    [].slice.call(initElem).forEach( ( el, item ) => {
      initSlide = el.querySelectorAll( '.box-variant__select' )[ 0 ].checked ? item : initSlide;
      el.addEventListener( 'click', event => {
        event.preventDefault();
        if ( window.zenscroll ) {
          zenscroll.to( document.getElementById('good-information') );
        }
        let select = event.currentTarget.querySelectorAll( '.box-variant__select' )[ 0 ];
        select.checked = true;
        let inputQuantity = document.querySelectorAll( '.button-range__value' )[ 0 ].value;
        document.getElementById('price__value').innerText = select.dataset.price * inputQuantity;
        slider.slideTo( item );
      }, false);
    } );

    slider = new Peppermint(document.getElementById('peppermint'), {
      speed: 500,
      touchSpeed: 500,
      mouseDrag: true,
      startSlide: initSlide,
      onSlideChange: function ( slide ) {
        initElem[ slide ].querySelectorAll( '.box-variant__select' )[ 0 ]
          .checked = true;
      }
    } );
  }

} )();
