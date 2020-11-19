module.exports=function (databaseConfig) {
    const express = require('express');
    const router = express.Router();
    const TABLE = 'users';
    let model;

    switch (databaseConfig.default) {
        case 'mongodb':
            model = require('../models/mongodb-model')(databaseConfig.mongodb, databaseConfig.mongodb_url);
            break;
        case 'sqlite':
            model = require('../models/sqlite-model')(databaseConfig.sqlite);
            break;
        case 'firestore':
            model = require('../models/firestore-model')(databaseConfig.firestore);
            break;
        default:
            model = require('../models/sqlite-model')(databaseConfig.sqlite);
            break;
    }

    //
    

    //{{SERVER}}/users/

    //{{SERVER}}/users/create_users
    router.post('/options/initialize', function(request, response){
        model.initialize(TABLE, request.body)
        .then((message)=>{
            response.send(message);
        }).catch((error)=>{
            console.error(error);
            response.send(error);
        });
    });
    
    //{{SERVER}}/users/delete_users
    router.get('/options/clean', function(request, response){
        model.clean(TABLE)
        .then((message)=>{
            response.send(message);
        }).catch((error)=>{
            console.error(error);
            response.send(error);
        });
    });
    
    //{{SERVER}}/users/
    router.post('/', function(request,response){
        model.create(TABLE, request.body)
        .then((object)=>{
            response.send(object);
        }).catch((error)=>{
            console.error(error);
            response.send(error);
        });
    });  

    router.put('/:id', function(request,response){
        let id = request.params.id;
        model.update(TABLE, request.body, id)
        .then((row)=>{
            response.send(row);
        }).catch((error)=>{
            console.error(error);
            response.send(error);
        });        
    });
    
    router.get('/', function(request, response){
        model.getAll(TABLE)
        .then((rows)=>{
            response.send(rows);
        }).catch((error)=>{
            console.error(error);
            response.send(error);
        });
    });   


    router.get('/:id', function (request, response) {
        let id = request.params.id;
        model.getById(TABLE, id)
        .then((row)=>{
            response.send(row);
        }).catch((error)=>{
            console.error(error);
            response.send(error);
        });
    });   

    router.delete('/:id', function (request, response) {
        let id = request.params.id;
        model.delete(TABLE, id)
        .then((message)=>{
            response.send(message);
        }).catch((error)=>{
            console.error(error);
            response.send(error);
        });
    });      

    return router;
}