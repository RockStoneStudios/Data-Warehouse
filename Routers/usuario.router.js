const router = require('express').Router();
const {UsuarioRender,Registrarse,renderLogin,login,vistaPrincipal,allContactos,agregarContactos} = require('../Controllers/usuario.controllers');
const security = require('../Controllers/security/security');

router.get('/usuario',security.validar, UsuarioRender);
router.post('/usuario',Registrarse);
router.get('/login',renderLogin);
router.post('/login',login);
router.get('/principal',vistaPrincipal);
router.get('/contactos',allContactos);
router.get('/agregarContacto',agregarContactos);




module.exports = router;