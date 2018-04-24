const fs = require('fs');

let listarTabla = (base, limite) => {
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
        resolve(`tabla-${base}-limite-${limite}.txt creado!`);
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