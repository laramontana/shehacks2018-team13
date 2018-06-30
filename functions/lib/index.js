"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const actions_on_google_1 = require("actions-on-google");
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
const app = actions_on_google_1.dialogflow();
app.intent('start_feed', conv => {
    const time = new Date();
    conv.add(`Feed has started today at ${time.getUTCHours()}:${time.getUTCMinutes()}`);
});
app.intent('feed.stop', conv => {
    const time = new Date();
    conv.add(`Feed stoped at ${time.getUTCHours()}:${time.getUTCMinutes()}`);
});
exports.fulfillment = functions.https.onRequest(app);
//# sourceMappingURL=index.js.map