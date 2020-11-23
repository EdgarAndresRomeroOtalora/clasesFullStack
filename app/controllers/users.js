module.exports = function (databaseConfig) {
    const express = require('express');
    const router = express.Router();

    const TABLE = 'users';

    const general = require('../utils/general')();
    let model = general.getDatabaseModel();
    

    //{{SERVER}}/users/create_users
    router.post('/options/initialize', function (request, response) {
        if (general.validateLogin(request))
            model.initialize(TABLE, request.body)
                .then((message) => {
                    response.send(message);
                }).catch((error) => {
                    console.error(error);
                    response.send(error);
                });
        else { response.send({ error: 'No se a enviado ningun token' }) };
    });

    //{{SERVER}}/users/delete_users
    router.get('/options/clean', function (request, response) {
        if (general.validateLogin(request))
            model.clean(TABLE)
                .then((message) => {
                    response.send(message);
                }).catch((error) => {
                    console.error(error);
                    response.send(error);
                });
        else { response.send({ error: 'No se a enviado ningun token' }) };
    });

    //{{SERVER}}/users/
    router.post('/', function (request, response) {
        if (general.validateLogin(request))
            model.create(TABLE, request.body)
                .then((object) => {
                    response.send(object);
                }).catch((error) => {
                    console.error(error);
                    response.send(error);
                });
        else { response.send({ error: 'No se a enviado ningun token' }) };
    });

    router.put('/:id', function (request, response) {
        let id = request.params.id;
        if (general.validateLogin(request))

            model.update(TABLE, request.body, id)
                .then((row) => {
                    response.send(row);
                }).catch((error) => {
                    console.error(error);
                    response.send(error);
                });
        else { response.send({ error: 'No se a enviado ningun token' }) };
    });

    router.get('/', function (request, response) {

        if (general.validateLogin(request))
            model.getAll(TABLE)
                .then((rows) => {
                    response.send(rows);
                }).catch((error) => {
                    console.error(error);
                    response.send(error);
                });
        else response.send({ error: 'no se ha enviado un token' });
    });


    router.put('/:id', function (request, response) {
        let id = request.params.id;
        if (general.validateLogin(request))

            model.getById(TABLE, id)
                .then((row) => {
                    response.send(row);
                }).catch((error) => {
                    console.error(error);
                    response.send(error);
                });
        else response.send({ error: 'no se ha enviado un token' });
    });

    router.delete('/:id', function (request, response) {
        let id = request.params.id;
        if (general.validateLogin(request))

            model.delete(TABLE, id)
                .then((message) => {
                    response.send(message);
                }).catch((error) => {
                    console.error(error);
                    response.send(error);
                });
        else response.send({ error: 'no se ha enviado un token' });
    });

    return router;
}