const request = require('supertest');
const nock = require('nock');

const runApp = require('../app');

const [app, server] = runApp();

afterAll(() => {
	server.close();
});

describe('GET base route /', () => {
	it('Responds successfully', (done) => {
		request(app)
			.get('/')
			.expect('Content-Type', 'text/html; charset=utf-8')
			.expect(200)
			.end(function (err, res) {
				if (err) throw err;
				done();
			});
	});
});

describe('DATA route /data', () => {
	it('should send back data for a specific resource!', (done) => {
		request(app)
			.get('/data/1')
			.expect('Content-Type', 'application/json; charset=utf-8')
			.expect(200)
			.end(function (err, res) {
				if (err) throw err;
				expect(res.body).toEqual({
					"userId": 1,
					"id": 1,
					"title": "delectus aut autem",
					"completed": false
				});
				done();
			});
	});

	it('should send back data for a collection', (done) => {
		request(app)
			.get('/data')
			.expect('Content-Type', 'application/json; charset=utf-8')
			.expect(200)
			.end(function (err, res) {
				if (err) throw err;
				expect(res.body).toBeInstanceOf(Array);
				expect(res.body.length).toBeGreaterThan(1);
				done();
			});
	});
});

describe('testing with nock!', () => {
	it('should intercept requests to the todos collection api', (done) => {
		nock('https://jsonplaceholder.typicode.com')
			.get('/todos')
			.reply(200, [
				{
					"userId": 9001,
					"id": 9001,
					"title": "Hey Vegeta!",
					"completed": true
				}
			]);

		request(app)
			.get('/data')
			.expect('Content-Type', 'application/json; charset=utf-8')
			.expect(200)
			.end(function (err, res) {
				if (err) throw err;
				expect(res.body).toBeInstanceOf(Array);
				expect(res.body.length).toEqual(1);
				expect(res.body[0]).toEqual({
					"userId": 9001,
					"id": 9001,
					"title": "Hey Vegeta!",
					"completed": true
				});
				done();
			});
	});
});
