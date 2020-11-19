const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//SQL Support
const sqlite3 = require('sqlite3').verbose();
const sqliteClient = new sqlite3.Database('./db/db.sqlite');

//MongoDB Support
const mongodbClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

//Firebase Support
const admin = require("firebase-admin");
const serviceAccount = require("./private/key.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://gestion-parques.firebaseio.com"
});
const firestore = admin.firestore();


const databaseConfig = {
    "sqlite":sqliteClient,
    "mongodb":mongodbClient,
    "mongodb_url":url,
    "firestore": firestore,
    "default":'mongodb'
}

let usersController= require('./app/controllers/users')(databaseConfig);
let classesController = require('./app/controllers/classes')(databaseConfig);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/users',usersController);
app.use('/classes',classesController);
   

app.listen(3455, function(){
    console.log('corriendo');
});