import { Meteor } from 'meteor/meteor'

import { Tasks } from '../collections/collections'

Meteor.methods({
  UpdateTask: function(taskId,name){
    Tasks.update(
      {"_id" : taskId,"authorId":this.userId},
      {$set:{"name": name }}
    );
  }
});
