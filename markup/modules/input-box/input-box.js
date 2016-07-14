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


(function () {

  function setToday() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; // January is 0!
    let yyyy = today.getFullYear();
    if ( dd < 10 ) {
      dd = '0' + dd;
    }
    if ( mm < 10 ) {
      mm = '0' + mm;
    }
    return `${ yyyy }-${ mm }-${ dd }`;
  }

  let initElem = document.querySelectorAll( '.input-box__field_from-today' );
  if ( initElem.length ) {
    [].slice.call( initElem ).forEach( input => {
      input.setAttribute( 'min', setToday());
    } );
  }

})();
