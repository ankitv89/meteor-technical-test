import './home.html'
import { Tasks } from '../../../api/collections/collections'
import { Template } from 'meteor/templating';

Template.home.events({
  'click .logOut':function(event){
    Meteor.logout();
  }
});

Template.home.helpers({
    formCollection() {
        return Tasks;
    }
});

Template.list.onCreated(function listOnCreated() {
  Meteor.subscribe('MyTasks');
});

Template.list.events({
  //BONUS: Deleting Tasks
  'click .deleteTask':function(event){
    if(this.authorId != Meteor.userId()){
      alert("You Cannot Delete Others task");
    }
    else{
      if(confirm("Are you sure You want to delete this task ?")){
        Meteor.call("DeleteTask",this._id);
      }
    }

  }
});

Template.list.helpers({
   task : function(){
       return Tasks.find().fetch();
   }
});
