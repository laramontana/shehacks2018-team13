"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const actions_on_google_1 = require("actions-on-google");
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
const app = actions_on_google_1.dialogflow();
app.intent('start_feed', conv => {
    const time = new Date();
    conv.add(`hello world ${time.toString()}`);
});
exports.fulfillment = functions.https.onRequest(app);
//# sourceMappingURL=index.js.map