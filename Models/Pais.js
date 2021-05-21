const {Schema,model} = require('mongoose');

const SchemaPais = new Schema({
     nombre : String,
     region : {
         type : Schema.Types.ObjectId,
         ref : 'Region'
     },
     ciudades : [{
         type : Schema.Types.ObjectId,
         ref : 'Ciudad'
     }] 
});


module.exports = model('Pais',SchemaPais);