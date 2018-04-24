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

let getEmpleado = (id) => {

  return new Promise((resolve, reject) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)
    if (!empleadoDB) {
      reject('no existe empleado ' + id);
    }  else {
      resolve(empleadoDB);
    }
  }) 
}

let getSalario = (empleado) => {

  return new Promise((resolve, reject) => {
    let empleadoSalario = salarios.find(salario => salario.id === empleado.id);
    if (!empleadoSalario) {
      reject('no se encontro salario para id ' + empleado.id + " " + empleado.nombre );
    } else {
      resolve({
        id: empleado.id,
        nombre: empleado.nombre,
        salario: empleadoSalario.salario
      });
    }
  })
}



getEmpleado(1).then(empleado =>{
  console.log('Empleado de BD ', empleado);
  getSalario(empleado).then(resultado=> {
    console.log(`El ${resultado.id} con nombre ${resultado.nombre} tiene salario ${resultado.salario}`);
  }, err => console.log(err)  )
}, (err) => {
  console.log(err);
});

getEmpleado(10).then( empleado => {
  return getSalario(empleado);
  }).then(resp => {
    console.log(`El salario de ${resp.nombre} es de ${ resp.salario}`);
  }).catch( err => {
    console.log(err);
  })