const express = require('express');
const app = express();
const config = require('./config.json');
//const config = require('./app/utils/config');
const port = process.env.PORT ? process.env.PORT : config.app.port ? config.app.port  : 3000;
const bind = process.env.BIND ? process.env.BIND : config.app.bind ? config.app.port  : '127.0.0.1';

const bodyParser = require('body-parser');

let usersController = require('./app/controllers/users_firebase')();
//let classesController = require('./app/controllers/classes')();
let loginController = require('./app/controllers/login')();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/users', usersController);
//app.use('/classes', classesController);
app.use('/login', loginController);



app.listen(port, bind, function () {
    console.log('*******************');
    console.log('aplicacion: '+config.app.name);
    console.log('corriendo en: '+config.app.bind+':'+config.app.port);
    console.log('*******************');
});