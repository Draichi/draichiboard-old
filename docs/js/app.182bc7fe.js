(function(t){function e(e){for(var n,a,s=e[0],c=e[1],l=e[2],u=0,f=[];u<s.length;u++)a=s[u],i[a]&&f.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,a=1;a<r.length;a++){var s=r[a];0!==i[s]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},i={app:0},o=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d0cb6c9":"17b0eece","chunk-2d0d63f1":"d49e7780","chunk-2d0daa98":"b2ae4ae5","chunk-2d0e492d":"5d104c3a","chunk-2d0f09f3":"352fa1d4","chunk-2d23822a":"9ac0f77a","chunk-3d197ff2":"489e94f5","chunk-59c0bb64":"c0ffd9fd"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={"chunk-3d197ff2":1,"chunk-59c0bb64":1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise(function(e,r){for(var n="css/"+({}[t]||t)+"."+{"chunk-2d0cb6c9":"31d6cfe0","chunk-2d0d63f1":"31d6cfe0","chunk-2d0daa98":"31d6cfe0","chunk-2d0e492d":"31d6cfe0","chunk-2d0f09f3":"31d6cfe0","chunk-2d23822a":"31d6cfe0","chunk-3d197ff2":"41a4938a","chunk-59c0bb64":"5c5a738e"}[t]+".css",i=c.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===i))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){l=f[s],u=l.getAttribute("data-href");if(u===n||u===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.request=n,delete a[t],d.parentNode.removeChild(d),r(o)},d.href=i;var v=document.getElementsByTagName("head")[0];v.appendChild(d)}).then(function(){a[t]=0}));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise(function(e,r){n=i[t]=[e,r]});e.push(n[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t),l=function(e){u.onerror=u.onload=null,clearTimeout(f);var r=i[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+n+": "+a+")");o.type=n,o.request=a,r[1](o)}i[t]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var d=u;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0a2d":function(t){t.exports={needHelp:"Need Help?"}},1196:function(t,e,r){"use strict";var n=r("1d1c"),a=r.n(n);a.a},"173d":function(t){t.exports={facebook:"Facebook",footer:"Footer",github:"Github",twitter:"Twitter"}},"1a5d":function(t,e,r){var n={"./Dashboard.vue":["7277","chunk-2d0d63f1"],"./Icons.vue":["9cc6","chunk-2d0f09f3"],"./Maps.vue":["daba","chunk-59c0bb64"],"./Notifications.vue":["fda7","chunk-2d23822a"],"./TableList.vue":["6d0d","chunk-2d0daa98"],"./Typography.vue":["547e","chunk-3d197ff2"],"./Upgrade.vue":["9198","chunk-2d0e492d"],"./UserProfile.vue":["4a39","chunk-2d0cb6c9"]};function a(t){var e=n[t];return e?r.e(e[1]).then(function(){var t=e[0];return r(t)}):Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}a.keys=function(){return Object.keys(n)},a.id="1a5d",t.exports=a},"1d1c":function(t,e,r){},"25f5":function(t,e,r){"use strict";var n=r("453f"),a=r.n(n);a.a},2609:function(t,e,r){"use strict";r.r(e),e["default"]={drawer:null,color:"success",image:"https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg"}},"2a74":function(t,e,r){"use strict";r.r(e);r("28a5");var n=r("768b"),a=(r("a481"),r("ac6a"),r("c653")),i={};a.keys().forEach(function(t){if("./index.js"!==t){var e=t.replace(/(\.\/|\.js)/g,""),r=e.split("/"),o=Object(n["a"])(r,2),s=o[0],c=o[1];i[s]||(i[s]={namespaced:!0}),i[s][c]=a(t).default}}),e["default"]=i},"2c37":function(t,e,r){},4025:function(t,e,r){},4072:function(t,e,r){"use strict";var n=r("721f"),a=r.n(n);a.a},"41c0":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-navigation-drawer",{attrs:{id:"app-drawer",app:"",dark:"",floating:"",persistent:"","mobile-break-point":"991",width:"260"},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}},[r("v-img",{attrs:{src:t.image,height:"100%"}},[r("v-layout",{staticClass:"fill-height",attrs:{tag:"v-list",column:""}},[r("v-list-tile",{attrs:{avatar:""}},[r("v-list-tile-avatar",{attrs:{color:"white"}},[r("v-img",{attrs:{src:t.logo,height:"34",contain:""}})],1),r("v-list-tile-title",{staticClass:"title"},[t._v("\n          Vuetify MD\n        ")])],1),r("v-divider"),t.responsive?r("v-list-tile",[r("v-text-field",{staticClass:"purple-input search-input",attrs:{label:"Search...",color:"purple"}})],1):t._e(),t._l(t.links,function(e,n){return r("v-list-tile",{key:n,staticClass:"v-list-item",attrs:{to:e.to,"active-class":t.color,avatar:""}},[r("v-list-tile-action",[r("v-icon",[t._v(t._s(e.icon))])],1),r("v-list-tile-title",{domProps:{textContent:t._s(e.text)}})],1)}),r("v-list-tile",{staticClass:"v-list-item v-list__tile--buy",attrs:{disabled:"","active-class":"primary",to:"/upgrade"}},[r("v-list-tile-action",[r("v-icon",[t._v("mdi-package-up")])],1),r("v-list-tile-title",{staticClass:"font-weight-light"},[t._v("\n          Upgrade To PRO\n        ")])],1)],2)],1)],1)},a=[],i=r("cebc"),o=r("2f62"),s={data:function(){return{logo:"./img/vuetifylogo.png",links:[{to:"/dashboard",icon:"mdi-view-dashboard",text:"Dashboard"},{to:"/user-profile",icon:"mdi-account",text:"User Profile"},{to:"/table-list",icon:"mdi-clipboard-outline",text:"Table List"},{to:"/typography",icon:"mdi-format-font",text:"Typography"},{to:"/icons",icon:"mdi-chart-bubble",text:"Icons"},{to:"/maps",icon:"mdi-map-marker",text:"Maps"},{to:"/notifications",icon:"mdi-bell",text:"Notifications"}],responsive:!1}},computed:Object(i["a"])({},Object(o["c"])("app",["image","color"]),{inputValue:{get:function(){return this.$store.state.app.drawer},set:function(t){this.setDrawer(t)}},items:function(){return this.$t("Layout.View.items")}}),mounted:function(){this.onResponsiveInverted(),window.addEventListener("resize",this.onResponsiveInverted)},beforeDestroy:function(){window.removeEventListener("resize",this.onResponsiveInverted)},methods:Object(i["a"])({},Object(o["b"])("app",["setDrawer","toggleDrawer"]),{onResponsiveInverted:function(){window.innerWidth<991?this.responsive=!0:this.responsive=!1}})},c=s,l=(r("ff57"),r("2877")),u=Object(l["a"])(c,n,a,!1,null,null,null);e["default"]=u.exports},"42e7":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("material-card",t._g(t._b({staticClass:"v-card--material-stats"},"material-card",t.$attrs,!1),t.$listeners),[r("v-card",{staticClass:"pa-4",class:"elevation-"+t.elevation,attrs:{slot:"offset",color:t.color,dark:""},slot:"offset"},[r("v-icon",{attrs:{size:"40"}},[t._v("\n      "+t._s(t.icon)+"\n    ")])],1),r("div",{staticClass:"text-xs-right"},[r("p",{staticClass:"category grey--text font-weight-light",domProps:{textContent:t._s(t.title)}}),r("h3",{staticClass:"title display-1 font-weight-light"},[t._v("\n      "+t._s(t.value)+" "),r("small",[t._v(t._s(t.smallValue))])])]),r("template",{slot:"actions"},[r("v-icon",{staticClass:"mr-2",attrs:{color:t.subIconColor,size:"20"}},[t._v("\n      "+t._s(t.subIcon)+"\n    ")]),r("span",{staticClass:"caption font-weight-light",class:t.subTextColor,domProps:{textContent:t._s(t.subText)}})],1)],2)},a=[],i=r("cebc"),o=r("e3a9"),s={inheritAttrs:!1,props:Object(i["a"])({},o["default"].props,{icon:{type:String,required:!0},subIcon:{type:String,default:void 0},subIconColor:{type:String,default:void 0},subTextColor:{type:String,default:void 0},subText:{type:String,default:void 0},title:{type:String,default:void 0},value:{type:String,default:void 0},smallValue:{type:String,default:void 0}})},c=s,l=(r("4d79"),r("2877")),u=Object(l["a"])(c,n,a,!1,null,null,null);e["default"]=u.exports},"453f":function(t,e,r){},4999:function(t,e,r){var n={"./en/Common.json":"0a2d","./en/Core/Footer.json":"173d","./en/Core/Toolbar.json":"f26b","./en/Home.json":"5cc6"};function a(t){var e=i(t);return r(e)}function i(t){var e=n[t];if(!(e+1)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return e}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id="4999"},"4d79":function(t,e,r){"use strict";var n=r("803b"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=(r("a481"),r("ac6a"),r("8103")),i=r.n(a),o=r("bba4"),s=r.n(o),c=r("ffe0");c.keys().forEach(function(t){var e=c(t),r=i()(s()(t.replace(/^\.\//,"").replace(/\.\w+$/,"")));n["default"].component(r,e.default||e)});var l=r("bc3a"),u=r.n(l);n["default"].prototype.$http=u.a;r("4633");n["default"].use(r("84b5"));var f=r("ce5b"),d=r.n(f),v={primary:"#4caf50",secondary:"#4caf50",tertiary:"#495057",accent:"#82B1FF",error:"#f55a4e",info:"#00d3ee",success:"#5cb860",warning:"#ffa21a"};r("bf40"),r("5363");n["default"].use(d.a,{iconfont:"mdi",theme:v});var p=r("31bd"),h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("core-filter"),r("core-toolbar"),r("core-drawer"),r("core-view")],1)},m=[],b=(r("5c0b"),r("2877")),g={},y=Object(b["a"])(g,h,m,!1,null,null,null),_=y.exports,w=r("a925"),k=(r("28a5"),r("5d73")),x=r.n(k),C=r("4999"),O={},j=!0,E=!1,S=void 0;try{for(var T,$=function(){var t=T.value;if("./index.js"===t)return"continue";var e=t.replace(/(\.\/|\.json$)/g,"").split("/");e.reduce(function(r,n,a){return r[n]?r[n]:(r[n]=a+1===e.length?C(t):{},r[n])},O)},N=x()(C.keys());!(j=(T=N.next()).done);j=!0)$()}catch(X){E=!0,S=X}finally{try{j||null==N.return||N.return()}finally{if(E)throw S}}var L=O;n["default"].use(w["a"]);var D=new w["a"]({locale:"en",fallbackLocale:"en",messages:L}),I=D,P=(r("7f7f"),r("0284")),A=r.n(P),U=r("8c4f"),B=r("0a89"),M=r.n(B),F=[{path:"/",view:"Dashboard"},{path:"/user-profile",name:"User Profile",view:"UserProfile"},{path:"/table-list",name:"Table List",view:"TableList"},{path:"/typography",view:"Typography"},{path:"/icons",view:"Icons"},{path:"/maps",view:"Maps"},{path:"/notifications",view:"Notifications"},{path:"/upgrade",name:"Upgrade to PRO",view:"Upgrade"}];function V(t,e,n){return{name:n||e,path:t,component:function(t){return r("1a5d")("./".concat(e,".vue")).then(t)}}}n["default"].use(U["a"]);var R=new U["a"]({mode:"history",routes:F.map(function(t){return V(t.path,t.view,t.name)}).concat([{path:"*",redirect:"/"}]),scrollBehavior:function(t,e,r){return r||(t.hash?{selector:t.hash}:{x:0,y:0})}});n["default"].use(M.a),Object({NODE_ENV:"production",BASE_URL:"/"}).GOOGLE_ANALYTICS&&n["default"].use(A.a,{id:Object({NODE_ENV:"production",BASE_URL:"/"}).GOOGLE_ANALYTICS,router:R,autoTracking:{page:!0}});var z=R,H=r("2f62"),W={},Y={},G=r("2a74"),q={},J={};n["default"].use(H["a"]);var K=new H["a"].Store({actions:W,getters:Y,modules:G["default"],mutations:q,state:J}),Q=K;Object(p["sync"])(Q,z),n["default"].config.productionTip=!1,new n["default"]({i18n:I,router:z,store:Q,render:function(t){return t(_)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("5e27"),a=r.n(n);a.a},"5cc6":function(t){t.exports={title:"Vuetify Alpha",footer:"2018 Vuetify LLC",drawerItems:["Inspire"],needHelp:"Need help?"}},"5e27":function(t,e,r){},"602c":function(t,e,r){"use strict";var n=r("84b6"),a=r.n(n);a.a},6096:function(t,e,r){"use strict";r.r(e);var n=function(t){return function(e,r){return e[t]=r}},a=function(t){return function(e){return e[t]=!e[t]}};e["default"]={setDrawer:n("drawer"),setImage:n("image"),setColor:n("color"),toggleDrawer:a("drawer")}},"703d":function(t,e,r){},"721f":function(t,e,r){},"78d5":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("material-card",t._g(t._b({staticClass:"v-card--material-chart"},"material-card",t.$attrs,!1),t.$listeners),[r("chartist",{attrs:{slot:"header",data:t.data,"event-handlers":t.eventHandlers,options:t.options,ratio:t.ratio,"responsive-options":t.responsiveOptions,type:t.type},slot:"header"}),t._t("default"),t._t("actions",null,{slot:"actions"})],2)},a=[],i=(r("6762"),r("2fdb"),{inheritAttrs:!1,props:{data:{type:Object,default:function(){return{}}},eventHandlers:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){return{}}},ratio:{type:String,default:void 0},responsiveOptions:{type:Array,default:function(){return[]}},type:{type:String,required:!0,validator:function(t){return["Bar","Line","Pie"].includes(t)}}}}),o=i,s=(r("e536"),r("2877")),c=Object(s["a"])(o,n,a,!1,null,null,null);e["default"]=c.exports},"7a74":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-footer",{attrs:{id:"core-footer",absolute:"",height:"82"}},[r("div",{staticClass:"footer-items"},t._l(t.links,function(e){return r("span",{key:e.name},[r("a",{staticClass:"tertiary--text footer-links",attrs:{href:e.Link}},[t._v(t._s(e.name))])])})),r("v-spacer"),r("span",{staticClass:"font-weight-light copyright"},[t._v("\n    ©\n    "+t._s((new Date).getFullYear())+"\n    "),r("a",{attrs:{href:"https://www.creative-tim.com/",target:"_blank"}},[t._v("Creative Tim")]),t._v(", made with\n    "),r("v-icon",{attrs:{color:"tertiary",size:"17"}},[t._v("mdi-heart")]),t._v("\n    for a better web\n  ")],1)],1)},a=[],i={data:function(){return{links:[{name:"Home",Link:"/dashboard"},{name:"Creative Tim",Link:"https://www.creative-tim.com"},{name:"About Us",Link:"https://creative-tim.com/presentation"},{name:"Blog",Link:"https://blog.creative-tim.com"}]}}},o=i,s=(r("602c"),r("2877")),c=Object(s["a"])(o,n,a,!1,null,null,null);e["default"]=c.exports},"803b":function(t,e,r){},"84b6":function(t,e,r){},"8f36":function(t,e,r){},9306:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",[r("div",{attrs:{id:"core-view"}},[r("v-fade-transition",{attrs:{mode:"out-in"}},[r("router-view")],1)],1),"Maps"!==t.$route.name?r("core-footer"):t._e()],1)},a=[],i={metaInfo:function(){return{title:"Vuetify Material Dashboard by CreativeTim"}}},o=i,s=(r("ee4f"),r("2877")),c=Object(s["a"])(o,n,a,!1,null,null,null);e["default"]=c.exports},"9cbf":function(t,e,r){"use strict";var n=r("8f36"),a=r.n(n);a.a},"9d6c":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-alert",t._g(t._b({staticClass:"v-alert--notification",class:["elevation-"+t.elevation],attrs:{value:t.value}},"v-alert",t.$attrs,!1),t.$listeners),[t._t("default")],2)},a=[],i=(r("c5f6"),{inheritAttrs:!1,props:{elevation:{type:[Number,String],default:6},value:{type:Boolean,default:!0}}}),o=i,s=(r("4072"),r("2877")),c=Object(s["a"])(o,n,a,!1,null,null,null);e["default"]=c.exports},b2ab:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-menu",{attrs:{"close-on-content-click":!1,bottom:"",left:"","min-width":"300","max-width":"300","nudge-left":"12","offset-x":"",transition:"slide-y-transition"}},[r("v-btn",{staticClass:"elevation-0",staticStyle:{top:"96px"},attrs:{slot:"activator",color:"grey",dark:"",fab:"",fixed:"",top:""},slot:"activator"},[r("v-icon",[t._v("mdi-settings")])],1),r("v-card",[r("v-container",{attrs:{"grid-list-xl":""}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("div",{staticClass:"text-xs-center body-2 text-uppercase sidebar-filter"},[t._v("Sidebar Filters")]),r("v-layout",{attrs:{"justify-center":""}},t._l(t.colors,function(e){return r("v-avatar",{key:e,class:[e===t.color?"color-active color-"+e:"color-"+e],attrs:{size:"23"},on:{click:function(r){t.setColor(e)}}})})),r("v-divider",{staticClass:"mt-3"})],1),r("v-flex",{attrs:{xs12:""}},[r("div",{staticClass:"text-xs-center body-2 text-uppercase sidebar-filter"},[t._v("Images")])]),t._l(t.images,function(e){return r("v-flex",{key:e,attrs:{xs3:""}},[r("v-img",{class:[t.image===e?"image-active":""],attrs:{src:e,height:"120"},nativeOn:{click:function(r){t.setImage(e)}}})],1)}),r("v-flex",{attrs:{xs12:""}},[r("v-btn",{attrs:{href:"https://www.creative-tim.com/product/vuetify-material-dashboard",target:"_blank",color:"success",block:""}},[t._v("\n            Free Download\n          ")])],1),r("v-flex",{attrs:{xs12:""}},[r("v-btn",{staticClass:"white--text",attrs:{href:"https://demos.creative-tim.com/vuetify-material-dashboard/documentation",target:"_blank",color:"primary",block:""}},[t._v("\n            Documentation\n          ")])],1),r("v-flex",{attrs:{xs12:""}},[r("div",{staticClass:"text-xs-center body-2 text-uppercase"},[r("div",{staticClass:" sidebar-filter"},[t._v("\n              Thank You for Sharing!\n            ")]),r("div",[r("v-btn",{staticClass:"mr-2 v-btn-facebook",attrs:{color:"indigo",fab:"",icon:"",small:"",round:""}},[r("v-icon",[t._v("mdi-facebook")])],1),r("v-btn",{staticClass:"v-btn-twitter",attrs:{color:"cyan",fab:"",icon:"",small:"",round:""}},[r("v-icon",[t._v("mdi-twitter")])],1)],1)])])],2)],1)],1)],1)},a=[],i=r("cebc"),o=r("2f62"),s={data:function(){return{colors:["primary","info","success","warning","danger"],images:["https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-1.23832d31.jpg","https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg","https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-3.3a54f533.jpg","https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-4.3b7e38ed.jpg"]}},computed:Object(i["a"])({},Object(o["c"])("app",["image","color"]),{color:function(){return this.$store.state.app.color}}),methods:Object(i["a"])({},Object(o["b"])("app",["setImage"]),{setColor:function(t){this.$store.state.app.color=t}})},c=s,l=(r("9cbf"),r("2877")),u=Object(l["a"])(c,n,a,!1,null,null,null);e["default"]=u.exports},bdca:function(t,e,r){},c653:function(t,e,r){var n={"./app/mutations.js":"6096","./app/state.js":"2609","./index.js":"2a74"};function a(t){var e=i(t);return r(e)}function i(t){var e=n[t];if(!(e+1)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return e}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id="c653"},c6cc:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"v-offset",class:t.classes,style:t.styles},[t._t("default")],2)},a=[],i=(r("c5f6"),{props:{fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:0}},computed:{classes:function(){return{"v-offset--full-width":this.fullWidth}},styles:function(){return{top:"-".concat(this.offset,"px"),marginBottom:"-".concat(this.offset,"px")}}}}),o=i,s=(r("1196"),r("2877")),c=Object(s["a"])(o,n,a,!1,null,null,null);e["default"]=c.exports},cb2c:function(t,e,r){"use strict";var n=r("4025"),a=r.n(n);a.a},d23b:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-toolbar",{staticStyle:{background:"#eee"},attrs:{id:"core-toolbar",flat:"",prominent:""}},[r("div",{staticClass:"v-toolbar-title"},[r("v-toolbar-title",{staticClass:"tertiary--text font-weight-light"},[t.responsive?r("v-btn",{staticClass:"default v-btn--simple",attrs:{dark:"",icon:""},on:{click:function(e){return e.stopPropagation(),t.onClickBtn(e)}}},[r("v-icon",[t._v("mdi-view-list")])],1):t._e(),t._v("\n      "+t._s(t.title)+"\n    ")],1)],1),r("v-spacer"),r("v-toolbar-items",[r("v-flex",{attrs:{"align-center":"",layout:"","py-2":""}},[t.responsiveInput?r("v-text-field",{staticClass:"mr-4 mt-2 purple-input",attrs:{label:"Search...","hide-details":"",color:"purple"}}):t._e(),r("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"toolbar-items",attrs:{to:"/"}},[r("v-icon",{attrs:{color:"tertiary"}},[t._v("mdi-view-dashboard")])],1),r("v-menu",{attrs:{bottom:"",left:"","content-class":"dropdown-menu","offset-y":"",transition:"slide-y-transition"}},[r("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"toolbar-items",attrs:{slot:"activator",to:"/notifications"},slot:"activator"},[r("v-badge",{attrs:{color:"error",overlap:""}},[r("template",{slot:"badge"},[t._v("\n              "+t._s(t.notifications.length)+"\n            ")]),r("v-icon",{attrs:{color:"tertiary"}},[t._v("mdi-bell")])],2)],1),r("v-card",[r("v-list",{attrs:{dense:""}},t._l(t.notifications,function(e){return r("v-list-tile",{key:e,on:{click:t.onClick}},[r("v-list-tile-title",{domProps:{textContent:t._s(e)}})],1)}))],1)],1),r("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"toolbar-items",attrs:{to:"/user-profile"}},[r("v-icon",{attrs:{color:"tertiary"}},[t._v("mdi-account")])],1)],1)],1)],1)},a=[],i=r("cebc"),o=(r("7f7f"),r("2f62")),s={data:function(){return{notifications:["Mike, John responded to your email","You have 5 new tasks","You're now a friend with Andrew","Another Notification","Another One"],title:null,responsive:!1,responsiveInput:!1}},watch:{$route:function(t){this.title=t.name}},mounted:function(){this.onResponsiveInverted(),window.addEventListener("resize",this.onResponsiveInverted)},beforeDestroy:function(){window.removeEventListener("resize",this.onResponsiveInverted)},methods:Object(i["a"])({},Object(o["b"])("app",["setDrawer","toggleDrawer"]),{onClickBtn:function(){this.setDrawer(!this.$store.state.app.drawer)},onClick:function(){},onResponsiveInverted:function(){window.innerWidth<991?(this.responsive=!0,this.responsiveInput=!1):(this.responsive=!1,this.responsiveInput=!0)}})},c=s,l=(r("25f5"),r("2877")),u=Object(l["a"])(c,n,a,!1,null,null,null);e["default"]=u.exports},e3a9:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",t._g(t._b({style:t.styles},"v-card",t.$attrs,!1),t.$listeners),[t.hasOffset?r("helper-offset",{attrs:{inline:t.inline,"full-width":t.fullWidth,offset:t.offset}},[t.$slots.offset?t._t("offset"):r("v-card",{staticClass:"v-card--material__header",class:"elevation-"+t.elevation,attrs:{color:t.color,dark:""}},[t.title||t.text?r("span",[r("h4",{staticClass:"title font-weight-light mb-2",domProps:{textContent:t._s(t.title)}}),r("p",{staticClass:"category font-weight-thin",domProps:{textContent:t._s(t.text)}})]):t._t("header")],2)],2):t._e(),r("v-card-text",[t._t("default")],2),t.$slots.actions?r("v-divider",{staticClass:"mx-3"}):t._e(),t.$slots.actions?r("v-card-actions",[t._t("actions")],2):t._e()],1)},a=[],i=(r("c5f6"),{inheritAttrs:!1,props:{color:{type:String,default:"secondary"},elevation:{type:[Number,String],default:10},inline:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:24},title:{type:String,default:void 0},text:{type:String,default:void 0}},computed:{hasOffset:function(){return this.$slots.header||this.$slots.offset||this.title||this.text},styles:function(){return this.hasOffset?{marginBottom:"".concat(this.offset,"px"),marginTop:"".concat(2*this.offset,"px")}:null}}}),o=i,s=(r("cb2c"),r("2877")),c=Object(s["a"])(o,n,a,!1,null,null,null);e["default"]=c.exports},e536:function(t,e,r){"use strict";var n=r("bdca"),a=r.n(n);a.a},ee4f:function(t,e,r){"use strict";var n=r("703d"),a=r.n(n);a.a},f26b:function(t){t.exports={title:"Title"}},ff57:function(t,e,r){"use strict";var n=r("2c37"),a=r.n(n);a.a},ffe0:function(t,e,r){var n={"./core/Drawer.vue":"41c0","./core/Filter.vue":"b2ab","./core/Footer.vue":"7a74","./core/Toolbar.vue":"d23b","./core/View.vue":"9306","./helper/Offset.vue":"c6cc","./material/Card.vue":"e3a9","./material/ChartCard.vue":"78d5","./material/Notification.vue":"9d6c","./material/StatsCard.vue":"42e7"};function a(t){var e=i(t);return r(e)}function i(t){var e=n[t];if(!(e+1)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return e}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id="ffe0"}});
//# sourceMappingURL=app.182bc7fe.js.map