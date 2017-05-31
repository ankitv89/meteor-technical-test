import  SimpleSchema  from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);


import { Tasks } from '../collections/collections'



let Schemas = {}


Schemas.addtask = {}


Tasks.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: 'Task Name',
        max: 50,
    } ,

    secret : {
        type: String,
        label : "Task Secret",
        max: 50
    },
    authorId : {
        type: String,
        autoform : {
            type: "hidden",
            autoValue :function(){
                if(Meteor.userId()){
                    return Meteor.userId()
                }
                else {
                    return 'Guest'
                }
            },
            defaultValue : function(){
                if(Meteor.userId()){
                    return Meteor.userId()
                }
                else {
                    return 'Guest'
                }
            },
        }
    }
}));
