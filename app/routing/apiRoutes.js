const express = require('express');
const router = express.Router();

router.get('/api/friends', (req, res) => {
	res.send('displays json of all possible friends');
});

router.post('/api/friends', (req, res) => {
	// handles survey results & compatibility logic
});

module.exports = router;