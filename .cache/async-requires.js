// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-account-js": () => import("./../../../src/pages/account.js" /* webpackChunkName: "component---src-pages-account-js" */),
  "component---src-pages-add-book-js": () => import("./../../../src/pages/add-book.js" /* webpackChunkName: "component---src-pages-add-book-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

