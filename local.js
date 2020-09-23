const express = require('express')
const app = express()
const port = 3000

app.use('/build', express.static('build'));
app.use('/img', express.static('img'));
app.use('/fonts/', express.static('public/fonts'));

app.get('/euclid/*', (req, res) => {
  res.sendFile(__dirname + '/euclid.html');
})

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
