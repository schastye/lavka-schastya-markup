/* global miniShop2Config */

'use strict';

const ms2Config = {
  // cssUrl: '/assets/components/minishop2/css/web/',
  // jsUrl: '/assets/components/minishop2/js/web/',
  actionUrl: '/assets/components/minishop2/action_custom.php',
  ctx: 'web',
  closeAllMessage: 'закрыть все',
  priceFormat: [ 2, '.', ' ' ],
  priceFormatNoZeros: true,
  weightFormat: [ 3, '.', ' ' ],
  weightFormatNoZeros: true
};

(function ( window, document, miniShop2Config) {
  let miniShop2 = window.miniShop2 || {};

  miniShop2Config.callbacksObjectTemplate = function () {
    return {
      // return false to prevent send data
      before: [],
      response: {
        success: [],
        error: []
      },
      ajax: {
        done: [],
        fail: [],
        always: []
      }
    };
  };

  miniShop2.Callbacks = miniShop2Config.Callbacks = {
    Cart: {
      add: miniShop2Config.callbacksObjectTemplate(),
      remove: miniShop2Config.callbacksObjectTemplate(),
      change: miniShop2Config.callbacksObjectTemplate(),
      clean: miniShop2Config.callbacksObjectTemplate()
    },
    Order: {
      add: miniShop2Config.callbacksObjectTemplate(),
      getcost: miniShop2Config.callbacksObjectTemplate(),
      clean: miniShop2Config.callbacksObjectTemplate(),
      submit: miniShop2Config.callbacksObjectTemplate(),
      getrequired: miniShop2Config.callbacksObjectTemplate()
    }
  };

  miniShop2.Callbacks.add = function ( path, name, func ) {
    if ( typeof func !== 'function' ) {
      return false;
    }
    path = path.split('.');
    let obj = miniShop2.Callbacks;
    for ( let i = 0; i < path.length; i++ ) {
      if ( typeof obj[ path[ i ] ] === 'undefined') {
        return false;
      }
      obj = obj[ path[ i ] ];
    }
    if ( typeof obj !== 'object' ) {
      obj = [ obj ];
    }
    if ( name !== 'undefined' ) {
      obj[ name ] = func;
    } else {
      obj.push( func );
    }
    return true;
  };

  miniShop2.Callbacks.remove = function ( path, name ) {
    path = path.split( '.' );
    let obj = miniShop2.Callbacks;
    for ( let i = 0; i < path.length; i++ ) {
      if ( typeof obj[ path[ i ] ] === 'undefined' ) {
        return false;
      }
      obj = obj[ path[ i ] ];
    }
    if (typeof obj[ name ] !== 'undefined' ) {
      delete obj[ name ];
      return true;
    }
    return false;
  };

  miniShop2.ajaxProgress = false;

  miniShop2.setup = function () {
    // selectors & $objects
    this.actionName = 'ms2_action';
    this.action = ':submit[name=' + this.actionName + ']';
    this.form = '.ms2_form';
    this.$doc = document;

    this.sendData = {
      $form: null,
      action: null,
      formData: null
    };
  };

  miniShop2.initialize = function () {
    miniShop2.setup();
    // Indicator of active ajax request
    miniShop2.$doc
      .ajaxStart(function () {
        miniShop2.ajaxProgress = true;
      })
      .ajaxStop(function () {
        miniShop2.ajaxProgress = false;
      })
      .on('submit', miniShop2.form, function (e) {
        e.preventDefault();
        let $form = $(this);
        let action = $form.find(miniShop2.action).val();

        if (action) {
          let formData = $form.serializeArray();
          formData.push({
            name: miniShop2.actionName,
            value: action
          });
          miniShop2.sendData = {
            $form: $form,
            action: action,
            formData: formData
          };
          miniShop2.controller();
        }
      });
    miniShop2.Cart.initialize();
    // miniShop2.Message.initialize();
    miniShop2.Order.initialize();
    // miniShop2.Gallery.initialize();
  };

  miniShop2.controller = function () {
    let self = this;
    switch ( self.sendData.action ) {
      case 'cart/add':
        miniShop2.Cart.add();
        break;
      case 'cart/remove':
        miniShop2.Cart.remove();
        break;
      case 'cart/change':
        miniShop2.Cart.change();
        break;
      case 'cart/clean':
        miniShop2.Cart.clean();
        break;
      case 'order/submit':
        miniShop2.Order.submit();
        break;
      case 'order/clean':
        miniShop2.Order.clean();
        break;
      default:
        return;
    }
  };

  miniShop2.send = function ( data, callbacks, userCallbacks ) {
    let runCallback = function ( callback, bind ) {
      if ( typeof callback === 'function' ) {
        return callback.apply( bind, Array.prototype.slice.call( arguments, 2 ) );
      } else if ( typeof callback === 'object' ) {
        for ( let i in callback ) {
          if ( callback.hasOwnProperty( i ) ) {
            let response = callback[ i ].apply( bind, Array.prototype.slice.call( arguments, 2 ) );
            if ( response === false ) {
              return false;
            }
          }
        }
      }
      return true;
    };
    // set context
    if ( data.constructor === Array ) {
      data.push( {
        name: 'ctx',
        value: miniShop2Config.ctx
      } );
    } else if ( typeof data === 'object' && data.constructor === Object ) {
      data.ctx = miniShop2Config.ctx;
    } else if ( typeof data === 'string' ) {
      data += '&ctx=' + miniShop2Config.ctx;
    }

    // set action url
    let formActionUrl = miniShop2.sendData.$form
      ? miniShop2.sendData.$form.attr( 'action' )
      : false;
    let url = formActionUrl
      ? formActionUrl
      : ( miniShop2Config.actionUrl || document.location.href );
    // set request method
    let formMethod = miniShop2.sendData.$form
      ? miniShop2.sendData.$form.attr( 'method' )
      : false;
    let method = formMethod
      ? formMethod
      : 'post';

    // callback before
    if ( runCallback( callbacks.before ) === false || runCallback( userCallbacks.before ) === false ) {
      return;
    }
    // send
    (function xhr( xhrCallbacks, xhrUserCallbacks ) {
      return $[ method ]( url, data, function ( response ) {
        if ( response.success ) {
          if ( response.message ) {
            // miniShop2.Message.success(response.message);
          }
          runCallback( xhrCallbacks.response.success, miniShop2, response );
          runCallback( xhrUserCallbacks.response.success, miniShop2, response );
        } else {
          // miniShop2.Message.error(response.message);
          runCallback( xhrCallbacks.response.error, miniShop2, response );
          runCallback( xhrUserCallbacks.response.error, miniShop2, response );
        }
      }, 'json').done(function () {
        runCallback( xhrCallbacks.ajax.done, miniShop2, xhr );
        runCallback( xhrUserCallbacks.ajax.done, miniShop2, xhr );
      }).fail(function () {
        runCallback( xhrCallbacks.ajax.fail, miniShop2, xhr );
        runCallback( xhrUserCallbacks.ajax.fail, miniShop2, xhr );
      }).always(function () {
        runCallback( xhrCallbacks.ajax.always, miniShop2, xhr );
        runCallback( xhrUserCallbacks.ajax.always, miniShop2, xhr );
      });
    })( callbacks, userCallbacks );
  };

  miniShop2.Cart = {
    callbacks: {
      add: miniShop2Config.callbacksObjectTemplate(),
      remove: miniShop2Config.callbacksObjectTemplate(),
      change: miniShop2Config.callbacksObjectTemplate(),
      clean: miniShop2Config.callbacksObjectTemplate()
    },

    setup: function () {
      miniShop2.Cart.cart = '#msCart';
      miniShop2.Cart.miniCart = '#msMiniCart';
      miniShop2.Cart.miniCartNotEmptyClass = 'full';
      miniShop2.Cart.countInput = 'input[name=count]';
      miniShop2.Cart.totalWeight = '.ms2_total_weight';
      miniShop2.Cart.totalCount = '.ms2_total_count';
      miniShop2.Cart.totalCost = '.ms2_total_cost';
    },

    initialize: function () {
      miniShop2.Cart.setup();
      if ( !$( miniShop2.Cart.cart ).length ) {
        return;
      }
      miniShop2.$doc.on('change', miniShop2.Cart.cart + ' ' + miniShop2.Cart.countInput, function () {
        $( this ).closest( miniShop2.form ).submit();
      });
    },

    add: function () {
      let callbacks = miniShop2.Cart.callbacks;
      callbacks.add.response.success = function ( response ) {
        this.Cart.status( response.data );
      };
      miniShop2.send( miniShop2.sendData.formData, miniShop2.Cart.callbacks.add, miniShop2.Callbacks.Cart.add );
    },

    remove: function () {
      let callbacks = miniShop2.Cart.callbacks;
      callbacks.remove.response.success = function ( response ) {
        this.Cart.removePosition( miniShop2.Utils.getValueFromSerializedArray( 'key' ) );
        this.Cart.status( response.data );
      };
      miniShop2.send( miniShop2.sendData.formData, miniShop2.Cart.callbacks.remove, miniShop2.Callbacks.Cart.remove );
    },

    change: function () {
      let callbacks = miniShop2.Cart.callbacks;
      callbacks.change.response.success = function ( response ) {
        if ( typeof response.data.key === 'undefined' ) {
          this.Cart.removePosition( miniShop2.Utils.getValueFromSerializedArray( 'key' ) );
        } else {
          $( '#' + miniShop2.Utils.getValueFromSerializedArray( 'key' ) ).find( '' );
        }
        this.Cart.status( response.data );
      };
      miniShop2.send( miniShop2.sendData.formData, miniShop2.Cart.callbacks.change, miniShop2.Callbacks.Cart.change );
    },

    status: function ( status ) {
      if ( status.total_count < 1 ) {
        location.reload();
      } else {
        // let $cart = $( miniShop2.Cart.cart );
        let $miniCart = $(miniShop2.Cart.miniCart);
        if (status.total_count > 0 && !$miniCart.hasClass(miniShop2.Cart.miniCartNotEmptyClass)) {
          $miniCart.addClass(miniShop2.Cart.miniCartNotEmptyClass);
        }
        $( miniShop2.Cart.totalWeight ).text( miniShop2.Utils.formatWeight( status.total_weight ) );
        $( miniShop2.Cart.totalCount ).text( status.total_count );
        $( miniShop2.Cart.totalCost ).text( miniShop2.Utils.formatPrice( status.total_cost ) );
        if ( $( miniShop2.Order.orderCost, miniShop2.Order.order ).length ) {
          miniShop2.Order.getcost();
        }
      }
    },

    clean: function () {
      let callbacks = miniShop2.Cart.callbacks;
      callbacks.clean.response.success = function (response) {
        this.Cart.status(response.data);
      };

      miniShop2.send(miniShop2.sendData.formData, miniShop2.Cart.callbacks.clean, miniShop2.Callbacks.Cart.clean);
    },
    removePosition: function (key) {
      $('#' + key).remove();
    }
  };

  /*
  miniShop2.Gallery = {
    setup: function () {
      miniShop2.Gallery.gallery = '#msGallery';
      miniShop2.Gallery.mainImage = '#mainImage';
      miniShop2.Gallery.thumbnail = '.thumbnail';
    },
    initialize: function () {
      miniShop2.Gallery.setup();
      if ($(miniShop2.Gallery.gallery).length) {
        miniShop2.$doc.on('click', miniShop2.Gallery.gallery + ' ' + miniShop2.Gallery.thumbnail, function (e) {
          let src = $(this).attr('href');
          let href = $(this).data('image');
          $(miniShop2.Gallery.mainImage, miniShop2.Gallery.gallery).attr('src', src).parent().attr('href', href);
          e.preventDefault();
        });

        $(miniShop2.Gallery.thumbnail + ':first', miniShop2.Gallery.gallery).trigger('click');
      }
    }
  };
  */

  /*
  miniShop2.Order = {
    callbacks: {
      add: miniShop2Config.callbacksObjectTemplate(),
      getcost: miniShop2Config.callbacksObjectTemplate(),
      clean: miniShop2Config.callbacksObjectTemplate(),
      submit: miniShop2Config.callbacksObjectTemplate(),
      getrequired: miniShop2Config.callbacksObjectTemplate()
    },
    setup: function () {
      miniShop2.Order.order = '#msOrder';
      miniShop2.Order.deliveries = '#deliveries';
      miniShop2.Order.payments = '#payments';
      miniShop2.Order.deliveryInput = 'input[name="delivery"]';
      miniShop2.Order.inputParent = '.input-parent';
      miniShop2.Order.paymentInput = 'input[name="payment"]';
      miniShop2.Order.paymentInputUniquePrefix = 'input#payment_';
      miniShop2.Order.deliveryInputUniquePrefix = 'input#delivery_';
      miniShop2.Order.orderCost = '#ms2_order_cost'
    },
    initialize: function () {
      miniShop2.Order.setup();
      if ($(miniShop2.Order.order).length) {
        miniShop2.$doc
          .on('click', miniShop2.Order.order + ' [name="' + miniShop2.actionName + '"][value="order/clean"]', function (e) {
            miniShop2.Order.clean();
            e.preventDefault();
          })
          .on('change', miniShop2.Order.order + ' input, textarea', function () {
            let $this = $(this);
            let key = $this.attr('name');
            let value = $this.val();
            miniShop2.Order.add(key, value);
          });
        let $deliveryInputChecked = $(miniShop2.Order.deliveryInput + ':checked', miniShop2.Order.order);
        $deliveryInputChecked.trigger('change');
        miniShop2.Order.updatePayments($deliveryInputChecked.data('payments'));
      }
    },
    updatePayments: function (payments) {
      let $paymentInputs = $(miniShop2.Order.paymentInput, miniShop2.Order.order);
      $paymentInputs.attr('disabled', true).prop('disabled', true).closest(miniShop2.Order.inputParent).hide();
      if (payments.length > 0) {
        for (let i in payments) {
          if (payments.hasOwnProperty(i)) {
            $paymentInputs.filter(miniShop2.Order.paymentInputUniquePrefix + payments[i]).attr('disabled', false).prop('disabled', false).closest(miniShop2.Order.inputParent).show();
          }
        }
      }
      if ($paymentInputs.filter(':visible:checked').length == 0) {
        $paymentInputs.filter(':visible:first').trigger('click');
      }
    },
    add: function (key, value) {
      let callbacks = miniShop2.Order.callbacks;
      let old_value = value;
      callbacks.add.response.success = function (response) {
        (function (key, value, old_value) {
          let $field = $('[name="' + key + '"]', miniShop2.Order.order);
          switch (key) {
            case 'delivery':
              $field = $(miniShop2.Order.deliveryInputUniquePrefix + response.data[key]);
              if (response.data[key] != old_value) {
                $field.trigger('click');
              } else {
                miniShop2.Order.getrequired(value);
                miniShop2.Order.updatePayments($field.data('payments'));
                miniShop2.Order.getcost();
              }
              break;
            case 'payment':
              $field = $(miniShop2.Order.paymentInputUniquePrefix + response.data[key]);
              if (response.data[key] != old_value) {
                $field.trigger('click');
              } else {
                miniShop2.Order.getcost();
              }
              break;
            //default:
          }
          $field.val(response.data[key]).removeClass('error').closest(miniShop2.Order.inputParent).removeClass('error');
        })(key, value, old_value);
      };
      callbacks.add.response.error = function () {
        (function (key) {
          let $field = $('[name="' + key + '"]', miniShop2.Order.order);
          if ($field.attr('type') == 'checkbox' || $field.attr('type') == 'radio') {
            $field.closest(miniShop2.Order.inputParent).addClass('error');
          } else {
            $field.addClass('error');
          }
        })(key);
      };

      let data = {
        key: key,
        value: value
      };
      data[miniShop2.actionName] = 'order/add';
      miniShop2.send(data, miniShop2.Order.callbacks.add, miniShop2.Callbacks.Order.add);
    },
    getcost: function () {
      let callbacks = miniShop2.Order.callbacks;
      callbacks.getcost.response.success = function (response) {
        $(miniShop2.Order.orderCost, miniShop2.Order.order).text(miniShop2.Utils.formatPrice(response.data['cost']));
      };
      let data = {};
      data[miniShop2.actionName] = 'order/getcost';
      miniShop2.send(data, miniShop2.Order.callbacks.getcost, miniShop2.Callbacks.Order.getcost);
    },
    clean: function () {
      let callbacks = miniShop2.Order.callbacks;
      callbacks.clean.response.success = function () {
        location.reload();
      };

      let data = {};
      data[miniShop2.actionName] = 'order/clean';
      miniShop2.send(data, miniShop2.Order.callbacks.clean, miniShop2.Callbacks.Order.clean);
    },
    submit: function () {
      // miniShop2.Message.close();

      // Checking for active ajax request
      if (miniShop2.ajaxProgress) {
        //noinspection JSUnresolvedFunction
        miniShop2.$doc.ajaxComplete(function () {
          miniShop2.ajaxProgress = false;
          miniShop2.$doc.unbind('ajaxComplete');
          miniShop2.Order.submit();
        });
        return false;
      }

      let callbacks = miniShop2.Order.callbacks;
      callbacks.submit.before = function () {
        $(':button, a', miniShop2.Order.order).attr('disabled', true).prop('disabled', true);
      };
      callbacks.submit.ajax.always = function () {
        $(':button, a', miniShop2.Order.order).attr('disabled', false).prop('disabled', false);
      };
      callbacks.submit.response.success = function (response) {
        if (response.data['redirect']) {
          document.location.href = response.data['redirect'];
        } else if (response.data['msorder']) {
          document.location.href = /\?/.test(document.location.href)
            ? document.location.href + '&msorder=' + response.data['msorder']
            : document.location.href + '?msorder=' + response.data['msorder'];
        } else {
          location.reload();
        }
      };
      callbacks.submit.response.error = function (response) {
        $('[name]', miniShop2.Order.order).removeClass('error').closest(miniShop2.Order.inputParent).removeClass('error');
        for (let i in response.data) {
          if (response.data.hasOwnProperty(i)) {
            let key = response.data[i];
            //let $field = $('[name="' + response.data[i] + '"]', miniShop2.Order.order);
            //$field.addClass('error').closest(miniShop2.Order.inputParent).addClass('error');
            let $field = $('[name="' + key + '"]', miniShop2.Order.order);
            if ($field.attr('type') == 'checkbox' || $field.attr('type') == 'radio') {
              $field.closest(miniShop2.Order.inputParent).addClass('error');
            } else {
              $field.addClass('error');
            }
          }
        }
      };
      return miniShop2.send(miniShop2.sendData.formData, miniShop2.Order.callbacks.submit, miniShop2.Callbacks.Order.submit);
    },
    getrequired: function (value) {
      let callbacks = miniShop2.Order.callbacks;
      callbacks.getrequired.response.success = function (response) {
        $('[name]', miniShop2.Order.order).removeClass('required').closest(miniShop2.Order.inputParent).removeClass('required');
        let requires = response.data['requires'];
        for (let i = 0, length = requires.length; i < length; i++) {
          $('[name=' + requires[i] + ']', miniShop2.Order.order).addClass('required').closest(miniShop2.Order.inputParent).addClass('required');
        }
      };
      callbacks.getrequired.response.error = function () {
        $('[name]', miniShop2.Order.order).removeClass('required').closest(miniShop2.Order.inputParent).removeClass('required');
      };

      let data = {
        id: value
      };
      data[miniShop2.actionName] = 'order/getrequired';
      miniShop2.send(data, miniShop2.Order.callbacks.getrequired, miniShop2.Callbacks.Order.getrequired);
    }
  };
  */

  /*
  miniShop2.Message = {
    initialize: function () {
      miniShop2.Message.close = function() {};
      miniShop2.Message.show = function(message) {
        if (message != '') {
          alert(message);
        }
      };

      if (typeof($.fn.jGrowl) != 'function') {
        $.getScript(miniShop2Config.jsUrl + 'lib/jquery.jgrowl.min.js', function () {
          miniShop2.Message.initialize();
        });
      } else {
        $.jGrowl.defaults.closerTemplate = '<div>[ ' + miniShop2Config.close_all_message + ' ]</div>';
        miniShop2.Message.close = function () {
          $.jGrowl('close');
        };
        miniShop2.Message.show = function (message, options) {
          if (message != '') {
            $.jGrowl(message, options);
          }
        }
      }
    },
    success: function (message) {
      miniShop2.Message.show(message, {
        theme: 'ms2-message-success',
        sticky: false
      });
    },
    error: function (message) {
      miniShop2.Message.show(message, {
        theme: 'ms2-message-error',
        sticky: false
      });
    },
    info: function (message) {
      miniShop2.Message.show(message, {
        theme: 'ms2-message-info',
        sticky: false
      });
    }
  };
  */

  miniShop2.Utils = {
    empty: function ( val ) {
      return ( typeof val === 'undefined'
        || val === 0
        || val === null
        || val === false
        || ( typeof val === 'string' && val.replace( /\s+/g, '' ) === '' )
        || ( typeof val === 'object' && val.length === 0 ) );
    },

    formatPrice: function ( price ) {
      let pf = miniShop2Config.price_format;
      price = this.numberFormat( price, pf[ 0 ], pf[ 1 ], pf[ 2 ] );

      if ( miniShop2Config.price_format_no_zeros ) {
        price = price.replace( /(0+)$/, '' );
        price = price.replace( /[^0-9]$/, '' );
      }

      return price;
    },

    formatWeight: function ( weight ) {
      let wf = miniShop2Config.weight_format;
      weight = this.numberFormat( weight, wf[ 0 ], wf[ 1 ], wf[ 2 ] );

      if ( miniShop2Config.weight_format_no_zeros ) {
        weight = weight.replace( /(0+)$/, '' );
        weight = weight.replace( /[^0-9]$/, '' );
      }

      return weight;
    },

    // Format a number with grouped thousands,
    numberFormat: function ( number, decimals, decPoint, thousandsSep ) {
      // original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
      // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
      // bugfix by: Michael White (http://crestidg.com)
      let i, j, kw, kd, km;

      // input sanitation & defaults
      if ( isNaN( decimals = Math.abs( decimals ) ) ) {
        decimals = 2;
      }
      if ( typeof decPoint === 'undefined' ) {
        decPoint = ',';
      }
      if ( typeof thousandsSep === 'undefined' ) {
        thousandsSep = '.';
      }

      i = parseInt( number = ( +number || 0 ).toFixed( decimals ), 10 ) + '';

      if ( ( j = i.length ) > 3 ) {
        j = j % 3;
      } else {
        j = 0;
      }

      km = j
        ? i.substr( 0, j ) + thousandsSep
        : '';
      kw = i.substr( j ).replace( /(\d{3})(?=\d)/g, '$1' + thousandsSep );
      kd = (decimals
        ? decPoint + Math.abs( number - i ).toFixed( decimals ).replace( /-/, '0' ).slice( 2 )
        : '');

      return km + kw + kd;
    },

    getValueFromSerializedArray: function ( name, arr ) {
      if ( arr.constructor !== Array ) {
        arr = miniShop2.sendData.formData;
      }
      for ( let i = 0, length = arr.length; i < length; i++ ) {
        if ( arr[ i ].name === name) {
          return arr[ i ].value;
        }
      }
      return null;
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    miniShop2.initialize();
    let html = $('html');
    html.removeClass('no-js');
    if (!html.hasClass('js')) {
      html.addClass('js');
    }
  });

  window.miniShop2 = miniShop2;
})( window, document, ms2Config );
