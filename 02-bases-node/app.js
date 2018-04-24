// "importar del modulo multiplicar"
// const multiplicar = require('./multiplicar/multiplicar');
const { crearArchivo } = require('./multiplicar/multiplicar');
let base = 's';
// console.log(module);
// console.log(multiplicar);
crearArchivo(base)
  .then( archivo => console.log(`Archivo creado ${archivo}`))
  .catch( err => console.log(err))