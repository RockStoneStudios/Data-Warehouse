const router = require('express').Router();
const {mostrar,ingresar,pais} = require('../Controllers/regiones.controllers');


router.get('/region',mostrar);
router.post('/region',ingresar);


router.post('/regiones/pais/:id',pais);



module.exports = router;