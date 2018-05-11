function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

function replaceAllArray(str, find, replace) {

  if ( find.length == replace.length) {
    for (let i = 0; i < find.length; i++) {
      // str = str.replace(new RegExp(find[i], 'g'), replace[i]);  
      str = replaceAll(str, find[i], replace[i]);
    }
  }
  return str;
}

var algo = "algo";

module.exports = {
  replaceAll,
  replaceAllArray,
  algo
}