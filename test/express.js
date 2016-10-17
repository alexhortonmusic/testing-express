'use strict';

const request = require('supertest')
const app = require('../server')
const { property } = require('chai').assert

describe('express', () => {
  it('should respond with json of Hello World', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(res => res.body)
      .end(done)
  }) // should be JSON

  // it('should be POST /addresses 201 JSON')
  it('should POST to /addresses', (done) => {
    request(app)
      .post('/addresses')
      .expect(201)
      .expect('Content-Type', /json/)
      .expect(res => property(res.body, '_id'))
      .end(done)
  })

  // it('DELETE /addresses/:id 204')
  it('should delete a specific address', (done) => {
    request(app)
      .delete('/addresses/123')
      .expect(204)
      .end(done)
  })
})
