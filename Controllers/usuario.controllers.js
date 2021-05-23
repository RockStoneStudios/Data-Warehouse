const CtrlUsuario = {};
const Usuario = require('../Models/Usuario');
const security = require('./security/security');
const config = require('../Config/config');
const jwt = require('jsonwebtoken');




CtrlUsuario.vistaPrincipal = (req,res)=>{
    res.render('main');
}

CtrlUsuario.UsuarioRender = (req,res)=>{
    res.render('registrarse');
};

CtrlUsuario.Registrarse = async(req,res)=>{
    const error = [];
    const{nombre,apellidos,email,perfil,password,password_repeat} = req.body;
    
    if(!isNaN(nombre)) {
       console.log("Ingresa Nombre correctamente");
        return  res.redirect('/usuario');
    }
    if(!isNaN(apellidos)) {
         console.log("Ingresa Apellidos Correctamente");
       return   res.redirect('/usuario');
    }
    if(!email.includes('@') || !email.endsWith('.com')) {
        console.log("Ingresa Email correctamente");
       return  res.redirect('/usuario');
    }
    if(!isNaN(perfil)){
        console.log("Ingrese perfil correctamente");
       return   res.redirect('/usuario')
    }
     if(password.length<8){ 
         console.log("Su contraseña debe tener 8 caracteres");
        return res.redirect('/usuario');
     }
     if(password !== password_repeat){
         console.log("Su contraseña no coincide");
        return  res.redirect('/usuario');
     }
    const encryptPassword = await security.encryptPassword(password);

    const nuevoUsuario = {
        nombre,
        apellidos,
        email,
        perfil,
        password : encryptPassword
    }

     const usuario = await Usuario.findOne({
         email: email
     });
      console.log(usuario);
     if(usuario){
         console.log("Usuario ya esta en Uso");
        return res.redirect('/usuario');
     }

      const saveUsuario = await Usuario.create(nuevoUsuario);
    
       if(saveUsuario) {
           console.log("usuario creado satisfactoriamente");
           return res.redirect('/contactos');
       }


     


}

CtrlUsuario.renderLogin = (req,res)=>{
    res.render('login');
}

CtrlUsuario.login = async(req,res)=>{
    const {email,password} = req.body;
    if(!isNaN(email) || !email.includes('@') || !email.endsWith('.com')){
        console.log("Ingrese Email Invalido");
        return res.redirect('/login');
    }
     if(password.length<8) {
         console.log("Su contraseña debe tener minimo 8 caracteres");
         return res.redirect('/login');
     }
    const usuario = await Usuario.findOne({email : email});
     if(!usuario) {
         console.log("Usuario No encontrado");
         res.redirect('/login');
     }
     const verificarPassword = await security.comparePassword(password,usuario.password);
     const usuarioAutenticado = {
         id : usuario.id,
         email : usuario.email
     }
     if(verificarPassword){
        const token = jwt.sign(usuarioAutenticado,config.TOKEN_SECRET);
         res.cookie('jwt',token,{httpOnly : true});
         //pasar objeto para desactivar usuario en la vista
        res.redirect('/principal');
     }
     else{
         console.log("Contraseña Incorrecta");
         res.redirect("/login");
     }
}

CtrlUsuario.allContactos = (req,res)=>{
    res.render('Contactos');
}

CtrlUsuario.agregarContactos = (req,res)=>{
    res.render('agregarContacto');
}



module.exports = CtrlUsuario;