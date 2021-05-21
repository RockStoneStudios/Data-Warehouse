const {Schema,model}= require('mongoose');

const SchemaRegion = new Schema ({
    nombre : String,
    paises : [{
        type : Schema.Types.ObjectId,
        ref : 'Pais'
    }]
})

module.exports = model('Region',SchemaRegion);