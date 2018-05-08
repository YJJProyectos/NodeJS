const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const nodemailer = require('nodemailer');
const cuenta = require('./db/usuario');
var fs = require('fs');
var path = require('path');

var fp = path.join(process.cwd(), 'templates/Mail_Confirmar_Suscripcion.html');
var template = "";
fs.readFile(fp, function (err, data) {
  if (err)
    throw err; 
  else
    // console.log(data.toString());
    
    template = data.toString();
});



console.log( argv );

let comando = argv._[0];

switch (comando) {
  case 'crear':
    console.log('Crear por hacer');
    let tarea = porHacer.crear(argv.descripcion);
    break;
  case 'listar':
    console.log('Mostrar todas las tareas por hacer');
    break;
  case 'actualizar':
    console.log('Actualiza una tarea por hacer');
    break;
  case 'mail':
    console.log('Mandar un mail a ' + argv.para);
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: cuenta.user,
        pass: cuenta.pwd
      }
    });

    console.log(cuenta.user);
    

    var mailOptions;
    fs.readFile(fp, function (err, data) {
      if (err)
        throw err; 
      else
        // console.log(data.toString());
        
        template = data.toString();
        mailOptions = {
          from: 'y.jiajun.16@gmail.com',
          to: argv.para,
          subject: argv.titulo,
          text: 'text',
          html: template
        };
        // console.log(template);
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
    });

    

    break;
  default:
    console.log('Comando no reconocido');
}
