
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/pouria/Documents/GitHub/jotter/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/pouria/Documents/GitHub/jotter/src/pages/about.js")),
  "component---src-pages-account-js": preferDefault(require("/Users/pouria/Documents/GitHub/jotter/src/pages/account.js")),
  "component---src-pages-add-book-js": preferDefault(require("/Users/pouria/Documents/GitHub/jotter/src/pages/add-book.js")),
  "component---src-pages-add-note-js": preferDefault(require("/Users/pouria/Documents/GitHub/jotter/src/pages/add-note.js")),
  "component---src-pages-book-js": preferDefault(require("/Users/pouria/Documents/GitHub/jotter/src/pages/book.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/pouria/Documents/GitHub/jotter/src/pages/index.js")),
  "component---src-pages-login-js": preferDefault(require("/Users/pouria/Documents/GitHub/jotter/src/pages/login.js")),
  "component---src-pages-note-js": preferDefault(require("/Users/pouria/Documents/GitHub/jotter/src/pages/note.js")),
  "component---src-pages-searched-book-js": preferDefault(require("/Users/pouria/Documents/GitHub/jotter/src/pages/searched-book.js")),
  "component---src-pages-to-read-book-js": preferDefault(require("/Users/pouria/Documents/GitHub/jotter/src/pages/to-read-book.js")),
  "component---src-pages-to-read-js": preferDefault(require("/Users/pouria/Documents/GitHub/jotter/src/pages/to-read.js"))
}

