import * as functions from 'firebase-functions';
import { dialogflow } from 'actions-on-google';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

const app = dialogflow();

app.intent('start_feed', conv => {
    const time = new Date();
    conv.add(`hello world ${time.toString()}`);
});

export const fulfillment = functions.https.onRequest(app);
