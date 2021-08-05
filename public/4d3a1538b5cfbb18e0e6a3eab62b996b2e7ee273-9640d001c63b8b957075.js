(self.webpackChunkjotter=self.webpackChunkjotter||[]).push([[478],{383:function(e,t,n){"use strict";n.d(t,{F6:function(){return l},Gu:function(){return s},ZP:function(){return m}});var r=n(7294),a=n(9925),o=n(5444),i=n(7353),A=a.ZP.div.withConfig({displayName:"Book",componentId:"qjg0yh-0"})([".cover{box-shadow:var(--book-shadow);border:var(--book-border);max-height:160px;}h3{font-size:1.1rem;font-weight:bold;color:var(--book-title);line-height:1.5rem;margin-top:0.5rem;margin-bottom:0.3rem;}h4{font-size:0.85rem;font-weight:bold;color:var(--book-author);margin-top:0;margin-bottom:0.5rem;max-width:12rem;}h5{font-weight:bold;color:var(--book-date);margin-top:0;}"]),c=a.ZP.div.withConfig({displayName:"Book__Info",componentId:"qjg0yh-1"})(["max-width:14rem;word-wrap:break-word;"]),u=(0,a.ZP)(o.Link).withConfig({displayName:"Book__BookLink",componentId:"qjg0yh-2"})(["transition:0.2s;flex:0 1 16rem;margin-bottom:8rem;&:hover{transform:translateY(-0.5rem);transition:0.2s;}"]),l=a.ZP.div.withConfig({displayName:"Book__BookList",componentId:"qjg0yh-3"})(["display:flex;justify-content:space-between;flex-wrap:wrap;margin-top:5rem;"]),s=function(e){var t={cover:null,title:null,author:null,date:null,isbn:null};return t.cover=void 0===e.volumeInfo.imageLinks?""+i.Z:e.volumeInfo.imageLinks.thumbnail,t.title=e.volumeInfo.title?e.volumeInfo.title:"Title not Avaialble",t.author=e.volumeInfo.authors?e.volumeInfo.authors.join(", "):"Author not available",t.date=e.volumeInfo.publishedDate?e.volumeInfo.publishedDate.split("-")[0]:"Date not available",t.isbn=e.id?e.id:"N/A",t};function m(e){var t=e.isbn,n=e.cover,a=e.title,o=e.author,i=e.children,l=e.to;return r.createElement(u,{to:l,onClick:function(){localStorage.setItem("isbn",t)}},r.createElement(A,null,r.createElement("img",{src:n,alt:"Book cover",className:"cover"}),r.createElement(c,null,r.createElement("h3",null,a),r.createElement("h4",null,o)),i))}},1228:function(e,t,n){"use strict";var r=n(7294),a=n(9925),o=a.ZP.div.withConfig({displayName:"ErrorMessage__Error",componentId:"owg50q-0"})(["background-color:#fcebee;border:2px solid #e2516c;padding:0.5rem 1rem;margin-top:2rem;"]),i=a.ZP.button.withConfig({displayName:"ErrorMessage__Button",componentId:"owg50q-1"})(["font-weight:600;color:#e2516c;background-color:transparent;border:2px solid #e2516c;padding:0.3rem 1rem;margin-top:1rem;&:hover{background-color:#e2516c;color:white;}"]),A=a.ZP.p.withConfig({displayName:"ErrorMessage__Title",componentId:"owg50q-2"})(["font-size:1.2rem;font-weight:700;color:#e2516c;margin:0;"]),c=a.ZP.p.withConfig({displayName:"ErrorMessage__Description",componentId:"owg50q-3"})(["margin:0;"]);t.Z=function(e){var t=e.message,n=(0,r.useState)(!0),a=n[0],u=n[1];return r.createElement("div",null,a&&r.createElement(o,null,r.createElement(A,null,"Error"),r.createElement(c,null,t),r.createElement(i,{onClick:function(){return u(!a)}},"Ok")))}},3650:function(e,t,n){"use strict";n.d(t,{i:function(){return a},g:function(){return o}});var r=n(9925),a=r.ZP.div.withConfig({displayName:"Loading__Wrapper",componentId:"vs0g14-0"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:",";"],(function(e){return e.minHeight||"50rem"})),o=r.ZP.img.withConfig({displayName:"Loading",componentId:"vs0g14-1"})(["width:8rem;margin:1rem auto 1rem auto;-webkit-animation:spin 4s linear infinite;-moz-animation:spin 4s linear infinite;animation:spin 4s linear infinite;min-height:",";"],(function(e){return e.minHeight||"50rem"}))},8557:function(e,t,n){"use strict";n.d(t,{o:function(){return r}});var r=n(9925).ZP.h3.withConfig({displayName:"NoContentMessage",componentId:"sc-1mxldhb-0"})(["color:#888;font-weight:normal;font-size:1.3rem;margin:2rem auto;text-align:center;"])},6471:function(e,t,n){"use strict";var r=n(7294),a=n(9925),o=a.ZP.h1.withConfig({displayName:"Headings__MainHeader",componentId:"sc-1p6yl5c-0"})(["font-size:3rem;margin-bottom:0.5rem;"]),i=a.ZP.h2.withConfig({displayName:"Headings__SubHeader",componentId:"sc-1p6yl5c-1"})(["font-weight:700;margin-top:0;margin-bottom:0;"]),A=a.ZP.div.withConfig({displayName:"Headings__Container",componentId:"sc-1p6yl5c-2"})(["display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;row-gap:2rem;"]);t.Z=function(e){var t=e.header,n=e.subheader,a=e.children;return r.createElement(A,null,r.createElement("div",null,r.createElement(o,null,t),r.createElement(i,null,n)),a)}},655:function(e,t,n){"use strict";n.d(t,{Z:function(){return z}});var r=n(7294),a=n(9925),o=n(8603),i=n.n(o),A=n(3835),c=n(5444),u=(0,a.ZP)(c.Link).withConfig({displayName:"DropdownMenu__NavLink",componentId:"sc-1tsvgwi-0"})(["color:#585858;font-size:1rem;font-weight:600;text-decoration:none;margin-left:0.5rem;margin-right:1.5rem;"]),l=a.ZP.button.withConfig({displayName:"DropdownMenu__SignOut",componentId:"sc-1tsvgwi-1"})(["background-color:transparent;color:#585858;font-size:1rem;font-weight:600;text-decoration:none;margin-left:0.5rem;margin-right:1.5rem;"]);function s(){var e=(0,A.D3)().logout;function t(e){return r.createElement(u,{to:e.link,className:"menu-item"},e.children)}return r.createElement("div",{className:"dropdown"},r.createElement(t,{link:"/"},"Library"),r.createElement(t,{link:"/to-read"},"To-read"),r.createElement(t,{link:"/add-book"},"Add Book"),r.createElement(l,{onClick:function(){return e()},className:"menu-item"},"Sign Out"))}var m=a.ZP.div.withConfig({displayName:"DropdownButton__Item",componentId:"q4ozoq-0"})(["width:calc(var(--nav-size) * 0.8);display:flex;align-items:center;justify-content:center;@media (min-width:60rem){display:none;}"]);function g(e){var t=(0,r.useState)(!1),n=t[0],a=t[1];return r.createElement(m,null,r.createElement("button",{className:"icon-button",onClick:function(){return a(!n)}},e.icon),n&&e.children)}var d=a.ZP.div.withConfig({displayName:"Profile__ProfileContainer",componentId:"sc-1jjmi6q-0"})(["display:flex;align-items:center;max-width:13rem;@media (max-width:60rem){order:2;}"]),p=a.ZP.img.withConfig({displayName:"Profile__Avatar",componentId:"sc-1jjmi6q-1"})(["display:flex;width:2rem;height:2rem;align-self:center;margin-right:0.5rem;object-fit:cover;&:hover{filter:brightness(80%);}@media (max-width:60rem){margin-right:0;}"]),f=a.ZP.h4.withConfig({displayName:"Profile__Username",componentId:"sc-1jjmi6q-2"})(["color:#333651;font-size:0.9rem;font-weight:700;margin:0;@media (max-width:60rem){display:none;}"]),M=a.ZP.button.withConfig({displayName:"Profile__SignOut",componentId:"sc-1jjmi6q-3"})(["color:var(--mid-gray);background-color:transparent;padding:0;font-size:0.7rem;font-weight:600;cursor:pointer;&:hover{color:black;}@media (max-width:60rem){display:none;}"]),h=a.ZP.div.withConfig({displayName:"Profile__UserInfo",componentId:"sc-1jjmi6q-4"})(["display:flex;flex-direction:column;align-items:flex-start;justify-content:space-around;"]);function I(){var e=(0,A.D3)(),t=e.user,n=e.isAuthenticated,a=e.isLoading,o=e.logout;return a||!t?r.createElement(d,null,r.createElement(c.Link,{to:"/"},r.createElement(p,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALTSURBVHgB7dMBCcAwEMDAbsy/qvf1q43AHURCnpnZAxTte4AsA0OYgSHMwBBmYAgzMIQZGMIMDGEGhjADQ5iBIczAEGZgCDMwhBkYwgwMYQaGMANDmIEhzMAQZmAIMzCEGRjCDAxhBoYwA0OYgSHMwBBmYAgzMIQZGMIMDGEGhjADQ5iBIczAEGZgCDMwhBkYwgwMYQaGMANDmIEhzMAQZmAIMzCEGRjCDAxhBoYwA0OYgSHMwBBmYAgzMIQZGMIMDGEGhjADQ5iBIczAEGZgCDMwhBkYwgwMYQaGMANDmIEhzMAQZmAIMzCEGRjCDAxhBoYwA0OYgSHMwBBmYAgzMIQZGMIMDGEGhjADQ5iBIczAEGZgCDMwhBkYwgwMYQaGMANDmIEhzMAQZmAIMzCEGRjCDAxhBoYwA0OYgSHMwBBmYAgzMIQZGMIMDGEGhjADQ5iBIczAEGZgCDMwhBkYwgwMYQaGMANDmIEhzMAQZmAIMzCEGRjCDAxhBoYwA0OYgSHMwBBmYAgzMIQZGMIMDGEGhjADQ5iBIczAEGZgCDMwhBkYwgwMYQaGMANDmIEhzMAQZmAIMzCEGRjCDAxhBoYwA0OYgSHMwBBmYAgzMIQZGMIMDGEGhjADQ5iBIczAEGZgCDMwhBkYwgwMYQaGMANDmIEhzMAQZmAIMzCEGRjCDAxhBoYwA0OYgSHMwBBmYAgzMIQZGMIMDGEGhjADQ5iBIczAEGZgCDMwhBkYwgwMYQaGMANDmIEhzMAQZmAIMzCEGRjCDAxhBoYwA0OYgSHMwBBmYAgzMIQZGMIMDGEGhjADQ5iBIczAEGZgCDMwhBkYwgwMYQaGMANDmIEhzMAQZmAIMzCEGRjCDAxhBoYwA0OYgSHMwBBmYAgzMIQZGMIMDGEGhjADQ5iBIczAEGZgCDMwhBkYwgwMYQaGMANDmIEhzMAQZmAIMzCEfbc9QNH+ZGcIKpG0D3QAAAAASUVORK5CYII="})),r.createElement(h,null,r.createElement(f,null,"Loading..."),r.createElement(M,null,"Loading..."))):n?r.createElement(d,null,r.createElement(c.Link,{to:"../../account"},r.createElement(p,{src:t.picture,alt:"Avatar"})),r.createElement(h,null,r.createElement(f,null,t.nickname),r.createElement(M,{onClick:function(){return o()}},"Sign Out"))):void 0}var w=n(5548),C=n.n(w),E=a.ZP.header.withConfig({displayName:"Menu__Header",componentId:"sc-1k08flu-0"})(["margin:auto;background-color:white;border-bottom:2px solid #ccc;position:fixed;width:100%;z-index:1000;"]),v=a.ZP.nav.withConfig({displayName:"Menu__Navbar",componentId:"sc-1k08flu-1"})(["display:flex;flex-wrap:wrap;justify-content:space-between;margin:0 auto;max-width:90rem;padding:0.5rem 0.8rem;@media (max-width:60rem){justify-content:space-between;}"]),b=(0,a.ZP)(c.Link).withConfig({displayName:"Menu__Logo",componentId:"sc-1k08flu-2"})(["&:hover{filter:brightness(50%);}@media (max-width:60rem){order:1;}"]),D=a.ZP.div.withConfig({displayName:"Menu__MenuItems",componentId:"sc-1k08flu-3"})(["display:flex;align-items:center;flex-wrap:wrap;@media (max-width:60rem){display:none;margin-top:1rem;}"]),B=a.ZP.div.withConfig({displayName:"Menu__ItemContainer",componentId:"sc-1k08flu-4"})(["display:flex;"]),y=(0,a.ZP)(c.Link).withConfig({displayName:"Menu__Item",componentId:"sc-1k08flu-5"})(["color:#999999;font-size:1rem;font-weight:600;text-decoration:none;margin-left:0.5rem;margin-right:1.5rem;display:flex;> img{margin-right:0.5rem;width:18px;}&:hover{filter:brightness(50%);}"]);function k(){return r.createElement(E,null,r.createElement(v,null,r.createElement(b,{to:"/"},r.createElement(C(),null)),r.createElement(g,{icon:r.createElement(i(),null)},r.createElement(s,null)),r.createElement(D,null,r.createElement(B,null,r.createElement(y,{to:"/"},r.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjguMTgxODIiIGhlaWdodD0iOC4xODE4MiIgZmlsbD0iIzk5OTk5OSIvPgo8cmVjdCB4PSI5LjgxODE4IiB3aWR0aD0iOC4xODE4MiIgaGVpZ2h0PSI4LjE4MTgyIiBmaWxsPSIjOTk5OTk5Ii8+CjxyZWN0IHg9IjkuODE4MTgiIHk9IjkuODE4MTgiIHdpZHRoPSI4LjE4MTgyIiBoZWlnaHQ9IjguMTgxODIiIGZpbGw9IiM5OTk5OTkiLz4KPHJlY3QgeT0iOS44MTgxOCIgd2lkdGg9IjguMTgxODIiIGhlaWdodD0iOC4xODE4MiIgZmlsbD0iIzk5OTk5OSIvPgo8L3N2Zz4K",alt:"Library icon"}),"Library")),r.createElement(B,null,r.createElement(y,{to:"/to-read"},r.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyMCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeT0iMTIiIHdpZHRoPSIyMCIgaGVpZ2h0PSI0IiBmaWxsPSIjOTk5OTk5Ii8+CjxyZWN0IHk9IjYiIHdpZHRoPSIyMCIgaGVpZ2h0PSI0IiBmaWxsPSIjOTk5OTk5Ii8+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSI0IiBmaWxsPSIjOTk5OTk5Ii8+Cjwvc3ZnPgo=",alt:"To-read icon"}),"To-read")),r.createElement(B,null,r.createElement(y,{to:"/add-book"},r.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxOSAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iNi4xMDM1MmUtMDUiIHk9IjgiIHdpZHRoPSIxOSIgaGVpZ2h0PSI0IiBmaWxsPSIjOTk5OTk5Ii8+CjxyZWN0IHg9IjcuNTAwMDYiIHk9IjE5LjUiIHdpZHRoPSIxOSIgaGVpZ2h0PSI0IiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgNy41MDAwNiAxOS41KSIgZmlsbD0iIzk5OTk5OSIvPgo8L3N2Zz4K",alt:"Add icon"}),"Add Book"))),r.createElement(I,null)))}var x=n(4816),j=n(3650),G=n(6653),Z=a.ZP.main.withConfig({displayName:"Layout__Main",componentId:"sc-1s8t6gb-0"})(["margin:0 auto 1rem auto;max-width:90rem;padding:3rem 1rem 0 1rem;"]),Y=a.ZP.img.withConfig({displayName:"Layout__Logo",componentId:"sc-1s8t6gb-1"})(["width:12rem;"]),Q=a.ZP.h1.withConfig({displayName:"Layout__VerifyMessage",componentId:"sc-1s8t6gb-2"})(["margin-top:2rem;margin-bottom:2rem;max-width:25rem;font-size:1.2rem;font-weight:500;color:var(--gray);text-align:center;"]),N=a.ZP.button.withConfig({displayName:"Layout__LogoutBtn",componentId:"sc-1s8t6gb-3"})(["border-radius:var(--round);padding:0.8rem 2rem;background:#888;color:var(--white);font-size:1rem;&:hover{background:#555;}"]),z=function(e){var t=e.children,n=(0,A.D3)(),a=n.isAuthenticated,o=n.isLoading,i=n.user,c=n.logout;return i&&!1===i.email_verified?r.createElement(j.i,{minHeight:"100vh"},r.createElement(Y,{src:G.Z,alt:"Jotter logo"}),r.createElement(Q,null,"Please check your email inbox and verfiy your account to continue using Jotter. Then, log out and sign in again to start using Jotter."),r.createElement(N,{onClick:function(){return c()}},"Log out")):o||a?r.createElement(r.Fragment,null,r.createElement(k,null),r.createElement(Z,null,t)):r.createElement(x.nf,null)}},3144:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),a=n(9925),o=a.ZP.div.withConfig({displayName:"SearchBar__SearchArea",componentId:"sc-13f2py2-0"})(["display:flex;justify-content:flex-end;background:white;border:var(--gray-border);border-radius:var(--round);"]),i=a.ZP.form.withConfig({displayName:"SearchBar__Form",componentId:"sc-13f2py2-1"})(["display:flex;border-radius:var(--round);flex-grow:0;"]),A=a.ZP.input.withConfig({displayName:"SearchBar__Input",componentId:"sc-13f2py2-2"})(["padding:0.7rem 1rem;border-radius:var(--round);border:none;color:#949494;font-weight:600;font-size:1.1rem;background:white;::placeholder{color:#bebebe;}:focus{outline:none;}"]),c=a.ZP.button.withConfig({displayName:"SearchBar__Button",componentId:"sc-13f2py2-3"})(["padding:0.2rem 0.4rem;border-radius:var(--round);background-color:#bebebe;cursor:pointer;&:focus{outline:none;}&:hover{background:#949494;}"]),u=a.ZP.div.withConfig({displayName:"SearchBar__Submit",componentId:"sc-13f2py2-4"})(["padding:0.3rem;"]),l=function(e){var t=e.searchBook,n=e.handleSearch,a=e.placeholder;return e.submittable?r.createElement(o,null,r.createElement(i,{onSubmit:t},r.createElement(A,{type:"text",name:"",id:"",required:!0,onChange:n,placeholder:a}),r.createElement(u,null,r.createElement(c,{type:"submit"},r.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDE4QzExLjg0NiAxOCAxMy41NDMgMTcuMzY1IDE0Ljg5NyAxNi4zMTJMMTkuMjkzIDIwLjcwOEwyMC43MDcgMTkuMjk0TDE2LjMxMSAxNC44OThDMTcuMzY1IDEzLjU0MyAxOCAxMS44NDYgMTggMTBDMTggNS41ODkgMTQuNDExIDIgMTAgMkM1LjU4OSAyIDIgNS41ODkgMiAxMEMyIDE0LjQxMSA1LjU4OSAxOCAxMCAxOFpNMTAgNEMxMy4zMDkgNCAxNiA2LjY5MSAxNiAxMEMxNiAxMy4zMDkgMTMuMzA5IDE2IDEwIDE2QzYuNjkxIDE2IDQgMTMuMzA5IDQgMTBDNCA2LjY5MSA2LjY5MSA0IDEwIDRaIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo=",alt:"Search Icon"}))))):r.createElement(o,null,r.createElement(i,{onSubmit:function(e){e.preventDefault()}},r.createElement(A,{type:"text",name:"",id:"",required:!0,onChange:n,placeholder:a})))}},4816:function(e,t,n){"use strict";n.d(t,{Cq:function(){return u},nf:function(){return l}});var r=n(9756),a=n(7294),o=n(3835),i=n(5444),A=n(7704),c=n(7630),u=function(e){e.component,(0,r.Z)(e,["component"]);return(0,i.navigate)("/"),a.createElement(A.default,null)},l=function(){var e=(0,o.D3)(),t=e.loading,n=e.isAuthenticated;return t||n?null:((0,i.navigate)("/login"),a.createElement(c.default,null))}},1234:function(e,t,n){"use strict";var r=n(2137),a=n(7757),o=n.n(a),i=n(7294);t.Z=function(e){var t=e.user,n=e.from,a=(0,i.useState)(!1),A=a[0],c=a[1],u=(0,i.useState)(null),l=u[0],s=u[1],m=(0,i.useState)(null),g=m[0],d=m[1];return(0,i.useEffect)((function(){null===l&&function(){var e=(0,r.Z)(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=12;break}return e.prev=1,e.next=4,n(t.email);case 4:r=e.sent,s(r),c(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),d(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[t,n,l]),{data:l,hasFetched:A,error:g}}},7704:function(e,t,n){"use strict";n.r(t);var r=n(7294),a=n(655),o=n(2352),i=n(3835),A=n(383),c=n(508),u=n(3650),l=n(1234),s=n(1228),m=n(6471),g=n(3144),d=n(8557);t.default=function(){var e=(0,i.D3)().user,t=(0,l.Z)({user:e,from:c.av}),n=t.data,p=t.hasFetched,f=t.error,M=(0,r.useState)(""),h=M[0],I=M[1];return r.createElement(a.Z,null,r.createElement(m.Z,{header:"Library",subheader:"All your books in one place"},r.createElement(g.Z,{searchBook:function(e){e.preventDefault()},handleSearch:function(e){I(e.target.value)},placeholder:"Search a book"})),f&&r.createElement(s.Z,{message:"Sorry, we ran into a problem while loading your library. Try again by refreshing this page."}),n&&r.createElement(A.F6,null,n.filter((function(e){return""===h||e.bookTitle.toUpperCase().includes(h.toUpperCase())?e:null})).map((function(e){return r.createElement(A.ZP,{key:e.bookTitle+e.cover,to:"/book?id="+e.isbn,isbn:e.isbn,shouldHover:!0,cover:e.cover,title:e.bookTitle,author:e.author.join(", "),date:e.year,percentageRead:e.percentageRead})})),0===n.length&&r.createElement(d.o,null,"You don't have any books in your library yet.")),!p&&r.createElement(u.i,{minHeight:"60vh"},r.createElement(u.g,{minHeight:"50vh",src:o.Z,alt:"Loading icon",className:"rotating"})))}},7630:function(e,t,n){"use strict";n.r(t);var r=n(7294),a=n(9925),o=n(6653),i=n(2352),A=n(3835),c=n(4816),u=n(3650),l=n(9785),s=n(6891),m=n(9061),g=a.ZP.img.withConfig({displayName:"login__Logo",componentId:"x4eaaw-0"})(["width:12rem;"]),d=a.ZP.h1.withConfig({displayName:"login__Greeting",componentId:"x4eaaw-1"})(["margin-top:2rem;margin-bottom:2rem;max-width:25rem;font-size:1.5rem;font-weight:500;color:var(--gray);text-align:center;"]);t.default=function(){var e=(0,A.D3)(),t=e.isAuthenticated,n=e.isLoading;return n||t?n?r.createElement(u.i,null,r.createElement(u.g,{minHeight:"60vh",src:i.Z,alt:"Loading icon",className:"rotating"})):r.createElement(c.Cq,null):r.createElement(u.i,{minHeight:"100vh"},r.createElement(g,{src:o.Z,alt:"Jotter logo"}),r.createElement(d,null,"Write and keep notes on your favourite books. "),r.createElement(m._,null,r.createElement(l.Z,null),r.createElement(s.Z,null)))}},508:function(e,t,n){"use strict";n.d(t,{av:function(){return u},yy:function(){return l},Jl:function(){return s},Zo:function(){return m},_J:function(){return g},T_:function(){return d},MC:function(){return p},vK:function(){return f},AL:function(){return M},Kk:function(){return h},Qk:function(){return I},f_:function(){return w},qC:function(){return C}});var r=n(2137),a=n(7757),o=n.n(a),i=n(1070),A=n.n(i),c=n(3092),u=function(){var e=(0,r.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A().get(c.baseurl+"get-library?user="+t);case 3:return n=e.sent,e.abrupt("return",n.data[0].library);case 7:e.prev=7,e.t0=e.catch(0),console.error("getLibrary error:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(o().mark((function e(t,n,r,a,i,u,l){var s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A().post(c.baseurl+"add-book-library",null,{params:{user:t,title:n,bookAuthor:r,bookYear:a,bookCover:i,bookAddedDate:u,bookIsbn:l}});case 3:return s=e.sent,e.abrupt("return",s.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,r,a,o,i,A){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A().get(c.baseurl+"get-to-read?user="+t);case 3:return n=e.sent,e.abrupt("return",n.data[0].toRead);case 7:e.prev=7,e.t0=e.catch(0),console.error("getToRead error:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(o().mark((function e(t,n,r,a,i,u,l){var s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A().post(c.baseurl+"add-book-to-read",null,{params:{user:t,title:n,bookAuthor:r,bookYear:a,bookCover:i,bookAddedDate:u,bookIsbn:l}});case 3:return s=e.sent,e.abrupt("return",s.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,r,a,o,i,A){return e.apply(this,arguments)}}(),g=function(){var e=(0,r.Z)(o().mark((function e(t,n,r){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A().post(c.baseurl+"update-percentage-read",null,{params:{user:t,bookID:n,percentageRead:r}});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,r){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(o().mark((function e(t,n){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A().get(c.baseurl+"get-percentage-read?user="+t+"&bookID="+n);case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.error("getToRead error:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(o().mark((function e(t,n){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A().post(c.baseurl+"delete-book",null,{params:{user:t,bookID:n}});case 3:return r=e.sent,e.abrupt("return",r);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(o().mark((function e(t,n){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A().post(c.baseurl+"move-to-library",null,{params:{user:t,bookID:n}});case 3:return r=e.sent,e.abrupt("return",r);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),M=function(){var e=(0,r.Z)(o().mark((function e(t,n,r,a,i,u){var l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A().post(c.baseurl+"add-note",null,{params:{user:t,date:n,title:r,content:a,bookID:i,noteID:u}});case 3:return l=e.sent,e.abrupt("return",l);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,r,a,o,i){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(o().mark((function e(t,n){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A().get(c.baseurl+"get-notes?user="+t+"&bookID="+n);case 3:return r=e.sent,e.abrupt("return",r.data[0].library[0].notes);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),I=function(){var e=(0,r.Z)(o().mark((function e(t,n,r,a,i){var u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A().post(c.baseurl+"update-note",null,{params:{user:t,title:n,content:r,bookID:a,noteID:i}});case 3:return u=e.sent,e.abrupt("return",u);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,r,a,o){return e.apply(this,arguments)}}(),w=function(){var e=(0,r.Z)(o().mark((function e(t,n,r){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A().post(c.baseurl+"delete-note",null,{params:{user:t,bookID:n,noteID:r}});case 3:return a=e.sent,e.abrupt("return",a);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,r){return e.apply(this,arguments)}}(),C=function(){var e=(0,r.Z)(o().mark((function e(t,n,r){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A().get(c.baseurl+"get-note?user="+t+"&bookID="+n+"&noteID="+r);case 3:return a=e.sent,e.abrupt("return",a.data[0].library.notes);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,r){return e.apply(this,arguments)}}()},8603:function(e,t,n){var r=n(7294);function a(e){return r.createElement("svg",e,[r.createElement("rect",{x:"1",y:"1",width:"23",height:"23",fill:"white",stroke:"#C4C4C4",strokeWidth:"2",key:0}),r.createElement("path",{d:"M19 10.5L12.5 15L6 10.5",stroke:"#C4C4C4",strokeWidth:"2",key:1})])}a.defaultProps={width:"25",height:"25",viewBox:"0 0 25 25",fill:"none"},e.exports=a,a.default=a},5548:function(e,t,n){var r=n(7294);function a(e){return r.createElement("svg",e,[r.createElement("path",{d:"M6.075 23.25C4.825 23.25 3.81667 23.0333 3.05 22.6C2.28333 22.15 1.725 21.5417 1.375 20.775C1.04167 20.0083 0.875 19.125 0.875 18.125H4.175C4.175 18.6917 4.29167 19.1917 4.525 19.625C4.775 20.0417 5.25 20.25 5.95 20.25C6.55 20.25 6.99167 20.0667 7.275 19.7C7.55833 19.3167 7.7 18.5667 7.7 17.45V11.575H4.75V8.925H11.2V16.85C11.2 17.8167 11.1333 18.7 11 19.5C10.8833 20.2833 10.65 20.9583 10.3 21.525C9.95 22.075 9.43333 22.5 8.75 22.8C8.08333 23.1 7.19167 23.25 6.075 23.25ZM18.6703 23.25C17.4536 23.25 16.437 23.025 15.6203 22.575C14.8036 22.1083 14.1953 21.475 13.7953 20.675C13.3953 19.875 13.1953 18.9667 13.1953 17.95C13.1786 16.9167 13.3703 16.0083 13.7703 15.225C14.1703 14.425 14.7786 13.7917 15.5953 13.325C16.4286 12.8583 17.4536 12.625 18.6703 12.625C20.4536 12.625 21.8036 13.1167 22.7203 14.1C23.6536 15.0667 24.1203 16.35 24.1203 17.95C24.1203 18.95 23.9203 19.85 23.5203 20.65C23.137 21.45 22.5453 22.0833 21.7453 22.55C20.9453 23.0167 19.9203 23.25 18.6703 23.25ZM18.6703 20.35C19.287 20.35 19.7453 20.225 20.0453 19.975C20.3453 19.725 20.537 19.4083 20.6203 19.025C20.7203 18.625 20.7703 18.225 20.7703 17.825C20.7703 17.4083 20.7203 17.0083 20.6203 16.625C20.537 16.2417 20.3453 15.925 20.0453 15.675C19.7453 15.4083 19.287 15.275 18.6703 15.275C18.0536 15.275 17.587 15.4083 17.2703 15.675C16.9703 15.925 16.7703 16.2417 16.6703 16.625C16.587 17.0083 16.5453 17.4083 16.5453 17.825C16.5453 18.225 16.587 18.625 16.6703 19.025C16.7703 19.4083 16.9703 19.725 17.2703 19.975C17.587 20.225 18.0536 20.35 18.6703 20.35ZM29.9529 23C28.9529 23 28.1613 22.7667 27.5779 22.3C26.9946 21.8333 26.7029 20.9833 26.7029 19.75V15.025H25.2529V12.65C25.6529 12.65 25.9946 12.5917 26.2779 12.475C26.5779 12.3583 26.8029 12.1167 26.9529 11.75C27.1196 11.3667 27.2029 10.7917 27.2029 10.025H29.9529V12.65H32.2779V15.025H29.9529V20.325H32.3529V23H29.9529ZM38.3025 23C37.3025 23 36.5109 22.7667 35.9275 22.3C35.3442 21.8333 35.0525 20.9833 35.0525 19.75V15.025H33.6025V12.65C34.0025 12.65 34.3442 12.5917 34.6275 12.475C34.9275 12.3583 35.1525 12.1167 35.3025 11.75C35.4692 11.3667 35.5525 10.7917 35.5525 10.025H38.3025V12.65H40.6275V15.025H38.3025V20.325H40.7025V23H38.3025ZM47.4521 23.25C46.2021 23.25 45.1938 23 44.4271 22.5C43.6605 22 43.0938 21.3583 42.7271 20.575C42.3771 19.775 42.1855 18.9417 42.1521 18.075C42.1188 16.9417 42.3188 15.9667 42.7521 15.15C43.1855 14.3167 43.7938 13.6833 44.5771 13.25C45.3771 12.8 46.2938 12.575 47.3271 12.575C48.3105 12.575 49.1855 12.7833 49.9521 13.2C50.7355 13.6 51.3438 14.175 51.7771 14.925C52.2271 15.675 52.4521 16.575 52.4521 17.625V18.275H45.4521C45.4521 19.0083 45.6271 19.5417 45.9771 19.875C46.3438 20.2083 46.8105 20.375 47.3771 20.375C47.8605 20.375 48.2438 20.2667 48.5271 20.05C48.8271 19.8167 49.0021 19.525 49.0521 19.175H52.4271C52.3771 19.9083 52.1605 20.5917 51.7771 21.225C51.3938 21.8417 50.8438 22.3333 50.1271 22.7C49.4105 23.0667 48.5188 23.25 47.4521 23.25ZM45.5021 16.875H48.9521C48.9521 16.875 48.9438 16.8 48.9271 16.65C48.9271 16.5 48.8771 16.325 48.7771 16.125C48.6771 15.925 48.5105 15.75 48.2771 15.6C48.0438 15.45 47.7021 15.375 47.2521 15.375C46.8021 15.375 46.4521 15.45 46.2021 15.6C45.9521 15.75 45.7771 15.925 45.6771 16.125C45.5938 16.325 45.5438 16.5 45.5271 16.65C45.5105 16.8 45.5021 16.875 45.5021 16.875ZM54.293 23V12.65H57.593L57.818 15.6C57.918 15.1667 58.1096 14.725 58.393 14.275C58.6763 13.8083 59.0846 13.425 59.618 13.125C60.1513 12.8083 60.8513 12.65 61.718 12.65H61.943V16.525H61.693C60.8596 16.525 60.1513 16.575 59.568 16.675C58.9846 16.775 58.543 16.9917 58.243 17.325C57.943 17.6417 57.793 18.1583 57.793 18.875V23H54.293Z",fill:"#585858",key:0}),r.createElement("path",{d:"M1.5 27.5L58 25V26.5L1.5 29V27.5Z",fill:"#585858",stroke:"#585858",strokeWidth:"0.5",key:1})])}a.defaultProps={width:"64",height:"30",viewBox:"0 0 64 30",fill:"none"},e.exports=a,a.default=a},2352:function(e,t){"use strict";t.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjQzVDNUM1Ij48cGF0aCBkPSJNMTIsMjJjNS40MjEsMCwxMC00LjU3OSwxMC0xMGgtMmMwLDQuMzM3LTMuNjYzLDgtOCw4cy04LTMuNjYzLTgtOGMwLTQuMzM2LDMuNjYzLTgsOC04VjJDNi41NzksMiwyLDYuNTgsMiwxMiBDMiwxNy40MjEsNi41NzksMjIsMTIsMjJ6Ii8+PC9zdmc+"},7353:function(e,t){"use strict";t.Z="data:image/png;base64,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"}}]);
//# sourceMappingURL=4d3a1538b5cfbb18e0e6a3eab62b996b2e7ee273-9640d001c63b8b957075.js.map