var opts = {
  descripcion: {
    demand: true,
    alias: 'd'
  }
}

const argv = require('yargs')
                    .command('listar','Imprime en consola la tabla de multiplicar',opts)
                    .command('crear','Crear la tabla de multiplicar',opts) 
                    .command('actualizar', 'Actualiza el estado de una tarea',{
                      descripcion: {
                        demand: true,
                        alias: 'd'
                      },
                      completado: {
                        alias: 'c',
                        default: false
                      }})
                    .command('mail', 'Mandar un mail desde correo',{
                      para:{
                        demand: false,
                        default: 'y.jiajun.15@gmail.com',
                        alias: 'p'
                      },
                      titulo:{
                        demand: false,
                        default: 'Enviar mail mediante NodeJS',
                        alias: 't'
                      }
                    })                   
                    .help()
                    .argv;
module.exports = {
  argv
}