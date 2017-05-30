import './home.html'
import { Tasks } from '../../../api/collections/collections'
import { Template } from 'meteor/templating';
import sweetAlert from 'sweetalert';


Template.registerHelper('Tasks', function(){
  return Tasks;
});

Template.body.events({
  'click .logout'() {
    Meteor.logout();
  }
});

AutoForm.hooks({
  taskInsert: {
    onSubmit (task) {
      Meteor.call("taskInsert", task, (error) => {
        if(error){
          sweetAlert("Error!", error.message , "error");
          this.done();
        } else {
          sweetAlert("Success!", "Task added successfully", "success");
          this.done(error);
        }
      });
      return false;
    }
  }
});
