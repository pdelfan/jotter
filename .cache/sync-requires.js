
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/pouria/Documents/GitHub/jotter/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/pouria/Documents/GitHub/jotter/src/pages/404.js")),
  "component---src-pages-account-js": preferDefault(require("/Users/pouria/Documents/GitHub/jotter/src/pages/account.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/pouria/Documents/GitHub/jotter/src/pages/index.js"))
}

