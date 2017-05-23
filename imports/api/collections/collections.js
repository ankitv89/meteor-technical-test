import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'



export const Tasks = new Mongo.Collection('tasks');

Tasks.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Tasks.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

//export default Tasks;
