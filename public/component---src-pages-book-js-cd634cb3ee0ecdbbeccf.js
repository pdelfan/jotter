(self.webpackChunkjotter=self.webpackChunkjotter||[]).push([[353],{1974:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return K}});var t,a,o,i,l,c,u,s,d,g,m,f,b=r(7294),h=r(1608),p=r(6471),v=r(4558),w=r(2352),Z=r(4816),k=r(6168),E=r(9694),y=r(9837),x=r(3650),P=r(7766),C=r(2137),S=r(7757),z=r.n(S),F=r(508),R=function(e,n){var r=(0,b.useState)(!1),t=r[0],a=r[1],o=(0,b.useState)(null),i=o[0],l=o[1],c=(0,b.useState)(null),u=c[0],s=c[1];return(0,b.useEffect)((function(){(function(){var r=(0,C.Z)(z().mark((function r(){var t;return z().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e){r.next=14;break}return r.prev=1,a(!1),r.next=5,(0,F.T_)(e.email,n);case 5:t=r.sent,l(t),a(!0),r.next=14;break;case 10:r.prev=10,r.t0=r.catch(1),console.log(r.t0.message),s(r.t0.message);case 14:case"end":return r.stop()}}),r,null,[[1,10]])})));return function(){return r.apply(this,arguments)}})()()}),[e,n,i]),{data:i,hasFetched:t,error:u}},j=r(5761),H=r(9925),A=r(863),D=H.ZP.div(t||(t=(0,j.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex: 1;\n  flex-grow: 1;\n  justify-content: space-between;\n  align-items: center;\n  background-color: white;\n  padding: 0.8rem 1.8rem;\n  border: var(--general-border);\n  border-radius: var(--round);\n  box-shadow: var(--general-shadow);\n"]))),N=H.ZP.div(a||(a=(0,j.Z)(["\n  flex-grow: 0.7;\n"]))),q=H.ZP.h5(o||(o=(0,j.Z)(["\n  font-size: 1.3rem;\n  color: #374151;\n  margin: 0;\n"]))),B=H.ZP.progress(i||(i=(0,j.Z)(["\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  overflow: hidden;\n  border-radius: var(--round);\n  height: 0.7rem;\n  width: 100%;\n  background-color: #c4f1d8; // firefox\n  &::-webkit-progress-bar {\n    background-color: #c4f1d8;\n  }\n\n  &::-webkit-progress-value {\n    background-color: #3aae5b;\n  }\n\n  &::-moz-progress-bar {\n    background-color: #3aae5b;\n  }\n"]))),I=H.ZP.p(l||(l=(0,j.Z)(["\n  color: #3aae5b;\n  font-weight: 500;\n  margin: 0;\n"]))),J=H.ZP.div(c||(c=(0,j.Z)(["\n  display: flex;\n  justify-content: space-between;\n  float: right;\n  background-color: white;\n  padding: 0.8rem 1.8rem;\n  margin-top: 0.5rem;\n  border: var(--general-border);\n  border-radius: var(--round);\n  box-shadow: var(--general-shadow);\n  visibility: ",";\n  animation: "," 0.1s linear;\n  transition: visibility 0.1s linear;\n"])),(function(e){return e.out?"hidden":"visible"}),(function(e){return e.out?U:L})),L=(0,H.F4)(u||(u=(0,j.Z)(["\n  from {\n    transform: scale(0.25);\n    opacity: 0;\n  }\n\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n"]))),U=(0,H.F4)(s||(s=(0,j.Z)(["\n  from {\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  to {\n    transform: scale(.25);\n    opacity: 0;\n  }\n"]))),_=H.ZP.input(d||(d=(0,j.Z)(["\n  border-radius: 10rem;\n  border: var(--general-border);\n  font-weight: 600;\n  font-size: 1rem;\n  text-align: center;\n  width: 5rem;\n  color: gray;\n\n  ::placeholder {\n    text-align: center;\n    color: darkgray;\n  }\n"]))),G=H.ZP.label(g||(g=(0,j.Z)(["\n  align-self: center;\n  margin-left: 0.3rem;\n  margin-right: 1rem;\n  color: #949494;\n  font-weight: 600;\n"]))),T=H.ZP.button(m||(m=(0,j.Z)(["\n  background-color: #e9edf1;\n  color: #5a5c62;\n  font-weight: 600;\n  font-size: 1rem;\n  padding: 0.4rem 0.7rem;\n  border-radius: 0.9rem;\n\n  &:hover {\n    background-color: #d6dce0;\n  }\n"]))),V=H.ZP.button(f||(f=(0,j.Z)(["\n  background-color: #3aae5b;\n  color: white;\n  font-weight: 600;\n  font-size: 1rem;\n  padding: 0.4rem 0.7rem;\n  margin-left: 1rem;\n  border-radius: 0.9rem;\n\n  &:hover {\n    background-color: #37a556;\n  }\n"]))),Y=function(e){var n=e.percentage,r=e.user,t=e.isbn,a=(0,b.useState)(!1),o=a[0],i=a[1],l=(0,b.useRef)(),c=(0,b.useState)(n),u=c[0],s=c[1],d=(0,b.useState)(""),g=d[0],m=d[1];return(0,b.useEffect)((function(){document.addEventListener("mousedown",(function(e){var n;null!=l&&null!==(n=l.current)&&void 0!==n&&n.contains(e.target)||(i(!1),m(""))}))}),[l,u]),b.createElement("div",{ref:l},b.createElement(D,null,b.createElement(N,null,b.createElement(q,null,"Reading Progress"),b.createElement(B,{value:u,max:"100"}),b.createElement(I,null,function(e){return"0"===e?"Not read":"100"===e?"Completed":e+"% read"}(u))),b.createElement(T,{onClick:function(){return i(!o)}},"Update")),b.createElement(J,{out:!o},b.createElement(_,{placeholder:u,onChange:function(e){m(e.target.value)},value:g}),b.createElement(G,null,"%"),b.createElement(V,{onClick:function(e){e.preventDefault(),(0,F._J)(r,t,g).then((function(){i(!1),s(g),m(""),(0,A.Vp)("Your reading progress has been updated")}),(function(e){400===e?(0,A.GU)("Invalid request: Couldn't update your reading progress."):(0,A.HJ)(e,"Something went wrong. Check your internet connection and try again.")}))}},"Submit")))},K=function(e){var n=e.location,r=(0,v.D3)(),t=r.isAuthenticated,a=r.user,o=n.state?n.state.isbn:"",i=(0,P.Z)(o),l=i.data,c=i.hasFetched,u=R(a,o),s=u.data,d=u.hasFetched;return null===n.state?b.createElement(Z.Cq,null):t&&null!==o?b.createElement(h.Z,{heading:"Book",subheading:"In your library"},c&&d&&b.createElement(y.H,{cover:l.cover,title:l.title,author:l.author,date:l.date,desc:l.desc,category:l.category,length:l.length,avgRating:l.avgRating,ratings:l.ratings,language:l.language,isbn:l.isbn,username:a.email,deleteButton:!0,redirectAfterDelete:"/library"},b.createElement(Y,{percentage:s,isbn:l.isbn,user:a.email})),!c&&b.createElement(x.i,{minHeight:"50vh"},b.createElement(x.g,{minHeight:"30vh",src:w.Z,alt:"Loading icon",className:"rotating"})),b.createElement(p.Z,{heading:"Notes",subheading:"All your notes on this book"})):b.createElement(E.Router,null,b.createElement(Z.ZP,{path:"/book",component:k.default}))}}}]);
//# sourceMappingURL=component---src-pages-book-js-cd634cb3ee0ecdbbeccf.js.map