_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=i,e.useAmp=function(){return i(o.default.useContext(r.AmpStateContext))};var a,o=(a=n("q1tI"))&&a.__esModule?a:{default:a},r=n("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,a=t.hybrid,o=void 0!==a&&a,r=t.hasQuery;return n||o&&(void 0!==r&&r)}},"1OyB":function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return a}))},"5M6V":function(t,e,n){"use strict";n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return f}));var a=n("q1tI"),o=n.n(a),r=n("8Kt/"),i=n.n(r),u=n("DMma"),c=n.n(u),s=n("nOHt"),l=o.a.createElement,p="StudioRack",d="Automate your plugin publishing workflow, easy plugin installation and management";function f(t){var e=t.children,n=(t.home,Object(s.useRouter)().basePath);return l("div",{className:c.a.container},l(i.a,null,l("meta",{name:"description",content:d}),l("meta",{property:"og:image",content:"".concat(n,"/images/creators-mobile.jpg")}),l("meta",{name:"og:title",content:p}),l("meta",{name:"twitter:card",content:"summary_large_image"}),l("link",{href:"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap",rel:"stylesheet"}),l("link",{rel:"apple-touch-icon",sizes:"180x180",href:"".concat(n,"/icons/apple-touch-icon.png")}),l("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(n,"/icons/favicon-32x32.png")}),l("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(n,"/icons/favicon-16x16.png")}),l("link",{rel:"manifest",href:"".concat(n,"/icons/site.webmanifest")})),l("header",{className:c.a.header},l("a",{href:"".concat(n,"/"),className:c.a.headerLink},l("img",{className:c.a.logoImage,src:"".concat(n,"/images/studio-rack-logo.svg"),alt:p}),l("span",{className:c.a.logoText},"Studio",l("span",{className:c.a.logoTextBold},"Rack"))),l("ul",{className:c.a.navigation},l("li",null,l("a",{href:"".concat(n,"/#template")},"Plugin template")),l("li",null,l("a",{href:"".concat(n,"/#app")},"App & tools")),l("li",null,l("a",{href:"".concat(n,"/#plugins")},"Plugins")))),l("main",null,e))}},"8Kt/":function(t,e,n){"use strict";e.__esModule=!0,e.defaultHead=l,e.default=void 0;var a,o=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=s();if(e&&e.has(t))return e.get(t);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var r=a?Object.getOwnPropertyDescriptor(t,o):null;r&&(r.get||r.set)?Object.defineProperty(n,o,r):n[o]=t[o]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),r=(a=n("Xuae"))&&a.__esModule?a:{default:a},i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return s=function(){return t},t}function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function p(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var d=["name","httpEquiv","charSet","itemProp"];function f(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(p,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,a={};return function(o){var r=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);t.has(i)?r=!1:t.add(i)}switch(o.type){case"title":case"base":e.has(o.type)?r=!1:e.add(o.type);break;case"meta":for(var u=0,c=d.length;u<c;u++){var s=d[u];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?r=!1:n.add(s);else{var l=o.props[s],p=a[s]||new Set;p.has(l)?r=!1:(p.add(l),a[s]=p)}}}return r}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}function g(t){var e=t.children,n=(0,o.useContext)(i.AmpStateContext),a=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(r.default,{reduceComponentsToState:f,headManager:a,inAmpMode:(0,c.isInAmpMode)(n)},e)}g.rewind=function(){};var m=g;e.default=m},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},DMma:function(t,e,n){t.exports={header:"layout_header__1OJ41",headerLink:"layout_headerLink__3D5-W",logoText:"layout_logoText__16n85",logoTextBold:"layout_logoTextBold__IxEOB",navigation:"layout_navigation__1426p"}},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,n){var a=n("WkPL");t.exports=function(t){if(Array.isArray(t))return a(t)}},JX7q:function(t,e,n){"use strict";function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return a}))},Ji7U:function(t,e,n){"use strict";function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}n.d(e,"a",(function(){return o}))},L1vq:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return w}));var a=n("1OyB"),o=n("vuIU"),r=n("JX7q"),i=n("Ji7U"),u=n("md7G"),c=n("foSv"),s=n("rePB"),l=n("q1tI"),p=n.n(l),d=n("5M6V"),f=n("8Kt/"),g=n.n(f),m=n("k7z8"),h=n.n(m),_=n("nOHt"),y=p.a.createElement;function v(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(c.a)(t);if(e){var o=Object(c.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(u.a)(this,n)}}var b=function(t){Object(i.a)(n,t);var e=v(n);function n(t){var o;return Object(a.a)(this,n),o=e.call(this,t),Object(s.a)(Object(r.a)(o),"play",(function(){var t=document.getElementById("audio");t.addEventListener("ended",(function(t){o.setState({isPlaying:!1})})),t.paused&&(t.currentTime=0,t.play()),o.setState({isPlaying:!0})})),Object(s.a)(Object(r.a)(o),"pause",(function(){var t=document.getElementById("audio");t.paused||(t.pause(),o.setState({isPlaying:!1}))})),o.state={isPlaying:!1,plugin:t.plugin,router:t.router},o}return Object(o.a)(n,[{key:"render",value:function(){return y(d.a,null,y(g.a,null,y("title",null,this.state.plugin.name)),y("article",null,y("div",{className:h.a.header},y("div",{className:h.a.headerInner},y("div",{className:h.a.media},y("div",{className:h.a.imageContainer},this.state.isPlaying?y("img",{className:h.a.imagePlay,src:"".concat(this.state.router.basePath,"/images/icon-pause.svg"),alt:"Pause",onClick:this.pause}):y("img",{className:h.a.imagePlay,src:"".concat(this.state.router.basePath,"/images/icon-play.svg"),alt:"Play",onClick:this.play}),y("img",{className:h.a.image,src:"https://github.com/".concat(this.state.plugin.id,"/releases/latest/download/plugin.png"),alt:this.state.plugin.name})),y("audio",{src:"https://github.com/".concat(this.state.plugin.id,"/releases/latest/download/plugin.wav"),id:"audio"},"Your browser does not support the audio element.")),y("div",{className:h.a.details},y("h3",{className:h.a.title},this.state.plugin.name," ",y("span",{className:h.a.version},"v",this.state.plugin.version)),y("p",{className:h.a.author},"By ",y("a",{href:this.state.plugin.homepage,target:"_blank"},this.state.plugin.author)),y("p",null,this.state.plugin.description),y("ul",{className:h.a.tags},y("img",{className:h.a.icon,src:"".concat(this.state.router.basePath,"/images/icon-tag.svg"),alt:"Tags"}),this.state.plugin.tags.map((function(t){return y("li",{className:h.a.tag,key:t},t,",")})))))),y("div",{className:h.a.options},y("div",{className:h.a.row},y("div",{className:"".concat(h.a.cell," ").concat(h.a.download)},y("p",null,"Download .zip file:"),y("a",{className:"button ".concat(h.a.button),href:"https://github.com/".concat(this.state.plugin.id,"/releases/latest/download/plugin-linux.zip")},"Linux"),y("a",{className:"button ".concat(h.a.button),href:"https://github.com/".concat(this.state.plugin.id,"/releases/latest/download/plugin-mac.zip")},"MacOS"),y("a",{className:"button ".concat(h.a.button),href:"https://github.com/".concat(this.state.plugin.id,"/releases/latest/download/plugin-win.zip")},"Windows")),y("div",{className:"".concat(h.a.cell," ").concat(h.a.install)},y("p",null,"Install via command line:"),y("pre",{className:h.a.codeBox},"studiorack install ",this.state.plugin.id))))))}}]),n}(l.Component),w=!0;e.default=Object(_.withRouter)(b)},RIqP:function(t,e,n){var a=n("Ijbi"),o=n("EbDI"),r=n("ZhPi"),i=n("Bnag");t.exports=function(t){return a(t)||o(t)||r(t)||i()}},Xuae:function(t,e,n){"use strict";var a=n("RIqP"),o=n("lwsE"),r=n("W8MJ"),i=n("PJYZ"),u=n("7W2i"),c=n("a1gu"),s=n("Nsbk");function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return c(this,n)}}e.__esModule=!0,e.default=void 0;var p=n("q1tI"),d=!1,f=function(t){u(n,t);var e=l(n);function n(t){var r;return o(this,n),(r=e.call(this,t))._hasHeadManager=void 0,r.emitChange=function(){r._hasHeadManager&&r.props.headManager.updateHead(r.props.reduceComponentsToState(a(r.props.headManager.mountedInstances),r.props))},r._hasHeadManager=r.props.headManager&&r.props.headManager.mountedInstances,d&&r._hasHeadManager&&(r.props.headManager.mountedInstances.add(i(r)),r.emitChange()),r}return r(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(p.Component);e.default=f},foSv:function(t,e,n){"use strict";function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return a}))},k7z8:function(t,e,n){t.exports={header:"plugin_header__1o4lQ",imageContainer:"plugin_imageContainer__sKdds",imagePlay:"plugin_imagePlay__2aGiS",title:"plugin_title__13LF6",author:"plugin_author__2Tj-5",image:"plugin_image__1c9Vc",version:"plugin_version__1CpUK",tags:"plugin_tags__3DhpH",icon:"plugin_icon__1aQ3A",tag:"plugin_tag__1YJIC",options:"plugin_options__DaTsx",download:"plugin_download__1c_cI",install:"plugin_install__2C5zY",button:"plugin_button__2p82d",codeBox:"plugin_codeBox__EQ40D",headerInner:"plugin_headerInner__2lHrm",details:"plugin_details__1r3dd",row:"plugin_row__1b8_w",cell:"plugin_cell__33T7Z"}},lwAK:function(t,e,n){"use strict";var a;e.__esModule=!0,e.AmpStateContext=void 0;var o=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});e.AmpStateContext=o},md7G:function(t,e,n){"use strict";function a(t){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return r}));var o=n("JX7q");function r(t,e){return!e||"object"!==a(e)&&"function"!==typeof e?Object(o.a)(t):e}},"oC/o":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plugins/[slug]",function(){return n("L1vq")}])},rePB:function(t,e,n){"use strict";function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return a}))},vuIU:function(t,e,n){"use strict";function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function o(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}n.d(e,"a",(function(){return o}))}},[["oC/o",0,2,1]]]);