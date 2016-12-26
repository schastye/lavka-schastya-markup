'use strict';


(function () {
  [].slice.call( document.querySelectorAll( '.popup__close' ) ).forEach( popupClose => {
    popupClose.addEventListener( 'click', function (e) {
      let srcEl = e.target || e.srcElement;
      srcEl.parentNode.classList.toggle('popup_show');
    }, false );
  });
})();
