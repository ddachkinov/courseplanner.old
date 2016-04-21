/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

import User from '../api/user/user.model';
import Syllabus from '../api/syllabus/syllabus.model';
//populating syllabuses
Syllabus.find({}).removeAsync()
  .then(() => {
    Syllabus.createAsync({

      academy: 'Plovdiv',
      year: 1990,
      title: "EuroTrip",
      weekplans: [{
        week:2,
        summary:"Does anyone want to join me?"
      }]
    }, {
      academy: 'Sofia',
      year: 1993,
      title: "Asia",
      owner:"507f191e810c19729de861ea",
      weekplans: [{
        week:1,
        summary:"Any Visa advices?"
      }, {
        week:2,
        summary:"I need a couch for tonight!"
      }]
    }, {
      academy: 'Varna',
      year: 1995,
      title: "A trip to France",
      weekplans: [{
        week:5,
        summary:"Hey, buddy, are you still in Montpellier"
      }]
    })
    .then(() => {
      console.log('finished populating syllabuses');
    });
  });
//populating users
User.find({}).remove()
  .then(() => {
    User.create({
      _id:'508f191e810c19729de860ea',
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      _id:'507f191e810c19729de861ea',
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
