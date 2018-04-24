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

let getInformacion = async(id) => {

  let empleado = await getEmpleado(id);
  let resp = await getSalario(empleado);
  // console.log(empleado);
  // console.log(resp);
  return `${resp.nombre} tiene un salario de ${resp.salario}`;
}

getInformacion(1)
  .then(mensaje => {console.log(mensaje);})
  .catch( e => { console.log(e)})