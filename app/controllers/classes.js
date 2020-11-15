module.exports = function(db){
    const express = require('express');
    const router = express.Router();
    const TABLE = 'classes';

    //{{SERVER}}/classes/create_classes
    router.get('/initialize', function (request, response) {
        db.serialize(function(){
            db.run('CREATE TABLE IF NOT EXISTS '+TABLE+' (name TEXT, id_number INT, classroom TEXT)');
            response.send('Inicializada');
        });
        
    });
    
    //{{SERVER}}/classes/delete_classes
    router.get('/clean', function(request, response){
        db.serialize(function(){
            db.run('DROP TABLE IF EXISTS '+TABLE);
            response.send('Limpiada');
        });
    });
    
    //{{SERVER}}/classes/
    router.post('/', function(request,response){
        db.serialize(function () {
              db.run('INSERT INTO '+TABLE+' values("'
              +request.body.nombre +'",'
              +request.body.id_number + ',"'
              +request.body.classroom+'")');
              response.send('Se ha agregado el usuario: '+request.body.nombre+', '
              +request.body.id_number+', '+request.body.classroom);      
        });
    });
    
    //{{SERVER}}/classes/
    router.get("/", function(request, response){
        db.serialize(function(){
            
            db.all("SELECT * FROM "+TABLE, function(error, rows){
                if(error){
                    response.send(error);
                }else{
                    response.send(rows);
                }
            })
        });
    });

    return router;
}