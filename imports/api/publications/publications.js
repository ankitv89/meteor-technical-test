import { Meteor } from 'meteor/meteor'

import { Tasks } from '../collections/collections'

//Allow Only logged in users to insert Tasks
Tasks.allow({
  insert: function(userId,doc) {
    return ((!!userId) && (doc.name!="") && (doc.secret!=""));
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
