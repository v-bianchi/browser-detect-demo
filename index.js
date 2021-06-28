const express = require('express')
const browser = require('browser-detect')
const app = express()
const port = 3000

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  const userAgentInfo = browser(req.headers['user-agent'])
  console.log(userAgentInfo)
  res.render('index.html.ejs', { userAgentInfo })
})

app.listen(port, () => {
  console.log(`Browser detect demo listening at http://localhost:${port}`)
})