import './login.html'
import { Template } from 'meteor/templating';



Template.login.events({
    'click #registerSubmit' : function(){
       var username = $('#usernameSignup').val();
       var password = $('#passwordSignup').val();
       var fullName  = $('#fullname').val();
       if(!username || !password || !fullName){
           alert("all fields are mandatory");
       }
       else {
           var formValues = {
               username: username,
               password: password,
               profile: {}
           }
           formValues.profile.fullName = fullName;
           $("#registerSubmit").attr("disabled", true);
           Meteor.call("createAccount",formValues, function (err, resp) {
               if (err) {
                   $("#registerSubmit").attr("disabled", false);
                   alert(err.reason);
               }
               else {
                   $('#signupform').css('display', "none");
                   $("#registerSubmit").attr("disabled", false);
                   alert("Account Created successfully");
               }
           })
       }
    },

    'click #signup' : function(){
        $('#signupform').css('display',"block");
    },
    'click #loginSubmit' :function () {
        var username = $('#username').val();
        var password = $('#password').val();
        if(!username || !password ){
            alert("All fields are mandatory");
        }
        else {
            $("#loginSubmit").attr("disabled", true);
            Meteor.loginWithPassword(username,password, function(err,resp){
                if (err) {
                    $("#loginSubmit").attr("disabled", false);
                    alert("Invalid Credentials");
                }
                else {
                    $("#loginSubmit").attr("disabled", false);

                    Router.go('/home');
                }
            })
        }
    }
});