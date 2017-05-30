import './home.html'
import { Tasks } from '../../../api/collections/collections'
import { Template } from 'meteor/templating';
import sweetAlert from 'sweetalert';


Template.list.helpers({
   task : function(){
       return Tasks.find();
   }
});

AutoForm.hooks({
  taskInsert: {
    onSubmit (task) {
      Meteor.call("taskInsert", task, (error) => {
        if(error)
          sweetAlert("Error!", error.message , "error");
        else
          sweetAlert("Success!", "Task added successfully", "success");
      });
      return false;
      this.done(error);
    }
  }
});

Template.body.events({
  'click .logout': function(){
    Meteor.logout();
  }
})
