const router = require('express').Router();
const {mostrar,ingresar} = require('../Controllers/regiones.controllers');


router.get('/region',mostrar);
router.post('/region',ingresar);



module.exports = router;