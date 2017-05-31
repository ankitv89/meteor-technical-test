import { Meteor } from 'meteor/meteor'

import { Tasks } from '../collections/collections'

Meteor.methods({
  //Update Task after checking userId == authorId
  UpdateTask: function(taskId,name){
    Tasks.update(
      {
        "_id" : taskId,
        "authorId":this.userId
      },
      {
        $set:
        {
          "name": name
        }
      }
    );
  },

  //BONUS: deleting Tasks after checking userId
  DeleteTask: function(taskId){
    Tasks.remove(
      {
        "_id" : taskId,
        "authorId":this.userId
      }
    );
  }

});
