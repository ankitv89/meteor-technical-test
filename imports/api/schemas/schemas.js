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
        max: 50,
        optional: true,
        custom(){
          console.log(this.isInsert, !this.isSet)
          if(this.isInsert && !this.isSet)
            return "required";
        },
        autoValue(){
          if(this.isUpdate)
            this.unset();
        }
    },
    authorId : {
        type: String,
        autoform : {
            type: "hidden",
        },
        autoValue :function(){
          if(this.isInsert)
            return this.userId;
          else
            this.unset();
        }
    }
}));
