const firebase = require("firebase/app");
const { getStorage } = require("firebase/storage");

const firebaseConfig = {
  apiKey: "AIzaSyDo-Gpben0s7X276DD-us8PVozSptQ5kY4",
  authDomain: "class-d1d7d.firebaseapp.com",
  projectId: "class-d1d7d",
  storageBucket: "class-d1d7d.appspot.com",
  messagingSenderId: "958959817021",
  appId: "1:958959817021:web:2811453ca9ffb5d4b47554",
};

const app = firebase.initializeApp(firebaseConfig);
const storage = getStorage(app);
exports.storage = storage;
module.exports = {
  storage,
};
