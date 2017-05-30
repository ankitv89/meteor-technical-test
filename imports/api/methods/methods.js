import { Tasks } from '../collections/collections'

Meteor.methods({
  taskInsert(task){
    if(!Meteor.userId())
      throw new Meteor.Error(403, "You must be logged in");
    Tasks.insert(task);
    return true;
  },
  taskUpdate(task){
    //Check Login
    if(!Meteor.userId())
      throw new Meteor.Error(403, "Not logged in");

    if(!Tasks.findOne({_id: task._id}))
      throw new Meteor.Error(404, "This task doesn't exist");

    //Check if the task belongs to current userId
    if(Meteor.userId() !== Tasks.findOne({_id: task._id}).authorId)
      throw new Meteor.Error(403, "This task doesn't belong to you");

    Tasks.update(task._id, task.modifier);
    return true;
  }
});
