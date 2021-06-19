const Regiones = {};
const Region = require('../Models/region');
const Pais = require('../Models/Pais');

  // Controllers

Regiones.mostrar = async(req,res)=>{
     const regiones = await Region.find().populate('paises');
     console.log(regiones);
      
        res.render('region',{regiones});
      
     
}

Regiones.ingresar = async(req,res)=>{
 

    const {nombre} = req.body;

      if(nombre.length<1) {
          res.redirect('region');
        // res.status(400).json({message : "No se Pudo encontrar"});

      }
      const region = new Region(req.body);
      await region.save();
    //   res.status(400).json(region);
      res.redirect('region');

       
}


Regiones.pais = async(req,res)=>{
    const{nombre} = req.body;
    if(nombre.length<1) return res.status(400).json({message : "Ingrese Nombre"});
    const regionSearch = await Region.findOne({_id : req.params.id});
    if(regionSearch){
      const pais = await Pais.create(req.body);
      regionSearch.paises.push(pais);
      await regionSearch.save();
      pais.region = regionSearch;
      await pais.save();
      res.redirect('/region');
    }
   
    

      
}


module.exports = Regiones;