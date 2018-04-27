require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(require('./routes/usuario'));

mongoose.connect(process.env.URLDB, (err, res) => {
  if (err) {
    throw err;
  }
  console.log('Base de datos online');
  
});


app.listen(process.env.PORT, () => {
  console.log('Puerto ' + process.env.PORT);
});