/* global miniShop2Config */

'use strict';

const ms2config = {
  // cssUrl: '/assets/components/minishop2/css/web/',
  // jsUrl: '/assets/components/minishop2/js/web/',
  actionUrl: '/assets/components/minishop2/action.php',
  ctx: 'web',
  // closeAllMessage: 'закрыть все',
  priceFormat: [ 2, '.', ' ' ],
  priceFormatNoZeros: true,
  weightFormat: [ 3, '.', ' ' ],
  weightFormatNoZeros: true
};

(function ( miniShop2Config ) {
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

  miniShop2.Callbacks.add = ( path, name, func ) => {
    if ( typeof func !== 'function' ) {
      return false;
    }
    path = path.split( '.' );
    let obj = miniShop2.Callbacks;
    for ( let i = 0; i < path.length; i++ ) {
      if ( typeof obj[ path[ i ] ] === 'undefined' ) {
        return false;
      }
      obj = obj[ path[ i ] ];
    }
    if ( typeof obj !== 'object' ) {
      obj = [ obj ];
    }
    if ( typeof name !== 'undefined' ) {
      obj[ name ] = func;
    } else {
      obj.push( func );
    }
    return true;
  };

  miniShop2.Callbacks.remove = ( path, name ) => {
    path = path.split( '.' );
    let obj = miniShop2.Callbacks;
    for ( let i = 0; i < path.length; i++ ) {
      if ( typeof obj[ path[ i ] ] === 'undefined' ) {
        return false;
      }
      obj = obj[ path[ i ] ];
    }
    if ( typeof obj[ name ] !== 'undefined' ) {
      delete obj[ name ];
      return true;
    }
    return false;
  };

  miniShop2.ajaxProgress = false;

  miniShop2.setup = () => {
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

    // noinspection JSUnresolvedFunction
    // miniShop2.$doc
    //   .ajaxStart(function () {
    //     miniShop2.ajaxProgress = true;
    //   })
    //   .ajaxStop(function () {
    //     miniShop2.ajaxProgress = false;
    //   })
    //   .on('submit', miniShop2.form, function (e) {
    //     e.preventDefault();
    //     var $form = $(this);
    //     var action = $form.find(miniShop2.action).val();

    //     if (action) {
    //       var formData = $form.serializeArray();
    //       formData.push({
    //         name: miniShop2.actionName,
    //         value: action
    //       });
    //       miniShop2.sendData = {
    //         $form: $form,
    //         action: action,
    //         formData: formData
    //       };
    //       miniShop2.controller();
    //     }
    //   });
    // miniShop2.Cart.initialize();
    // miniShop2.Message.initialize();
    // miniShop2.Order.initialize();
    // miniShop2.Gallery.initialize();
  };

  document.addEventListener('DOMContentLoaded', function () {
    miniShop2.initialize();
    let html = document.documentElement;
    html.classList.remove('no-js');
    if (!html.classList.contains('js')) {
      html.classList.add('js');
    }
  });

  window.miniShop2 = miniShop2;
})( ms2config );
