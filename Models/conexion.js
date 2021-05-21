const mongoose = require('mongoose');
const config = require('../Config/config');
 module.exports = mongoose.connect(config.DB,{
    useNewUrlParser : true,
    useUnifiedTopology :true
}).then(db => {
    console.log('Connection DataBase Successfull');
}).catch(error=>{
    console.log(error);
});