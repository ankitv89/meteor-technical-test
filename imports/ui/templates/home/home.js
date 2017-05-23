import { Template } from 'meteor/templating';
import { Tracker } from 'meteor/tracker';

import { Tasks } from '../../../api/collections/collections'
import './home.html'

Template.home.onCreated(function() {
  Tracker.autorun(() => {
    Meteor.subscribe('tasks');
  });
});

Template.home.helpers({
    formCollection() {
        return Tasks;
    }
});

Template.list.helpers({
   task : function(){
       return Tasks.find().fetch();
   }
});
