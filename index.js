const express = require('express'); //creación de una variable llamada express
const app = express();       //instancia de express  
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose(); //permite registrar todos los cambios realizado en
                                               //la BD logs 
let sqliteClient = new sqlite3.Database('./db/db.sqlite3');   
const mongodbCliente = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

const databaseConfig = {
    "sqlite":sqliteClient,
    "mongodb": mongodbCliente,
    "mongodb_url":url,
    "default":'mongodb'
};

let usersController = require('./app/controllers/users')(databaseConfig);
let classesController = require('./app/controllers/classes')(databaseConfig);



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//{{SERVER}}/users/
app.use('/users', usersController);
app.use('/classes', classesController);



app.listen(3455, function (){
    console.log('corriendo')
});
