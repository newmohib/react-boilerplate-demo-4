(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"0f9d5d034f2a657ac148":function(e,t,n){"use strict";n.r(t);var o=n("8af190b70a6bc55c6f1b"),c=n.n(o),r=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),a=n("ab039aecd4a1d4fedc0e"),i=n("a28fc3c963a1d4d1a2e5"),u=n("ab4cb61bcb2dc161defb"),d=n("adc20f99e57c573c589c"),f=n("d95b0cf107403b178365"),b=n("7edf83707012a871cdfb"),s={},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;return Object(b.a)(e,function(){t.type})},h=function(e){return e.logout||s},p=function(){return Object(i.a)(h,function(e){return e})},g=regeneratorRuntime.mark(v);function v(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},g)}var j,O=Object(a.defineMessages)({header:{id:"".concat("app.containers.Logout",".header"),defaultMessage:"This is the Logout container!"}}),m=n("6542cd13fd5dd1bcffd4"),y=n("29a8d6d91320a5b596a4"),w=n("a72b40110d9c31c9b5c5");function k(e){Object(f.a)({key:"logout",reducer:l}),Object(d.a)({key:"logout",saga:v});e.setAuthorToken;var t=e.isAuthorization,n=e.history;return Object(o.useEffect)(function(){t?(e.setAuthorToken(null),Object(y.a)("isAuthorization")&&(Object(y.b)("isAuthorization"),n.push("/login"))):null===t&&(console.log("isautho null"),n.push("/login"))},[]),function(e,t,n,o){j||(j="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var c=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={children:void 0}),t&&c)for(var a in c)void 0===t[a]&&(t[a]=c[a]);else t||(t=c||{});if(1===r)t.children=o;else if(r>1){for(var i=new Array(r),u=0;u<r;u++)i[u]=arguments[u+3];t.children=i}return{$$typeof:j,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}("div",{},void 0,c.a.createElement(a.FormattedMessage,O.header))}n.d(t,"Logout",function(){return k});var A=Object(i.b)({logout:p(),isAuthorization:Object(m.c)()});var z=Object(r.connect)(A,function(e){return{dispatch:e,setAuthorToken:function(t){return e(Object(w.d)(t))}}});t.default=Object(u.compose)(z,o.memo)(k)}}]);