import { Meteor } from 'meteor/meteor';
import '../imports/startup/server/index'
Meteor.startup(() => {
  // code to run on server at startup
});
if(Meteor.isServer){
    Meteor.methods({
        createAccount:function (signUpValues) {
           Accounts.createUser(signUpValues);
        }
    });
}