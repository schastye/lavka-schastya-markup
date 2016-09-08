/* global msDom, ymaps */
'use strict';

let orderData = {};
let formData = {
  receiver: 'receiver',
  phone: 'phone',
  email: 'email',
  index: 'index',
  sms: 'sms',
  subscribe: 'subscribe',
  comment: 'comment',
  payment: 'payment',
  delivery: 'delivery',
  deliveries: {
    1: { street: 'pickup__address', region: 'pickup__date' },
    4: { street: 'courier__address', room: 'courier__room', region: 'courier__date', metro: 'courier__time' },
    5: { street: 'express__address', room: 'express__room', region: 'express__date', metro: 'express__time' }
  }
};

function updateData( key, value ) {
  orderData.payment = document.querySelector( '[name="' + formData.payment + '"]:checked' ).value;
  orderData.delivery = document.querySelector( '[name="' + formData.delivery + '"]:checked' ).value;
  orderData[ key ] = value || this.value;
  for ( let field in orderData ) {
    if ( orderData.hasOwnProperty( field ) ) {
      if ( field === formData.deliveries[ orderData.delivery ][ field ] ) {
        document.querySelector( '[name="' + field + '"]' ).value = formData.deliveries[ orderData.delivery ][ field ] || '';
      } else {
        document.querySelector( '[name="' + field + '"]' ).value = orderData[ field ] || '';
      }
    }
  }
  if ( typeof msDom !== 'undefined' && key === 'street' ) {
    msDom.Initialize(); // eslint-disable-line new-cap
  }
}

function setData() {
  for ( let key in formData ) {
    if ( formData.hasOwnProperty( key ) ) {
      if ( key !== 'deliveries' ) {
        let formInput = document.querySelector( '[name="' + formData[ key ] + '"]' );
        updateData( key, formInput.value );
        formInput.addEventListener( 'change', updateData.bind( formInput, key, null ), false );
      } else {
        let deliveries = formData.deliveries;
        let deliveryChecked = document.querySelector( '[name="' + formData.delivery + '"]:checked' ).value;
        for ( let deliveryItem in deliveries[ deliveryChecked ] ) {
          if ( deliveries[ deliveryChecked ].hasOwnProperty( deliveryItem ) ) {
            let deliveryInput = document.querySelector( '[name="' + deliveries[ deliveryChecked ][ deliveryItem ] + '"]' );
            updateData( deliveryItem, deliveryInput.value );
            deliveryInput.addEventListener( 'change', updateData.bind( deliveryInput, deliveryItem, null ), false );
          }
        }
      }
    }
  }
}

function onLoad( ymaps ) {
  let userPosition = [];
  let input = document.querySelectorAll( '[name="courier__address"], [name="express__address"]' );
  ymaps.geolocation.get( { provider: 'yandex' } ).then( function ( res ) {
    userPosition = res.geoObjects.get(0).geometry.getCoordinates();
    let userArea = res.geoObjects.get(0).properties.get('boundedBy');
    let userMap = new ymaps.Map( 'map', {
      center: userPosition,
      zoom: 10,
      controls: [ 'zoomControl', 'fullscreenControl', 'geolocationControl' ]
    });

    [].slice.call( input ).forEach( suggestInput => {
      let deliveryInput = new ymaps.SuggestView( suggestInput, {
        boundedBy: userArea
      } );
      deliveryInput.events.add( 'select', function ( event ) {
        updateData( 'street', event.get( 'item' ).value );
      } );
    } );

  }, function ( err ) {
    console.log( err );
  });
}

function getSale( input ) {
  let data = new FormData();
  data.append( 'code', input.value );
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://lavkaschastya.com/api/getCard');
  xhr.send( data );

  xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
      if (xhr.status === 200 ) {
        let sale = JSON.parse( xhr.response ).value;
        document.querySelector( '.cardcode-result' ).textContent = sale + '%';
        updateData( 'index', sale );
      }
    }
  };
}

(function () {
  if ( document.querySelector('.order-page') ) {
    setData();
    [].slice.call( document.getElementsByName( formData.delivery ) ).forEach( deliveryRadio => {
      deliveryRadio.addEventListener( 'click', setData, false );
    } );

    $('input').garlic( {
      onRetrieve: function ( elem, retrievedValue ) {
        elem.context.focus();
        setData();
      }
    } );
  }

  if ( document.querySelector( '[name="cardcode"]' ) ) {
    [].slice.call( document.querySelectorAll( '[name="cardcode"]' ) ).forEach( cardcodeInput => {
      cardcodeInput.addEventListener( 'change', getSale, false );
    } );

    [].slice.call( document.querySelectorAll( '.cardcode-result' ) ).forEach( cardcodeInput => {
      cardcodeInput.addEventListener( 'click', getSale.bind( null, document.querySelector('[name="cardcode"]') ), false );
    } );
  }

})();
