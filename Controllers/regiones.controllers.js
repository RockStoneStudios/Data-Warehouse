const Regiones = {};
const Region = require('../Models/region');
Regiones.mostrar = async(req,res)=>{
     const regiones = await Region.find();
  
     res.render('region',{
         data : regiones
     });
}

Regiones.ingresar = async(req,res)=>{
    const {nombre} = req.body;
    console.log(nombre);
     if(nombre.length<1) {
         res.redirect('region');
     }
     
     const reg = {
         nombre
     }
      const regionNueva = await Region.findOne({nombre : nombre});
       if(regionNueva){

           res.redirect('region');
       }else{
           const region = await Region.create(reg);

       }
}


module.exports = Regiones;