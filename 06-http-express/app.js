const express = require('express');
const app = express();
 
app.get('/',  (req, res) => {
  // res.send('Hello');
  let salida = {
    nombre: 'fernando',
    edad: 23,
    url: req.url
  };
  res.send(salida);
});
app.get('/saludo',  (req, res) => {
  res.send('Hello');
}); 
app.listen(3000, () => {
  console.log('escuchando');
});