import fs from 'fs/promises';
import express from 'express';
import path from 'path';
const app = express();
const port = 3000
const __dirname = path.resolve(path.dirname(''));

app.use('/build', express.static('build'));
app.use('/img', express.static('img'));
app.use('/fonts/', express.static('public/fonts'));
app.use('/js/', express.static('public/js'));
app.use('/', express.static('.'));

app.use(express.json({limit: '50mb'}));

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
  fs.writeFile(d.key, d.contents).then(err => {
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

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/src/index.html');
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
