const fs = require('fs');

let crearArchivo = (base) => {
  return new Promise( ( resolve, reject) => {

    let data = '';

    if (!Number(base)) { 
      reject('No es un numero');
      return;
    }

    for (let i = 1; i < 11; i++) {
      console.log(`${base} * ${i} = ${ base * i }`);
      data += `${base} * ${i} = ${ base * i }\n`;
    }
    
    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
      if (err) { 
        reject(err) 
      } else { 
        resolve(`tabla-${base}.txt creado!`);
      }
    });

  });
}
// exportar en el modulo global
module.exports = {
  // crearArchivo : crearArchivo
  crearArchivo

}