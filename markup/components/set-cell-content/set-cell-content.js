'use strict';

(function () {

  let initElem = document.querySelectorAll( '.set-cell-content' );

  if ( initElem.length ) {
    [].slice.call( initElem ).forEach( el => {
      el.addEventListener( 'click', event => {
        let _event = event || window.event;
        let _element = _event.target ? _event.target : _event.srcElement;
        _event.preventDefault();
        _element.parentNode.removeChild( _element );
      });
    } );
  }

} )();
