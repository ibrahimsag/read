const fs = require('fs/promises');
const express = require('express')
const app = express()
const port = 3000

app.use('/build', express.static('build'));
app.use('/img', express.static('img'));
app.use('/fonts/', express.static('public/fonts'));
app.use('/fonts/', express.static('public/fonts'));
app.use('/js/', express.static('public/js'));
app.use('/', express.static('.'));

app.use(express.json());

app.get('/favicon.svg', (req, res) => {
  res.sendFile(__dirname + '/public/favicon.svg');
})

app.post('/store', (req, res) => {
  let d = req.body;
  if(!d.key || !d.contents)
  {
    res.send({ message: 'missing parameters' });
    return;
  }
  fs.writeFile(d.key, JSON.stringify(d.contents)).then(err => {
    if(err)
    {
      console.error(err);
      res.send({ message: 'error' });
    }
    else
    {
      res.send({ message: 'merhaba' });
    }
  });
});

app.get('/thex', (req, res) => {
  res.sendFile(__dirname + '/thex.html');
})

app.get('/elements/*', (req, res) => {
  res.sendFile(__dirname + '/elements.html');
})

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
