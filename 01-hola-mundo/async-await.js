

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

console.log(getNombre().then(salida => {console.log(salida)}
));


