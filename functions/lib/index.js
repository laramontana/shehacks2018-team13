"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const actions_on_google_1 = require("actions-on-google");
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
const app = actions_on_google_1.dialogflow();
app.intent('feed.start', conv => {
    const time = new Date();
    docRef.set({
        StartFeed: `${time.getHours()}:${time.getMinutes()}`,
        StopFeed: 0
    });
    conv.add(`Start feed: ${time.getHours()}:${time.getMinutes()}`);
});
app.intent('feed.stop', conv => {
    //1 read  from the databse
    //2 make the diffremce between Start
    const time = new Date();
    docRef.update({
        StopFeed: `${time.getHours()}:${time.getMinutes()}`
    });
    //onst startTimeRef = docRef.data().StartFeed;
    conv.add(`Feed stopped: ${time.getHours()}:${time.getMinutes()}. Last time feeded: ${docRef.data()}`);
    //const diff = time.getMinutes() - startTimeRef.split(":")[1].parseInt();
    //Duration from last time feeded: ${diff}
});
exports.fulfillment = functions.https.onRequest(app);
//var usersRef = ref.child("users");
// usersRef.set({
//   alanisawesome: {
//     date_of_birth: "June 23, 1912",
//     full_name: "Alan Turing"
//   }
//# sourceMappingURL=index.js.map