const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
  let data = JSON.stringify(listadoPorHacer);
  fs.writeFile(`db/data.json`, data, (err) => {
    if (err) { 
      throw new Error('No se pudo guardar', err);
    } else { 
      console.log(`data.json`);
    }
  });
}

const cargarDB = () => {

  try {
    listadoPorHacer = require('../db/data.json');
  } catch (error) {
    listadoPorHacer = [];
  }

  // console.log(listadoPorHacer);
  
}

const crear = (descripcion) => {

  cargarDB();

  let porHacer = {
    descripcion,
    completado: false
  };

  listadoPorHacer.push(porHacer);
  guardarDB();
  return porHacer;
}

module.exports = {
  crear
}