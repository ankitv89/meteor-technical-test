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
