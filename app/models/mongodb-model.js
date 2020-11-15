const MongoDBModel = function(MongoClient, url){

    const dbName = 'myproject';

    this.getAll = function(table){
        return new Promise((resolve, reject)=>{
            resolve('se esta llamando desde el mongo');
        });
        /*return new Promise((resolve, reject)=>{
            
            MongoClient.connect(url, function(error, client){
                if(error){
                    console.error(error);
                    reject(error);
                }else{
                    let database = client.db(dbName);
                    database.createCollection(table, function(errorCollection, result){
                        if (errorCollection) {
                            console.error(error);
                    reject(error);
                            }else{
                            console.log('se ha creado la coleccion');
                            resolve('Se ha creado la coleccion');
                            client.close();
                        }
                    });
                    
                }
                
            });
            
        });*/
    };

    this.getById = function(table,id){
        return new Promise((resolve, reject)=>{
            resolve('se esta llamando desde el mongo');
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