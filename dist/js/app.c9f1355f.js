(function(t){function a(a){for(var e,l,c=a[0],n=a[1],o=a[2],d=0,p=[];d<c.length;d++)l=c[d],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&p.push(r[l][0]),r[l]=0;for(e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);u&&u(a);while(p.length)p.shift()();return i.push.apply(i,o||[]),s()}function s(){for(var t,a=0;a<i.length;a++){for(var s=i[a],e=!0,c=1;c<s.length;c++){var n=s[c];0!==r[n]&&(e=!1)}e&&(i.splice(a--,1),t=l(l.s=s[0]))}return t}var e={},r={app:0},i=[];function l(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=t,l.c=e,l.d=function(t,a,s){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)l.d(s,e,function(a){return t[a]}.bind(null,e));return s},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],n=c.push.bind(c);c.push=a,c=c.slice();for(var o=0;o<c.length;o++)a(c[o]);var u=n;i.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},3659:function(t,a,s){"use strict";var e=s("380e"),r=s.n(e);r.a},"380e":function(t,a,s){},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("Navbar"),s("div",{staticClass:"main-conten mt-4"},[s("router-view")],1)],1)},i=[],l=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary"},[s("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Yopeez")]),t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarColor01"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/product"}},[t._v("Features")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/checkout"}},[t._v("Pricing")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")])],1)]),t._m(1),t._m(2)])])},c=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("form",{staticClass:"form-inline my-2 my-lg-0"},[s("input",{staticClass:"form-control mr-sm-2",attrs:{type:"text",placeholder:"Search"}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"btn-group ml-auto",attrs:{role:"group","aria-label":"Button group with nested dropdown"}},[s("button",{staticClass:"btn btn-warning",attrs:{type:"button"}},[t._v("Cart")]),s("div",{staticClass:"btn-group show",attrs:{role:"group"}},[s("button",{staticClass:"btn btn-primary dropdown-toggle",attrs:{id:"btnGroupDrop1",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"true"}}),s("div",{staticClass:"dropdown-menu",staticStyle:{position:"absolute",transform:"translate3d(0px, 48px, 0px)",top:"0px",left:"0px","will-change":"transform"},attrs:{"aria-labelledby":"btnGroupDrop1","x-placement":"bottom-start"}},[s("a",{staticClass:"dropdown-item"},[t._v("Item 1")]),s("a",{staticClass:"dropdown-item"},[t._v("Item 1")])])])])}],n={},o=n,u=s("2877"),d=Object(u["a"])(o,l,c,!1,null,null,null),p=d.exports,v={components:{Navbar:p}},m=v,C=Object(u["a"])(m,r,i,!1,null,null,null),b=C.exports,f=s("8c4f"),h=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"home"},[s("h1",[t._v("Home Page")])])}],g={name:"Home",components:{}},y=g,x=Object(u["a"])(y,h,_,!1,null,null,null),w=x.exports,k=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-8"},[s("h3",{staticClass:"mb-4"},[t._v("Your Order Breakdown")]),s("hr"),s("div",{staticClass:"d-flex product-wrap mb-3"},[s("div",{staticClass:"product-img"},[s("img",{attrs:{src:"https://via.placeholder.com/150x150",alt:""}})]),s("div",{staticClass:"product-details d-flex align-items-center"},[s("div",{staticClass:"product-name"},[t._v("Gucci Watch")]),s("div",{staticClass:"product-quantity d-flex"},[s("span",{staticClass:"minus"},[t._v("-")]),s("span",{staticClass:"quantity"},[t._v("8")]),s("span",{staticClass:"plus"},[t._v("+")]),s("div",{staticClass:"sub-total"},[t._v("$2000")])])])]),s("div",{staticClass:"d-flex product mb-3"},[s("div",{staticClass:"product-img"},[s("img",{attrs:{src:"https://via.placeholder.com/150x150",alt:""}})]),s("div",{staticClass:"product-details d-flex align-items-center"},[s("div",{staticClass:"product-name"},[t._v("Gucci Watch")]),s("div",{staticClass:"product-quantity d-flex"},[s("span",{staticClass:"minus"},[t._v("-")]),s("span",{staticClass:"quantity"},[t._v("8")]),s("span",{staticClass:"plus"},[t._v("+")]),s("div",{staticClass:"sub-total"},[t._v("$2000")])])])]),s("div",{staticClass:"d-flex product mb-3"},[s("div",{staticClass:"product-img"},[s("img",{attrs:{src:"https://via.placeholder.com/150x150",alt:""}})]),s("div",{staticClass:"product-details d-flex align-items-center"},[s("div",{staticClass:"product-name"},[t._v("Gucci Watch")]),s("div",{staticClass:"product-quantity d-flex"},[s("span",{staticClass:"minus"},[t._v("-")]),s("span",{staticClass:"quantity"},[t._v("8")]),s("span",{staticClass:"plus"},[t._v("+")]),s("div",{staticClass:"sub-total"},[t._v("$2000")])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"}),s("div",{staticClass:"col-6"},[s("div",{staticClass:"totals"},[s("h3",[t._v("Sub Total : $4020")]),s("h2",[t._v("Total: $7500")])])])]),s("div",[s("button",{staticClass:"btn btn-primary"},[t._v("Continue Shopping")])])]),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"card text-white bg-dark mb-3"},[s("div",{staticClass:"card-header"},[s("h3",{staticClass:"card-title text-center"},[t._v("Billing Details")])]),s("div",{staticClass:"card-body"},[s("div",{staticClass:"details"},[s("h5",{staticClass:"text-white"},[t._v("Address Details")]),s("p",[t._v("Lorem ipsum, dolor sit amet consectetur adipisicing.")]),s("hr"),s("h5",{staticClass:"text-white"},[t._v("Delivery Method")]),s("div",{staticClass:"form-group"},[s("div",{staticClass:"custom-control custom-radio"},[s("input",{staticClass:"custom-control-input",attrs:{type:"radio",id:"DoorDelivery",name:"delivery",checked:""}}),s("label",{staticClass:"custom-control-label",attrs:{for:"DoorDelivery"}},[t._v(" Door Delivery for "),s("span",{staticClass:"badge badge-pill badge-warning"},[t._v("$20")])])]),s("div",{staticClass:"custom-control custom-radio"},[s("input",{staticClass:"custom-control-input",attrs:{type:"radio",id:"pickUp",name:"delivery"}}),s("label",{staticClass:"custom-control-label",attrs:{for:"pickUp"}},[t._v(" Or pickup at the "),s("i",{staticClass:"fas fa-chair-office"}),t._v("office ")])])]),s("hr"),s("h5",{staticClass:"text-white"},[t._v("Payment Method")]),s("div",{staticClass:"form-group"},[s("div",{staticClass:"custom-control custom-radio"},[s("input",{staticClass:"custom-control-input",attrs:{type:"radio",id:"cardPayment",name:"payment",checked:""}}),s("label",{staticClass:"custom-control-label",attrs:{for:"cardPayment"}},[t._v("Cards")])]),s("div",{staticClass:"custom-control custom-radio"},[s("input",{staticClass:"custom-control-input",attrs:{type:"radio",id:"payOnDelivery",name:"payment"}}),s("label",{staticClass:"custom-control-label",attrs:{for:"payOnDelivery"}},[t._v("pay on delivery")])])])]),s("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{type:"button"}},[t._v("Confirm Order")])])])])])])}],$={},j=$,P=(s("3659"),Object(u["a"])(j,k,O,!1,null,"0de32bda",null)),E=P.exports,D=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-8 m-auto"},[s("Jumbotron")],1)])])},S=[],M=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"mt-4"},[s("div",{staticClass:"jumbotron"},[s("h1",{staticClass:"display-4 text-success"},[t._v("Congratulations")]),s("h3",{staticClass:"lead text-center"},[t._v("Your Payment was successful")]),s("hr",{staticClass:"my-4"}),s("p",{staticClass:"lead text-center"},[s("a",{staticClass:"btn btn-primary btn-lg",attrs:{href:"#",role:"button"}},[t._v("Continue Shopping")])])])])}],G={},T=G,H=Object(u["a"])(T,M,q,!1,null,null,null),J=H.exports,W={components:{Jumbotron:J}},B=W,I=Object(u["a"])(B,D,S,!1,null,null,null),Y=I.exports,A=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"product-wrap"},[s("img",{attrs:{src:"https://via.placeholder.com/350x350",alt:"product"}})]),s("div",{staticClass:"product-scan d-flex mt-5"},[s("div",{staticClass:"variant mx-1"},[s("img",{attrs:{src:"https://via.placeholder.com/50x50",alt:"variant"}})]),s("div",{staticClass:"variant mx-1"},[s("img",{attrs:{src:"https://via.placeholder.com/50x50",alt:"variant"}})]),s("div",{staticClass:"variant mx-1"},[s("img",{attrs:{src:"https://via.placeholder.com/50x50",alt:"variant"}})])])]),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"product-info"},[s("p",[t._v("Prouduct: G-shock 123")]),s("p",[t._v("Price: $233")]),s("p",[t._v("Price: $233")]),s("p",[t._v("Weight: 12kg")]),s("p",[t._v("Material: Leather")]),s("p",[t._v("In stock")])]),s("div",{staticClass:"d-flex justify-content-between"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Keep shopping")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Checkout")])])])]),s("hr"),s("div",{staticClass:"row mt-5 py-4"},[s("div",{staticClass:"col-12"},[s("h3",{staticClass:"text-center mb-3"},[t._v("Other Related Products")]),s("div",{staticClass:"related-products d-flex w-100 justify-content-between"},[s("div",{staticClass:"related-product"},[s("img",{attrs:{src:"https://via.placeholder.com/150x150",alt:""}})]),s("div",{staticClass:"related-product"},[s("img",{attrs:{src:"https://via.placeholder.com/150x150",alt:""}})]),s("div",{staticClass:"related-product"},[s("img",{attrs:{src:"https://via.placeholder.com/150x150",alt:""}})]),s("div",{staticClass:"related-product"},[s("img",{attrs:{src:"https://via.placeholder.com/150x150",alt:""}})])])])])])}],N={props:["id"]},U=N,z=Object(u["a"])(U,A,L,!1,null,null,null),F=z.exports;e["a"].use(f["a"]);var K=[{path:"/",name:"Home",component:w},{path:"/checkout",name:"Checkout",component:E},{path:"/product",name:"Product",component:F},{path:"/message",name:"Message",component:Y}],R=new f["a"]({mode:"history",base:"/",routes:K}),Q=R;e["a"].config.productionTip=!1,new e["a"]({router:Q,render:function(t){return t(b)}}).$mount("#app")}});
//# sourceMappingURL=app.c9f1355f.js.map