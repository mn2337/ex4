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

///////////

//set sample data to submit upon request

const sampleData = {
	author: "Test",
	text: "Test",
	title: "Test"
}

// test route
router.get("/test", (req, res) => {
	db.collection("blog")
	.doc("test-doc")
	.set(sampleData)
	.then(function() {
		res.send("Document submitted successfully!")
	})
	.catch(function(error) {
		res.send("Error writing document: ", error)
	})
})

module.exports = router; 

router.get("/", (req, res) => {
	// localhost:4000/submit?author=author&text=text&title=title
	let authorVal = req.query.author ? req.query.author : '';
	let textVal = req.query.text ? req.query.text : '';
	let titleVal = req.query.title ? req.query.title : '';
	db.collection("blog")
	.add({
		author: authorVal,
		text: textVal,
		title: titleVal
	})
	.then(ref => res.send(ref))
	.catch(e => res.send(e));
})