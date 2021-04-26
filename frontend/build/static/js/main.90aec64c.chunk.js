(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),a=c(20),s=c.n(a),i=(c(45),c(23)),o=(c(46),c(4)),d=c(3),l=(c(47),c(48),c(0)),j=function(e){var t=e.imageUrl,c=e.description,r=e.price,n=e.name,a=e.productId;return Object(l.jsxs)("div",{className:"product",children:[Object(l.jsx)("img",{src:t,alt:n}),Object(l.jsxs)("div",{className:"product__info",children:[Object(l.jsx)("p",{className:"info__name",children:n}),Object(l.jsx)("p",{className:"info__description",children:c.substring(0,100)}),Object(l.jsxs)("p",{className:"info__price",children:["$",r]}),Object(l.jsx)(o.b,{to:"/product/".concat(a),className:"info__button",children:"View"})]})]})},u=c(10),p=c(11),b=c.n(p),h=c(18),O="GET_PRODUCTS_REQUEST",m="GET_PRODUCTS_SUCCESS",x="GET_PRODUCTS_FAIL",f="GET_PRODUCT_DETAILS_REQUEST",_="GET_PRODUCT_DETAILS_SUCCESS",g="GET_PRODUCT_DETAILS_FAIL",v="GET_PRODUCT_DETAILS_RESET",y=c(19),N=c.n(y),S=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.getProducts})),c=t.products,n=t.loading,a=t.error;return Object(r.useEffect)((function(){e(function(){var e=Object(h.a)(b.a.mark((function e(t){var c,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:O}),e.next=4,N.a.get("https://ecoarham.herokuapp.com/api/products/https://storage4updater.blob.core.windows.net/public-data/export.json");case 4:c=e.sent,r=c.data,t({type:m,payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:x,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(l.jsxs)("div",{className:"homescreen",children:[Object(l.jsx)("h2",{className:"homescreen__title",children:"Latest Products"}),Object(l.jsx)("div",{className:"homescreen__products",children:n?Object(l.jsx)("h2",{children:"Loading..."}):a?Object(l.jsx)("h2",{children:a}):c.map((function(e){return Object(l.jsx)(j,{name:e.name,description:e.description,price:e.price,imageUrl:e.imageUrl,productId:e._id},e._id)}))})]})},I=c(15),k=(c(74),"ADD_TO_CART"),C="REMOVE_FROM_CART",T=function(e,t){return function(){var c=Object(h.a)(b.a.mark((function c(r,n){var a,s;return b.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,N.a.get("/api/products/".concat(e));case 2:a=c.sent,s=a.data,r({type:k,payload:{product:s._id,name:s.name,imageUrl:s.imageUrl,price:s.price,countInStock:s.countInStock,qty:t}}),localStorage.setItem("cart",JSON.stringify(n().cart.cartItems));case 6:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}()},E=function(e){var t=e.match,c=e.history,n=Object(r.useState)(1),a=Object(i.a)(n,2),s=a[0],o=a[1],d=Object(u.b)();console.log(t.params.key);var j=Object(u.c)((function(e){return e.getProductDetails})),p=j.loading,O=j.error,m=j.product;Object(r.useEffect)((function(){var e;m&&t.params.id!==m._id&&d((e=t.params.id,function(){var t=Object(h.a)(b.a.mark((function t(c){var r,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c({type:f}),t.next=4,N.a.get("/api/products/".concat(e));case 4:r=t.sent,n=r.data,c({type:_,payload:n}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),c({type:g,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()))}),[d,t,m]);return Object(l.jsx)("div",{className:"productscreen",children:p?Object(l.jsx)("h2",{children:"Loading..."}):O?Object(l.jsx)("h2",{children:O}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"productscreen__left",children:[Object(l.jsx)("div",{className:"left__image",children:Object(l.jsx)("img",{src:m.imageUrl,alt:m.name})}),Object(l.jsxs)("div",{className:"left__info",children:[Object(l.jsx)("p",{className:"left__name",children:"PlayStation 5"}),Object(l.jsxs)("p",{children:["Price: $",m.price]}),Object(l.jsxs)("p",{children:["Description: ",m.description]})]})]}),Object(l.jsx)("div",{className:"productscreen__right",children:Object(l.jsxs)("div",{className:"right__info",children:[Object(l.jsxs)("p",{children:["Price:",Object(l.jsxs)("span",{children:["$",m.price]})]}),Object(l.jsxs)("p",{children:["Status:",Object(l.jsx)("span",{children:m.countInStock>0?"In Stock":"Out of Stock"})]}),Object(l.jsxs)("p",{children:["Qty",Object(l.jsx)("select",{value:s,onChange:function(e){return o(e.target.value)},children:Object(I.a)(Array(m.countInStock).keys()).map((function(e){return Object(l.jsx)("option",{value:e+1,children:e+1},e+1)}))})]}),Object(l.jsx)("p",{children:Object(l.jsx)("button",{type:"button",onClick:function(){d(T(m._id,s)),c.push("/cart")},children:"Add To Cart"})})]})})]})})},w=(c(75),c(76),function(e){var t=e.item,c=e.qtyChangeHandler,r=e.removeHandler;return Object(l.jsxs)("div",{className:"cartitem",children:[Object(l.jsx)("div",{className:"cartitem__image",children:Object(l.jsx)("img",{src:t.imageUrl,alt:t.name})}),Object(l.jsx)(o.b,{to:"/product/".concat(t.product),className:"cartItem__name",children:Object(l.jsx)("p",{children:t.name})}),Object(l.jsxs)("p",{className:"cartitem__price",children:["$",t.price]}),Object(l.jsx)("select",{value:t.qty,onChange:function(e){return c(t.product,e.target.value)},className:"cartItem__select",children:Object(I.a)(Array(t.countInStock).keys()).map((function(e){return Object(l.jsx)("option",{value:e+1,children:e+1},e+1)}))}),Object(l.jsx)("button",{className:"cartItem__deleteBtn",onClick:function(){return r(t.product)},children:Object(l.jsx)("i",{className:"fas fa-trash"})})]})}),D=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.cart})).cartItems,c=function(t,c){e(T(t,c))},r=function(t){e(function(e){return function(t,c){t({type:C,payload:e}),localStorage.setItem("cart",JSON.stringify(c().cart.cartItems))}}(t))};return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"cartscreen",children:[Object(l.jsxs)("div",{className:"cartscreen__left",children:[Object(l.jsx)("h2",{children:"Shopping Cart"}),0===t.length?Object(l.jsxs)("div",{children:["Your Cart Is Empty ",Object(l.jsx)(o.b,{to:"/",children:"Go Back"})]}):t.map((function(e){return Object(l.jsx)(w,{item:e,qtyChangeHandler:c,removeHandler:r},e.product)}))]}),Object(l.jsxs)("div",{className:"cartscreen__right",children:[Object(l.jsxs)("div",{className:"cartscreen__info",children:[Object(l.jsxs)("p",{children:["Subtotal (",t.reduce((function(e,t){return Number(t.qty)+e}),0),") items"]}),Object(l.jsxs)("p",{children:["$",t.reduce((function(e,t){return e+t.price*t.qty}),0).toFixed(2)]})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{children:"Proceed To Checkout"})})]})]})})},P=(c(77),function(e){var t=e.click;return Object(l.jsxs)("nav",{className:"navbar",children:[Object(l.jsx)("div",{className:"navbar__logo",children:Object(l.jsx)("h2",{children:"Mern Shopping Cart"})}),Object(l.jsxs)("ul",{className:"navbar__links",children:[Object(l.jsx)("li",{children:Object(l.jsxs)(o.b,{to:"/cart",className:"cart__link",children:[Object(l.jsx)("i",{className:"fas fa-shopping-cart"}),Object(l.jsxs)("span",{children:["Cart",Object(l.jsx)("span",{className:"cartlogo__badge",children:"0"})]})]})}),Object(l.jsx)("li",{children:Object(l.jsx)(o.b,{to:"/",children:"Shop"})})]}),Object(l.jsxs)("div",{className:"hamburger__menu",onClick:t,children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})]})}),U=(c(78),function(e){var t=e.show,c=e.click;return t&&Object(l.jsx)("div",{className:"backdrop",onClick:c})}),R=(c(79),function(e){var t=e.show,c=e.click,r=["sidedrawer"];return t&&r.push("show"),Object(l.jsx)("div",{className:r.join(" "),children:Object(l.jsxs)("ul",{className:"sidedrawer__links",onClick:c,children:[Object(l.jsx)("li",{children:Object(l.jsxs)(o.b,{to:"/cart",children:[Object(l.jsx)("i",{className:"fas fa-shopping-cart"}),Object(l.jsxs)("span",{children:["Cart",Object(l.jsx)("span",{className:"sidedrawer__cartbadge",children:"0"})]})]})}),Object(l.jsx)("li",{children:Object(l.jsx)(o.b,{to:"/",children:"Shop"})})]})})});var A=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(l.jsxs)(o.a,{children:[Object(l.jsx)(P,{click:function(){n(!0)}}),Object(l.jsx)(R,{show:c,click:function(){n(!1)}}),Object(l.jsx)(U,{show:c,click:function(){n(!1)}}),Object(l.jsx)("main",{children:Object(l.jsxs)(d.c,{children:[Object(l.jsx)(d.a,{exact:!0,path:"/",component:S}),Object(l.jsx)(d.a,{exact:!0,path:"/product/:id",component:E}),Object(l.jsx)(d.a,{exact:!0,path:"/cart",component:D})]})})]})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,81)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),r(e),n(e),a(e),s(e)}))},F=c(12),G=c(39),q=c(40),J=c(13),M={cartItems:[]},$=Object(F.combineReducers)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:var c=t.payload,r=e.cartItems.find((function(e){return e.product===c.product}));return r?Object(J.a)(Object(J.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===r.product?c:e}))}):Object(J.a)(Object(J.a)({},e),{},{cartItems:[].concat(Object(I.a)(e.cartItems),[c])});case C:return Object(J.a)(Object(J.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload}))});default:return e}},getProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return{loading:!0,products:[]};case m:return{products:t.payload,loading:!1};case x:return{loading:!1,error:t.payload};default:return e}},getProductDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return{loading:!0};case _:return{loading:!1,product:t.payload};case g:return{loading:!1,error:t.payload};case v:return{product:{}};default:return e}}}),B=[G.a],H={cart:{cartItems:localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]}},Q=Object(F.createStore)($,H,Object(q.composeWithDevTools)(F.applyMiddleware.apply(void 0,B)));s.a.render(Object(l.jsx)(u.a,{store:Q,children:Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(A,{})})}),document.getElementById("root")),L(),L()}},[[80,1,2]]]);
//# sourceMappingURL=main.90aec64c.chunk.js.map