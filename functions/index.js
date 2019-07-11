// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);



exports.portfolio = functions.https.onRequest((req, res) => {
   res.status(200).send('log portfolio');
});

exports.post = functions.https.onRequest((req, res) => {
   res.status(200).send('log post');
});