const supertest = require('supertest')
const app = require('../index')
const request = supertest(app)
const assert = require('assert')

describe('GET /', () => {

  it('should be up', done => {
    request.get('/')
    .expect(200)
    .end((err, res) => {
      assert.equal(res.text, 'Hello world!');
      done(err)
    })
  })

})
