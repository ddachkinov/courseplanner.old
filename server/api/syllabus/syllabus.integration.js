'use strict';

var app = require('../..');
import request from 'supertest';

var newSyllabus;

describe('Syllabus API:', function() {

  describe('GET /api/syllabusses', function() {
    var syllabuss;

    beforeEach(function(done) {
      request(app)
        .get('/api/syllabusses')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          syllabuss = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      syllabuss.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/syllabusses', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/syllabusses')
        .send({
          name: 'New Syllabus',
          info: 'This is the brand new syllabus!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newSyllabus = res.body;
          done();
        });
    });

    it('should respond with the newly created syllabus', function() {
      newSyllabus.name.should.equal('New Syllabus');
      newSyllabus.info.should.equal('This is the brand new syllabus!!!');
    });

  });

  describe('GET /api/syllabusses/:id', function() {
    var syllabus;

    beforeEach(function(done) {
      request(app)
        .get('/api/syllabusses/' + newSyllabus._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          syllabus = res.body;
          done();
        });
    });

    afterEach(function() {
      syllabus = {};
    });

    it('should respond with the requested syllabus', function() {
      syllabus.name.should.equal('New Syllabus');
      syllabus.info.should.equal('This is the brand new syllabus!!!');
    });

  });

  describe('PUT /api/syllabusses/:id', function() {
    var updatedSyllabus;

    beforeEach(function(done) {
      request(app)
        .put('/api/syllabusses/' + newSyllabus._id)
        .send({
          name: 'Updated Syllabus',
          info: 'This is the updated syllabus!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedSyllabus = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedSyllabus = {};
    });

    it('should respond with the updated syllabus', function() {
      updatedSyllabus.name.should.equal('Updated Syllabus');
      updatedSyllabus.info.should.equal('This is the updated syllabus!!!');
    });

  });

  describe('DELETE /api/syllabusses/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/syllabusses/' + newSyllabus._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when syllabus does not exist', function(done) {
      request(app)
        .delete('/api/syllabusses/' + newSyllabus._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
