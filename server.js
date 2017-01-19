const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const survey = require('./app/routing/htmlRoutes');
const api = require('./app/routing/apiRoutes');

const app = express();
const PORT = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

app.use(api);
app.use(survey);

app.listen(PORT, () => {
	console.log('Express server on port:', PORT);
});