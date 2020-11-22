<<<<<<< HEAD
=======
const config = require('../../config.json');

>>>>>>> 28c5595f4dfcf2c04633457b0b040df9b2421903
const LoginController = function () {
    const express = require('express');
    const router = express.Router();
    var jwt = require('jsonwebtoken');

    router.post('/', function (request, response) {
        let user = request.body.user;
        let password = request.body.password;

<<<<<<< HEAD
        if (user == 'admin' && password == '12345678') {
            let datos = {
                user: user,
                date_login: new Date(),
                type: 'Admin'
            }
            let secreto = 'bictia';

            let token = jwt.sign({
                exp: Math.floor(Date.now() / 1000)+(60 * 1),
                data: datos
            }, secreto);
=======
        if (user == config.login.username && password == config.login.password) {
            let datos = {
                user: user,
                date_login: new Date(),
                type: config.login.type
            }


            let token = jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (60 * config.jwt.timeToExpireInMinutes),
                data: datos
            }, config.jwt.secret);
>>>>>>> 28c5595f4dfcf2c04633457b0b040df9b2421903
            response.send({ token: token });
        } else {
            response.send('Datos incorrectos');
        }
    });

    return router;
}
module.exports = LoginController;