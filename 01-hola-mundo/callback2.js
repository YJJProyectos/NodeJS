let empleados = [{
  id:1,
  nombre: 'Fernando'
},{
  id:2,
  nombre: 'Mel'
},{
  id:3,
  nombre: 'Juan'
}];

let salarios = [{
  id: 1,
  salario: 1000
}, {
  id:2,
  salario: 2000
}];

let getEmpleado = (id, callback) => {

  let empleadoDB = empleados.find(empleado => empleado.id === id)
  if (!empleadoDB) {
    callback('no existe empleado ' + id);
  }  else {
    callback(null, empleadoDB);
  }
}

let getSalario = (empleado, callback) => {

  let empleadoSalario = salarios.find(salario => salario.id === empleado.id);
  if (!empleadoSalario) {
    callback('no se encontro salario para id ' + empleado.id + " " + empleado.nombre );
  } else {
    callback(null, {
      id: empleado.id,
      nombre: empleado.nombre,
      salario: empleadoSalario.salario
    });
  }

}


getEmpleado(3, (err, empleado) => {
  if ( err) {
    return console.log(err);
  }
  console.log(empleado);
  getSalario(empleado, (err,resultado ) => {
    if (err) {
      return console.log(err);
      
    }
    console.log(`El ${resultado.id} con nombre ${resultado.nombre} tiene salario ${resultado.salario}`);
    
  })
});
