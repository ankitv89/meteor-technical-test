import './edit.html'
import { Tasks } from '../../../../lib/collections/collections'
import { Template } from 'meteor/templating';


AutoForm.addHooks(['taskUpdate'], {
    onSuccess: function(formType, result) {
        Router.go('/home');
        this.resetForm()
    },
    onError: function (formType, error) {
        if (error && error.message) {
            alert(error.message);
        }
    },
}) ;


Template.edit.helpers({
    formCollection() {
        return Tasks;
    }
});

Template.edit.events({
   /* 'click .btn-primary':function () {

    }*/
});