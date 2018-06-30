"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const actions_on_google_1 = require("actions-on-google");
const admin = require("firebase-admin");
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
const app = actions_on_google_1.dialogflow();
admin.initializeApp();
// https://she-hacks-13-f2fc2.firebaseio.com/
app.intent('start_feed', conv => {
    const time = new Date();
    admin.database().ref('/she-hacks-13-f2fc2.firebaseio.com').push({ StartTime: time });
    conv.add(`Feed has started today at ${time.getUTCHours()}:${time.getUTCMinutes()}`);
});
app.intent('feed.stop', conv => {
    const time = new Date();
    conv.add(`Feed stoped at ${time.getUTCHours()}:${time.getUTCMinutes()}`);
});
exports.fulfillment = functions.https.onRequest(app);
//# sourceMappingURL=index.js.map