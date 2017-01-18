const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('Survey home page');
});

router.get('/survey', (req, res) => {
	res.send('Show survey here');
});

module.exports = router;