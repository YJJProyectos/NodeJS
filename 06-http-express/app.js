const express = require('express');
const app = express();
const hbs = require('hbs');

app.use( express.static( __dirname + '/public') );

// express hbs engine
hbs.registerPartials(__dirname + '/views/partials');

require('./hbs/helpers');

app.set('view engine', 'hbs');
 
// app.get('/',  (req, res) => {
//   // res.send('Hello');
//   let salida = {
//     nombre: 'fernando',
//     edad: 23,
//     url: req.url
//   };
//   res.send(salida);
// });

app.get('/',  (req, res) => {

  res.render('home', {
    nombre: 'pepe',
    user: 'test'
  });

});


app.get('/about',  (req, res) => {
  res.render('about');
}); 

app.listen(3000, () => {
  console.log('escuchando');
});