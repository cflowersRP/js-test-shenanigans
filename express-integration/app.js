const express = require('express');
const fetch = require('node-fetch');
const app = express();

function runApp() {
	app.get('/', function (req, res) {
		res.send('Hello World')
	});

	app.get('/data/:id?', function (req, res) {
		const resourceId = req.params.id ? `/${req.params.id}` : '';
		fetch(`https://jsonplaceholder.typicode.com/todos${resourceId}`)
			.then(response => response.json())
			.then(json => res.json(json));
	});

	const server = app.listen(3005);

	return [app, server];
}

module.exports = runApp;
