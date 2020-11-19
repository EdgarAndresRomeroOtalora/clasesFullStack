const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//const general = require('./app/utils/general')();


let usersController= require('./app/controllers/users')();
let classesController = require('./app/controllers/classes')();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/users',usersController);
app.use('/classes',classesController);
   

app.listen(3455, function(){
    console.log('corriendo');
});