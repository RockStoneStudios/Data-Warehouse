const mongoose = require('mongoose');


const SchemaUsuario = new mongoose.Schema({
     nombre : {
         type : String,
         required : true
     },
     apellidos : {
         type : String,
         required : true
     },
     email : {
         type : String,
         required : true
     },
      perfil : {
          type : String,
          required : true
      },
      password : {
          type :String,
          required : true
      }
});


module.exports = mongoose.model('Usuario',SchemaUsuario);