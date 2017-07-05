import { Router } from 'meteor/iron:router'
import '../../ui/templates/home/home'
import '../../ui/templates/editDoc/edit'
import '../../ui/templates/login/login'
import '../../ui/templates/logout/logout'

import { Tasks } from '../../../lib/collections/collections'

Router.configure({
    layoutTemplate: 'logout',
});

Router.route('/', function () {
    if(!Meteor.user())
    this.render('login');
});
Router.route('/login', function () {
    this.render('login');
});
Router.route('/home',
    {
        name :'home',
        //onBeforeAction: requireLogin,
        subscriptions: function() {
            this.subscribe('homePagePublications',Meteor.userId());
        },

        action : function () {
            if(Meteor.user()){
                this.render();
            }
            else {
                this.render('login');
            }
        }
    });


Router.route('/edit'+ '/:_id',
    {
        name :'edit',
        subscriptions: function() {
            this.subscribe('editPagePublications',Meteor.userId(),this.params._id);
        },
        action : function () {
            if(Meteor.user()){
                var item = Tasks.findOne({ _id: this.params._id });
                this.render('edit',{ data: item });
            }
            else {
                this.render('login');
            }
        }
    });


function requireLogin() {
    return true;
}
