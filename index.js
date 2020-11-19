const express = require('express');
const app = express();
//var jwt = require('jsonwebtoken');


const bodyParser = require('body-parser');
//const { JsonWebTokenError } = require('jsonwebtoken');

let usersController = require('./app/controllers/users_firebase')();
let classesController = require('./app/controllers/classes')();
let loginController = require('./app/controllers/login')();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use('/users', usersController);
app.use('/classes', classesController);
app.use('/login', loginController);


app.listen(3455, function () {
    console.log('corriendo');
});