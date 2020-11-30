const functions = require('firebase-functions');
const { resolveContent } = require('nodemailer/lib/shared');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.Saludo = functions.https.onRequest((request, response) => {
    //functions.logger.info("Hello logs!", {structuredData: true});
    response.send("Hola visitante");
});

exports.SendeEmail = functions.firestore
    .document('users/{usersId}')
    .onWrite((change, context) => {     /* https.onRequest((request, response) => { */

        let information = change.data();

        const nodemailer = require("nodemailer");
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'andres.romero.otalora@gmail.com'.user,
                pass: '',
            },
        });

        let emailOptions = {
            from: '<andres.romero.otalora@gmail.com>',
            to: information.email,
            subject: 'Registro exitoso',
            text: 'hola',
            html: '<b>Hola mundo?</b>'
        }
        return transporter.sendMail(emailOptions).then((data) => {
            //response.send('correo enviado');
            resolve(data);
            return;
        }).catch((error) => {
            response.send(error);
            reject(error);
            return;
        });
    });


