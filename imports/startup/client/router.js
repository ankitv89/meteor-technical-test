import { Router } from 'meteor/iron:router'
import '../../ui/templates/home/home'
import '../../ui/templates/LogIn/LogIn'
import '../../ui/templates/Update/Update'


Router.onBeforeAction(function () {
    if (!Meteor.user() && !Meteor.loggingIn()) {
        this.redirect('/LogIn');
    } else {
        this.next();
    }
}, {
    except: ['LogIn']
});

Router.route('/', function () {
    this.render('home');
});

Router.route('/LogIn', function () {
    this.render('LogIn');
});

Router.route('/edit/:taskId', function () {
  this.render('updateTask');
});
