const {Schema,model} = require('mongoose');

const SchemaCiudad = new Schema({
     nombre : String,
     pais : {
         type : Schema.Types.ObjectId,
         ref : 'Pais'
     }
});


module.exports = model('Ciudad',SchemaCiudad);