<<<<<<< HEAD
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//SQL Support
const sqlite3 = require('sqlite3').verbose();
const sqliteClient = new sqlite3.Database('./db/db.sqlite');

//MongoDB Support
const mongodbClient = require('mongodb').MongoClient;
=======
const express = require('express'); //creación de una variable llamada express
const app = express();       //instancia de express

//URL Encode Support for POST,PUT Methods
const bodyParser = require('body-parser');

//SQLite Support
const sqlite3 = require('sqlite3').verbose(); //permite registrar todos los cambios realizado en
                                               //la BD logs 
let sqliteClient = new sqlite3.Database('./db/db.sqlite3'); 

//MongoDB Support 
const mongodbCliente = require('mongodb').MongoClient;
>>>>>>> 8f9adf3dc6adb049b62c80dab26438f69e6b760a
const url = 'mongodb://localhost:27017';

//Firebase Support
const admin = require("firebase-admin");
const serviceAccount = require("./private/key.json");
<<<<<<< HEAD
=======


>>>>>>> 8f9adf3dc6adb049b62c80dab26438f69e6b760a
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://gestion-parques.firebaseio.com"
});
<<<<<<< HEAD
const firestore = admin.firestore();


=======

const firestore = admin.firestore();



>>>>>>> 8f9adf3dc6adb049b62c80dab26438f69e6b760a
const databaseConfig = {
    "sqlite":sqliteClient,
    "mongodb":mongodbClient,
    "mongodb_url":url,
<<<<<<< HEAD
    "firestore": firestore,
    "default":'mongodb'
}
=======
    "firestore":firestore,
    "default":'firestore'
};
>>>>>>> 8f9adf3dc6adb049b62c80dab26438f69e6b760a

let usersController= require('./app/controllers/users')(databaseConfig);
let classesController = require('./app/controllers/classes')(databaseConfig);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/users',usersController);
app.use('/classes',classesController);
   

app.listen(3455, function(){
    console.log('corriendo');
});