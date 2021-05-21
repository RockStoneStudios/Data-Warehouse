const express = require('express');
const app = express();
const config = require('./Config/config');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const cookies = require('cookie-parser');
const RouterUsuario = require('./Routers/usuario.router');
const routerPrincipal = require('./Routers/index.router');
const DB  = require('./Models/conexion');

//Setting

app.set('view engine','ejs');
app.set('Views',path.join(__dirname,'Views'));

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookies());
app.use(express.static(path.join(__dirname,'/Public')));
app.use(session({
    secret : 'secret',
    resave : true,
    saveUninitialized : true
}));
app.use(flash());

//Variables Globales
app.use((req,res,next)=>{
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})


//Routers
app.use(routerPrincipal);
app.use(RouterUsuario);

app.listen(config.PORT,()=>{
    console.log('Starting Port');
});