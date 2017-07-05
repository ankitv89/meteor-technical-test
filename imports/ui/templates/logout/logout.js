import './logout.html'
import { Template } from 'meteor/templating';



Template.logout.events({
    'click #logout':function () {
        Meteor.logout();
    }

});