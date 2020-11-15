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

    this.getById = function(table,id){
        return new Promise((resolve, reject)=>{
            MongoClient.connect(url, function(error, client){
                if(error){
                    console.error(error);
                    reject(error);
                }else{
                    let database = client.db(dbName);
                    const collection = database.collection(table);
                    collection.findOne({name:id},function(error_GetAll, result){
                        resolve(result);
                        client.close();
                    });
                }
            });
        });
    };

    this.create = function(table,params){
        return new Promise((resolve, reject)=>{
            resolve('se esta llamando desde el mongo');
        });
    };

    this.update = function(table,params, id){
        return new Promise((resolve, reject)=>{
            resolve('se esta llamando desde el mongo');
        });
    };

    this.delete = function(table, id){
        return new Promise((resolve, reject)=>{
            resolve('se esta llamando desde el mongo');
        });
    };

    this.clean = function(table){
        return new Promise((resolve, reject)=>{
            resolve('se esta llamando desde el mongo');
        });
    };

    this.initialize = function(table,params, id){
        return new Promise((resolve, reject)=>{
            resolve('se esta llamando desde el mongo');
        });
    };



    return this;
};

module.exports= MongoDBModel;