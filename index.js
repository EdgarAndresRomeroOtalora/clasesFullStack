const express = require('express');
const app = express();
<<<<<<< HEAD
const bodyParser = require('body-parser');
const { response } = require('express');




let usersController = require('./app/controllers/users')();
=======
const config = require('./config.json');
//const config = require('./app/utils/config');

const port = process.env.PORT ? process.env.PORT : config.app.port ? config.app.port : 3000 ;
const bind = process.env.BIND ? process.env.BIND : config.app.bind ? config.app.bind : '127.0.0.1' ;

//var jwt = require('jsonwebtoken');



const bodyParser = require('body-parser');
//const { JsonWebTokenError } = require('jsonwebtoken');

let usersController = require('./app/controllers/users_firebase')();
>>>>>>> 28c5595f4dfcf2c04633457b0b040df9b2421903
let classesController = require('./app/controllers/classes')();
let loginController = require('./app/controllers/login')();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
<<<<<<< HEAD
=======



>>>>>>> 28c5595f4dfcf2c04633457b0b040df9b2421903
app.use('/users', usersController);
app.use('/classes', classesController);
app.use('/login', loginController);

<<<<<<< HEAD


app.listen(3455, function () {
    console.log('corriendo');
=======

app.listen(port,bind,function () {
    console.log('**********************************');
    console.log('Aplicación: '+config.app.name);
    console.log('corriendo en: '+config.app.bind+':'+config.app.port);
    console.log('**********************************');
>>>>>>> 28c5595f4dfcf2c04633457b0b040df9b2421903
});