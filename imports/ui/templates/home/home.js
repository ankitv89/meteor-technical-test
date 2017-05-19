import './home.html'
import { Tasks } from '../../../api/collections/collections'
import { Template } from 'meteor/templating';


Template.home.helpers({
    formCollection() {
        return Tasks;
    }
});

Template.list.helpers({
   task : function(){
       return Tasks.find().fetch();
   }
});