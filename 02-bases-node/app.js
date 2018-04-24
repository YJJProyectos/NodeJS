const argv = require('yargs')
                    .command('listar','Imprime en consola la tabla de multiplicar',{
                      base: {
                        demand: true,
                        alias: 'b'
                      },
                      limite: {
                        alias: 'l',
                        default: 10
                      }
                    })
                    .help()
                    .argv;


// "importar del modulo multiplicar"
// const multiplicar = require('./multiplicar/multiplicar');
const { crearArchivo } = require('./multiplicar/multiplicar');
// let base = '5';
// console.log(module);
// console.log(process.argv);
let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
// // console.log(multiplicar);
// console.log(parametro);
// console.log(base);
console.log(argv2);
console.log(argv);
console.log(argv.base);
console.log(argv.limite);




// crearArchivo(base)
//   .then( archivo => console.log(`Archivo creado ${archivo}`))
//   .catch( err => console.log(err))