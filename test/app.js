const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const nodemailer = require('nodemailer');
const cuenta = require('./db/usuario');
var fs = require('fs');
var path = require('path');

const { replaceAll, replaceAllArray, algo } = require('./utils/replace');

var fp = path.join(process.cwd(), 'templates/estimado_clientev5.html');
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
    console.log('Algo ' + algo);
    

    var mailOptions;
    fs.readFile(fp, function (err, data) {
      if (err)
        throw err; 
      else
        // console.log(data.toString());
        var aBuscar = [
          "www.google.com",
          '&lt;var_email&gt;',
          '&lt;var_id_operacion&gt;',
          '&lt;var_nro_cuota1&gt;',
          '&lt;var_fecha_vencimiento1&gt;',
          '&lt;var_nro_cuota2&gt;',
          '&lt;var_fecha_vencimiento2&gt;',
          '&lt;var_url&gt;',
          '&lt;var_url_terminos&gt;'
        ];
        var aReemplazar = [ 
          "http://www.youtube.com",
          "test@test.test",
          "7",
          "cuota 1",
          "20/07/2018",
          "cuota 2",
          "30/08/2018",
          "http://www.google.com",
          "http://youtube.com"
        ];
        template = data.toString();
        mailOptions = {
          from: 'y.jiajun.16@gmail.com',
          to: argv.para,
          subject: argv.titulo,
          text: 'text',
          // html: replaceAll(template, 'www.google.com', 'www.youtube.com')
          html: replaceAllArray(template, aBuscar, aReemplazar)
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
