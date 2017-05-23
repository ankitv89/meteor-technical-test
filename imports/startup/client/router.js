import { Router } from 'meteor/iron:router'

import '../../ui/templates/layouts/mainLayout'
import '../../ui/templates/home/home'


Router.route('/', {
  name: 'index',
  layoutTemplate: 'mainLayout',
  action() {
    this.render('home');
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
