import * as functions from 'firebase-functions';
import { dialogflow } from 'actions-on-google';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

// Import database
const admin = require("firebase-admin");

const serviceAccount = require("../she-hacks-13-f2fc2-firebase-adminsdk-n5ubg-4e73d435df.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://she-hacks-13-f2fc2.firebaseio.com"
});

const db = admin.firestore();
const docRef = db.collection('Time').doc('baby');



const app = dialogflow();

app.intent('feed.start', conv => {
    const time = new Date();
    docRef.set({
        StartFeed:`${time.getHours()}:${time.getMinutes()}`,
        StopFeed: 0
      });
      conv.add("Start feed");
}
);

app.intent('feed.stop', conv => {
    const time = new Date();
    docRef.update({
        StopFeed: `${time.getHours()}:${time.getMinutes()}`
      });
    conv.add("Feed stopped");
}
);

export const fulfillment = functions.https.onRequest(app);


//var usersRef = ref.child("users");
// usersRef.set({
//   alanisawesome: {
//     date_of_birth: "June 23, 1912",
//     full_name: "Alan Turing"
//   }