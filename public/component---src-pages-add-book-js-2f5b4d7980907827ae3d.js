(self.webpackChunkjotter=self.webpackChunkjotter||[]).push([[334],{4586:function(A,e,n){"use strict";n.r(e),n.d(e,{default:function(){return b}});var g,r,t,a,M,o,i,B=n(7329),C=n(5761),l=n(7294),E=n(9319),w=n(846),d=n(9925),u=d.ZP.div(g||(g=(0,C.Z)(["\n  display: flex;\n  justify-content: flex-end;  \n"]))),D=d.ZP.form(r||(r=(0,C.Z)(["\n  display: flex;\n  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);\n  border-radius: var(--round);\n  flex-grow: 0;\n"]))),I=d.ZP.input(t||(t=(0,C.Z)(["\n  padding: 0.8rem 1rem;\n  border-radius: 15px 0 0 15px;\n  border-top: var(--general-border);\n  border-bottom: var(--general-border);\n  border-left: var(--general-border);\n  border-right: none;\n  color: #949494;\n  font-weight: 600;\n  font-size: 1.1rem;\n"]))),j=d.ZP.button(a||(a=(0,C.Z)(["\n  padding: 0.4rem 1rem;\n  border-radius: 0 15px 15px 0;\n  border-top: var(--general-border);\n  border-bottom: var(--general-border);\n  border-right: var(--general-border);\n  border-left: none;\n  background-color: white;\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n  }\n\n  > img {\n    &:hover {\n      filter: brightness(30%);\n    }\n  }\n"]))),c=function(A){var e=A.searchBook,n=A.handleSearch;return l.createElement(u,null,l.createElement(D,{onSubmit:e},l.createElement(I,{type:"text",name:"",id:"",required:!0,onChange:n}),l.createElement(j,{type:"submit"},l.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDE4QzExLjg0NiAxOCAxMy41NDMgMTcuMzY1IDE0Ljg5NyAxNi4zMTJMMTkuMjkzIDIwLjcwOEwyMC43MDcgMTkuMjk0TDE2LjMxMSAxNC44OThDMTcuMzY1IDEzLjU0MyAxOCAxMS44NDYgMTggMTBDMTggNS41ODkgMTQuNDExIDIgMTAgMkM1LjU4OSAyIDIgNS41ODkgMiAxMEMyIDE0LjQxMSA1LjU4OSAxOCAxMCAxOFpNMTAgNEMxMy4zMDkgNCAxNiA2LjY5MSAxNiAxMEMxNiAxMy4zMDkgMTMuMzA5IDE2IDEwIDE2QzYuNjkxIDE2IDQgMTMuMzA5IDQgMTBDNCA2LjY5MSA2LjY5MSA0IDEwIDRaIiBmaWxsPSIjOTQ5NDk0Ii8+Cjwvc3ZnPgo=",alt:"Search Icon"}))))},G=n(9932),m=n(8105),Q=n(2352),Y=n(508),f=n(4558),s=d.ZP.div(M||(M=(0,C.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-end;\n  justify-content: space-between;\n  row-gap: 2rem;\n"]))),v=d.ZP.div(o||(o=(0,C.Z)(["\n  display: flex;\n  column-gap: 0.5rem;\n"]))),x=d.ZP.img(i||(i=(0,C.Z)(["\n  width: 8rem;\n  margin: 1rem auto 1rem auto;\n  -webkit-animation: spin 4s linear infinite;\n  -moz-animation: spin 4s linear infinite;\n  animation: spin 4s linear infinite;\n  min-height: 60vh;\n"]))),b=function(){var A=(0,f.D3)().user,e=(0,l.useState)([]),n=e[0],g=e[1],r=(0,l.useState)(""),t=r[0],a=r[1],M=(0,l.useState)(!1),o=M[0],i=M[1];return l.createElement(E.Z,null,l.createElement(s,null,l.createElement("div",null,l.createElement(w.X,null,"Add Book"),l.createElement(w.G,null,"Find a book and add it to your collection")),l.createElement(c,{searchBook:function(A){i(!0),A.preventDefault(),fetch("https://www.googleapis.com/books/v1/volumes?q="+t+"&maxResults=20").then((function(A){return A.json()})).then((function(A){i(!1),g((0,B.Z)(A.items)),console.log(A)})).catch((function(A){return console.log(A.message)}))},handleSearch:function(A){a(A.target.value)}})),l.createElement(G.F,null,o?l.createElement(x,{src:Q.Z,alt:"Loading icon",className:"rotating"}):n.map((function(e,n){var g=void 0===e.volumeInfo.title?"Unknown Title":e.volumeInfo.title,r=void 0!==e.volumeInfo.authors?e.volumeInfo.authors.join(", "):"Unknown Author",t=void 0===e.volumeInfo.imageLinks?"data:image/png;base64,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":""+e.volumeInfo.imageLinks.thumbnail,a=void 0===e.volumeInfo.publishedDate?"Unknown Date":e.volumeInfo.publishedDate.split("-")[0],M=e.id;return l.createElement(G.Z,{key:n,cover:t,title:g,author:r,date:a},l.createElement(v,null,l.createElement(m.kc,{handleAddToLibrary:function(){return(0,Y.v)(A.nickname,g,r,a,t,new Date,M)}}),l.createElement(m.Vq,null)))}))))}}}]);
//# sourceMappingURL=component---src-pages-add-book-js-2f5b4d7980907827ae3d.js.map