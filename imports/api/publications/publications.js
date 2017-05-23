import { Meteor } from 'meteor/meteor'
import { Tasks } from '../collections/collections'

Meteor.publish('tasks', function () {
  return Tasks.find({},{fields: { name: true }});
});
