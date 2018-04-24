const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

  console.log(`Tabla de ${base}`.green);
  

  for (let i = 1; i <= limite; i++) {
    console.log(`${base} * ${i} = ${ base * i }`);
  }
}

let crearArchivo = (base, limite) => {
  return new Promise( ( resolve, reject) => {

    let data = '';

    if (!Number(base)) { 
      reject('No es un numero');
      return;
    }

    for (let i = 1; i <= limite; i++) {
      console.log(`${base} * ${i} = ${ base * i }`);
      data += `${base} * ${i} = ${ base * i }\n`;
    }
    
    fs.writeFile(`tablas/tabla-${base}-limite-${limite}.txt`, data, (err) => {
      if (err) { 
        reject(err) 
      } else { 
        resolve(`tabla-${base}-limite-${limite}.txt`);
      }
    });

  });
}
// exportar en el modulo global
module.exports = {
  // crearArchivo : crearArchivo
  crearArchivo,
  listarTabla

}