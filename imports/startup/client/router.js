import { Router } from 'meteor/iron:router'
import '../../ui/templates/home/home'
import '../../ui/templates/LogIn/LogIn'
import '../../ui/templates/Update/Update'

//Allow only Logged in users to all Pages
Router.onBeforeAction(function () {
    if (!Meteor.user() && !Meteor.loggingIn()) {
        this.redirect('/LogIn');
    } else {
        this.next();
    }
}, {
    except: ['LogIn']
});

//Home Page Route
Router.route('/', function () {
    this.render('home');
});

//LogIn Page Route
Router.route('/LogIn', function () {
    this.render('LogIn');
});

//Edit Task Route
Router.route('/edit/:taskId', function () {
  this.render('updateTask');
});
