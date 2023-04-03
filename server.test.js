const supertest = require('supertest');

const app = require('./server.js');
const request = supertest(app);

describe('The test should let a user send a request and get their input reversed', () => {
  test('Should return the input reversed when sending a GET request to /reverse-it', async () => {
    let response = await request.get('/reverse-it?input=Testing');
    expect(response.text).toEqual('gnitseT');
  });
});
