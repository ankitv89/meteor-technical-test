import { Meteor } from 'meteor/meteor'

import { Tasks } from '../collections/collections'

Tasks.allow({
  insert: function(userId,doc) {
    return (!!userId);
  }
});

Meteor.publish('MyTasks',function(){
  return Tasks.find({}, {
  fields: {
    "secret": 0
    }
  });
});

Meteor.publish('Task',function(taskId){
  return Tasks.find({_id:taskId}, {
  fields: {
    "secret": 0
    }
  });
});
