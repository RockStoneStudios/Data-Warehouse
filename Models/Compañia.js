const {Schema,model} = require('mongoose');


const SchemaCompañia = new Schema({
     nombre : String,
     pais : {
          type : Schema.Types.ObjectId,
          ref : 'Pais'
     },
      direccion : String
});

module.exports = model('Compañia',SchemaCompañia);