_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?o(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.r(t),n.d(t,"__N_SSG",(function(){return g})),n.d(t,"default",(function(){return w}));var u=n("q1tI"),s=n.n(u),f=n("8Kt/"),p=n.n(f),d=n("5M6V"),h=n("Z4Yb"),m=n.n(h),y=s.a.createElement;function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return l(this,n)}}var g=!0,w=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(c,e);var t,n,i,l=b(c);function c(e){var t,n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),t=l.call(this,e),n=o(t),r=function(e){var n=e.target.value.toLowerCase(),a=t.props.plugins.filter((function(e){return!(-1==e.name.toLowerCase().indexOf(n)&&-1==e.description.toLowerCase().indexOf(n)&&!e.tags.includes(n))&&e}));t.setState({pluginsFiltered:a,query:n}),console.log(n,a)},(a="handleChange")in n?Object.defineProperty(n,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[a]=r,t.state={pluginsFiltered:e.plugins,query:""},t}return t=c,(n=[{key:"render",value:function(){return y(d.a,{home:!0},y(p.a,null,y("title",null,d.b)),y("section",{className:m.a.headingMd},y("p",null,"Audio plugin registry containing plugin metadata, which is searchable and filterable")),y("section",{className:"".concat(m.a.headingMd," ").concat(m.a.padding1px)},y("div",{className:m.a.header},y("h2",{className:[m.a.headingLg,m.a.headerCell].join(" ")},"Plugins"),y("input",{className:m.a.headerSearch,placeholder:"Search",value:this.state.query,onChange:this.handleChange})),y("ul",{className:m.a.list},this.state.pluginsFiltered.map((function(e){e.author,e.description,e.homepage;var t=e.id,n=e.name,a=(e.tags,e.version);return y("li",{className:m.a.listItem,key:n},y("h3",null,n," ",y("small",{className:m.a.lightText},"v",a)),y("p",null,n),y("hr",null),y("div",{className:m.a.row},y("div",{className:m.a.cell},y("p",{className:m.a.codeLabel},"Download:"),y("a",{className:m.a.downloadButton,href:"https://github.com/".concat(t,"/releases/latest/download/plugin-linux.zip")},"Linux"),y("a",{className:m.a.downloadButton,href:"https://github.com/".concat(t,"/releases/latest/download/plugin-mac.zip")},"MacOS"),y("a",{className:m.a.downloadButton,href:"https://github.com/".concat(t,"/releases/latest/download/plugin-win.zip")},"Windows")),y("div",{className:m.a.cell},y("p",{className:m.a.codeLabel},"Install command:"),y("pre",{className:m.a.codeBox},"apm install ",t))))})))))}}])&&a(t.prototype,n),i&&a(t,i),c}(u.Component)}},[["/EDR",0,2,1,3]]]);