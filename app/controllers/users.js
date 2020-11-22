module.exports = function (databaseConfig) {
<<<<<<< HEAD
=======

>>>>>>> 28c5595f4dfcf2c04633457b0b040df9b2421903
    const express = require('express');
    const router = express.Router();

    const TABLE = 'users';

    const general = require('../utils/general')();
<<<<<<< HEAD
    general.setDefaultDatabase('firestore');
    let model = general.getDatabaseModel();
    var jwt = require('jsonwebtoken');

    //{{SERVER}}/users/create_users
    router.post('/options/initialize', function (request, response) {
        model.initialize(TABLE, request.body)
            .then((message) => {
                response.send(message);
            }).catch((error) => {
                console.error(error);
                response.send(error);
            });
    });

    //{{SERVER}}/users/delete_users
    router.get('/options/clean', function (request, response) {
        model.clean(TABLE)
            .then((message) => {
                response.send(message);
            }).catch((error) => {
                console.error(error);
                response.send(error);
            });
    });

    //{{SERVER}}/users/
    router.post('/', function (request, response) {
        model.create(TABLE, request.body)
            .then((object) => {
                response.send(object);
            }).catch((error) => {
                console.error(error);
                response.send(error);
            });
    });

    router.put('/:id', function (request, response) {
        let id = request.params.id;
        model.update(TABLE, request.body, id)
            .then((row) => {
                response.send(row);
            }).catch((error) => {
                console.error(error);
                response.send(error);
            });
    });

    router.get('/', function (request, response) {
        let token = request.headers['auth-jwt'];

        if (token) {
            jwt.verify(token, 'bictia', function (error, decoded) {
                if (error) {
                    response.send({ error: 'el token utilizado no es valido', message: error })
                }
                model.getAll(TABLE)
                    .then((rows) => {
                        response.send(rows);
                    }).catch((error) => {
                        console.error(error);
                        response.send(error);
                    });
            });
        } else {
            response.send({ error: 'no se ha enviado un token' });
        }
=======
    //general.setDefaultDatabase('firestore');
    let model = general.getDatabaseModel();
    var jwt = require('jsonwebtoken');

    router.get('/', function (request, response) {
        if (general.validateLogin(request))
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
        if (general.validateLogin(request))
            model.getById(TABLE, id)
                .then((row) => {
                    response.send(row);
                }).catch((error) => {
                    console.error(error);
                    response.send(error);
                });
        else { response.send({ error: 'No se a enviado ningun token' }) };
>>>>>>> 28c5595f4dfcf2c04633457b0b040df9b2421903
    });


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
<<<<<<< HEAD
        model.getById(TABLE, id)
            .then((row) => {
                response.send(row);
            }).catch((error) => {
                console.error(error);
                response.send(error);
            });
=======
        if (general.validateLogin(request))
            model.update(TABLE, request.body, id)
                .then((row) => {
                    response.send(row);
                }).catch((error) => {
                    console.error(error);
                    response.send(error);
                });
        else { response.send({ error: 'No se a enviado ningun token' }) };
>>>>>>> 28c5595f4dfcf2c04633457b0b040df9b2421903
    });

    router.delete('/:id', function (request, response) {
        let id = request.params.id;
<<<<<<< HEAD
        model.delete(TABLE, id)
            .then((message) => {
                response.send(message);
            }).catch((error) => {
                console.error(error);
                response.send(error);
            });
=======
        if (general.validateLogin(request))
            model.delete(TABLE, id)
                .then((message) => {
                    response.send(message);
                }).catch((error) => {
                    console.error(error);
                    response.send(error);
                });
        else { response.send({ error: 'No se a enviado ningun token' }) };
>>>>>>> 28c5595f4dfcf2c04633457b0b040df9b2421903
    });

    return router;
}