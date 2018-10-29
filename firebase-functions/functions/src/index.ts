import * as functions from 'firebase-functions';
import * as gcs from '@google-cloud/storage';
import * as language from '@google-cloud/language';
import * as vision from '@google-cloud/vision';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
//const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
const rp = require('request-promise');
const cors = require('cors')({origin: true});

admin.initializeApp();

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.addMessage = functions.https.onRequest((req, res) => {
    // Grab the text parameter.
    const original = req.query.text;
    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    return admin.database().ref('/messages').push({original: original}).then((snapshot) => {
      // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
      return res.redirect(303, snapshot.ref.toString());
    });
  });

// Listens for new messages added to /messages/:pushId/original and creates an
// uppercase version of the message to /messages/:pushId/uppercase
exports.makeUppercase = functions.database.ref('/messages/{pushId}/original')
.onCreate((snapshot, context) => {
  // Grab the current value of what was written to the Realtime Database.
  const original = snapshot.val();
  console.log('Uppercasing', context.params.pushId, original);
  const uppercase = original.toUpperCase();
  // You must return a Promise when performing asynchronous tasks inside a Functions such as
  // writing to the Firebase Realtime Database.
  // Setting an "uppercase" sibling in the Realtime Database returns a Promise.
  return snapshot.ref.parent.child('uppercase').set(uppercase);
});

export const labelImage = functions.https.onRequest((request, response) => {
    console.info("Received request for labelling image.");
    return cors(request, response, () => {
        const image = retrieveImage(request);
        return label(image)
            .then(labels => 
                {
                    return classifyLabels(labels).then(results => response.json({results: results}));
                })
            .catch(err =>
                {
                    console.error(err);
                    response.sendStatus(500);
                }
            );
    });
});

function retrieveImage(request : functions.Request) : vision.Image {
    console.info("Retrieving image");

    // TODO: To decide which we are going to use.
    // image.content // base64 encoded image
    // image.source // link to image

    const body = request.body;
    const imageBlob = body.imageBlob;
    if (imageBlob) {
        console.info("Image retrieved as a blob.");

        // Currently image blob contains the browser formatted base64 string (including the content type and stuff)
        const bufferedImage = Buffer.from(imageBlob.split(',')[1], 'base64')
        return { content: bufferedImage };
    }

    console.info("No blob found, so looking for image URI.");
    const imageUri = body.imageUri;
    return { source:{ imageUri: imageUri } };
}

function label(image) : Promise<vision.EntityAnnotation[]> {
    const requests = { requests: [ { image: image, features: [ {type: 'LABEL_DETECTION'} ] } ] };
    const client = new vision.v1p2beta1.ImageAnnotatorClient();
    return client.batchAnnotateImages(requests)
    .then(results => {
        const annotateResults = results[0].responses[0]; // Only one image sent.
        if (annotateResults.error){
            throw annotateResults.error;
        }

        return annotateResults.labelAnnotations;
    })
    .catch(err => {
        console.error('ERROR:', err);
        throw err;
    });
}

function classifyLabels(labels: vision.EntityAnnotation[]) : Promise<any> {
    console.info("Classifying labels");
    const client = new language.LanguageServiceClient();

    const descriptions = labels.map(label => label.description);
    const tokens = descriptions.join(" ").split(" ");
    while (tokens.length < 13) {
        console.warn("Not enough tokens, so no classification will be done.");
        return Promise.resolve({ labels: labels, categories: [] });
    }

    const document = { content: descriptions.join(","), type: 'PLAIN_TEXT' };
    console.info(document);
    return client.classifyText({document : document})
    .then(results => {
        const classification = results[0];

        console.log('Categories:');
        classification.categories.forEach(category => {
          console.log(
            `Name: ${category.name}, Confidence: ${category.confidence}`
          );
        });

        return { labels: labels, categories: classification.categories };
    })
    .catch(err => {
        console.error('ERROR:', err);
    });
}
