const express = require('express');
const mongoose = require('mongoose');
const URLSchema = require('./model');
const bodyParser = require('body-parser');
const nanoid = require('nanoid');
const path = require('path');
const app = express();

const port = 6700;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static(path.join(__dirname, './public')));

//Database connectivity
const uri = 'mongodb://127.0.0.1:27017/urlShortner';
mongoose.set('useCreateIndex', true);
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Database is connected');
});


app.post('/shortURL', async (req, res) => {
  console.log(req.body);
  let data = {
    FullURL: req.body.url,
    ShortURL: nanoid(7)
  }
  const newObj = new URLSchema(data);
  const obj = await newObj.save();

  if (obj == null) { res.status(500).send(err); }
  res.status(200).send(newObj);

})

app.get('/:url', async (req, res) => {

  const urlobj = await URLSchema.findOne({ ShortURL: req.params.url })
  if (urlobj == null) return res.sendStatus(404);

  urlobj.Click++;
  urlobj.save();

  res.redirect(urlobj.FullURL);
})




app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})