/* global Peppermint */

'use strict';

(function () {
  let initElem = document.querySelectorAll( '.box-variant__item' );
  if ( initElem.length ) {
    let slider = new Peppermint(document.getElementById('peppermint'), {
      speed: 500,
      touchSpeed: 500,
      mouseDrag: true,
      onSlideChange: function ( slide ) {
        initElem[ slide ].querySelectorAll( '.box-variant__select' )[ 0 ]
          .checked = true;
      }
    } );
    [].slice.call(initElem).forEach( ( el, item ) => {
      el.addEventListener( 'click', event => {
        event.preventDefault();
        let jumpTo = document.querySelectorAll( '.good-information' )[ 0 ];
        event.currentTarget.querySelectorAll( '.box-variant__select' )[ 0 ]
          .checked = true;
        slider.slideTo( item );
      }, false);
    } );
  }

} )();
