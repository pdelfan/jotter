(self.webpackChunkjotter=self.webpackChunkjotter||[]).push([[849],{4483:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var a=r(7294),o=r(655),n=r(2352),i=r(3835),l=r(508),c=r(3650),u=r(1234),s=r(1228),h=r(383),d=r(6471),b=r(3144),m=r(8557);function f(){var e=(0,i.D3)().isAuthenticated,t=(0,u.Z)({isAuthenticated:e,from:l.Jl}),r=t.data,f=t.hasFetched,k=t.error,g=t.loading,p=(0,a.useState)(""),v=p[0],y=p[1];return a.createElement(o.Z,{title:"To-read"},a.createElement(d.Z,{header:"To-read",subheader:"The books you want to read later"},a.createElement(b.Z,{searchBook:function(e){e.preventDefault()},handleSearch:function(e){y(e.target.value)},placeholder:"Search a book"})),k&&a.createElement(s.Z,{message:"Sorry, we ran into a problem while loading your to-read books. Try again by refreshing this page."}),f&&a.createElement(h.F6,null,r.filter((function(e){return""===v||e.bookTitle.toUpperCase().includes(v.toUpperCase())?e:null})).map((function(e){return a.createElement(h.ZP,{key:e.bookTitle+e.cover,to:"/to-read-book?id="+e.isbn,isbn:e.isbn,cover:e.cover,title:e.bookTitle,author:e.author.join(", "),date:e.year})}))),g&&a.createElement(c.i,{minHeight:"40vh"},a.createElement(c.g,{minHeight:"50vh",src:n.Z,alt:"Loading icon",className:"rotating"})),f&&0===r.length&&a.createElement(m.o,null,"You don't have any books in your to-read yet."))}}}]);
//# sourceMappingURL=component---src-pages-to-read-js-dfe84ea466c569a47271.js.map