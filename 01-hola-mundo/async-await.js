

// let getNombre = () => 'Fernando';

// let getNombre = async() => {
//   return 'Fernando';
// };

let getNombre = () => {
  return new Promise( (resolve, reject) => {
    setTimeout(() =>{
      resolve('Fernando');
    }, 1000);
  }); 
}

let saludo = async() => {

  let nombre = await getNombre();

  return `Hola ${ nombre }`;
};

console.log(getNombre().then(salida => {console.log(salida)}
));


console.log(saludo().then(mensaje => {
  console.log(mensaje);
  })
);
