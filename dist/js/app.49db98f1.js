(function(t){function a(a){for(var e,c,l=a[0],o=a[1],n=a[2],d=0,p=[];d<l.length;d++)c=l[d],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&p.push(i[c][0]),i[c]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);u&&u(a);while(p.length)p.shift()();return r.push.apply(r,n||[]),s()}function s(){for(var t,a=0;a<r.length;a++){for(var s=r[a],e=!0,l=1;l<s.length;l++){var o=s[l];0!==i[o]&&(e=!1)}e&&(r.splice(a--,1),t=c(c.s=s[0]))}return t}var e={},i={app:0},r=[];function c(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=t,c.c=e,c.d=function(t,a,s){c.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,a){if(1&a&&(t=c(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)c.d(s,e,function(a){return t[a]}.bind(null,e));return s},c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,"a",a),a},c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=a,l=l.slice();for(var n=0;n<l.length;n++)a(l[n]);var u=o;r.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},3659:function(t,a,s){"use strict";var e=s("380e"),i=s.n(e);i.a},"380e":function(t,a,s){},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("Navbar"),s("div",{staticClass:"main-content mt-4"},[s("router-view")],1)],1)},r=[],c=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary"},[s("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Yopeez")]),t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarColor01"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/checkout"}},[t._v("Checkout")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")])],1)]),t._m(1),s("NavCart")],1)])},l=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("form",{staticClass:"form-inline my-2 my-lg-0"},[s("input",{staticClass:"form-control mr-sm-2",attrs:{type:"text",placeholder:"Search"}})])}],o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"btn-group ml-auto",attrs:{role:"group"}},[s("div",{staticClass:"btn-group",attrs:{role:"group"}},[s("button",{staticClass:"btn btn-primary dropdown-toggle",attrs:{id:"cartContent",type:"button"},on:{click:function(a){t.showCartContent=!t.showCartContent}}},[s("i",{staticClass:"fas fa-cart-plus fa-2x"})]),t.showCartContent?s("div",{staticClass:"dropdown-menu show",attrs:{"x-placement":"bottom-start"}},[t._m(0)]):t._e()])])},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"list-group"},[s("a",{staticClass:"list-group-item list-group-item-action flex-column align-items-start bg-dark",attrs:{href:"#"}},[s("h5",{staticClass:"text-warning"},[t._v("Cart Items")]),s("div",{staticClass:"d-flex w-100 justify-content-between"},[s("p",{staticClass:"mb-1 text-white"},[t._v(" Gucci Leather x "),s("span",{staticClass:"qnatity"},[t._v("1")])]),s("small",{staticClass:"text-white"},[s("i",{staticClass:"fas fa-trash"})])])])])}],u={data:function(){return{showCartContent:!1}}},d=u,p=(s("575b"),s("2877")),v=Object(p["a"])(d,o,n,!1,null,"ca058db0",null),m=v.exports,C={components:{NavCart:m}},h=C,f=Object(p["a"])(h,c,l,!1,null,"f4017914",null),b=f.exports,_={components:{Navbar:b}},g=_,y=Object(p["a"])(g,i,r,!1,null,null,null),x=y.exports,w=s("8c4f"),k=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-3"},[s("div",{staticClass:"card text-white bg-primary mb-3",staticStyle:{"max-width":"20rem"}},[s("Category"),s("Brands")],1)]),s("div",{staticClass:"col-md-9"},[t._m(0),s("ProductLists")],1)])])},$=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"d-flex"},[s("div",{staticClass:"filters"},[s("div",{staticClass:"btn-group btn-group-toggle"},[s("label",{staticClass:"btn btn-primary active"},[t._v("Men")]),s("label",{staticClass:"btn btn-primary"},[t._v("Women")])])]),s("div",{staticClass:"ml-auto"},[s("div",{staticClass:"btn-group btn-group-toggle"},[s("select",{staticClass:"btn btn-primary"},[s("option",{attrs:{selected:""}},[t._v("Sort price range")]),s("option",{attrs:{value:"1"}},[t._v("Low")]),s("option",{attrs:{value:"2"}},[t._v("Middle")]),s("option",{attrs:{value:"3"}},[t._v("High")])])])])])}],O=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"card-header"},[s("h5",{staticClass:"text-white"},[t._v("Category")])]),s("div",{staticClass:"card-body"},[s("div",{staticClass:"list-group"},[s("a",{staticClass:"bg-dark text-white list-group-item list-group-item-action",attrs:{href:"#"}},[s("i",{staticClass:"fas fa-air-freshener"}),t._v(" Latest ")]),s("a",{staticClass:"bg-dark text-white list-group-item list-group-item-action",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-child",attrs:{"aria-hidden":"true"}}),t._v(" Children ")]),s("a",{staticClass:"bg-dark text-white list-group-item list-group-item-action",attrs:{href:"#"}},[t._v("Smart")]),s("a",{staticClass:"bg-dark text-white list-group-item list-group-item-action",attrs:{href:"#"}},[t._v("Digital")]),s("a",{staticClass:"bg-dark text-white list-group-item list-group-item-action",attrs:{href:"#"}},[t._v("Analogue")])])])])}],P={},E=P,S=Object(p["a"])(E,O,j,!1,null,null,null),D=S.exports,M=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"card-header"},[s("h5",{staticClass:"text-white"},[t._v("Brands")])]),s("div",{staticClass:"card-body"},[s("div",{staticClass:"list-group"},[s("div",{staticClass:"form-group"},[s("div",{staticClass:"custom-control custom-switch"},[s("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customSwitch1",checked:""}}),s("label",{staticClass:"custom-control-label",attrs:{for:"customSwitch1"}},[t._v("Apple")])]),s("div",{staticClass:"custom-control custom-switch mt-4"},[s("input",{staticClass:"custom-control-input active",attrs:{type:"checkbox",id:"customSwitch2",checked:""}}),s("label",{staticClass:"custom-control-label",attrs:{for:"customSwitch2"}},[t._v("G-shock")])]),s("div",{staticClass:"custom-control custom-switch mt-4"},[s("input",{staticClass:"custom-control-input active",attrs:{type:"checkbox",id:"customSwitch3",checked:""}}),s("label",{staticClass:"custom-control-label",attrs:{for:"customSwitch3"}},[t._v("Geneve")])])])])])])}],G={},L=G,T=Object(p["a"])(L,M,q,!1,null,null,null),A=T.exports,B=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"d-flex flex-wrap jusify-content-center"},[s("ProductCard"),s("ProductCard"),s("ProductCard"),s("ProductCard"),s("ProductCard")],1)},N=[],W=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card text-left mt-2"},[s("img",{staticClass:"card-img-top",attrs:{src:"https://via.placeholder.com/300x300",alt:""}}),s("div",{staticClass:"card-body bg-dark"},[s("h4",{staticClass:"card-title"},[s("router-link",{attrs:{to:{name:"product",params:{id:33}}}},[t._v("Producr Name")])],1),t._m(0)])])},J=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",{staticClass:"card-text"},[s("strong",[t._v("$24")])])}],H={props:["id"]},Y=H,I=Object(p["a"])(Y,W,J,!1,null,null,null),U=I.exports,z={components:{ProductCard:U}},K=z,R=Object(p["a"])(K,B,N,!1,null,null,null),F=R.exports,Q={name:"Home",components:{Category:D,Brands:A,ProductLists:F}},V=Q,X=Object(p["a"])(V,k,$,!1,null,null,null),Z=X.exports,tt=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},at=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-8"},[s("h3",{staticClass:"mb-4"},[t._v("Your Order Breakdown")]),s("hr"),s("div",{staticClass:"d-flex product-wrap mb-3"},[s("div",{staticClass:"product-img"},[s("img",{attrs:{src:"https://via.placeholder.com/150x150",alt:""}})]),s("div",{staticClass:"product-details d-flex align-items-center"},[s("div",{staticClass:"product-name"},[t._v("Gucci Watch")]),s("div",{staticClass:"product-quantity d-flex"},[s("span",{staticClass:"minus"},[t._v("-")]),s("span",{staticClass:"quantity"},[t._v("8")]),s("span",{staticClass:"plus"},[t._v("+")]),s("div",{staticClass:"sub-total"},[t._v("$2000")])])])]),s("div",{staticClass:"d-flex product mb-3"},[s("div",{staticClass:"product-img"},[s("img",{attrs:{src:"https://via.placeholder.com/150x150",alt:""}})]),s("div",{staticClass:"product-details d-flex align-items-center"},[s("div",{staticClass:"product-name"},[t._v("Gucci Watch")]),s("div",{staticClass:"product-quantity d-flex"},[s("span",{staticClass:"minus"},[t._v("-")]),s("span",{staticClass:"quantity"},[t._v("8")]),s("span",{staticClass:"plus"},[t._v("+")]),s("div",{staticClass:"sub-total"},[t._v("$2000")])])])]),s("div",{staticClass:"d-flex product mb-3"},[s("div",{staticClass:"product-img"},[s("img",{attrs:{src:"https://via.placeholder.com/150x150",alt:""}})]),s("div",{staticClass:"product-details d-flex align-items-center"},[s("div",{staticClass:"product-name"},[t._v("Gucci Watch")]),s("div",{staticClass:"product-quantity d-flex"},[s("span",{staticClass:"minus"},[t._v("-")]),s("span",{staticClass:"quantity"},[t._v("8")]),s("span",{staticClass:"plus"},[t._v("+")]),s("div",{staticClass:"sub-total"},[t._v("$2000")])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"}),s("div",{staticClass:"col-6"},[s("div",{staticClass:"totals"},[s("h3",[t._v("Sub Total : $4020")]),s("h2",[t._v("Total: $7500")])])])]),s("div",[s("button",{staticClass:"btn btn-primary"},[t._v("Continue Shopping")])])]),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"card text-white bg-dark mb-3"},[s("div",{staticClass:"card-header"},[s("h3",{staticClass:"card-title text-center"},[t._v("Billing Details")])]),s("div",{staticClass:"card-body"},[s("div",{staticClass:"details"},[s("h5",{staticClass:"text-white"},[t._v("Address Details")]),s("p",[t._v("Lorem ipsum, dolor sit amet consectetur adipisicing.")]),s("hr"),s("h5",{staticClass:"text-white"},[t._v("Delivery Method")]),s("div",{staticClass:"form-group"},[s("div",{staticClass:"custom-control custom-radio"},[s("input",{staticClass:"custom-control-input",attrs:{type:"radio",id:"DoorDelivery",name:"delivery",checked:""}}),s("label",{staticClass:"custom-control-label",attrs:{for:"DoorDelivery"}},[t._v(" Door Delivery for "),s("span",{staticClass:"badge badge-pill badge-warning"},[t._v("$20")])])]),s("div",{staticClass:"custom-control custom-radio"},[s("input",{staticClass:"custom-control-input",attrs:{type:"radio",id:"pickUp",name:"delivery"}}),s("label",{staticClass:"custom-control-label",attrs:{for:"pickUp"}},[t._v(" Or pickup at the "),s("i",{staticClass:"fas fa-chair-office"}),t._v("office ")])])]),s("hr"),s("h5",{staticClass:"text-white"},[t._v("Payment Method")]),s("div",{staticClass:"form-group"},[s("div",{staticClass:"custom-control custom-radio"},[s("input",{staticClass:"custom-control-input",attrs:{type:"radio",id:"cardPayment",name:"payment",checked:""}}),s("label",{staticClass:"custom-control-label",attrs:{for:"cardPayment"}},[t._v("Cards")])]),s("div",{staticClass:"custom-control custom-radio"},[s("input",{staticClass:"custom-control-input",attrs:{type:"radio",id:"payOnDelivery",name:"payment"}}),s("label",{staticClass:"custom-control-label",attrs:{for:"payOnDelivery"}},[t._v("pay on delivery")])])])]),s("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{type:"button"}},[t._v("Confirm Order")])])])])])])}],st={},et=st,it=(s("3659"),Object(p["a"])(et,tt,at,!1,null,"0de32bda",null)),rt=it.exports,ct=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-8 m-auto"},[t.success?s("div",[s("Jumbotron")],1):t._e()])])])},lt=[],ot=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"mt-4"},[s("div",{staticClass:"jumbotron"},[s("h1",{staticClass:"display-4 text-center text-success"},[t._v("Congratulations")]),s("h3",{staticClass:"lead text-center"},[t._v("Your Payment was successful")]),s("hr",{staticClass:"my-4"}),s("p",{staticClass:"lead text-center"},[s("router-link",{staticClass:"btn btn-primary btn-lg",attrs:{to:"/",role:"button"}},[t._v("Continue Shopping")])],1)])])},nt=[],ut={},dt=ut,pt=Object(p["a"])(dt,ot,nt,!1,null,null,null),vt=pt.exports,mt={components:{Jumbotron:vt},data:function(){return{success:!0}}},Ct=mt,ht=Object(p["a"])(Ct,ct,lt,!1,null,null,null),ft=ht.exports,bt=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},_t=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"product-wrap"},[s("img",{attrs:{src:"https://via.placeholder.com/350x350",alt:"product"}})]),s("div",{staticClass:"product-scan d-flex mt-5"},[s("div",{staticClass:"variant mx-1"},[s("img",{attrs:{src:"https://via.placeholder.com/50x50",alt:"variant"}})]),s("div",{staticClass:"variant mx-1"},[s("img",{attrs:{src:"https://via.placeholder.com/50x50",alt:"variant"}})]),s("div",{staticClass:"variant mx-1"},[s("img",{attrs:{src:"https://via.placeholder.com/50x50",alt:"variant"}})])])]),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"product-info"},[s("p",[t._v("Prouduct: G-shock 123")]),s("p",[t._v("Price: $233")]),s("p",[t._v("Price: $233")]),s("p",[t._v("Weight: 12kg")]),s("p",[t._v("Material: Leather")]),s("p",[t._v("In stock")])]),s("div",{staticClass:"d-flex justify-content-between"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Keep shopping")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Add to Cart")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Checkout")])])])]),s("hr"),s("div",{staticClass:"row mt-5 py-4"},[s("div",{staticClass:"col-12"},[s("h3",{staticClass:"text-center mb-3"},[t._v("Other Related Products")]),s("div",{staticClass:"related-products d-flex w-100 justify-content-between"},[s("div",{staticClass:"related-product"},[s("img",{attrs:{src:"https://via.placeholder.com/150x150",alt:""}})]),s("div",{staticClass:"related-product"},[s("img",{attrs:{src:"https://via.placeholder.com/150x150",alt:""}})]),s("div",{staticClass:"related-product"},[s("img",{attrs:{src:"https://via.placeholder.com/150x150",alt:""}})]),s("div",{staticClass:"related-product"},[s("img",{attrs:{src:"https://via.placeholder.com/150x150",alt:""}})])])])])])}],gt={props:["id"]},yt=gt,xt=Object(p["a"])(yt,bt,_t,!1,null,null,null),wt=xt.exports;e["a"].use(w["a"]);var kt=[{path:"/",name:"store",component:Z},{path:"/checkout",name:"checkout",component:rt},{path:"/product/:id/",name:"product",props:!0,component:wt},{path:"/message",name:"message",component:ft}],$t=new w["a"]({mode:"history",base:"/",routes:kt}),Ot=$t;e["a"].config.productionTip=!1,new e["a"]({router:Ot,render:function(t){return t(x)}}).$mount("#app")},"575b":function(t,a,s){"use strict";var e=s("e6dd"),i=s.n(e);i.a},e6dd:function(t,a,s){}});
//# sourceMappingURL=app.49db98f1.js.map