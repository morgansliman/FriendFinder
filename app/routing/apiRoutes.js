const express = require('express');
const router = express.Router();

const friends = require('../data/friends');

const Friend = {
	"name": "",
	"photo": "",
	"scores": []
};

router.get('/api/friends', (req, res) => {
	res.json(friends);
});

router.post('/api/friends', (req, res) => {
	// handles survey results & compatibility logic
	console.log(req);
});

module.exports = router;