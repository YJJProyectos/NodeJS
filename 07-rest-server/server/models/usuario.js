const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
  nombre:{
    type: String,
    required: [true, 'el nombre es requerido']
  },
  email: {
    type:String,
    required: [true, 'mail necesario']
  },
  password: {
    type:String,
    required: [true, 'pwd necesario']
  },
  img: {
    type:String,
    required: false
  },
  role: {
    type: String,
    default: 'USER_PROFILE'
  },
  estado: {
    type: Boolean,
    default: true
  },
  google: {
    type:String,
    required: false
  }  
});

module.exports = mongoose.model('Usuario', usuarioSchema);