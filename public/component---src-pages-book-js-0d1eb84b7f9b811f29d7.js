(self.webpackChunkjotter=self.webpackChunkjotter||[]).push([[353],{5346:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return K}});var n=r(7294),o=r(655),a=r(3835),i=r(2352),l=r(9450),d=r(3650),c=r(7766),s=r(2137),m=r(7757),u=r.n(m),g=function(e,t,r){var o=(0,n.useState)(!1),i=o[0],l=o[1],d=(0,n.useState)(null),c=d[0],m=d[1],g=(0,n.useState)(null),p=g[0],b=g[1],f=(0,n.useState)(!1),h=f[0],v=f[1],w=(0,a.D3)().user;return(0,n.useEffect)((function(){var n=function(){var r=(0,s.Z)(u().mark((function r(){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return l(!1),v(!0),r.prev=2,r.next=5,t(w.email,e);case 5:n=r.sent,m(n),l(!0),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(2),b(r.t0.message);case 13:v(!1);case 14:case"end":return r.stop()}}),r,null,[[2,10]])})));return function(){return r.apply(this,arguments)}}();r?null!=w&&w.email&&n():v(!0)}),[t,e,r,null==w?void 0:w.email]),{data:c,hasFetched:i,error:p,loading:h}},p=r(508),b=r(9925),f=r(863),h=b.ZP.div.withConfig({displayName:"ReadingProgress__Container",componentId:"sc-1wcv91b-0"})(["display:flex;flex-wrap:wrap;flex:1;flex-grow:1;row-gap:1rem;justify-content:space-between;align-items:center;background-color:#fdfdfd;padding:0.8rem 1.8rem;border:var(--gray-border);border-radius:var(--round);"]),v=b.ZP.div.withConfig({displayName:"ReadingProgress__Info",componentId:"sc-1wcv91b-1"})(["flex-grow:0.7;"]),w=b.ZP.h5.withConfig({displayName:"ReadingProgress__Title",componentId:"sc-1wcv91b-2"})(["font-size:1.3rem;color:#333;margin-bottom:0.5rem;margin-top:0;"]),y=b.ZP.progress.withConfig({displayName:"ReadingProgress__ProgressBar",componentId:"sc-1wcv91b-3"})(["appearance:none;-webkit-appearance:none;-moz-appearance:none;overflow:hidden;height:0.7rem;width:100%;background-color:#c4f1d8;border-radius:var(--round);&::-webkit-progress-bar{background-color:#c4f1d8;}&::-webkit-progress-value{background-color:#3aae5b;}&::-moz-progress-bar{background-color:#3aae5b;}"]),_=b.ZP.p.withConfig({displayName:"ReadingProgress__Description",componentId:"sc-1wcv91b-4"})(["color:#3aae5b;font-weight:700;margin-top:0.5rem;margin-bottom:0;"]),k=b.ZP.div.withConfig({displayName:"ReadingProgress__Modal",componentId:"sc-1wcv91b-5"})(["display:flex;justify-content:space-between;float:right;background-color:#fdfdfd;padding:0.8rem 1.8rem;margin-top:0.5rem;border:var(--gray-border);box-shadow:var(--general-shadow);visibility:",";animation:"," 0.1s linear;transition:visibility 0.1s linear;"],(function(e){return e.out?"hidden":"visible"}),(function(e){return e.out?C:E})),E=(0,b.F4)(["from{transform:scale(0.25);opacity:0;}to{transform:scale(1);opacity:1;}"]),C=(0,b.F4)(["from{transform:scale(1);opacity:1;}to{transform:scale(.25);opacity:0;}"]),x=b.ZP.input.withConfig({displayName:"ReadingProgress__Input",componentId:"sc-1wcv91b-6"})(["border:var(--gray-border);font-weight:bold;font-size:1rem;text-align:center;max-width:5rem;color:gray;::placeholder{text-align:center;color:darkgray;}"]),I=b.ZP.label.withConfig({displayName:"ReadingProgress__Label",componentId:"sc-1wcv91b-7"})(["align-self:center;margin-left:0.3rem;margin-right:1rem;color:#949494;font-weight:600;"]),N=b.ZP.button.withConfig({displayName:"ReadingProgress__UpdateButton",componentId:"sc-1wcv91b-8"})(["background-color:transparent;border:2px solid #888;color:#888;font-size:1rem;font-weight:bold;padding:0.4rem 0.7rem;&:hover{border:2px solid #555;color:#555;}"]),P=b.ZP.button.withConfig({displayName:"ReadingProgress__Submit",componentId:"sc-1wcv91b-9"})(["background-color:transparent;border:2px solid #3aae5b;color:#3aae5b;font-weight:bold;font-size:1rem;padding:0.4rem 0.7rem;margin-left:1rem;&:hover{border:2px solid #31944d;color:#31944d;}"]),Z=function(e){var t=e.percentage,r=e.user,o=e.isbn,a=(0,n.useState)(!1),i=a[0],l=a[1],d=(0,n.useRef)(),c=(0,n.useState)(parseInt(t)),s=c[0],m=c[1],u=(0,n.useState)(""),g=u[0],b=u[1];return(0,n.useEffect)((function(){document.addEventListener("mousedown",(function(e){var t;null!=d&&null!==(t=d.current)&&void 0!==t&&t.contains(e.target)||(l(!1),b(""))}))}),[d,s]),n.createElement("div",{ref:d},n.createElement(h,null,n.createElement(v,null,n.createElement(w,null,"Reading Progress"),n.createElement(y,{value:s,max:"100"}),n.createElement(_,null,function(e){return 0===e?"Not read":100===e?"Completed":e+"% read"}(s))),n.createElement(N,{onClick:function(){return l(!i)}},"Update")),n.createElement(k,{out:!i},n.createElement(x,{type:"text",pattern:"^[0-9]*$",placeholder:s,onChange:function(e){e.target.validity.patternMismatch||b(e.target.value)},value:g}),n.createElement(I,null,"%"),n.createElement(P,{onClick:function(e){e.preventDefault(),""===g?(0,f.Kp)("You must enter a number before submitting."):g<0||g>100?(0,f.Kp)("Make sure your input is a number and between 0 to 100."):(0,p._J)(r,o,g).then((function(){l(!1),m(parseInt(g)),b(""),(0,f.Vp)("Your reading progress has been updated")}),(function(e){400===e?(0,f.GU)("Invalid request: Couldn't update your reading progress."):(0,f.HJ)(e,"Something went wrong. Check your internet connection and try again.")}))}},"Submit")))},R=r(6471),D=r(5444),z=b.ZP.div.withConfig({displayName:"Note__NoteContainer",componentId:"sc-1ptx9dd-0"})(["display:flex;flex-wrap:wrap;margin-top:3rem;gap:1rem;"]),S=(0,b.ZP)(D.Link).withConfig({displayName:"Note__Wrapper",componentId:"sc-1ptx9dd-1"})(["   padding:1rem;border:var(--purple-border);border-radius:var(--round);&:hover{border:var(--purple-border-hover);}"]),F=b.ZP.h5.withConfig({displayName:"Note__Title",componentId:"sc-1ptx9dd-2"})(["color:#4C3E67;font-size:1.3rem;font-weight:600;margin:0;max-width:25rem;"]),j=b.ZP.h6.withConfig({displayName:"Note__Date",componentId:"sc-1ptx9dd-3"})(["color:#4C3E67;font-size:0.9rem;font-weight:normal;margin-top:1rem;margin-bottom:0;"]),A=function(e){var t=e.title,r=e.date,o=e.noteID,a=e.bookID;return n.createElement(S,{to:"/note?book="+a+"&note="+o},n.createElement(F,null,t),n.createElement(j,null,r))},B=r(9188),L=r(4816),H=r(2163),M=(0,b.ZP)(D.Link).withConfig({displayName:"book__AddNoteButton",componentId:"sc-14e1zmi-0"})(["display:flex;align-items:center;justify-content:space-between;column-gap:0.3rem;background-color:white;color:#6b6b6b;font-weight:bold;padding:0.5rem 1rem;border:var(--gray-border);box-shadow:var(--general-shadow);&:hover{border:var(--gray-border-hover);color:#555;}"]),T=b.ZP.h3.withConfig({displayName:"book__NoNotesMessage",componentId:"sc-14e1zmi-1"})(["color:#888;font-weight:normal;font-size:1.3rem;margin:2rem auto;"]),K=function(e){var t=e.location,r=H.parse(t.search).id,s=(0,a.D3)(),m=s.isAuthenticated,u=s.user,b=(0,c.Z)(r),f=b.data,h=b.hasFetched,v=g(r,p.T_,m),w=v.data,y=v.hasFetched,_=g(r,p.Kk,m),k=_.data,E=_.hasFetched;return null===r?n.createElement(L.Cq,null):n.createElement(o.Z,null,n.createElement(R.Z,{header:"Book",subheader:"In your library"}),h&&n.createElement(l.H,{cover:f.cover,title:f.title,author:f.author,date:f.date,desc:f.desc,category:f.category,length:f.length,avgRating:f.avgRating,ratings:f.ratings,language:f.language,isbn:f.isbn,username:u.email,deleteButton:!0,redirectAfterDelete:"/"},y&&n.createElement(Z,{percentage:w,isbn:f.isbn,user:u.email})),!h&&n.createElement(d.i,{minHeight:"50vh"},n.createElement(d.g,{minHeight:"30vh",src:i.Z,alt:"Loading icon",className:"rotating"})),n.createElement(R.Z,{header:"Notes",subheader:"All your notes on this book"},n.createElement(M,{to:"/add-note",state:{isbn:r,user:u}},n.createElement(B.dt,{color:"#6b6b6b"}),"Add Note")),E&&n.createElement(z,null,k.map((function(e){return n.createElement(A,{title:e.noteTitle,date:e.date,key:e._noteID,noteID:e._noteID,bookID:r})})),0===k.length&&n.createElement(T,null,"You don't have any notes for this book yet.")))}}}]);
//# sourceMappingURL=component---src-pages-book-js-0d1eb84b7f9b811f29d7.js.map