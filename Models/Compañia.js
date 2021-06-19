const {Schema,model} = require('mongoose');
const Ciudad = require('./Ciudad');


const SchemaCompañia = new Schema({
     nombre : String,
     direccion : String,
     email : String,
     telefono : String,
     ciudad : {
          type : Schema.Types.ObjectId,
          ref : 'Ciudad'
     }

});

module.exports = model('Compañia',SchemaCompañia);