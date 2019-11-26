const express = require('express');
const firebase = require('firebase');
const router = express.Router();

const firebaseConfig = {
	apiKey: "AIzaSyCYp6yhXrzR0SuomKOXJRpet5V0iRUXrDw",
	authDomain: "dw-ex4-45d8a.firebaseapp.com",
	databaseURL: "https://dw-ex4-45d8a.firebaseio.com",
	projectId: "dw-ex4-45d8a",
	//storageBucket: "dw-ex4-45d8a.appspot.com",
	//messagingSenderId: "11114764655",
	//appId: "1:11114764655:web:8d18629518576411a4b09a"
};

if (!firebase.apps.length) {
	firebase.intiializeApp(firebaseConfig);
}

const db = firebase.firestore();

// single post routes/post.js
router.get("/:id", (req, res) => {
	let queryId = req.params.id;
	let docRef = db.collection("blog").doc(queryId);
	docRef
	.get()
	.then(doc => res.send(doc.data()))
	.catch(error => res.send(error))
});

module.exports = router;