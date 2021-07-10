(self.webpackChunkjotter=self.webpackChunkjotter||[]).push([[334],{5681:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var r,o,a,u,c,i=t(7329),l=t(7294),d=t(1608),s=t(6471),M=t(5761),g=t(9925),m=g.ZP.div(r||(r=(0,M.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);\n  background: white;\n  border: var(--general-border);\n  border-radius: 15px;\n"]))),b=g.ZP.form(o||(o=(0,M.Z)(["\n  display: flex;\n  border-radius: 15px;\n  flex-grow: 0;\n"]))),h=g.ZP.input(a||(a=(0,M.Z)(["\n  padding: 0.8rem 1rem;\n  border-radius: 15px;\n  border: none;\n  color: #949494;\n  font-weight: 600;\n  font-size: 1.1rem;\n  background: white;\n\n  ::placeholder {\n    color: #bebebe;\n  }\n"]))),x=g.ZP.button(u||(u=(0,M.Z)(["\n  padding: 0.3rem 0.6rem;\n  border-radius: 15px;\n  background-color: #bebebe;\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:hover {\n    background: #949494;\n  }\n"]))),p=g.ZP.div(c||(c=(0,M.Z)(["\n  padding: 0.3rem;\n"]))),f=function(e){var n=e.searchBook,t=e.handleSearch,r=e.placeholder;return e.submittable?l.createElement(m,null,l.createElement(b,{onSubmit:n},l.createElement(h,{type:"text",name:"",id:"",required:!0,onChange:t,placeholder:r}),l.createElement(p,null,l.createElement(x,{type:"submit"},l.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDE4QzExLjg0NiAxOCAxMy41NDMgMTcuMzY1IDE0Ljg5NyAxNi4zMTJMMTkuMjkzIDIwLjcwOEwyMC43MDcgMTkuMjk0TDE2LjMxMSAxNC44OThDMTcuMzY1IDEzLjU0MyAxOCAxMS44NDYgMTggMTBDMTggNS41ODkgMTQuNDExIDIgMTAgMkM1LjU4OSAyIDIgNS41ODkgMiAxMEMyIDE0LjQxMSA1LjU4OSAxOCAxMCAxOFpNMTAgNEMxMy4zMDkgNCAxNiA2LjY5MSAxNiAxMEMxNiAxMy4zMDkgMTMuMzA5IDE2IDEwIDE2QzYuNjkxIDE2IDQgMTMuMzA5IDQgMTBDNCA2LjY5MSA2LjY5MSA0IDEwIDRaIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo=",alt:"Search Icon"}))))):l.createElement(m,null,l.createElement(b,{onSubmit:function(e){e.preventDefault()}},l.createElement(h,{type:"text",name:"",id:"",required:!0,onChange:t,placeholder:r})))},D=t(383),E=t(2352),A=t(3650),I=t(1600),k=function(){var e=(0,l.useState)([]),n=e[0],t=e[1],r=(0,l.useState)(""),o=r[0],a=r[1],u=(0,l.useState)(!1),c=u[0],M=u[1];return l.createElement(d.Z,null,l.createElement(s.Z,{header:"Add Book",subheader:"Find a book and add it to your collection"},l.createElement(f,{searchBook:function(e){e.preventDefault(),M(!0),(0,I.Q)(o).then((function(e){return e.json()})).then((function(e){M(!1);var n=e.items.map((function(e){return(0,D.Gu)(e)}));t((0,i.Z)(n))})).catch((function(e){return console.log(e.message)}))},handleSearch:function(e){a(e.target.value)},placeholder:"Search for books",submittable:!0})),l.createElement(D.F6,null,c&&l.createElement(A.g,{minHeight:"60vh",src:E.Z,alt:"Loading icon",className:"rotating"}),!c&&n.map((function(e,n){return l.createElement(D.ZP,{key:n,to:"/searched-book",isbn:e.isbn,cover:e.cover,title:e.title,author:e.author,date:e.date})}))))}},1600:function(e,n,t){"use strict";function r(e){return fetch("https://www.googleapis.com/books/v1/volumes?q="+e+"&maxResults=20")}function o(e){return fetch("https://www.googleapis.com/books/v1/volumes/"+e)}t.d(n,{Q:function(){return r},t:function(){return o}})}}]);
//# sourceMappingURL=component---src-pages-add-book-js-c552fc52f090e927b526.js.map