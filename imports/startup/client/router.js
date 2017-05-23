import { Router } from 'meteor/iron:router'
import { Tasks } from '../../api/collections/collections'

import '../../ui/templates/layouts/mainLayout'
import '../../ui/templates/home/home'
import '../../ui/templates/task/updateTask'

Router.route('/', {
  name: 'index',
  layoutTemplate: 'mainLayout',
  action() {
    this.render('home');
  }
});

Router.route('/task/:id', {
  name: 'updateTask',
  layoutTemplate: 'mainLayout',
  action() {
    this.render('updateTask');
  },
  data: function() {
    return Tasks.findOne({_id: this.params.id},{fields: { name: true }});
  }
});

AccountsTemplates.configure({
    defaultLayout: 'mainLayout',
});

AccountsTemplates.configureRoute('signIn', {
    name: 'login',
    path: '/login',
    layoutTemplate: 'mainLayout',
    redirect: '/',
});

Router.plugin('ensureSignedIn', {
    except: ['index', 'login']
});
