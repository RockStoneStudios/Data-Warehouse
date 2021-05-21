const {Schema,model} = require('mongoose');

const SchemaContactos = new Schema({
    nombre : String,
    apellido : String,
    cargo : String,
    email : String,

});

