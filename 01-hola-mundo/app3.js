console.log("inicio");

setTimeout( function() {
  console.log("primer timeout");
}, 1000);
setTimeout( function() {
  console.log("segundo timeout");
  
}, 0);
setTimeout( function() {
  console.log("tercer timeout");
  
}, 0);

console.log('Fin');
