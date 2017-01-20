const express = require('express');
const survey = require('./app/routing/htmlRoutes');
const api = require('./app/routing/apiRoutes');

const app = express();
const PORT = 8000;

app.use(api);
app.use(survey);

app.listen(PORT, () => {
	console.log('Express server on port:', PORT);
});