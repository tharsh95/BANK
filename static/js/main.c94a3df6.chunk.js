(this.webpackJsonpinccounter=this.webpackJsonpinccounter||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),o=n(4),r=n.n(o),i=(n(9),n(10),n(2)),s=n(0),u=function(){var t=Object(c.useState)(0),e=Object(i.a)(t,2),n=e[0],a=e[1],o=Object(c.useState)(!1),r=Object(i.a)(o,2),u=r[0],b=r[1],l=Object(c.useState)(0),j=Object(i.a)(l,2),d=j[0],p=j[1],O=Object(c.useState)(0),h=Object(i.a)(O,2),m=h[0],f=h[1];return Object(c.useEffect)((function(){localStorage.setItem("balance",d)}),[d,n]),Object(s.jsxs)("div",{children:[Object(s.jsxs)("h1",{children:["\u20b9",n]}),Object(s.jsx)("div",{className:"input-group mb-3",children:Object(s.jsx)("input",{type:"text",className:"form-control container my-3",placeholder:"Enter amount to deposit or withdraw",value:n,onChange:function(t){a(t.target.value)}})}),Object(s.jsxs)("div",{className:"container ",children:[Object(s.jsx)("button",{type:"button",className:"btn btn-primary mx-3",onClick:function(){p((function(t){return parseFloat(t)+parseFloat(n)}))},children:"Add Money"}),Object(s.jsx)("button",{type:"button",className:"btn btn-primary mx-3",onClick:function(){d-n>0&&p((function(t){return parseFloat(t)-parseFloat(n)}))},children:"Withdraw Money"}),Object(s.jsx)("button",{type:"button",className:"btn btn-primary mx-3",onClick:function(){return function(){var t=localStorage.getItem("balance");f(t),b(!0),setTimeout((function(){b(!1)}),5e3)}()},children:"Fetch Balance"})]}),Object(s.jsx)("br",{}),Object(s.jsxs)("h4",{children:["Balance:\u20b9",u?m:"****"]})]})};var b=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(u,{})})},l=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),o(t),r(t)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root")),l()},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.c94a3df6.chunk.js.map