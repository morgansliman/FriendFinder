const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const friends = require('../data/friends');

function Friend(name, photo, scores) {
	this.name = name;
	this.photo = photo;
	this.scores = scores;
}

router.use(bodyParser.urlencoded({ extended: true }));


Array.min = function(array) {
	return Math.min.apply( Math, array );
};

router.get('/api/friends', (req, res) => {
	res.json(friends);
});

router.post('/api/friends', (req, res) => {
	// handles survey results & compatibility logic
	if (!req.body) return res.sendStatus(400);
	console.log(req.body);
	let body = req.body;
	let name = body.name,
		photo = body.photo,
		scores = body.scores,
		friendScores = [];

	scores.forEach((el, i) => {
		scores[i] = parseInt(el);
	});

	friends.forEach((el) => {
		let scores = el.scores;
		scores.forEach((el, i) => {
			scores[i] = parseInt(el);
		});
		friendScores.push(scores);
	});

	friendScores.forEach((el, i) => {
		let diff = 0;
		for (let j = 0; j < scores.length; j++) {
			diff += Math.abs(scores[j] - el[j]);
		}
		friendScores[i] = diff;
	});

	let min = Array.min(friendScores);
	let match = friends[friendScores.indexOf(min)];
	let user = new Friend(name, photo, scores);


	friends.push(user);
	res.json(match);
});

module.exports = router;