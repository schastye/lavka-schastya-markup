(function(){'use strict';var f,g=[];function l(a){g.push(a);1==g.length&&f()}function m(){for(;g.length;)g[0](),g.shift()}f=function(){setTimeout(m)};function n(a){this.a=p;this.b=void 0;this.f=[];var b=this;try{a(function(a){q(b,a)},function(a){r(b,a)})}catch(c){r(b,c)}}var p=2;function t(a){return new n(function(b,c){c(a)})}function u(a){return new n(function(b){b(a)})}function q(a,b){if(a.a==p){if(b==a)throw new TypeError;var c=!1;try{var d=b&&b.then;if(null!=b&&"object"==typeof b&&"function"==typeof d){d.call(b,function(b){c||q(a,b);c=!0},function(b){c||r(a,b);c=!0});return}}catch(e){c||r(a,e);return}a.a=0;a.b=b;v(a)}}
function r(a,b){if(a.a==p){if(b==a)throw new TypeError;a.a=1;a.b=b;v(a)}}function v(a){l(function(){if(a.a!=p)for(;a.f.length;){var b=a.f.shift(),c=b[0],d=b[1],e=b[2],b=b[3];try{0==a.a?"function"==typeof c?e(c.call(void 0,a.b)):e(a.b):1==a.a&&("function"==typeof d?e(d.call(void 0,a.b)):b(a.b))}catch(h){b(h)}}})}n.prototype.g=function(a){return this.c(void 0,a)};n.prototype.c=function(a,b){var c=this;return new n(function(d,e){c.f.push([a,b,d,e]);v(c)})};
function w(a){return new n(function(b,c){function d(c){return function(d){h[c]=d;e+=1;e==a.length&&b(h)}}var e=0,h=[];0==a.length&&b(h);for(var k=0;k<a.length;k+=1)u(a[k]).c(d(k),c)})}function x(a){return new n(function(b,c){for(var d=0;d<a.length;d+=1)u(a[d]).c(b,c)})};window.Promise||(window.Promise=n,window.Promise.resolve=u,window.Promise.reject=t,window.Promise.race=x,window.Promise.all=w,window.Promise.prototype.then=n.prototype.c,window.Promise.prototype["catch"]=n.prototype.g);}());

(function(){var k=!!document.addEventListener;function l(a,b){k?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function v(a){document.body?a():k?document.addEventListener("DOMContentLoaded",a):document.attachEvent("onreadystatechange",function(){"interactive"!=document.readyState&&"complete"!=document.readyState||a()})};function w(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
function y(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:"+b+";"}function z(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function A(a,b){function c(){var a=m;z(a)&&null!==a.a.parentNode&&b(a.g)}var m=a;l(a.b,c);l(a.c,c);z(a)};function B(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var C=null,D=null,H=!!window.FontFace;function I(){if(null===D){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}D=""!==a.style.font}return D}function J(a,b){return[a.style,a.weight,I()?a.stretch:"","100px",b].join(" ")}
B.prototype.load=function(a,b){var c=this,m=a||"BESbswy",x=b||3E3,E=(new Date).getTime();return new Promise(function(a,b){if(H){var K=new Promise(function(a,b){function e(){(new Date).getTime()-E>=x?b():document.fonts.load(J(c,c.family),m).then(function(c){1<=c.length?a():setTimeout(e,25)},function(){b()})}e()}),L=new Promise(function(a,c){setTimeout(c,x)});Promise.race([L,K]).then(function(){a(c)},function(){b(c)})}else v(function(){function q(){var b;if(b=-1!=f&&-1!=g||-1!=f&&-1!=h||-1!=g&&-1!=
h)(b=f!=g&&f!=h&&g!=h)||(null===C&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),C=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=C&&(f==r&&g==r&&h==r||f==t&&g==t&&h==t||f==u&&g==u&&h==u)),b=!b;b&&(null!==d.parentNode&&d.parentNode.removeChild(d),clearTimeout(G),a(c))}function F(){if((new Date).getTime()-E>=x)null!==d.parentNode&&d.parentNode.removeChild(d),b(c);else{var a=document.hidden;if(!0===a||void 0===a)f=e.a.offsetWidth,g=n.a.offsetWidth,
h=p.a.offsetWidth,q();G=setTimeout(F,50)}}var e=new w(m),n=new w(m),p=new w(m),f=-1,g=-1,h=-1,r=-1,t=-1,u=-1,d=document.createElement("div"),G=0;d.dir="ltr";y(e,J(c,"sans-serif"));y(n,J(c,"serif"));y(p,J(c,"monospace"));d.appendChild(e.a);d.appendChild(n.a);d.appendChild(p.a);document.body.appendChild(d);r=e.a.offsetWidth;t=n.a.offsetWidth;u=p.a.offsetWidth;F();A(e,function(a){f=a;q()});y(e,J(c,'"'+c.family+'",sans-serif'));A(n,function(a){g=a;q()});y(n,J(c,'"'+c.family+'",serif'));A(p,function(a){h=
a;q()});y(p,J(c,'"'+c.family+'",monospace'))})})};window.FontFaceObserver=B;window.FontFaceObserver.prototype.check=window.FontFaceObserver.prototype.load=B.prototype.load;"undefined"!==typeof module&&(module.exports=window.FontFaceObserver);}());

/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-csstransitions-domprefixes-prefixed-setclasses-shiv-testallprops-testprop !*/
!function(e,t,n){function r(e){var t=S.className,n=Modernizr._config.classPrefix||"";if(x&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),x?S.className.baseVal=t:S.className=t)}function o(e,t){return typeof e===t}function i(){var e,t,n,r,i,a,s;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],t=C[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=o(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],s=a.split("."),1===s.length?Modernizr[s[0]]=r:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=r),y.push((r?"":"no-")+s.join("-"))}}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function s(e,t){return!!~(""+e).indexOf(t)}function l(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):x?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function u(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,n){var r;for(var i in e)if(e[i]in t)return n===!1?e[i]:(r=t[e[i]],o(r,"function")?u(r,n||t):r);return!1}function c(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(){var e=t.body;return e||(e=l(x?"svg":"body"),e.fake=!0),e}function p(e,n,r,o){var i,a,s,u,f="modernizr",c=l("div"),p=d();if(parseInt(r,10))for(;r--;)s=l("div"),s.id=o?o[r]:f+(r+1),c.appendChild(s);return i=l("style"),i.type="text/css",i.id="s"+f,(p.fake?p:c).appendChild(i),p.appendChild(c),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),c.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",u=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),a=n(c,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=u,S.offsetHeight):c.parentNode.removeChild(c),!!a}function m(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(c(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+c(t[o])+":"+r+")");return i=i.join(" or "),p("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function h(e,t,r,i){function u(){c&&(delete k.style,delete k.modElem)}if(i=o(i,"undefined")?!1:i,!o(r,"undefined")){var f=m(e,r);if(!o(f,"undefined"))return f}for(var c,d,p,h,v,g=["modernizr","tspan"];!k.style;)c=!0,k.modElem=l(g.shift()),k.style=k.modElem.style;for(p=e.length,d=0;p>d;d++)if(h=e[d],v=k.style[h],s(h,"-")&&(h=a(h)),k.style[h]!==n){if(i||o(r,"undefined"))return u(),"pfx"==t?h:!0;try{k.style[h]=r}catch(y){}if(k.style[h]!=v)return u(),"pfx"==t?h:!0}return u(),!1}function v(e,t,n,r,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+_.join(a+" ")+a).split(" ");return o(t,"string")||o(t,"undefined")?h(s,t,r,i):(s=(e+" "+w.join(a+" ")+a).split(" "),f(s,t,n))}function g(e,t,r){return v(e,n,n,t,r)}var y=[],C=[],E={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){C.push({name:e,fn:t,options:n})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=E,Modernizr=new Modernizr;var S=t.documentElement,x="svg"===S.nodeName.toLowerCase();x||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=C.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=C.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),C.elements=n+" "+e,u(t)}function i(e){var t=y[e[v]];return t||(t={},g++,e[v]=g,y[g]=t),t}function a(e,n,r){if(n||(n=t),c)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||m.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),c)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,s=r(),l=s.length;l>a;a++)o.createElement(s[a]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return C.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(C,t.frag)}function u(e){e||(e=t);var r=i(e);return!C.shivCSS||f||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),c||l(e,r),e}var f,c,d="3.7.3",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,v="_html5shiv",g=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",f="hidden"in e,c=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){f=!0,c=!0}}();var C={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:d,shivCSS:p.shivCSS!==!1,supportsUnknownElements:c,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:u,createElement:a,createDocumentFragment:s,addElements:o};e.html5=C,u(t),"object"==typeof module&&module.exports&&(module.exports=C)}("undefined"!=typeof e?e:this,t);var b="Moz O ms Webkit",w=E._config.usePrefixes?b.toLowerCase().split(" "):[];E._domPrefixes=w;var _=E._config.usePrefixes?b.split(" "):[];E._cssomPrefixes=_;var N=function(t){var r,o=prefixes.length,i=e.CSSRule;if("undefined"==typeof i)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+t;for(var a=0;o>a;a++){var s=prefixes[a],l=s.toUpperCase()+"_"+r;if(l in i)return"@-"+s.toLowerCase()+"-"+t}return!1};E.atRule=N;var j={elem:l("modernizr")};Modernizr._q.push(function(){delete j.elem});var k={style:j.elem.style};Modernizr._q.unshift(function(){delete k.style});E.testProp=function(e,t,r){return h([e],n,t,r)};E.testAllProps=v;E.prefixed=function(e,t,n){return 0===e.indexOf("@")?N(e):(-1!=e.indexOf("-")&&(e=a(e)),t?v(e,t,n):v(e,"pfx"))};E.testAllProps=g,Modernizr.addTest("csstransitions",g("transition","all",!0)),i(),r(y),delete E.addTest,delete E.addAsyncTest;for(var z=0;z<Modernizr._q.length;z++)Modernizr._q[z]();e.Modernizr=Modernizr}(window,document);
/*!
 * Peppermint touch slider
 * v. 1.4.0 | https://github.com/wilddeer/Peppermint
 * Copyright Oleg Korsunsky | http://wd.dizaina.net/
 *
 * Depends on Event Burrito (included) | https://github.com/wilddeer/Event-Burrito
 * MIT License
 */
function Peppermint(a,b){function c(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])}function d(a){var b=["Webkit","Moz","O","ms"],c=document.createElement("div");if(void 0!==c.style[a])return!0;a=a.charAt(0).toUpperCase()+a.slice(1);for(var d in b)if(void 0!==c.style[b[d]+a])return!0;return!1}function e(a,b){new RegExp("(\\s|^)"+b+"(\\s|$)").test(a.className)||(a.className+=" "+b)}function f(a,b){a.className=a.className.replace(new RegExp("(\\s+|^)"+b+"(\\s+|$)","g")," ").replace(/^\s+|\s+$/g,"")}function g(a,b){0>a?a=0:a>v-1&&(a=v-1);for(var c=C.dots.length-1;c>=0;c--)f(C.dots[c],G.activeDot);return e(C.dots[a],G.activeDot),E=a,h(-a*C.width,void 0===b?F.speed:b),o(),F.onSlideChange&&F.onSlideChange(a),a}function h(a,b){var c=b?b+"ms":"";y.style.webkitTransitionDuration=y.style.MozTransitionDuration=y.style.msTransitionDuration=y.style.OTransitionDuration=y.style.transitionDuration=c,j(a)}function i(a,b){if(B&&clearInterval(B),!b)return void j(a);var c=+new Date,d=C.left;B=setInterval(function(){function e(a,b){return(b-a)*i+a}var f,g,h=+new Date-c,i=h/b,k=[0,.7,1,1];return i>=1?(j(a),void clearInterval(B)):(f=a-d,g=e(e(e(k[0],k[1]),e(k[1],k[2])),e(e(k[1],k[2]),e(k[2],k[3]))),void j(Math.floor(g*f+d)))},15)}function j(a){y.style.webkitTransform="translate("+a+"px,0) translateZ(0)",y.style.msTransform=y.style.MozTransform=y.style.OTransform=y.style.transform="translateX("+a+"px)",C.left=a}function k(a){y.style.left=a+"px",C.left=a}function l(){var a=E+1;return a>v-1&&(a=0),g(a)}function m(){var a=E-1;return 0>a&&(a=v-1),g(a)}function n(){A=!0,o()}function o(){A&&(z&&clearTimeout(z),z=setTimeout(function(){l()},F.slideshowInterval))}function p(){z&&clearTimeout(z)}function q(){A=!1,z&&clearTimeout(z)}function r(){C.width=a.offsetWidth,y.style.width=C.width*v+"px";for(var b=0;v>b;b++)C.slides[b].style.width=C.width+"px";h(-E*C.width)}function s(a,b,c,d){b&&(a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent("on"+b,c))}function t(){EventBurrito(y,{mouse:F.mouseDrag,start:function(){e(a,G.drag)},move:function(a,b,c){p(),c.x=c.x/(!E&&c.x>0||E==v-1&&c.x<0?Math.abs(c.x)/C.width*2+1:1),h(c.x-C.width*E)},end:function(b,c,d){if(d.x){var e=Math.abs(d.x)/C.width,h=Math.floor(e)+(e-Math.floor(e)>.25?1:0),i=d.time<D+D*h/1.8&&Math.abs(d.x)-h*C.width>(h?-C.width/9:20);h+=i?1:0,d.x<0?g(E+h,F.touchSpeed):g(E-h,F.touchSpeed),F.stopSlideshowAfterInteraction&&q()}f(a,G.drag)}})}function u(){var b=F.slidesContainer||a,c=F.dotsContainer||a;if(!(F.disableIfOneSlide&&b.children.length<=1)){(!H.transforms||window.opera)&&(j=k),(!H.transitions||window.opera)&&(h=i),y=F.slidesContainer||document.createElement("div"),e(y,G.slides);for(var d=0,l=b.children.length;l>d;d++){var m=b.children[d],o=document.createElement("li");C.slides.push(m),o.setAttribute("tabindex","0"),o.setAttribute("role","button"),o.innerHTML="<span></span>",function(b,c){s(c,"click",function(){g(b),F.stopSlideshowAfterInteraction&&q()}),s(c,"keyup",function(a){13==a.keyCode&&(g(b),F.stopSlideshowAfterInteraction&&q())}),s(c,"mouseup",function(){e(c,G.mouseClicked)}),s(c,"blur",function(){f(c,G.mouseClicked)},!0),s(m,"focus",m.onfocusin=function(){a.scrollLeft=0,setTimeout(function(){a.scrollLeft=0},0),g(b)},!0)}(d,o),C.dots.push(o)}v=C.slides.length,w=100/v,e(a,G.active),f(a,G.inactive),F.mouseDrag&&e(a,G.mouse),C.width=a.offsetWidth,y.style.width=C.width*v+"px";for(var d=0;v>d;d++)C.slides[d].style.width=C.width+"px",y.appendChild(C.slides[d]);if(F.slidesContainer||a.appendChild(y),F.dots&&v>1){x=document.createElement("ul"),e(x,G.dots);for(var d=0,l=C.dots.length;l>d;d++)x.appendChild(C.dots[d]);F.dotsPrepend?c.insertBefore(x,c.firstChild):c.appendChild(x)}s(window,"resize",r),s(window,"orientationchange",r),setTimeout(function(){g(F.startSlide,0)},0),F.slideshow&&n(),t(),setTimeout(function(){F.onSetup&&F.onSetup(v)},0)}}var v,w,x,y,z,A,B,C={slides:[],dots:[],left:0},D=200,E=0,F={speed:300,touchSpeed:300,slideshow:!1,slideshowInterval:4e3,stopSlideshowAfterInteraction:!1,startSlide:0,mouseDrag:!0,disableIfOneSlide:!0,cssPrefix:"peppermint-",dots:!1,dotsPrepend:!1,dotsContainer:void 0,slidesContainer:void 0,onSlideChange:void 0,onSetup:void 0};b&&c(F,b);var G={inactive:F.cssPrefix+"inactive",active:F.cssPrefix+"active",mouse:F.cssPrefix+"mouse",drag:F.cssPrefix+"drag",slides:F.cssPrefix+"slides",dots:F.cssPrefix+"dots",activeDot:F.cssPrefix+"active-dot",mouseClicked:F.cssPrefix+"mouse-clicked"},H={transforms:d("transform"),transitions:d("transition")};return u(),{slideTo:function(a,b){return g(parseInt(a,10),b)},next:l,prev:m,start:n,stop:q,pause:p,getCurrentPos:function(){return E},getSlidesNumber:function(){return v},recalcWidth:r}}window.jQuery&&!function($){$.fn.Peppermint=function(a){return this.each(function(){$(this).data("Peppermint",Peppermint(this,a))}),this}}(window.jQuery);
function EventBurrito(a,b){function c(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])}function d(a,b,c,d){return b?(a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent("on"+b,c),{remove:function(){e(a,b,c,d)}}):void 0}function e(a,b,c,d){b&&(a.removeEventListener?a.removeEventListener(b,c,!!d):a.detachEvent("on"+b,c))}function f(a){a.preventDefault?a.preventDefault():a.returnValue=!1}function g(a){if(r={x:(o?a.clientX:a.touches[0].clientX)-q.x,y:(o?a.clientY:a.touches[0].clientY)-q.y,time:Number(new Date)-q.time},r.time-t[t.length-1].time){for(var b=0;b<t.length-1&&r.time-t[b].time>80;b++);s={x:(r.x-t[b].x)/(r.time-t[b].time),y:(r.y-t[b].y)/(r.time-t[b].time)},t.length>=5&&t.shift(),t.push({x:r.x,y:r.y,time:r.time})}}function h(a,b){v=!0,o=b,y[o](a)||(d(document,x[o][1],i),d(document,x[o][2],j),d(document,x[o][3],j),m.preventDefault&&o&&f(a),q={x:o?a.clientX:a.touches[0].clientX,y:o?a.clientY:a.touches[0].clientY,time:Number(new Date)},n=void 0,r={x:0,y:0,time:0},s={x:0,y:0},t=[{x:0,y:0,time:0}],m.start(a,q))}function i(a){!m.preventScroll&&n||y[o](a)||(g(a),(Math.abs(r.x)>m.clickTolerance||Math.abs(r.y)>m.clickTolerance)&&(v=!1),void 0===n&&3!==o&&(n=Math.abs(r.x)<Math.abs(r.y)&&!m.preventScroll)||(m.preventDefault&&f(a),m.move(a,q,r,s)))}function j(a){o&&g(a),!v&&a.target&&a.target.blur&&a.target.blur(),e(document,x[o][1],i),e(document,x[o][2],j),e(document,x[o][3],j),m.end(a,q,r,s)}function k(){u.push(d(a,x[w][0],function(a){h(a,w)})),u.push(d(a,"dragstart",f)),m.mouse&&!w&&u.push(d(a,x[3][0],function(a){h(a,3)})),u.push(d(a,"click",function(a){v?m.click(a):f(a)}))}var l=function(){},m={preventDefault:!0,clickTolerance:0,preventScroll:!1,mouse:!0,start:l,move:l,end:l,click:l};b&&c(m,b);var n,o,p={pointerEvents:!!window.navigator.pointerEnabled,msPointerEvents:!!window.navigator.msPointerEnabled},q={},r={},s={},t=[],u=[],v=!0,w=p.pointerEvents?1:p.msPointerEvents?2:0,x=[["touchstart","touchmove","touchend","touchcancel"],["pointerdown","pointermove","pointerup","pointercancel"],["MSPointerDown","MSPointerMove","MSPointerUp","MSPointerCancel"],["mousedown","mousemove","mouseup",!1]],y=[function(a){return a.touches&&a.touches.length>1||a.scale&&1!==a.scale},function(a){return!a.isPrimary||a.buttons&&1!==a.buttons||!m.mouse&&"touch"!==a.pointerType&&"pen"!==a.pointerType},function(a){return!a.isPrimary||a.buttons&&1!==a.buttons||!m.mouse&&a.pointerType!==a.MSPOINTER_TYPE_TOUCH&&a.pointerType!==a.MSPOINTER_TYPE_PEN},function(a){return a.buttons&&1!==a.buttons}];return k(),{getClicksAllowed:function(){return v},kill:function(){for(var a=u.length-1;a>=0;a--)u[a].remove()}}}
!function(t,e){"function"==typeof define&&define.amd?define([],e()):"object"==typeof module&&module.exports?module.exports=e():t.zenscroll=e()}(this,function(){"use strict";if(!window||!document)return{};var t=function(t,e,n){e=e||999,n||0===n||(n=9);var o,i=document.documentElement,r=function(){return"getComputedStyle"in window&&"smooth"===window.getComputedStyle(t?t:document.body)["scroll-behavior"]},c=function(){return t?t.scrollTop:window.scrollY||i.scrollTop},u=function(){return t?Math.min(t.offsetHeight,window.innerHeight):window.innerHeight||i.clientHeight},f=function(e){return t?e.offsetTop-t.offsetTop:e.getBoundingClientRect().top+c()-i.offsetTop},l=function(){clearTimeout(o),o=0},a=function(n,f,a){if(l(),r())(t||window).scrollTo(0,n),a&&a();else{var s=c(),d=Math.max(n,0)-s;f=f||Math.min(Math.abs(d),e);var m=(new Date).getTime();!function h(){o=setTimeout(function(){var e=Math.min(((new Date).getTime()-m)/f,1),n=Math.max(Math.floor(s+d*(.5>e?2*e*e:e*(4-2*e)-1)),0);t?t.scrollTop=n:window.scrollTo(0,n),1>e&&u()+n<(t||i).scrollHeight?h():(setTimeout(l,99),a&&a())},9)}()}},s=function(t,e,o){a(f(t)-n,e,o)},d=function(t,e,o){var i=t.getBoundingClientRect().height+2*n,r=u(),l=f(t),d=l+i-n,m=c();n>l-m||i>r?s(t,e,o):0>m+r-d?a(d-r,e,o):o&&o()},m=function(t,e,n,o){a(Math.max(f(t)-u()/2+(n||t.getBoundingClientRect().height/2),0),e,o)},h=function(t,o){t&&(e=t),(0===o||o)&&(n=o)};return{setup:h,to:s,toY:a,intoView:d,center:m,stop:l,moving:function(){return!!o}}},e=t();if("addEventListener"in window&&"smooth"!==document.body.style.scrollBehavior&&!window.noZensmooth){var n=function(t){try{history.replaceState({},"",window.location.href.split("#")[0]+t)}catch(e){}};window.addEventListener("click",function(t){for(var o=t.target;o&&"A"!==o.tagName;)o=o.parentNode;if(!(!o||1!==t.which||t.shiftKey||t.metaKey||t.ctrlKey||t.altKey)){var i=o.getAttribute("href")||"";if(0===i.indexOf("#"))if("#"===i)t.preventDefault(),e.toY(0),n("");else{var r=o.hash.substring(1),c=document.getElementById(r);c&&(t.preventDefault(),e.to(c),n("#"+r))}}},!1)}return{createScroller:t,setup:e.setup,to:e.to,toY:e.toY,intoView:e.intoView,center:e.center,stop:e.stop,moving:e.moving}});
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
/* global Modernizr, Draggabilly, classie */

( function( window ) {

'use strict';

  function extend( a, b ) {
    for ( var key in b ) {
      if ( b.hasOwnProperty( key ) ) {
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

    itemClass: '.elasticstack__item',
    // callback
    onUpdateStack: function ( current ) {
      return false;
    }
  };

  ElastiStack.prototype._init = function () {
    // items
    this.items = [].slice.call( this.container.querySelectorAll( this.options.itemClass ) );
    // total items
    this.itemsCount = this.items.length;
    // current item's index (the one on the top of the stack)
    this.current = 0;
    // set initial styles
    this._setStackStyle();
    // return if no items or only one
    if ( this.itemsCount <= 1 ) {
      return;
    }
    // add dragging capability
    this._initDragg();
    // init drag events
    this._initEvents();
  };

  ElastiStack.prototype._initEvents = function () {
    var self = this;
    this.draggie.on( 'dragStart', function ( i, e, p ) {
      self._onDragStart( this );
    } );
    this.draggie.on( 'dragMove', function ( i, e, p ) {
      self._onDragMove( this );
    } );
    this.draggie.on( 'dragEnd', function ( i, e, p ) {
      self._onDragEnd( this );
    } );
  };

  ElastiStack.prototype._moveAway = function ( instance ) {
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

    if ( item2 ) {
      classie.add( item2, this.options.moveBackClass );
      classie.add( item2, this.options.animateClass );
      setTransformStyle( item2, is3d ? 'translate3d(0,0,-60px)' : 'translate(0,0)' );
    }

    if ( item3 ) {
      classie.add( item3, this.options.moveBackClass );
      classie.add( item3, this.options.animateClass );
      setTransformStyle( item3, is3d ? 'translate3d(0,0,-120px)' : 'translate(0,0)' );
    }

    // after transition ends..
    var self = this,
      onEndTransFn = function () {
        instance.element.removeEventListener( transEndEventName, onEndTransFn );

        // reset first item
        setTransformStyle( instance.element, is3d ? 'translate3d(0,0,-180px)' : 'translate(0,0,0)' );
        instance.element.style.left = instance.element.style.top = '0px';
        instance.element.style.zIndex = -1;
        classie.remove( instance.element, self.options.animateClass );

        // reorder stack
        self.current = self.current < self.itemsCount - 1 ? self.current + 1 : 0;
        // new front items
        var item1 = self._firstItem();
        item2 = self._secondItem();
        item3 = self._thirdItem();

        // reset transition timing function
        classie.remove( item1, self.options.moveBackClass );
        if ( item2 ) {
          classie.remove( item2, self.options.moveBackClass );
        }
        if ( item3 ) {
          classie.remove( item3, self.options.moveBackClass );
        }

        setTimeout( function () {
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
        self.options.onUpdateStack( self );
      };

    if ( supportTransitions ) {
      instance.element.addEventListener( transEndEventName, onEndTransFn );
    } else {
      onEndTransFn.call();
    }
  };

  ElastiStack.prototype._setStackStyle = function () {
    var item1 = this._firstItem(), item2 = this._secondItem(), item3 = this._thirdItem();

    if ( item1 ) {
      item1.style.opacity = 1;
      item1.style.zIndex = 4;
      setTransformStyle( item1, is3d ? 'translate3d(0,0,0)' : 'translate(0,0)' );
    }

    if ( item2 ) {
      item2.style.opacity = 1;
      item2.style.zIndex = 3;
      setTransformStyle( item2, is3d ? 'translate3d(0,0,-60px)' : 'translate(0,0)' );
    }

    if ( item3 ) {
      item3.style.opacity = 1;
      item3.style.zIndex = 2;
      setTransformStyle( item3, is3d ? 'translate3d(0,0,-120px)' : 'translate(0,0)' );
    }
  };

  ElastiStack.prototype._moveBack = function ( instance ) {
    var item2 = this._secondItem(), item3 = this._thirdItem();

    classie.add( instance.element, this.options.moveBackClass );
    classie.add( instance.element, this.options.animateClass );
    setTransformStyle( instance.element, is3d ? 'translate3d(0,0,0)' : 'translate(0,0)' );
    instance.element.style.left = '0px';
    instance.element.style.top = '0px';

    if ( item2 ) {
      classie.add( item2, this.options.moveBackClass );
      classie.add( item2, this.options.animateClass );
      setTransformStyle( item2, is3d ? 'translate3d(0,0,-60px)' : 'translate(0,0)' );
    }
    if ( item3 ) {
      classie.add( item3, this.options.moveBackClass );
      classie.add( item3, this.options.animateClass );
      setTransformStyle( item3, is3d ? 'translate3d(0,0,-120px)' : 'translate(0,0)' );
    }
  };

  ElastiStack.prototype._onDragStart = function ( instance, event, pointer ) {
    // remove transition classes if any
    var item2 = this._secondItem(), item3 = this._thirdItem();

    classie.remove( instance.element, this.options.moveBackClass );
    classie.remove( instance.element, this.options.animateClass );

    if ( item2 ) {
      classie.remove( item2, this.options.moveBackClass );
      classie.remove( item2, this.options.animateClass );
    }
    if ( item3 ) {
      classie.remove( item3, this.options.moveBackClass );
      classie.remove( item3, this.options.animateClass );
    }
  };

  ElastiStack.prototype._onDragMove = function ( instance, event, pointer ) {
    if ( this._outOfBounds( instance ) ) {
      this._moveAway( instance );
    } else {
      // the second and third items also move
      var item2 = this._secondItem(), item3 = this._thirdItem();
      if ( item2 ) {
        setTransformStyle( item2, is3d ? 'translate3d(' + ( instance.position.x * 0.6 ) + 'px,' + ( instance.position.y * 0.6 ) + 'px, -60px)' : 'translate(' + ( instance.position.x * 0.6 ) + 'px,' + ( instance.position.y * 0.6 ) + 'px)' );
      }
      if ( item3 ) {
        setTransformStyle( item3, is3d ? 'translate3d(' + ( instance.position.x * 0.3 ) + 'px,' + ( instance.position.y * 0.3 ) + 'px, -120px)' : 'translate(' + ( instance.position.x * 0.3 ) + 'px,' + ( instance.position.y * 0.3 ) + 'px)' );
      }
    }
  };

  ElastiStack.prototype._onDragEnd = function ( instance, event, pointer ) {
    if ( this._outOfBounds( instance ) ) {
      return;
    }
    if ( this._outOfSight(instance) ) {
      this._moveAway( instance );
    } else {
      this._moveBack( instance );
    }
  };

  ElastiStack.prototype._initDragg = function () {
    this.draggie = new Draggabilly( this.items[ this.current ] );
  };

  ElastiStack.prototype._disableDragg = function () {
    this.draggie.disable();
  };

  // returns true if x or y is bigger than distDragMax
  ElastiStack.prototype._outOfBounds = function ( el ) {
    return Math.abs( el.position.x ) > this.options.distDragMax || Math.abs( el.position.y ) > this.options.distDragMax;
  };

  // returns true if x or y is bigger than distDragBack
  ElastiStack.prototype._outOfSight = function ( el ) {
    return Math.abs( el.position.x ) > this.options.distDragBack || Math.abs( el.position.y ) > this.options.distDragBack;
  };

  ElastiStack.prototype._getTranslateVal = function ( el ) {
    var h = Math.sqrt( Math.pow( el.position.x, 2 ) + Math.pow( el.position.y, 2 ) ),
      a = Math.asin( Math.abs( el.position.y ) / h ) / ( Math.PI / 180 ),
      hL = h + this.options.distDragBack,
      dx = Math.cos( a * ( Math.PI / 180 ) ) * hL,
      dy = Math.sin( a * ( Math.PI / 180 ) ) * hL,
      tx = dx - Math.abs( el.position.x ),
      ty = dy - Math.abs( el.position.y );

    return {
      x: el.position.x > 0 ? tx : tx * -1,
      y: el.position.y > 0 ? ty : ty * -1
    };
  };

  // returns the first item in the stack
  ElastiStack.prototype._firstItem = function () {
    return this.items[ this.current ];
  };

  // returns the second item in the stack
  ElastiStack.prototype._secondItem = function () {
    if ( this.itemsCount >= 2 ) {
      return this.current + 1 < this.itemsCount ? this.items[ this.current + 1 ] : this.items[ Math.abs( this.itemsCount - ( this.current + 1 ) ) ];
    }
  };

  // returns the third item in the stack
  ElastiStack.prototype._thirdItem = function () {
    if ( this.itemsCount >= 3 ) {
      return this.current + 2 < this.itemsCount ? this.items[ this.current + 2 ] : this.items[ Math.abs( this.itemsCount - ( this.current + 2 ) ) ];
    }
  };

  // returns the last item (of the first three) in the stack
  ElastiStack.prototype._lastItem = function () {
    if ( this.itemsCount >= 3 ) {
      return this._thirdItem();
    } else {
      return this._secondItem();
    }
  };

  // add to global namespace
  window.ElastiStack = ElastiStack;

})( window );

/*!
 * getStyleProperty v1.0.4
 * original by kangax
 * http://perfectionkills.com/feature-testing-css-properties/
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false, exports: false, module: false */

( function( window ) {

'use strict';

var prefixes = 'Webkit Moz ms Ms O'.split(' ');
var docElemStyle = document.documentElement.style;

function getStyleProperty( propName ) {
  if ( !propName ) {
    return;
  }

  // test standard property first
  if ( typeof docElemStyle[ propName ] === 'string' ) {
    return propName;
  }

  // capitalize
  propName = propName.charAt(0).toUpperCase() + propName.slice(1);

  // test vendor specific properties
  var prefixed;
  for ( var i=0, len = prefixes.length; i < len; i++ ) {
    prefixed = prefixes[i] + propName;
    if ( typeof docElemStyle[ prefixed ] === 'string' ) {
      return prefixed;
    }
  }
}

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( function() {
    return getStyleProperty;
  });
} else if ( typeof exports === 'object' ) {
  // CommonJS for Component
  module.exports = getStyleProperty;
} else {
  // browser global
  window.getStyleProperty = getStyleProperty;
}

})( window );

"use strict";
/* global Peppermint, zenscroll */

'use strict';

(function () {
  var initElem = document.querySelectorAll('.box-variant__item');
  if (initElem.length) {
    (function () {
      var slider = void 0,
          initSlide = 0;
      [].slice.call(initElem).forEach(function (el, item) {
        initSlide = el.querySelectorAll('.box-variant__select')[0].checked ? item : initSlide;
        el.addEventListener('click', function (event) {
          event.preventDefault();
          if (window.zenscroll) {
            zenscroll.to(document.getElementById('good-information'));
          }
          var select = event.currentTarget.querySelectorAll('.box-variant__select')[0];
          select.checked = true;
          var inputQuantity = document.querySelectorAll('.button-range__value')[0].value;
          document.getElementById('price__value').innerText = select.dataset.price * inputQuantity;
          slider.slideTo(item);
        }, false);
      });

      slider = new Peppermint(document.getElementById('peppermint'), {
        speed: 500,
        touchSpeed: 500,
        mouseDrag: true,
        startSlide: initSlide,
        onSlideChange: function onSlideChange(slide) {
          initElem[slide].querySelectorAll('.box-variant__select')[0].checked = true;
        }
      });
    })();
  }
})();
/* global */

'use strict';

(function () {
  var initElem = document.querySelectorAll('.button_add-to-card');
  if (initElem.length) {
    [].slice.call(initElem).forEach(function (el) {
      el.addEventListener('click', function (event) {
        if (!event.currentTarget.classList.contains('button_add-to-card_added')) {
          event.preventDefault();
          event.currentTarget.classList.add('button_add-to-card_added');
          event.currentTarget.querySelectorAll('.button__caption')[0].innerText = 'Перейти к заказу';
        } else {
          console.log('Go to order!');
        }
      }, false);
    });
  }
})();
/* global */

'use strict';

(function () {
  var initElem = document.querySelectorAll('.button-range');
  if (initElem.length) {
    [].slice.call(initElem).forEach(function (buttonRange) {
      var input = buttonRange.querySelectorAll('.button-range__value')[0];
      [].slice.call(buttonRange.querySelectorAll('.button-range__button')).forEach(function (buttonRangeButton) {
        buttonRangeButton.addEventListener('click', function (event) {
          event.preventDefault();
          switch (event.currentTarget.value) {
            case 'cart/remove':
              if (input.value === input.getAttribute('min')) {
                input.value = input.getAttribute('min');
              } else {
                input.value--;
              }
              break;
            case 'cart/add':
              if (input.value === input.getAttribute('max')) {
                input.value = input.getAttribute('max');
              } else {
                input.value++;
              }
              break;
            default:
              break;
          }
          var currentPrice = document.querySelectorAll('.box-variant__select:checked').length ? document.querySelectorAll('.box-variant__select:checked')[0].dataset.price : document.getElementById('price__value').dataset.price;
          document.getElementById('price__value').innerText = currentPrice * input.value;
        });
      });
    });
  }
})();
'use strict';

/* global Draggabilly, Modernizr, getStyleProperty, classie */

(function () {

  'use strict';

  var body = document.body,
      docElem = window.document.documentElement,
      transEndEventNames = {
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'transitionend',
    'OTransition': 'oTransitionEnd',
    'msTransition': 'MSTransitionEnd',
    'transition': 'transitionend'
  },
      transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
      support = {
    transitions: Modernizr.csstransitions
  };

  // https://remysharp.com/2010/07/21/throttling-function-calls
  function throttle(fn) {
    var threshhold = arguments.length <= 1 || arguments[1] === undefined ? 250 : arguments[1];
    var scope = arguments[2];

    var last = void 0,
        deferTimer = void 0;

    return function () {
      var context = scope || this;
      var now = +new Date(),
          args = arguments;
      if (last && now < last + threshhold) {
        // hold on to it
        clearTimeout(deferTimer);
        deferTimer = setTimeout(function () {
          last = now;
          fn.apply(context, args);
        }, threshhold);
      } else {
        last = now;
        fn.apply(context, args);
      }
    };
  }

  function getViewportH() {
    var client = docElem.clientHeight,
        inner = window.innerHeight;
    return client < inner ? inner : client;
  }

  function scrollX() {
    return window.pageXOffset || docElem.scrollLeft;
  }

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  // gets the offset of an element relative to the document
  function getOffset(el) {
    var offset = el.getBoundingClientRect();
    return {
      top: offset.top + scrollY(),
      left: offset.left + scrollX()
    };
  }

  function setTransformStyle(el, tval) {
    el.style.transform = tval;
  }

  function onEndTransition(el, callback) {

    var onEndCallbackFn = function onEndCallbackFn() {
      if (support.transitions) {
        el.removeEventListener(transEndEventName, onEndCallbackFn);
      }
      if (callback && typeof callback === 'function') {
        callback.call();
      }
    };

    if (support.transitions) {
      el.addEventListener(transEndEventName, onEndCallbackFn);
    } else {
      onEndCallbackFn();
    }
  }

  function extend(a, b) {
    for (var key in b) {
      if (b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }
    return a;
  }

  var is3d = !!getStyleProperty('perspective');

  function Droppable(droppableEl, options) {
    this.el = droppableEl;
    this.options = extend({}, this.options);
    extend(this.options, options);
  }

  Droppable.prototype.options = {
    highlightClass: 'highlight',

    onDrop: function onDrop() {
      return false;
    }
  };

  // based on http://stackoverflow.com/a/2752387 : checks if the droppable
  // element is ready to collect the draggable: the draggable element must
  // intersect the droppable in half of its width or height.
  Droppable.prototype.isDroppable = function (draggableEl) {
    var offset1 = getOffset(draggableEl),
        width1 = draggableEl.offsetWidth,
        height1 = draggableEl.offsetHeight,
        offset2 = getOffset(this.el),
        width2 = this.el.offsetWidth,
        height2 = this.el.offsetHeight;

    return !(offset2.left > offset1.left + width1 - width1 / 2 || offset2.left + width2 < offset1.left + width1 / 2 || offset2.top > offset1.top + height1 - height1 / 2 || offset2.top + height2 < offset1.top + height1 / 2);
  };

  // highlight the droppable if it's ready to collect the draggable
  Droppable.prototype.highlight = function (draggableEl) {
    if (this.isDroppable(draggableEl)) {
      classie.add(this.el, this.options.highlightClass);
    } else {
      classie.remove(this.el, this.options.highlightClass);
    }
  };

  // accepts a draggable element...
  Droppable.prototype.collect = function (draggableEl) {
    // remove highlight class from droppable element
    classie.remove(this.el, this.options.highlightClass);
    this.options.onDrop(this, draggableEl);
  };

  function Draggable(draggableEl, droppables, options) {
    this.el = draggableEl;
    this.options = extend({}, this.options);
    extend(this.options, options);
    this.droppables = droppables;
    this.scrollableEl = this.options.scrollable === window ? window : document.querySelector(this.options.scrollable);
    this.scrollIncrement = 0;
    if (this.options.helper) {
      this.offset = {
        left: getOffset(this.el).left,
        top: getOffset(this.el).top
      };
    }
    this.draggie = new Draggabilly(this.el, this.options.draggabilly);
    this.initEvents();
  }

  Draggable.prototype.options = {
    // auto scroll when dragging
    scroll: false,
    // element to scroll
    scrollable: window,
    // scroll speed (px)
    scrollSpeed: 20,
    // minimum distance to the scrollable element edges to trigger the scroll
    scrollSensitivity: 10,
    // draggabilly options
    draggabilly: {},
    // if the item should animate back to its original position
    animBack: true,
    // clone the draggable and insert it on the same position while dragging
    // the original one
    helper: false,

    // classes
    activeClass: 'is-active',
    droppedClass: 'is-dropped',
    completeClass: 'is-complete',
    draggingClass: 'is-dragging',
    helperClass: 'helper',
    animateClass: 'animate',

    // callbacks
    onStart: function onStart() {
      return false;
    },
    onDrag: function onDrag() {
      return false;
    },
    onEnd: function onEnd() {
      return false;
    }
  };

  Draggable.prototype.initEvents = function () {
    this.draggie.on('dragStart', this.onDragStart.bind(this));
    this.draggie.on('dragMove', throttle(this.onDragMove.bind(this), 5));
    this.draggie.on('dragEnd', this.onDragEnd.bind(this));
  };

  Draggable.prototype.onDragStart = function () {
    var instance = this.draggie;
    // callback
    this.options.onStart(instance);

    // save left & top
    this.position = {
      left: instance.position.x,
      top: instance.position.y
    };
    // create helper
    if (this.options.helper) {
      this.createHelper(instance.element);
    }
    // add class is-active to the draggable element
    // (control the draggable z-index)
    classie.add(instance.element, this.options.activeClass);
    // highlight droppable elements if draggables intersect
    this.highlightDroppables();
  };

  Draggable.prototype.onDragMove = function (instance) {
    // callback
    this.options.onDrag();

    // scroll page if at viewport's edge
    if (this.options.scroll) {
      this.scrollPage(instance.element);
    }
    // highlight droppable elements if draggables intersect
    this.highlightDroppables();
  };

  Draggable.prototype.onDragEnd = function () {
    var _this2 = this;

    var instance = this.draggie;
    if (this.options.helper) {
      instance.element.style.left = instance.position.x + this.position.left + 'px';
      instance.element.style.top = instance.position.y + this.position.top + 'px';
    }

    if (this.options.scroll) {
      // reset this.scrollIncrement
      this.scrollIncrement = 0;
    }

    // if the draggable && droppable elements intersect
    // then "drop" and move back the draggable
    var dropped = false;
    for (var i = 0, len = this.droppables.length; i < len; ++i) {
      var droppableEl = this.droppables[i];
      if (droppableEl.isDroppable(instance.element)) {
        dropped = true;
        droppableEl.collect(instance.element);
      }
    }

    // callback
    this.options.onEnd(dropped);

    var withAnimation = true;

    if (dropped) {
      (function () {
        // add class is-dropped to draggable ( controls how the draggable
        // appears again at its original position)
        classie.add(instance.element, _this2.options.droppedClass);
        // after a timeout remove that class to trigger the transition
        var _this = _this2;
        setTimeout(function () {
          classie.add(instance.element, _this.options.completeClass);
          onEndTransition(instance.element, function () {
            classie.remove(instance.element, _this.options.completeClass);
            classie.remove(instance.element, _this.options.droppedClass);
          });
        }, 25);
      })();
    }

    // move back with animation - track if the element moved away
    // from its initial position or if it was dropped in a droppable element
    if (this.position.left === instance.position.x && this.position.top === instance.position.y || dropped) {
      // in this case we will not set a transition for the item to move back
      withAnimation = false;
    }

    // move back the draggable element (with or without a transition)
    this.moveBack(withAnimation);
  };

  Draggable.prototype.highlightDroppables = function () {
    for (var i = 0, len = this.droppables.length; i < len; ++i) {
      this.droppables[i].highlight(this.el);
    }
  };

  Draggable.prototype.createHelper = function () {
    // clone the original item (same position)
    var clone = this.el.cloneNode(true);
    // because the original element started the dragging, we need to remove
    // the is-dragging class
    classie.remove(clone, this.options.draggingClass);
    this.el.parentNode.replaceChild(clone, this.el);
    // initialize Draggabilly on the clone…
    var draggable = new Draggable(clone, this.droppables, this.options);
    // the original item will be absolute on the page - need to set correct
    // position values..
    classie.add(this.el, this.options.helperClass);
    this.el.style.left = draggable.offset.left + 'px';
    this.el.style.top = draggable.offset.top + 'px';

    // save new left/top
    this.position.left = draggable.offset.left;
    this.position.top = draggable.offset.top;

    var image = this.el.querySelectorAll('.variant-item__image')[0];
    image.setAttribute('src', this.el.dataset.drag);

    body.appendChild(this.el);
  };

  // move back the draggable to its original position
  Draggable.prototype.moveBack = function (withAnimation) {
    var anim = this.options.animBack && withAnimation;

    // add animate class (where the transition is defined)
    if (anim) {
      classie.add(this.el, this.options.animateClass);
    }
    // reset translation value
    setTransformStyle(this.el, is3d ? 'translate3d(0,0,0)' : 'translate(0,0)');
    // apply original left/top
    this.el.style.left = this.position.left + 'px';
    this.el.style.top = this.position.top + 'px';
    // remove class animate (transition) and is-active to the draggable
    // element (z-index)
    var callbackFn = function () {
      if (anim) {
        classie.remove(this.el, this.options.animateClass);
      }
      classie.remove(this.el, this.options.activeClass);
      if (this.options.helper) {
        body.removeChild(this.el);
      }
    }.bind(this);

    if (anim) {
      onEndTransition(this.el, callbackFn);
    } else {
      callbackFn();
    }
  };

  // check if element is outside of the viewport.
  // TODO: check also for right and left sides
  Draggable.prototype.outViewport = function () {
    var scrollSensitivity = Math.abs(this.options.scrollSensitivity) || 0,
        scrolled = scrollY(),
        viewed = scrolled + getViewportH(),
        elT = getOffset(this.el).top,

    // elHalfPos = elT + this.el.offsetHeight / 2,
    belowViewport = elT + this.el.offsetHeight + scrollSensitivity > viewed,
        aboveViewport = elT - scrollSensitivity < scrolled;

    if (belowViewport) {
      this.scrolldir = 'down';
    } else if (aboveViewport) {
      this.scrolldir = 'up';
    }

    return belowViewport || aboveViewport;
  };

  // force the scroll on the page when dragging..
  Draggable.prototype.scrollPage = function () {
    // check if draggable is "outside" of the viewport
    if (this.outViewport(this.el)) {
      this.doScroll();
    } else {
      // reset this.scrollIncrement
      this.scrollIncrement = 0;
    }
  };

  // just considering scroll up and down
  // this.scrollIncrement is used to accelerate the scrolling.
  // But mainly it's used to avoid the draggable flickering due
  // to the throttle when dragging
  // todo: scroll right and left
  // todo: draggabilly multi touch scroll:
  // see https://github.com/desandro/draggabilly/issues/1
  Draggable.prototype.doScroll = function () {
    var speed = this.options.scrollSpeed || 20;
    this.scrollIncrement++;
    var val = this.scrollIncrement < speed ? this.scrollIncrement : speed;

    if (this.scrollableEl === window) {
      this.scrollableEl.scrollBy(0, this.scrolldir === 'up' ? val * -1 : val);
    } else {
      this.scrollableEl.scrollTop += this.scrolldir === 'up' ? val * -1 : val;
    }
  };

  window.Droppable = Droppable;
  window.Draggable = Draggable;
})();
/* global ElastiStack */

'use strict';

var elasticstackContainer = document.getElementById('elasticstack');
if (elasticstackContainer) {
  new ElastiStack(document.getElementById('elasticstack'), {
    animateClass: 'animate',
    moveBackClass: 'move-back',
    onUpdateStack: function onUpdateStack(instance) {
      var initElem = document.querySelectorAll('.postcard__id');
      if (initElem.length) {
        [].slice.call(initElem).forEach(function (el) {
          el.value = instance.items[instance.current].dataset.id;
        });
      }
    }
  });
}
/* global */

'use strict';

(function () {
  var initElem = document.querySelectorAll('.flip-card-toggle');
  if (initElem.length) {
    [].slice.call(initElem).forEach(function (el) {
      el.addEventListener('click', function () {
        [].slice.call(document.querySelectorAll('.flip-card__container')).forEach(function (flipCardContainer) {
          flipCardContainer.classList.toggle('flip-card__container_flip');
        });
      }, false);
    });
  }
})();
/* global FontFaceObserver */

'use strict';

(function () {
  var font = new FontFaceObserver('Roboto');

  font.load().then(function () {
    document.body.classList.add('font');
  });
})();
/* global classie, Peppermint */

'use strict';

(function () {
  var headerNavigation = document.getElementById('header__navigation');
  if (headerNavigation) {
    headerNavigation.addEventListener('click', function (event) {
      event.preventDefault();
      classie.remove(document.getElementById('header-order'), 'header__menu_show');
      classie.toggle(document.getElementById('header-menu'), 'header__menu_show');
    });
  }

  var headerOrder = document.getElementById('header__order');
  if (headerOrder) {
    headerOrder.addEventListener('click', function (event) {
      event.preventDefault();
      classie.remove(document.getElementById('header-menu'), 'header__menu_show');
      classie.toggle(document.getElementById('header-order'), 'header__menu_show');
    });
  }

  var headerLogo = document.querySelectorAll('.header-logo');
  if (headerLogo.length) {
    [].slice.call(headerLogo).forEach(function (el) {

      setTimeout(function () {
        if (!el.classList.contains('header-logo_collapse')) {
          el.classList.add('header-logo_collapse');
        }
      }, 3000);
    });
  }

  var headerCity = document.querySelectorAll('.header__city');
  if (headerCity.length) {
    [].slice.call(headerCity).forEach(function (headerCityItem) {
      var slider = new Peppermint(headerCityItem, {
        speed: 500,
        touchSpeed: 500,
        mouseDrag: true
      });

      var headerCityPrev = headerCityItem.querySelectorAll('.city-select__prev');
      [].slice.call(headerCityPrev).forEach(function (headerCityPrevItem) {
        headerCityPrevItem.addEventListener('click', function (event) {
          event.preventDefault();
          slider.prev();
        });
      });

      var headerCityNext = headerCityItem.querySelectorAll('.city-select__next');
      [].slice.call(headerCityNext).forEach(function (headerCityNextItem) {
        headerCityNextItem.addEventListener('click', function (event) {
          event.preventDefault();
          slider.next();
        });
      });
    });
  }
})();
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
/* global */

'use strict';

(function () {

  var initElem = document.querySelectorAll('.set-cell');

  if (initElem.length) {
    [].slice.call(document.querySelectorAll('.button_add-to-card')).forEach(function (el) {
      el.disabled = true;
    });
  }
})();
'use strict';

(function () {

  var initElem = document.querySelectorAll('.set-cell-content');

  if (initElem.length) {
    [].slice.call(initElem).forEach(function (el) {
      el.addEventListener('click', function (event) {
        event.preventDefault();
        event.srcElement.remove();
      });
    });
  }
})();
/* global Droppable, Draggable, classie */

'use strict';

/* eslint-disable */

function getElIndex(el) {
  for (var i = 0; el = el.previousElementSibling; i++) {}
  return i;
}
/* eslint-enable */

(function () {

  var initElem = document.querySelectorAll('.dragdrop');

  if (initElem.length) {
    (function () {
      var body = document.body,
          dropArea = document.getElementById('drop-area'),
          dropAreaItem = 'drop-area__item',
          droppableArr = [],
          dropAreaTimeout = void 0,
          gridItem = 'grid__item';

      // initialize droppables
      [].slice.call(document.querySelectorAll('.' + dropAreaItem)).forEach(function (el) {
        droppableArr.push(new Droppable(el, {
          highlightClass: dropAreaItem + '_highlight',
          feedbackClass: dropAreaItem + '_feedback',

          onDrop: function onDrop(instance, dragEl) {
            var _this = this;

            instance.el.innerHTML = '<div style="background-image: url(' + dragEl.dataset.drag + ');" class="set-cell-content">\n                                     <input type="hidden" name="options[composition][' + getElIndex(instance.el) + ']" class="set-cell-content__id" value="' + dragEl.dataset.good + '" form="order">\n                                   </div>';
            instance.el.firstChild.addEventListener('click', function (event) {
              event.preventDefault();
              event.srcElement.remove();
              document.querySelectorAll('.button_add-to-card')[0].disabled = true;
              dropArea.classList.remove('drop-area_completed');
            });
            // debugger; // eslint-disable-line
            // show checkmark inside the droppabe element
            classie.add(instance.el, this.feedbackClass);
            clearTimeout(instance.checkmarkTimeout);
            instance.checkmarkTimeout = setTimeout(function () {
              classie.remove(instance.el, _this.feedbackClass);
            }, 800);

            if (document.querySelectorAll('.set-cell__item').length === document.querySelectorAll('.set-cell-content').length) {
              document.querySelectorAll('.button_add-to-card')[0].disabled = false;
              dropArea.classList.add('drop-area_completed');
            }
          }
        }));
      });

      // initialize draggable(s)
      [].slice.call(document.querySelectorAll('.' + gridItem)).forEach(function (el) {
        new Draggable(el, droppableArr, {
          scroll: true,
          scrollable: '#drop-area',
          scrollSpeed: 40,
          scrollSensitivity: 50,
          draggabilly: {
            containment: '.dragdrop'
          },
          helper: true,

          activeClass: 'js-dragActive',
          droppedClass: 'is-dropped',
          completeClass: 'is-complete',
          draggingClass: 'is-dragging',
          helperClass: gridItem + '_helper',
          animateClass: gridItem + '_animate',
          showClass: 'drop-area_show',

          onStart: function onStart() {
            // add class activeClass to body
            classie.add(body, this.activeClass);
            // clear timeout: dropAreaTimeout (toggle drop area)
            clearTimeout(dropAreaTimeout);
            // show dropArea
            classie.add(dropArea, this.showClass);
          },
          onEnd: function onEnd(wasDropped) {
            var showClass = this.showClass,
                activeClass = this.activeClass,
                afterDropFn = function afterDropFn() {
              // hide dropArea
              classie.remove(dropArea, showClass);
              // remove class activeClass from body
              classie.remove(body, activeClass);
            };

            if (!wasDropped) {
              afterDropFn();
            } else {
              // after some time hide drop area and remove class activeClass from body
              clearTimeout(dropAreaTimeout);
              dropAreaTimeout = setTimeout(afterDropFn, 400);
            }
          }
        });
      });
    })();
  }
})();
'use strict';

(function () {

  window.noZensmooth = true;
})();
'use strict';

(function () {

  var initElem = document.querySelectorAll('.textarea_expanded');

  if (initElem.length) {
    [].slice.call(initElem).forEach(function (el) {
      el.style.height = '50px';
      el.addEventListener('focus', function (event) {
        event.preventDefault();
        event.srcElement.style.height = '200px';
      });
      el.addEventListener('blur', function (event) {
        event.preventDefault();
        if (event.srcElement.value === '') {
          event.srcElement.style.height = '50px';
        }
      });
    });
  }
})();
/* global */

'use strict';

(function () {
  var initElem = document.querySelectorAll('.value-range');
  if (initElem.length) {
    [].slice.call(initElem).forEach(function (valueRange) {
      var input = valueRange.querySelectorAll('.value-range__value')[0];
      [].slice.call(valueRange.querySelectorAll('.value-range__button')).forEach(function (valueRangeValue) {
        valueRangeValue.addEventListener('click', function (event) {
          event.preventDefault();
          switch (event.currentTarget.value) {
            case 'cart/remove':
              if (input.value === input.getAttribute('min')) {
                input.value = input.getAttribute('min');
              } else {
                input.value--;
              }
              break;
            case 'cart/add':
              if (input.value === input.getAttribute('max')) {
                input.value = input.getAttribute('max');
              } else {
                input.value++;
              }
              break;
            default:
              break;
          }
        });
      });
    });
  }
})();