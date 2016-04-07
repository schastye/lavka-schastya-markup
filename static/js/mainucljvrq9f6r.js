/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );

/*!
 * Draggabilly PACKAGED v2.1.0
 * Make that shiz draggable
 * http://draggabilly.desandro.com
 * MIT license
 */

!function(t,i){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(e){i(t,e)}):"object"==typeof module&&module.exports?module.exports=i(t,require("jquery")):t.jQueryBridget=i(t,t.jQuery)}(window,function(t,i){function e(e,r,a){function h(t,i,n){var o,r="$()."+e+'("'+i+'")';return t.each(function(t,h){var d=a.data(h,e);if(!d)return void s(e+" not initialized. Cannot call methods, i.e. "+r);var u=d[i];if(!u||"_"==i.charAt(0))return void s(r+" is not a valid method");var p=u.apply(d,n);o=void 0===o?p:o}),void 0!==o?o:t}function d(t,i){t.each(function(t,n){var o=a.data(n,e);o?(o.option(i),o._init()):(o=new r(n,i),a.data(n,e,o))})}a=a||i||t.jQuery,a&&(r.prototype.option||(r.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[e]=function(t){if("string"==typeof t){var i=o.call(arguments,1);return h(this,t,i)}return d(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=e)}var o=Array.prototype.slice,r=t.console,s="undefined"==typeof r?function(){}:function(t){r.error(t)};return n(i||t.jQuery),e}),function(t,i){"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return i()}):"object"==typeof module&&module.exports?module.exports=i():t.getSize=i()}(window,function(){function t(t){var i=parseFloat(t),e=-1==t.indexOf("%")&&!isNaN(i);return e&&i}function i(){}function e(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},i=0;d>i;i++){var e=h[i];t[e]=0}return t}function n(t){var i=getComputedStyle(t);return i||a("Style returned "+i+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),i}function o(){if(!u){u=!0;var i=document.createElement("div");i.style.width="200px",i.style.padding="1px 2px 3px 4px",i.style.borderStyle="solid",i.style.borderWidth="1px 2px 3px 4px",i.style.boxSizing="border-box";var e=document.body||document.documentElement;e.appendChild(i);var o=n(i);r.isBoxSizeOuter=s=200==t(o.width),e.removeChild(i)}}function r(i){if(o(),"string"==typeof i&&(i=document.querySelector(i)),i&&"object"==typeof i&&i.nodeType){var r=n(i);if("none"==r.display)return e();var a={};a.width=i.offsetWidth,a.height=i.offsetHeight;for(var u=a.isBorderBox="border-box"==r.boxSizing,p=0;d>p;p++){var c=h[p],f=r[c],g=parseFloat(f);a[c]=isNaN(g)?0:g}var l=a.paddingLeft+a.paddingRight,v=a.paddingTop+a.paddingBottom,m=a.marginLeft+a.marginRight,y=a.marginTop+a.marginBottom,b=a.borderLeftWidth+a.borderRightWidth,P=a.borderTopWidth+a.borderBottomWidth,E=u&&s,_=t(r.width);_!==!1&&(a.width=_+(E?0:l+b));var x=t(r.height);return x!==!1&&(a.height=x+(E?0:v+P)),a.innerWidth=a.width-(l+b),a.innerHeight=a.height-(v+P),a.outerWidth=a.width+m,a.outerHeight=a.height+y,a}}var s,a="undefined"==typeof console?i:function(t){console.error(t)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],d=h.length,u=!1;return r}),function(t,i){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",i):"object"==typeof module&&module.exports?module.exports=i():t.EvEmitter=i()}(this,function(){function t(){}var i=t.prototype;return i.on=function(t,i){if(t&&i){var e=this._events=this._events||{},n=e[t]=e[t]||[];return-1==n.indexOf(i)&&n.push(i),this}},i.once=function(t,i){if(t&&i){this.on(t,i);var e=this._onceEvents=this._onceEvents||{},n=e[t]=e[t]||[];return n[i]=!0,this}},i.off=function(t,i){var e=this._events&&this._events[t];if(e&&e.length){var n=e.indexOf(i);return-1!=n&&e.splice(n,1),this}},i.emitEvent=function(t,i){var e=this._events&&this._events[t];if(e&&e.length){var n=0,o=e[n];i=i||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,i),n+=s?0:1,o=e[n]}return this}},t}),function(t,i){"function"==typeof define&&define.amd?define("unipointer/unipointer",["ev-emitter/ev-emitter"],function(e){return i(t,e)}):"object"==typeof module&&module.exports?module.exports=i(t,require("ev-emitter")):t.Unipointer=i(t,t.EvEmitter)}(window,function(t,i){function e(){}function n(){}var o=n.prototype=Object.create(i.prototype);o.bindStartEvent=function(t){this._bindStartEvent(t,!0)},o.unbindStartEvent=function(t){this._bindStartEvent(t,!1)},o._bindStartEvent=function(i,e){e=void 0===e?!0:!!e;var n=e?"addEventListener":"removeEventListener";t.navigator.pointerEnabled?i[n]("pointerdown",this):t.navigator.msPointerEnabled?i[n]("MSPointerDown",this):(i[n]("mousedown",this),i[n]("touchstart",this))},o.handleEvent=function(t){var i="on"+t.type;this[i]&&this[i](t)},o.getTouch=function(t){for(var i=0;i<t.length;i++){var e=t[i];if(e.identifier==this.pointerIdentifier)return e}},o.onmousedown=function(t){var i=t.button;i&&0!==i&&1!==i||this._pointerDown(t,t)},o.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])},o.onMSPointerDown=o.onpointerdown=function(t){this._pointerDown(t,t)},o._pointerDown=function(t,i){this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==i.pointerId?i.pointerId:i.identifier,this.pointerDown(t,i))},o.pointerDown=function(t,i){this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,i])};var r={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"],MSPointerDown:["MSPointerMove","MSPointerUp","MSPointerCancel"]};return o._bindPostStartEvents=function(i){if(i){var e=r[i.type];e.forEach(function(i){t.addEventListener(i,this)},this),this._boundPointerEvents=e}},o._unbindPostStartEvents=function(){this._boundPointerEvents&&(this._boundPointerEvents.forEach(function(i){t.removeEventListener(i,this)},this),delete this._boundPointerEvents)},o.onmousemove=function(t){this._pointerMove(t,t)},o.onMSPointerMove=o.onpointermove=function(t){t.pointerId==this.pointerIdentifier&&this._pointerMove(t,t)},o.ontouchmove=function(t){var i=this.getTouch(t.changedTouches);i&&this._pointerMove(t,i)},o._pointerMove=function(t,i){this.pointerMove(t,i)},o.pointerMove=function(t,i){this.emitEvent("pointerMove",[t,i])},o.onmouseup=function(t){this._pointerUp(t,t)},o.onMSPointerUp=o.onpointerup=function(t){t.pointerId==this.pointerIdentifier&&this._pointerUp(t,t)},o.ontouchend=function(t){var i=this.getTouch(t.changedTouches);i&&this._pointerUp(t,i)},o._pointerUp=function(t,i){this._pointerDone(),this.pointerUp(t,i)},o.pointerUp=function(t,i){this.emitEvent("pointerUp",[t,i])},o._pointerDone=function(){this.isPointerDown=!1,delete this.pointerIdentifier,this._unbindPostStartEvents(),this.pointerDone()},o.pointerDone=e,o.onMSPointerCancel=o.onpointercancel=function(t){t.pointerId==this.pointerIdentifier&&this._pointerCancel(t,t)},o.ontouchcancel=function(t){var i=this.getTouch(t.changedTouches);i&&this._pointerCancel(t,i)},o._pointerCancel=function(t,i){this._pointerDone(),this.pointerCancel(t,i)},o.pointerCancel=function(t,i){this.emitEvent("pointerCancel",[t,i])},n.getPointerPoint=function(t){return{x:t.pageX,y:t.pageY}},n}),function(t,i){"function"==typeof define&&define.amd?define("unidragger/unidragger",["unipointer/unipointer"],function(e){return i(t,e)}):"object"==typeof module&&module.exports?module.exports=i(t,require("unipointer")):t.Unidragger=i(t,t.Unipointer)}(window,function(t,i){function e(){}function n(){}var o=n.prototype=Object.create(i.prototype);o.bindHandles=function(){this._bindHandles(!0)},o.unbindHandles=function(){this._bindHandles(!1)};var r=t.navigator;return o._bindHandles=function(t){t=void 0===t?!0:!!t;var i;i=r.pointerEnabled?function(i){i.style.touchAction=t?"none":""}:r.msPointerEnabled?function(i){i.style.msTouchAction=t?"none":""}:e;for(var n=t?"addEventListener":"removeEventListener",o=0;o<this.handles.length;o++){var s=this.handles[o];this._bindStartEvent(s,t),i(s),s[n]("click",this)}},o.pointerDown=function(t,i){if("INPUT"==t.target.nodeName&&"range"==t.target.type)return this.isPointerDown=!1,void delete this.pointerIdentifier;this._dragPointerDown(t,i);var e=document.activeElement;e&&e.blur&&e.blur(),this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,i])},o._dragPointerDown=function(t,e){this.pointerDownPoint=i.getPointerPoint(e);var n=this.canPreventDefaultOnPointerDown(t,e);n&&t.preventDefault()},o.canPreventDefaultOnPointerDown=function(t){return"SELECT"!=t.target.nodeName},o.pointerMove=function(t,i){var e=this._dragPointerMove(t,i);this.emitEvent("pointerMove",[t,i,e]),this._dragMove(t,i,e)},o._dragPointerMove=function(t,e){var n=i.getPointerPoint(e),o={x:n.x-this.pointerDownPoint.x,y:n.y-this.pointerDownPoint.y};return!this.isDragging&&this.hasDragStarted(o)&&this._dragStart(t,e),o},o.hasDragStarted=function(t){return Math.abs(t.x)>3||Math.abs(t.y)>3},o.pointerUp=function(t,i){this.emitEvent("pointerUp",[t,i]),this._dragPointerUp(t,i)},o._dragPointerUp=function(t,i){this.isDragging?this._dragEnd(t,i):this._staticClick(t,i)},o._dragStart=function(t,e){this.isDragging=!0,this.dragStartPoint=i.getPointerPoint(e),this.isPreventingClicks=!0,this.dragStart(t,e)},o.dragStart=function(t,i){this.emitEvent("dragStart",[t,i])},o._dragMove=function(t,i,e){this.isDragging&&this.dragMove(t,i,e)},o.dragMove=function(t,i,e){t.preventDefault(),this.emitEvent("dragMove",[t,i,e])},o._dragEnd=function(t,i){this.isDragging=!1,setTimeout(function(){delete this.isPreventingClicks}.bind(this)),this.dragEnd(t,i)},o.dragEnd=function(t,i){this.emitEvent("dragEnd",[t,i])},o.onclick=function(t){this.isPreventingClicks&&t.preventDefault()},o._staticClick=function(t,i){if(!this.isIgnoringMouseUp||"mouseup"!=t.type){var e=t.target.nodeName;("INPUT"==e||"TEXTAREA"==e)&&t.target.focus(),this.staticClick(t,i),"mouseup"!=t.type&&(this.isIgnoringMouseUp=!0,setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400))}},o.staticClick=function(t,i){this.emitEvent("staticClick",[t,i])},n.getPointerPoint=i.getPointerPoint,n}),function(t,i){"function"==typeof define&&define.amd?define(["get-size/get-size","unidragger/unidragger"],function(e,n){return i(t,e,n)}):"object"==typeof module&&module.exports?module.exports=i(t,require("get-size"),require("unidragger")):t.Draggabilly=i(t,t.getSize,t.Unidragger)}(window,function(t,i,e){function n(){}function o(t,i){for(var e in i)t[e]=i[e];return t}function r(t){return t instanceof HTMLElement}function s(t,i){this.element="string"==typeof t?h.querySelector(t):t,f&&(this.$element=f(this.element)),this.options=o({},this.constructor.defaults),this.option(i),this._create()}function a(t,i,e){return e=e||"round",i?Math[e](t/i)*i:t}var h=t.document,d=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame,u=0;d||(d=function(t){var i=(new Date).getTime(),e=Math.max(0,16-(i-u)),n=setTimeout(t,e);return u=i+e,n});var p=h.documentElement,c="string"==typeof p.style.transform?"transform":"WebkitTransform",f=t.jQuery,g=s.prototype=Object.create(e.prototype);return s.defaults={},g.option=function(t){o(this.options,t)},g._create=function(){this.position={},this._getPosition(),this.startPoint={x:0,y:0},this.dragPoint={x:0,y:0},this.startPosition=o({},this.position);var t=getComputedStyle(this.element);"relative"!=t.position&&"absolute"!=t.position&&(this.element.style.position="relative"),this.enable(),this.setHandles()},g.setHandles=function(){this.handles=this.options.handle?this.element.querySelectorAll(this.options.handle):[this.element],this.bindHandles()},g.dispatchEvent=function(i,e,n){var o=[e].concat(n);this.emitEvent(i,o);var r=t.jQuery;if(r&&this.$element)if(e){var s=r.Event(e);s.type=i,this.$element.trigger(s,n)}else this.$element.trigger(i,n)},s.prototype._getPosition=function(){var t=getComputedStyle(this.element),i=this._getPositionCoord(t.left,"width"),e=this._getPositionCoord(t.top,"height");this.position.x=isNaN(i)?0:i,this.position.y=isNaN(e)?0:e,this._addTransformPosition(t)},s.prototype._getPositionCoord=function(t,e){if(-1!=t.indexOf("%")){var n=i(this.element.parentNode);return parseFloat(t)/100*n[e]}return parseInt(t,10)},g._addTransformPosition=function(t){var i=t[c];if(0===i.indexOf("matrix")){var e=i.split(","),n=0===i.indexOf("matrix3d")?12:4,o=parseInt(e[n],10),r=parseInt(e[n+1],10);this.position.x+=o,this.position.y+=r}},g.pointerDown=function(t,i){this._dragPointerDown(t,i);var e=h.activeElement;e&&e.blur&&e!=h.body&&e.blur(),this._bindPostStartEvents(t),this.element.classList.add("is-pointer-down"),this.dispatchEvent("pointerDown",t,[i])},g.pointerMove=function(t,i){var e=this._dragPointerMove(t,i);this.dispatchEvent("pointerMove",t,[i,e]),this._dragMove(t,i,e)},g.dragStart=function(t,i){this.isEnabled&&(this._getPosition(),this.measureContainment(),this.startPosition.x=this.position.x,this.startPosition.y=this.position.y,this.setLeftTop(),this.dragPoint.x=0,this.dragPoint.y=0,this.element.classList.add("is-dragging"),this.dispatchEvent("dragStart",t,[i]),this.animate())},g.measureContainment=function(){var t=this.options.containment;if(t){var e=r(t)?t:"string"==typeof t?h.querySelector(t):this.element.parentNode,n=i(this.element),o=i(e),s=this.element.getBoundingClientRect(),a=e.getBoundingClientRect(),d=o.borderLeftWidth+o.borderRightWidth,u=o.borderTopWidth+o.borderBottomWidth,p=this.relativeStartPosition={x:s.left-(a.left+o.borderLeftWidth),y:s.top-(a.top+o.borderTopWidth)};this.containSize={width:o.width-d-p.x-n.width,height:o.height-u-p.y-n.height}}},g.dragMove=function(t,i,e){if(this.isEnabled){var n=e.x,o=e.y,r=this.options.grid,s=r&&r[0],h=r&&r[1];n=a(n,s),o=a(o,h),n=this.containDrag("x",n,s),o=this.containDrag("y",o,h),n="y"==this.options.axis?0:n,o="x"==this.options.axis?0:o,this.position.x=this.startPosition.x+n,this.position.y=this.startPosition.y+o,this.dragPoint.x=n,this.dragPoint.y=o,this.dispatchEvent("dragMove",t,[i,e])}},g.containDrag=function(t,i,e){if(!this.options.containment)return i;var n="x"==t?"width":"height",o=this.relativeStartPosition[t],r=a(-o,e,"ceil"),s=this.containSize[n];return s=a(s,e,"floor"),Math.min(s,Math.max(r,i))},g.pointerUp=function(t,i){this.element.classList.remove("is-pointer-down"),this.dispatchEvent("pointerUp",t,[i]),this._dragPointerUp(t,i)},g.dragEnd=function(t,i){this.isEnabled&&(c&&(this.element.style[c]="",this.setLeftTop()),this.element.classList.remove("is-dragging"),this.dispatchEvent("dragEnd",t,[i]))},g.animate=function(){if(this.isDragging){this.positionDrag();var t=this;d(function(){t.animate()})}},g.setLeftTop=function(){this.element.style.left=this.position.x+"px",this.element.style.top=this.position.y+"px"},g.positionDrag=function(){this.element.style[c]="translate3d( "+this.dragPoint.x+"px, "+this.dragPoint.y+"px, 0)"},g.staticClick=function(t,i){this.dispatchEvent("staticClick",t,[i])},g.enable=function(){this.isEnabled=!0},g.disable=function(){this.isEnabled=!1,this.isDragging&&this.dragEnd()},g.destroy=function(){this.disable(),this.element.style[c]="",this.element.style.left="",this.element.style.top="",this.element.style.position="",this.unbindHandles(),this.$element&&this.$element.removeData("draggabilly")},g._init=n,f&&f.bridget&&f.bridget("draggabilly",s),s});
/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-csstransitions-domprefixes-prefixed-setclasses-shiv-testallprops-testprop !*/
!function(e,t,n){function r(e){var t=S.className,n=Modernizr._config.classPrefix||"";if(x&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),x?S.className.baseVal=t:S.className=t)}function o(e,t){return typeof e===t}function i(){var e,t,n,r,i,a,s;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],t=C[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=o(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],s=a.split("."),1===s.length?Modernizr[s[0]]=r:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=r),y.push((r?"":"no-")+s.join("-"))}}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function s(e,t){return!!~(""+e).indexOf(t)}function l(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):x?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function u(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,n){var r;for(var i in e)if(e[i]in t)return n===!1?e[i]:(r=t[e[i]],o(r,"function")?u(r,n||t):r);return!1}function c(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(){var e=t.body;return e||(e=l(x?"svg":"body"),e.fake=!0),e}function p(e,n,r,o){var i,a,s,u,f="modernizr",c=l("div"),p=d();if(parseInt(r,10))for(;r--;)s=l("div"),s.id=o?o[r]:f+(r+1),c.appendChild(s);return i=l("style"),i.type="text/css",i.id="s"+f,(p.fake?p:c).appendChild(i),p.appendChild(c),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),c.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",u=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),a=n(c,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=u,S.offsetHeight):c.parentNode.removeChild(c),!!a}function m(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(c(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+c(t[o])+":"+r+")");return i=i.join(" or "),p("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function h(e,t,r,i){function u(){c&&(delete k.style,delete k.modElem)}if(i=o(i,"undefined")?!1:i,!o(r,"undefined")){var f=m(e,r);if(!o(f,"undefined"))return f}for(var c,d,p,h,v,g=["modernizr","tspan"];!k.style;)c=!0,k.modElem=l(g.shift()),k.style=k.modElem.style;for(p=e.length,d=0;p>d;d++)if(h=e[d],v=k.style[h],s(h,"-")&&(h=a(h)),k.style[h]!==n){if(i||o(r,"undefined"))return u(),"pfx"==t?h:!0;try{k.style[h]=r}catch(y){}if(k.style[h]!=v)return u(),"pfx"==t?h:!0}return u(),!1}function v(e,t,n,r,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+_.join(a+" ")+a).split(" ");return o(t,"string")||o(t,"undefined")?h(s,t,r,i):(s=(e+" "+w.join(a+" ")+a).split(" "),f(s,t,n))}function g(e,t,r){return v(e,n,n,t,r)}var y=[],C=[],E={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){C.push({name:e,fn:t,options:n})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=E,Modernizr=new Modernizr;var S=t.documentElement,x="svg"===S.nodeName.toLowerCase();x||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=C.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=C.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),C.elements=n+" "+e,u(t)}function i(e){var t=y[e[v]];return t||(t={},g++,e[v]=g,y[g]=t),t}function a(e,n,r){if(n||(n=t),c)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||m.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),c)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,s=r(),l=s.length;l>a;a++)o.createElement(s[a]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return C.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(C,t.frag)}function u(e){e||(e=t);var r=i(e);return!C.shivCSS||f||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),c||l(e,r),e}var f,c,d="3.7.3",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,v="_html5shiv",g=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",f="hidden"in e,c=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){f=!0,c=!0}}();var C={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:d,shivCSS:p.shivCSS!==!1,supportsUnknownElements:c,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:u,createElement:a,createDocumentFragment:s,addElements:o};e.html5=C,u(t),"object"==typeof module&&module.exports&&(module.exports=C)}("undefined"!=typeof e?e:this,t);var b="Moz O ms Webkit",w=E._config.usePrefixes?b.toLowerCase().split(" "):[];E._domPrefixes=w;var _=E._config.usePrefixes?b.split(" "):[];E._cssomPrefixes=_;var N=function(t){var r,o=prefixes.length,i=e.CSSRule;if("undefined"==typeof i)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+t;for(var a=0;o>a;a++){var s=prefixes[a],l=s.toUpperCase()+"_"+r;if(l in i)return"@-"+s.toLowerCase()+"-"+t}return!1};E.atRule=N;var j={elem:l("modernizr")};Modernizr._q.push(function(){delete j.elem});var k={style:j.elem.style};Modernizr._q.unshift(function(){delete k.style});E.testProp=function(e,t,r){return h([e],n,t,r)};E.testAllProps=v;E.prefixed=function(e,t,n){return 0===e.indexOf("@")?N(e):(-1!=e.indexOf("-")&&(e=a(e)),t?v(e,t,n):v(e,"pfx"))};E.testAllProps=g,Modernizr.addTest("csstransitions",g("transition","all",!0)),i(),r(y),delete E.addTest,delete E.addAsyncTest;for(var z=0;z<Modernizr._q.length;z++)Modernizr._q[z]();e.Modernizr=Modernizr}(window,document);
"use strict";
"use strict";
/**
 * elastiStack.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
;( function( window ) {
	
	'use strict';

	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	// support
	var is3d = true,
		supportTransitions = Modernizr.csstransitions,
		// transition end event name
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ];

	function ElastiStack( el, options ) {
		this.container = el;
		this.options = extend( {}, this.options );
  		extend( this.options, options );
  		this._init();
	}

	function setTransformStyle( el, tval ) {
		el.style.WebkitTransform = tval;
		el.style.msTransform = tval;
		el.style.transform = tval;
	}

	ElastiStack.prototype.options = {
		// distDragBack: if the user stops dragging the image in a area that does not exceed [distDragBack]px for either x or y then the image goes back to the stack 
		distDragBack: 200,
		// distDragMax: if the user drags the image in a area that exceeds [distDragMax]px for either x or y then the image moves away from the stack 
		distDragMax: 450,

		animateClass: '',

		moveBackClass: '',
		// callback
		onUpdateStack: function( current ) { return false; }
	};

	ElastiStack.prototype._init = function() {
		// items
		this.items = [].slice.call( this.container.children );
		// total items
		this.itemsCount = this.items.length;
		// current item's index (the one on the top of the stack)
		this.current = 0;
		// set initial styles
		this._setStackStyle();
		// return if no items or only one
		if( this.itemsCount <= 1 ) return;
		// add dragging capability
		this._initDragg();
		// init drag events
		this._initEvents();
	};

	ElastiStack.prototype._initEvents = function() {
		var self = this;
		this.draggie.on( 'dragStart', function( i, e, p ) { self._onDragStart( this ); } );
		this.draggie.on( 'dragMove', function( i, e, p ) { self._onDragMove( this ); } );
		this.draggie.on( 'dragEnd', function( i, e, p ) { self._onDragEnd( this ); } );
	};

	ElastiStack.prototype._setStackStyle = function() {
		var item1 = this._firstItem(), item2 = this._secondItem(), item3 = this._thirdItem();

		if( item1 ) {
			item1.style.opacity = 1;
			item1.style.zIndex = 4;
			setTransformStyle( item1, is3d ? 'translate3d(0,0,0)' : 'translate(0,0)' );
		}

		if( item2 ) {
			item2.style.opacity = 1;
			item2.style.zIndex = 3;
			setTransformStyle( item2, is3d ? 'translate3d(0,0,-60px)' : 'translate(0,0)' );
		}

		if( item3 ) {
			item3.style.opacity = 1;
			item3.style.zIndex = 2;
			setTransformStyle( item3, is3d ? 'translate3d(0,0,-120px)' : 'translate(0,0)' );
		}
	};

	ElastiStack.prototype._moveAway = function( instance ) {
		// disable drag
		this._disableDragg();
		
		// add class "animate"
		classie.add( instance.element, this.options.animateClass );
		
		// calculate how much to translate in the x and y axis
		var tVal = this._getTranslateVal( instance );
		
		// apply it	
		setTransformStyle( instance.element, is3d ? 'translate3d(' + tVal.x + 'px,' + tVal.y + 'px, 0px)' : 'translate(' + tVal.x + 'px,' + tVal.y + 'px)' );
		
		// item also fades out
		instance.element.style.opacity = 0;

		// other items move back to stack
		var item2 = this._secondItem(), item3 = this._thirdItem();

		if( item2 ) {
			classie.add( item2, this.options.moveBackClass );
			classie.add( item2, this.options.animateClass );
			setTransformStyle( item2, is3d ? 'translate3d(0,0,-60px)' : 'translate(0,0)' );
		}
		if( item3 ) {
			classie.add( item3, this.options.moveBackClass );
			classie.add( item3, this.options.animateClass );
			setTransformStyle( item3, is3d ? 'translate3d(0,0,-120px)' : 'translate(0,0)' );
		}

		// after transition ends..
		var self = this,
			onEndTransFn = function() {
				instance.element.removeEventListener( transEndEventName, onEndTransFn );
				
				// reset first item
				setTransformStyle( instance.element, is3d ? 'translate3d(0,0,-180px)' : 'translate(0,0,0)' );
				instance.element.style.left = instance.element.style.top = '0px';
				instance.element.style.zIndex = -1;
				classie.remove( instance.element, self.options.animateClass );

				// reorder stack
				self.current = self.current < self.itemsCount - 1 ? self.current + 1 : 0;
				// new front items
				var item1 = self._firstItem(),
					item2 = self._secondItem(),
					item3 = self._thirdItem();

				// reset transition timing function
				classie.remove( item1, self.options.moveBackClass );
				if( item2 ) classie.remove( item2, self.options.moveBackClass );
				if( item3 ) classie.remove( item3, self.options.moveBackClass );

				setTimeout( function() {
					// the upcoming one will animate..
					classie.add( self._lastItem(), self.options.animateClass );
					// reset style
					self._setStackStyle();
				}, 25 );

				// add dragging capability
				self._initDragg();

				// init drag events on new current item
				self._initEvents();

				// callback
				self.options.onUpdateStack( self.current );
			};

		if( supportTransitions ) {
			instance.element.addEventListener( transEndEventName, onEndTransFn );
		}
		else {
			onEndTransFn.call();
		}
	};

	ElastiStack.prototype._moveBack = function( instance ) {
		var item2 = this._secondItem(), item3 = this._thirdItem();

		classie.add( instance.element, this.options.moveBackClass );
		classie.add( instance.element, this.options.animateClass );
		setTransformStyle( instance.element, is3d ? 'translate3d(0,0,0)' : 'translate(0,0)' );
		instance.element.style.left = '0px';
		instance.element.style.top = '0px';

		if( item2 ) {
			classie.add( item2, this.options.moveBackClass );
			classie.add( item2, this.options.animateClass );
			setTransformStyle( item2, is3d ? 'translate3d(0,0,-60px)' : 'translate(0,0)' );
		}
		if( item3 ) {
			classie.add( item3, this.options.moveBackClass );
			classie.add( item3, this.options.animateClass );
			setTransformStyle( item3, is3d ? 'translate3d(0,0,-120px)' : 'translate(0,0)' );
		}
	};

	ElastiStack.prototype._onDragStart = function( instance, event, pointer ) {
		// remove transition classes if any
		var item2 = this._secondItem(), item3 = this._thirdItem();

		classie.remove( instance.element, this.options.moveBackClass );
		classie.remove( instance.element, this.options.animateClass );

		if( item2 ) {
			classie.remove( item2, this.options.moveBackClass );
			classie.remove( item2, this.options.animateClass );
		}
		if( item3 ) {
			classie.remove( item3, this.options.moveBackClass );
			classie.remove( item3, this.options.animateClass );
		}
	};

	ElastiStack.prototype._onDragMove = function( instance, event, pointer ) {
		if( this._outOfBounds( instance ) ) {
			this._moveAway( instance );
		}
		else {
			// the second and third items also move
			var item2 = this._secondItem(), item3 = this._thirdItem();
			if( item2 ) {
				setTransformStyle( item2, is3d ? 'translate3d(' + ( instance.position.x * .6 ) + 'px,' + ( instance.position.y * .6 ) + 'px, -60px)' : 'translate(' + ( instance.position.x * .6 ) + 'px,' + ( instance.position.y * .6 ) + 'px)' );
			}
			if( item3 ) {
				setTransformStyle( item3, is3d ? 'translate3d(' + ( instance.position.x * .3 ) + 'px,' + ( instance.position.y * .3 ) + 'px, -120px)' : 'translate(' + ( instance.position.x * .3 ) + 'px,' + ( instance.position.y * .3 ) + 'px)' );
			}
		}
	};

	ElastiStack.prototype._onDragEnd = function( instance, event, pointer ) {
		if( this._outOfBounds( instance ) ) return;
		if( this._outOfSight(instance) ) {
			this._moveAway( instance );
		}
		else {
			this._moveBack( instance );
		}
	};

	ElastiStack.prototype._initDragg = function() {
		this.draggie = new Draggabilly( this.items[ this.current ] );
	};

	ElastiStack.prototype._disableDragg = function() {
		this.draggie.disable();
	};

	// returns true if x or y is bigger than distDragMax
	ElastiStack.prototype._outOfBounds = function( el ) {
		return Math.abs( el.position.x ) > this.options.distDragMax || Math.abs( el.position.y ) > this.options.distDragMax;
	};

	// returns true if x or y is bigger than distDragBack
	ElastiStack.prototype._outOfSight = function( el ) {
		return Math.abs( el.position.x ) > this.options.distDragBack || Math.abs( el.position.y ) > this.options.distDragBack;
	};

	ElastiStack.prototype._getTranslateVal = function( el ) {
		var h = Math.sqrt( Math.pow( el.position.x, 2 ) + Math.pow( el.position.y, 2 ) ),
			a = Math.asin( Math.abs( el.position.y ) / h ) / ( Math.PI / 180 ),
			hL = h + this.options.distDragBack,
			dx = Math.cos( a * ( Math.PI / 180 ) ) * hL,
			dy = Math.sin( a * ( Math.PI / 180 ) ) * hL,
			tx = dx - Math.abs( el.position.x ),
			ty = dy - Math.abs( el.position.y );
		
		return {
			x : el.position.x > 0 ? tx : tx * -1, 
			y : el.position.y > 0 ? ty : ty * -1
		}
	};

	// returns the first item in the stack
	ElastiStack.prototype._firstItem = function() {
		return this.items[ this.current ];
	};

	// returns the second item in the stack
	ElastiStack.prototype._secondItem = function() {
		if( this.itemsCount >= 2 ) {
			return this.current + 1 < this.itemsCount ? this.items[ this.current + 1 ] : this.items[ Math.abs( this.itemsCount - ( this.current + 1 ) ) ];
		}
	};
	
	// returns the third item in the stack
	ElastiStack.prototype._thirdItem = function() { 
		if( this.itemsCount >= 3 ) {
			return this.current + 2 < this.itemsCount ? this.items[ this.current + 2 ] : this.items[ Math.abs( this.itemsCount - ( this.current + 2 ) ) ];
		}
	};

	// returns the last item (of the first three) in the stack
	ElastiStack.prototype._lastItem = function() { 
		if( this.itemsCount >= 3 ) {
			return this._thirdItem();
		}
		else {
			return this._secondItem();
		}
	};

	// add to global namespace
	window.ElastiStack = ElastiStack;

})( window );
/* global ElastiStack */

'use strict';

var elasticstackContainer = document.getElementById('elasticstack');
if (elasticstackContainer) {
  new ElastiStack(document.getElementById('elasticstack'), {
    animateClass: 'animate',
    moveBackClass: 'move-back'
  });
}
"use strict";
"use strict";
"use strict";
"use strict";
"use strict";
"use strict";
"use strict";
/* global classie */

'use strict';

(function () {
  function onInputFocus(ev) {
    classie.add(ev.target.parentNode, 'input-box_filled');
  }

  function onInputBlur(ev) {
    if (ev.target.value.trim() === '') {
      classie.remove(ev.target.parentNode, 'input-box_filled');
    }
  }

  // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
  if (!String.prototype.trim) {
    (function () {
      // Make sure we trim BOM and NBSP
      var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      String.prototype.trim = function () {
        return this.replace(rtrim, '');
      };
    })();
  }

  [].slice.call(document.querySelectorAll('.input-box__field')).forEach(function (inputEl) {
    if (classie.has(inputEl.parentNode, 'input-box_freeze')) {
      return;
    }
    // in case the input is already filled...
    if (inputEl.value.trim() !== '') {
      classie.add(inputEl.parentNode, 'input-box_filled');
    }

    // events:
    inputEl.addEventListener('focus', onInputFocus);
    inputEl.addEventListener('change', onInputFocus);
    inputEl.addEventListener('blur', onInputBlur);
  });
})();
"use strict";
"use strict";