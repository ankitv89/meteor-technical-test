import { Router } from 'meteor/iron:router'
import '../../ui/templates/home/home'
import '../../ui/templates/taskEdit/index'
import '../../ui/templates/loginForm/index'

Router.route('/', {
  name: "home",
  waitOn () {
    return Meteor.subscribe('tasks');
  },
  action () {
    this.render('home');
  }
});

Router.route('/tasks/:id/edit', {
  name: "taskEdit",
  waitOn () {
    return Meteor.subscribe('tasks');
  },
  action () {
    let task = Tasks.findOne(this.params.id);
    this.render('taskEdit', {data: {
      task: task
    }});
  }
});


loginRequired = function () {
    if (!Meteor.user()) {
        if (!Meteor.loggingIn()) {
            this.render('loginForm');
        }
    } else {
        this.next();
    }
};

Router.onBeforeAction(loginRequired);
