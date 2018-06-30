import * as functions from 'firebase-functions';
import { dialogflow } from 'actions-on-google';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

const app = dialogflow();

app.intent('start_feed', conv => {
    const time = new Date();
    conv.add(`Feed has started today at ${time.getUTCHours()}:${time.getUTCMinutes()}`);
});

app.intent('feed.stop', conv => {
    const time = new Date();
    conv.add(`Feed stoped at ${time.getUTCHours()}:${time.getUTCMinutes()}`);
});

export const fulfillment = functions.https.onRequest(app);
