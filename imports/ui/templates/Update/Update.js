import './Update.html'
import { Tasks } from '../../../api/collections/collections'

Template.updateTask.onCreated(function listOnCreated() {
  Meteor.subscribe('Task',Router.current().params.taskId);
});

Template.updateTask.events({
  'submit #taskUpdate':function(event){
    event.preventDefault();
    const target = event.target;
    name=target.name.value;
    if(name){
      Meteor.call("UpdateTask",Router.current().params.taskId,name);
      target.name.value="";
      Router.go('/');
    }
  }
});

Template.updateTask.helpers({
   task : function(){
        return Tasks.find({"_id":Router.current().params.taskId}).fetch();
   }
});
