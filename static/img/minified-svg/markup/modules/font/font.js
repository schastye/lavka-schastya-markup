/* global FontFaceObserver */

'use strict';

(function () {
  let font = new FontFaceObserver('Roboto');

  font.load().then( () => {
    document.body.classList.add( 'font' );
  } );
} )();
