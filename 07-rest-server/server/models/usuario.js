const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
  values: ['ADMIN', 'USER'],
  message: '{VALUE} no es un rol valido'
}

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
  nombre:{
    type: String,
    required: [true, 'el nombre es requerido']
  },
  email: {
    type:String,
    unique: true,
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
    default: 'USER',
    enum: rolesValidos
  },
  estado: {
    type: Boolean,
    default: true
  },
  google: {
    type:String,
    default: false,
    required: false
  }  
});

// 
usuarioSchema.methods.toJSON = function() {

  let user = this;
  let userObject = user.toObject();
  delete userObject.password;

  return userObject;
};

//validar unique
usuarioSchema.plugin( uniqueValidator, { message: '{PATH} debe de ser unico'} );

module.exports = mongoose.model('Usuario', usuarioSchema);