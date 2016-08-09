/* global ElastiStack */

'use strict';

let elasticstackContainer = document.getElementById( 'elasticstack' );
if ( elasticstackContainer ) {
  new ElastiStack( document.getElementById( 'elasticstack' ), {
    animateClass: 'animate',
    moveBackClass: 'move-back',
    onUpdateStack: instance => {
      let initElem = document.querySelectorAll( '.postcard__id' );
      if ( initElem.length ) {
        [].slice.call(initElem).forEach( ( el ) => {
          el.value = instance.items[ instance.current ].dataset.id;
        } );
      }
    }
  } );
}
