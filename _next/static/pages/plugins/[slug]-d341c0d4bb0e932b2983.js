_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(r.AmpStateContext))};var a,o=(a=n("q1tI"))&&a.__esModule?a:{default:a},r=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,o=void 0!==a&&a,r=e.hasQuery;return n||o&&(void 0!==r&&r)}},"5M6V":function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return f}));var a=n("q1tI"),o=n.n(a),r=n("8Kt/"),i=n.n(r),l=n("DMma"),c=n.n(l),s=n("nOHt"),u=o.a.createElement,d="StudioRack",p="Automate your plugin publishing workflow, easy plugin installation and management";function f(e){var t=e.children,n=(e.home,Object(s.useRouter)().basePath);return u("div",{className:c.a.container},u(i.a,null,u("meta",{name:"description",content:p}),u("meta",{property:"og:image",content:"".concat(n,"/images/creators-mobile.jpg")}),u("meta",{name:"og:title",content:d}),u("meta",{name:"twitter:card",content:"summary_large_image"}),u("link",{href:"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap",rel:"stylesheet"}),u("link",{rel:"apple-touch-icon",sizes:"180x180",href:"".concat(n,"/icons/apple-touch-icon.png")}),u("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(n,"/icons/favicon-32x32.png")}),u("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(n,"/icons/favicon-16x16.png")}),u("link",{rel:"manifest",href:"".concat(n,"/icons/site.webmanifest")})),u("header",{className:c.a.header},u("a",{href:"".concat(n,"/"),className:c.a.headerLink},u("img",{className:c.a.logoImage,src:"".concat(n,"/images/studio-rack-logo.svg"),alt:d}),u("span",{className:c.a.logoText},"Studio",u("span",{className:c.a.logoTextBold},"Rack"))),u("ul",{className:c.a.navigation},u("li",null,u("a",{href:"".concat(n,"/#template")},"Plugin template")),u("li",null,u("a",{href:"".concat(n,"/#app")},"App & tools")),u("li",null,u("a",{href:"".concat(n,"/#plugins")},"Plugins")))),u("main",null,t))}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=u,t.default=void 0;var a,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=a?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(n,o,r):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),r=(a=n("Xuae"))&&a.__esModule?a:{default:a},i=n("lwAK"),l=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(o){var r=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?r=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?r=!1:t.add(o.type);break;case"meta":for(var l=0,c=p.length;l<c;l++){var s=p[l];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?r=!1:n.add(s);else{var u=o.props[s],d=a[s]||new Set;d.has(u)?r=!1:(d.add(u),a[s]=d)}}}return r}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),a=(0,o.useContext)(l.HeadManagerContext);return o.default.createElement(r.default,{reduceComponentsToState:f,headManager:a,inAmpMode:(0,c.isInAmpMode)(n)},t)}m.rewind=function(){};var g=m;t.default=g},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},DMma:function(e,t,n){e.exports={header:"layout_header__1OJ41",headerLink:"layout_headerLink__3D5-W",logoText:"layout_logoText__16n85",logoTextBold:"layout_logoTextBold__IxEOB",navigation:"layout_navigation__1426p"}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},L1vq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return p})),n.d(t,"default",(function(){return f}));var a=n("q1tI"),o=n.n(a),r=n("5M6V"),i=n("8Kt/"),l=n.n(i),c=n("k7z8"),s=n.n(c),u=n("nOHt"),d=o.a.createElement,p=!0;function f(e){var t=e.plugin,n=Object(u.useRouter)().basePath;return d(r.a,null,d(l.a,null,d("title",null,t.name)),d("article",null,d("div",{className:s.a.header},d("div",{className:s.a.headerInner},d("img",{className:s.a.image,src:"".concat(n,"/images/plugin.jpg"),alt:t.name}),d("div",{className:s.a.details},d("h3",{className:s.a.title},t.name," ",d("span",{className:s.a.version},"v",t.version)),d("p",{className:s.a.author},"By ",d("a",{href:t.homepage,target:"_blank"},t.author)),d("p",null,t.description),d("ul",{className:s.a.tags},d("img",{className:s.a.icon,src:"".concat(n,"/images/icon-tag.svg"),alt:"Tags"}),t.tags.map((function(e){return d("li",{className:s.a.tag,key:e},e,",")})))))),d("div",{className:s.a.options},d("div",{className:s.a.row},d("div",{className:"".concat(s.a.cell," ").concat(s.a.download)},d("p",null,"Download .zip file:"),d("a",{className:"button ".concat(s.a.button),href:"https://github.com/".concat(t.id,"/releases/latest/download/plugin-linux.zip")},"Linux"),d("a",{className:"button ".concat(s.a.button),href:"https://github.com/".concat(t.id,"/releases/latest/download/plugin-mac.zip")},"MacOS"),d("a",{className:"button ".concat(s.a.button),href:"https://github.com/".concat(t.id,"/releases/latest/download/plugin-win.zip")},"Windows")),d("div",{className:"".concat(s.a.cell," ").concat(s.a.install)},d("p",null,"Install via command line:"),d("pre",{className:s.a.codeBox},"apm install ",t.id))))))}},RIqP:function(e,t,n){var a=n("Ijbi"),o=n("EbDI"),r=n("ZhPi"),i=n("Bnag");e.exports=function(e){return a(e)||o(e)||r(e)||i()}},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),o=n("lwsE"),r=n("W8MJ"),i=n("PJYZ"),l=n("7W2i"),c=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),p=!1,f=function(e){l(n,e);var t=u(n);function n(e){var r;return o(this,n),(r=t.call(this,e))._hasHeadManager=void 0,r.emitChange=function(){r._hasHeadManager&&r.props.headManager.updateHead(r.props.reduceComponentsToState(a(r.props.headManager.mountedInstances),r.props))},r._hasHeadManager=r.props.headManager&&r.props.headManager.mountedInstances,p&&r._hasHeadManager&&(r.props.headManager.mountedInstances.add(i(r)),r.emitChange()),r}return r(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=f},k7z8:function(e,t,n){e.exports={header:"plugin_header__1o4lQ",title:"plugin_title__13LF6",author:"plugin_author__2Tj-5",image:"plugin_image__1c9Vc",version:"plugin_version__1CpUK",tags:"plugin_tags__3DhpH",icon:"plugin_icon__1aQ3A",tag:"plugin_tag__1YJIC",options:"plugin_options__DaTsx",download:"plugin_download__1c_cI",install:"plugin_install__2C5zY",button:"plugin_button__2p82d",codeBox:"plugin_codeBox__EQ40D",headerInner:"plugin_headerInner__2lHrm",details:"plugin_details__1r3dd",row:"plugin_row__1b8_w",cell:"plugin_cell__33T7Z"}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var o=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=o},"oC/o":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plugins/[slug]",function(){return n("L1vq")}])}},[["oC/o",0,2,1]]]);