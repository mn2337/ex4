//const express = require('express');
//var firebase = require("firebase");
//const port = process.env.PORT || 4000;
const express = require('express');
const port = process.env.PORT || 4000;
const app = express();
const path = require('path');

const indexRoute = require('./routes/index.js');
const aboutRoute = require('./routes/about.js');
const postRoute = require('./routes/post.js');
const submitRoute = require('./routes/submit.js');


// require("firebase/app")
// require("firebase/auth");
// require("firebase/firestore");

app.use(express.static(path.join(__dirname, 'public')));

app.use('/static', express.static('public'));
app.use('/', indexRoute);
app.use('/about', aboutRoute);
app.use('/post', postRoute);
app.use('/submit', submitRoute);
app.use('/submit-form', (req, res) => 
	res.sendFile('/public/form.html', { root: __dirname })
);

// var app = firebase.initializeApp({
// 	apiKey: "AIzaSyCYp6yhXrzR0SuomKOXJRpet5V0iRUXrDw",
// 	authDomain: "dw-ex4-45d8a.firebaseapp.com",
// 	databaseURL: "https://dw-ex4-45d8a.firebaseio.com",
// 	projectId: "dw-ex4-45d8a",
// 	storageBucket: "dw-ex4-45d8a.appspot.com",
// 	messagingSenderId: "11114764655",
// 	appId: "1:11114764655:web:8d18629518576411a4b09a"
// });

app.listen(port, () => console.log(`Example app listening on port ${port}`));
