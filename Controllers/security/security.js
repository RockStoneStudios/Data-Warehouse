const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../Config/config');


const encryptPassword = async(password) =>{
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password,salt);
    return hashedpassword;
}

const comparePassword = async(password,passwordSave) =>{
     try{
         const compare = await bcrypt.compare(password,passwordSave);
         return compare;
     } catch(error) {
         console.log(error);
     }
}
const validar = async(req,res,next)=>{
    const token = req.cookies.jwt;
    console.log(token);
    if(!token) {
        console.log("Acceso Denegado Loguate");
        res.redirect('/login');
    }

     try{
         const usuarioAutenticado = await jwt.verify(token,config.TOKEN_SECRET);
         if(usuarioAutenticado){
             [req.id,req.email] = [usuarioAutenticado.id,usuarioAutenticado.email];
             next();
         }
         else{
              throw "Sin Acceso"
              console.log("sin Acceso");
         }
     }catch(error){
         console.log(error);
     }
}


module.exports = {
    encryptPassword,
    comparePassword,
    validar
}