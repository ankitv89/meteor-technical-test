import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'



export const Tasks = new Meteor.Collection('tasks');

if(Meteor.isClient)
window.Tasks = Tasks;


//export default Tasks;
