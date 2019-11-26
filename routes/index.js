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

const firestoreDatabase = firebase.initializeApp(firebaseConfig);
const db = firestoreDatabase.firestore();

let posts = [];

db.collection('blog')
	.get()
	.then(
		blogPosts => {
			blogPosts.forEach(post => {
				posts.push(post.data());
			});
			console.log('blogPosts', blogPosts);
		}
	)
	.catch(err => {
		console.log('error', err)
	})


router.get('/', (req, res) => (res.send(posts)));

console.log(firebase.database());

module.exports = router;





