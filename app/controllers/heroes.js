const HeroesController = function () {
    const express = require('express');
    const router = express.Router();

    let heroes = [
        { id: 0, name: 'Profesor super o' },
        { id: 1, name: 'Super chanqueta' },
        { id: 2, name: 'La mujer grande' },
        { id: 3, name: 'El amigo bueno' },
        { id: 4, name: 'Baticosito' },
        { id: 5, name: 'El perro grande' },

    ];

    router.get('/heroes/:id', (request, response) => {
        let id = request.params.id;
        let respuesta = heroes[id] == undefined ? { id: id, name: 'El heroe con id ' + id + ' no existe' } : heroes[id];

        response.send(respuesta);
    });

    router.get('/heroes', (request, response) => {
        response.send(heroes);
    });

    return router;
};
module.exports = HeroesController;