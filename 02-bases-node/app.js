const argv = require('./config/yargs').argv;


// "importar del modulo multiplicar"
// const multiplicar = require('./multiplicar/multiplicar');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
// let base = '5';
// console.log(module);
// console.log(process.argv);
let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
// // console.log(multiplicar);
// console.log(parametro);
// console.log(base);

console.log(argv);
console.log(argv.base);


let comando = argv._[0];
// console.log(comando);


switch(comando) {
  case 'listar':
    console.log('listar');
    listarTabla(argv.base, argv.limite);
    break;
  case 'crear':
    console.log('crear');
    crearArchivo(argv.base, argv.limite)
      .then( archivo => console.log(`Archivo creado ${archivo}`))
      .catch( err => console.log(err))
    break;
  default:
    console.log('comando no reconocido');
    break;
}




// crearArchivo(base)
//   .then( archivo => console.log(`Archivo creado ${archivo}`))
//   .catch( err => console.log(err))