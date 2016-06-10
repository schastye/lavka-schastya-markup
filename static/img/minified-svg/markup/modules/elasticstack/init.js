/* global ElastiStack */

'use strict';

let elasticstackContainer = document.getElementById( 'elasticstack' );
if ( elasticstackContainer ) {
  new ElastiStack( document.getElementById( 'elasticstack' ), {
    animateClass: 'animate',
    moveBackClass: 'move-back'
  } );
}
