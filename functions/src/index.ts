import * as functions from 'firebase-functions';
import { dialogflow } from 'actions-on-google';
import * as admin from 'firebase-admin';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

const app = dialogflow();
admin.initializeApp();

// https://she-hacks-13-f2fc2.firebaseio.com/

app.intent('feed.start', conv => {
    const time = new Date();
    admin.database().ref('/she-hacks-13-f2fc2.firebaseio.com').push({StartTime: time})
    conv.add(`Feed has started today at ${time.getUTCHours()}:${time.getUTCMinutes()}`);
});

app.intent('feed.stop', conv => {
    const time = new Date();
    conv.add(`Feed stoped at ${time.getUTCHours()}:${time.getUTCMinutes()}`);
});

export const fulfillment = functions.https.onRequest(app);
