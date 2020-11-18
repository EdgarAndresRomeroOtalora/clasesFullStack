const { ObjectID, ObjectId } = require("mongodb");

const MongoDBModel = function(MongoClient, url){

    const dbName = 'myproject';

    this.getAll = function(table){
        return new Promise((resolve, reject)=>{
            MongoClient.connect(url, function(error, client){
                if(error){
                    console.error(error);
                    reject(error);
                }else{
                    let database = client.db(dbName);
                    const collection = database.collection(table);
                    collection.find({}).toArray(function(error_GetAll, result){
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
                    let database = client.db(dbName);
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
                    let database = client.db(dbName);
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
                    let database = client.db(dbName);
                    const collection = database.collection(table);
                    collection.updateOne({ _id: new ObjectID(id) }, { $set: params}, function (errorInsert, result) {
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

    this.delete = function(table, id) {
        return new Promise((resolve, reject) =>{
            MongoClient.connect(url, function(error,client){
                if(error){
                    reject(error);
                }else{
                    let database = client.db(dbName);
                    const collection = database.collection(table);
                    collection.deleteOne({ _id: new ObjectID(id) }, function (errorDelete, result) {
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
                    let database = client.db(dbName);
                    const collection = database.collection(table);
                    collection.remove({}, function (errorDrop, result) {
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
            resolve('No aplica para mongoDb');
        });
    };



    return this;
};

module.exports= MongoDBModel;