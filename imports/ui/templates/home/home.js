import './home.html'
import { Tasks } from '../../../api/collections/collections'
import { Template } from 'meteor/templating';

Template.home.helpers({
    formCollection() {
        return Tasks; 
    }
});

Template.home.events({
  'click .logOut':function(event){
    Meteor.logout();
  }
});

Template.list.onCreated(function listOnCreated() {
  Meteor.subscribe('MyTasks');
});

Template.list.helpers({
   task : function(){
       return Tasks.find().fetch();
   }
});
