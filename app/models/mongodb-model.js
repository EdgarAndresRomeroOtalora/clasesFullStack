let ObjectId = require('mongodb').ObjectID
const config = require('../../config.json');

const MongoDBModel = function(MongoClient, url){
    
    
    //const MongoClient = require('mongodb'),MongoClient;
    
    this.getAll = function(table) {
        return new Promise((resolve, reject) =>{
            MongoClient.connect(url, function(error,client){
                if(error){
                    reject(error);
                }else{
                    let database = client.db(config.database.mongodb.databaseName);
                    let collection = database.collection(table);
                    collection.find({}).toArray(function(errorGetall, result){
                        resolve(result);
                        client.close();
                    });
                }
            });
        });
    };

    
                    
    this.getById = function(table, id) {
        return new Promise((resolve, reject) =>{
            MongoClient.connect(url, function(error,client){
                if(error){
                    reject(error);
                }else{
                    let database = client.db(config.database.mongodb.databaseName);
                    const collection = database.collection(table);
                    //collection.insertOne({"name":"Juanito","date":new Date()});
                    collection.findOne({ _id: new ObjectId(id) },function(errorGetAll, result){
                        if (errorGetAll) {
                            Sesi
                            reject(errorGetAll);
                        }
                        resolve(result);
                        client.close();
                    });
                }
            });
        });
    };

    this.create = function(table, params) {
        return new Promise((resolve, reject) =>{
            MongoClient.connect(url, function(error,client){
                if(error){
                    reject(error);
                }else{
                    let database = client.db(config.database.mongodb.databaseName);
                    let collection = database.collection(table);
                    collection.insertOne(params, function (errorInsert, result) {
                        if(errorInsert){
                            reject(errorInsert);
                        }else{
                            resolve(result);
                            client.close();
                        }
                    });
                }
            });
        });
    };

    this.update = function(table, params, id) {
        return new Promise((resolve, reject) =>{
            MongoClient.connect(url, function(error,client){
                if(error){
                    reject(error);
                }else{
                    let database = client.db(config.database.mongodb.databaseName);
                    const collection = database.collection(table);
                    collection.updateOne({ _id: new ObjectId(id) }, { $set: params}, function (errorUpdate, result) {
                        if(errorUpdate){
                            reject(errorUpdate);
                        }else{
                            resolve(result);
                            client.close();
                        }
                    });
                }
            });
        });
    };

    this.delete = function(table, id) {
        return new Promise((resolve, reject) =>{
            MongoClient.connect(url, function(error,client){
                if(error){
                    reject(error);
                }else{
                    let database = client.db(config.database.mongodb.databaseName);
                    const collection = database.collection(table);
                    collection.deleteOne({ _id: new ObjectId(id) }, function (errorDelete, result) {
                        if(errorDelete){
                            reject(errorDelete);
                        }else{
                            resolve(result);
                            client.close();
                        }
                    });
                }
            });
        });
    };    

    this.clean = function(table) {
        return new Promise((resolve, reject) =>{
            MongoClient.connect(url, function(error,client){
                if(error){
                    reject(error);
                }else{
                    let database = client.db(config.database.mongodb.databaseName);
                    const collection = database.collection(table);
                    collection.drop({}, function (errorDrop, result) {
                        if(errorDrop){
                            reject(errorDrop);
                        }else{
                            resolve(result);
                            client.close();
                        }
                    });
                }
            });
        });
    };

    this.initialize = function(table, params) {
        return new Promise((resolve, reject) =>{
            resolve('Se esta llamando desde mongo');
        });
    };

        return this;
};

module.exports = MongoDBModel;