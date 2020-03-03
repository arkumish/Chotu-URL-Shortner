const express = require('express');
const mongoose = require('mongoose');
const URLSchema = require('./model')
const app = express();

const port = 8800;

//Database connectivity
const uri = 'mongodb://127.0.0.1:27017/urlShortner';
mongoose.set('useCreateIndex', true);
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Database is connected');
});




app.all('/',(req,res)=>{
    res.send('hello world');
})

app.listen(port,()=>{
  console.log(`Listening on port ${port}`);
})