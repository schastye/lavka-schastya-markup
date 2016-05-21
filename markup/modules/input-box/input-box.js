/* global classie */

'use strict';

(function () {
  function onInputFocus( ev ) {
    classie.add( ev.target.parentNode, 'input-box_filled' );
  }

  function onInputBlur( ev ) {
    if ( ev.target.value.trim() === '' ) {
      classie.remove( ev.target.parentNode, 'input-box_filled' );
    }
  }

  // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
  if (!String.prototype.trim) {
    (function () {
      // Make sure we trim BOM and NBSP
      let rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      String.prototype.trim = function () {
        return this.replace(rtrim, '');
      };
    })();
  }

  [].slice.call( document.querySelectorAll( '.input-box__field' ) ).forEach( ( inputEl ) => {
    if ( classie.has( inputEl.parentNode, 'input-box_freeze' ) ) {
      return;
    }
    // in case the input is already filled...
    if ( inputEl.value.trim() !== '' ) {
      classie.add( inputEl.parentNode, 'input-box_filled' );
    }

    // events:
    inputEl.addEventListener( 'focus', onInputFocus );
    inputEl.addEventListener( 'change', onInputFocus );
    inputEl.addEventListener( 'blur', onInputBlur );
  } );
})();
