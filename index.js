const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { response } = require('express');
var jwt = require('jsonwebtoken');

//const general = require('./app/utils/general')();


let usersController= require('./app/controllers/users')();
let classesController = require('./app/controllers/classes')();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/users',usersController);
app.use('/classes',classesController);

app.use('/',function(request, response){
    let datos = {
        name: "Soy un dato",
        date: new Date()
    }
    let secreto = '1234568';

    let token = jwt.sign(datos,secreto);
    response.send(token);
});
   

app.listen(3455, function(){
    console.log('corriendo');
});