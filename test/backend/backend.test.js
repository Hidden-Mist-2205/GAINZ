let request = require('supertest');
const { sql } = require('../../database');
const controllers = require('../../database/controllers');

request = request('http://localhost:3000/');

describe('GET /products', () => {
  it('should respond with status 200 and an array', (done) => {
    //const userInfo = await controllers.getUserData(1);
    request
      .get('/getUserInfo')
      .expect((res) => expect(res.body).toBe("ok"))
      .expect(200, done);
    //expect(Array.isArray(userInfo)).toBeTruthy();
  });
});
