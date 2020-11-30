const express = require('express');
const app = express();
const config = require('./config.json');

//const config = require('./app/utils/config');

const port = process.env.PORT ? process.env.PORT : config.app.port ? config.app.port : 3455;
const bind = process.env.BIND ? process.env.BIND : config.app.bind ? config.app.bind : '127.0.0.1';

//var jwt = require('jsonwebtoken');



const bodyParser = require('body-parser');
const { request, response } = require('express');
//const { JsonWebTokenError } = require('jsonwebtoken');

let usersController = require('./app/controllers/users_firebase')();
//let classesController = require('./app/controllers/classes')();
let loginController = require('./app/controllers/login')();
let heroController = require('./app/controllers/heroes')();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use('/users', usersController);
//app.use('/classes', classesController);
app.use('/login', loginController);
app.use('/heroes', heroController);

//



app.listen(port, bind, function () {
    console.log('**********************************');
    console.log('Aplicación: ' + config.app.name);
    console.log('corriendo en: ' + config.app.bind + ':' + config.app.port);
    console.log('**********************************');
});