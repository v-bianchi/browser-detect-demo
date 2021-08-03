const express = require('express')
const browser = require('browser-detect')
const { detect: detectBrowser } = require('detect-browser');
const app = express()
const port = process.env.PORT || 3000

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  const browserDetectResults = browser(req.headers['user-agent'])
  const detectBrowserResults = detectBrowser(req.headers['user-agent'])
  res.render('index.html.ejs', { browserDetectResults, detectBrowserResults })
})

app.listen(port, () => {
  console.log(`Browser detect demo listening at http://localhost:${port}`)
})