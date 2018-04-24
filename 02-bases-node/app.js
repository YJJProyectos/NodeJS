// "importar del modulo multiplicar"
// const multiplicar = require('./multiplicar/multiplicar');
const { crearArchivo } = require('./multiplicar/multiplicar');
// let base = '5';
// console.log(module);
console.log(process.argv);
let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];
// console.log(multiplicar);
console.log(parametro);
console.log(base);


crearArchivo(base)
  .then( archivo => console.log(`Archivo creado ${archivo}`))
  .catch( err => console.log(err))