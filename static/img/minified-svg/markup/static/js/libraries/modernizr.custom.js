/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-csstransitions-domprefixes-prefixed-setclasses-shiv-testallprops-testprop !*/
!function(e,t,n){function r(e){var t=S.className,n=Modernizr._config.classPrefix||"";if(x&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),x?S.className.baseVal=t:S.className=t)}function o(e,t){return typeof e===t}function i(){var e,t,n,r,i,a,s;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],t=C[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=o(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],s=a.split("."),1===s.length?Modernizr[s[0]]=r:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=r),y.push((r?"":"no-")+s.join("-"))}}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function s(e,t){return!!~(""+e).indexOf(t)}function l(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):x?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function u(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,n){var r;for(var i in e)if(e[i]in t)return n===!1?e[i]:(r=t[e[i]],o(r,"function")?u(r,n||t):r);return!1}function c(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(){var e=t.body;return e||(e=l(x?"svg":"body"),e.fake=!0),e}function p(e,n,r,o){var i,a,s,u,f="modernizr",c=l("div"),p=d();if(parseInt(r,10))for(;r--;)s=l("div"),s.id=o?o[r]:f+(r+1),c.appendChild(s);return i=l("style"),i.type="text/css",i.id="s"+f,(p.fake?p:c).appendChild(i),p.appendChild(c),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),c.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",u=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),a=n(c,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=u,S.offsetHeight):c.parentNode.removeChild(c),!!a}function m(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(c(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+c(t[o])+":"+r+")");return i=i.join(" or "),p("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function h(e,t,r,i){function u(){c&&(delete k.style,delete k.modElem)}if(i=o(i,"undefined")?!1:i,!o(r,"undefined")){var f=m(e,r);if(!o(f,"undefined"))return f}for(var c,d,p,h,v,g=["modernizr","tspan"];!k.style;)c=!0,k.modElem=l(g.shift()),k.style=k.modElem.style;for(p=e.length,d=0;p>d;d++)if(h=e[d],v=k.style[h],s(h,"-")&&(h=a(h)),k.style[h]!==n){if(i||o(r,"undefined"))return u(),"pfx"==t?h:!0;try{k.style[h]=r}catch(y){}if(k.style[h]!=v)return u(),"pfx"==t?h:!0}return u(),!1}function v(e,t,n,r,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+_.join(a+" ")+a).split(" ");return o(t,"string")||o(t,"undefined")?h(s,t,r,i):(s=(e+" "+w.join(a+" ")+a).split(" "),f(s,t,n))}function g(e,t,r){return v(e,n,n,t,r)}var y=[],C=[],E={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){C.push({name:e,fn:t,options:n})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=E,Modernizr=new Modernizr;var S=t.documentElement,x="svg"===S.nodeName.toLowerCase();x||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=C.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=C.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),C.elements=n+" "+e,u(t)}function i(e){var t=y[e[v]];return t||(t={},g++,e[v]=g,y[g]=t),t}function a(e,n,r){if(n||(n=t),c)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||m.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),c)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,s=r(),l=s.length;l>a;a++)o.createElement(s[a]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return C.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(C,t.frag)}function u(e){e||(e=t);var r=i(e);return!C.shivCSS||f||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),c||l(e,r),e}var f,c,d="3.7.3",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,v="_html5shiv",g=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",f="hidden"in e,c=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){f=!0,c=!0}}();var C={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:d,shivCSS:p.shivCSS!==!1,supportsUnknownElements:c,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:u,createElement:a,createDocumentFragment:s,addElements:o};e.html5=C,u(t),"object"==typeof module&&module.exports&&(module.exports=C)}("undefined"!=typeof e?e:this,t);var b="Moz O ms Webkit",w=E._config.usePrefixes?b.toLowerCase().split(" "):[];E._domPrefixes=w;var _=E._config.usePrefixes?b.split(" "):[];E._cssomPrefixes=_;var N=function(t){var r,o=prefixes.length,i=e.CSSRule;if("undefined"==typeof i)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+t;for(var a=0;o>a;a++){var s=prefixes[a],l=s.toUpperCase()+"_"+r;if(l in i)return"@-"+s.toLowerCase()+"-"+t}return!1};E.atRule=N;var j={elem:l("modernizr")};Modernizr._q.push(function(){delete j.elem});var k={style:j.elem.style};Modernizr._q.unshift(function(){delete k.style});E.testProp=function(e,t,r){return h([e],n,t,r)};E.testAllProps=v;E.prefixed=function(e,t,n){return 0===e.indexOf("@")?N(e):(-1!=e.indexOf("-")&&(e=a(e)),t?v(e,t,n):v(e,"pfx"))};E.testAllProps=g,Modernizr.addTest("csstransitions",g("transition","all",!0)),i(),r(y),delete E.addTest,delete E.addAsyncTest;for(var z=0;z<Modernizr._q.length;z++)Modernizr._q[z]();e.Modernizr=Modernizr}(window,document);