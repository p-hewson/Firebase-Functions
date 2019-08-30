const functions = require('firebase-functions');
const admin = require('firebase-admin');
const util = require('util')
const express = require('express');
const app = express();

exports.bigben = functions.https.onRequest((req, res) => {
  const hours = (new Date().getHours() % 12) + 1  // London is UTC + 1hr;
  res.status(200).send(`<!doctype html>
    <head>
      <title>Time</title>
    </head>
    <body>
      ${'BONG '.repeat(hours)}
    </body>
  </html>`);
});

exports.submission = functions.https.onRequest((req,res) => {
  console.log("console.log");
  console.log(util.inspect(req.body.data));
  res.status(200).send(req.rawBody);
  /*var storageRef = firebase.storage().ref();



  const serialnumber = req.query.text;

  const writeResult = this.admin.firestore().collection().add({original: serialnumber});

  res.json({result: `Message with ID: ${writeResult.id} added.`});


  /*res.status(200).send(`<!doctype html>
    <head>
      <title>Submission</title>
    </head>
    <body>
      Hello World
    </body>
    </html>`);*/
});
