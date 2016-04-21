'use strict';

//import mongoose from 'mongoose';
var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var SyllabusSchema = new mongoose.Schema({
  academy: String,
  year: Number,
  title: String,
  objectives: String,
  lecturer: String,
  iconurl: String,
  education: String,
  owner: {
      type: Schema.ObjectId,
      ref:'User'
    },
  weekplans: [{
    week:Number,
    summary:String,
    topics:String,
    literature:String,
    videos:String,
    assigments:String,
    teaser:String
  }]
});

export default mongoose.model('Syllabus', SyllabusSchema);
