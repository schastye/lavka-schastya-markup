'use strict';

let orderData = {};
let formData = {
  receiver: 'receiver',
  phone: 'phone',
  email: 'email',
  coupon_code: 'coupon_code', // eslint-disable-line camelcase
  payment: 'payment',
  sms: 'sms',
  subscribe: 'subscribe',
  comment: 'comment',
  delivery: 'delivery',
  deliveries: {
    1: { address: 'pickup__address', date: 'pickup__date' },
    4: { address: 'courier__address', date: 'courier__date', time: 'courier__time' },
    // 5 : { address : 'express__address', date : 'express__date', time : 'express__time' }
  }
};

function updateData( key ) {
  orderData.payment = document.querySelectorAll( '[name="' + formData.payment + '"]:checked' )[0].value;
  orderData.delivery = document.querySelectorAll( '[name="' + formData.delivery + '"]:checked' )[0].value;
  orderData[ key ] = this.value;
}

if ( document.querySelector('.order-page') ) {
  for ( let key in formData ) {
    if ( formData.hasOwnProperty( key ) ) {
      if ( key !== 'deliveries' ) {
        let formInput = document.getElementsByName( formData[ key ] )[0];
        formInput.addEventListener( 'change', updateData.bind( formInput, key ), false );
      } else {
        let deliveries = formData.deliveries;
        for ( let delivery in deliveries ) {
          if ( deliveries.hasOwnProperty( delivery ) ) {
            for ( let deliveryItem in deliveries[ delivery ] ) {
              if ( deliveries[ delivery ].hasOwnProperty( deliveryItem ) ) {
                let deliveryInput = document.getElementsByName( deliveries[ delivery ][ deliveryItem ] )[0];
                deliveryInput.addEventListener( 'change', updateData.bind( deliveryInput, deliveryItem ), false );
              }
            }
          }
        }
      }
    }
  }
}
