import { Router } from 'meteor/iron:router'
import '../../ui/templates/home/home'

Router.route('/', function () {
    this.render('home');
});