module.exports = function (databaseConfig) {

    const express = require('express');
    const router = express.Router();

    const TABLE = 'heroes';

    const general = require('../utils/general')();
    //general.setDefaultDatabase('firestore');
    let model = general.getDatabaseModel();
    var jwt = require('jsonwebtoken');

    router.get('/', function (request, response) {
        if (true)
            model.getAll(TABLE)
                .then((rows) => {
                    response.send(rows);
                }).catch((error) => {
                    console.error(error);
                    response.send(error);
                });
        else { response.send({ error: 'No se a enviado ningun token' }) };
    });

    router.get('/:id', function (request, response) {
        let id = request.params.id;
        if (true)
            model.getById(TABLE, id)
                .then((row) => {
                    response.send(row);
                }).catch((error) => {
                    console.error(error);
                    response.send(error);
                });
        else { response.send({ error: 'No se a enviado ningun token' }) };
    });


    router.post('/options/initialize', function (request, response) {
        if (true)
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
        if (true)
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
        if (true)
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
        if (true)
            model.update(TABLE, request.body, id)
                .then((row) => {
                    response.send(row);
                }).catch((error) => {
                    console.error(error);
                    response.send(error);
                });
        else { response.send({ error: 'No se a enviado ningun token' }) };
    });

    router.delete('/:id', function (request, response) {
        let id = request.params.id;
        if (true)
            model.delete(TABLE, id)
                .then((message) => {
                    response.send(message);
                }).catch((error) => {
                    console.error(error);
                    response.send(error);
                });
        else { response.send({ error: 'No se a enviado ningun token' }) };
    });

    return router;
}