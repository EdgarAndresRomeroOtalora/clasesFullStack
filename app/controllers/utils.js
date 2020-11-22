module.exports = function(){
    const express = require('express');
    const router = express.Router();

    app.router('/hola', function(request, response){
        response.send('hola amigo');
    });   
    
    app.router('/usuarios', function (request, response){
        response.send([{"nombre":"juancho","apellido":"arcoiris",edad: 36},{"nombre":"fulano", "apellido":"de tal",edad:28}]);
    });   
}
