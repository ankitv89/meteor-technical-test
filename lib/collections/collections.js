import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'



export const Tasks = new Mongo.Collection('tasks');

Tasks.allow({
    insert(userId, doc) {
        // The user must be logged in and the document must be owned by the perticular user.
        return userId && doc.authorId === userId;
    },
    update(userId, doc, fields, modifier) {
        // Can only change your own documents.
        return doc.authorId === userId;
    },
    remove(userId, doc) {
        // Can only remove your own documents.
        return doc.authorId === userId;
    },
    fetch: ['authorId']
});



Tasks.deny({
    insert(userId, doc) {
        // The user must be logged in and the document must be owned by the user.
        return userId && doc.authorId !== userId;
    },
    update(userId, doc, fields, modifier) {
        // Can only change your own documents.
        return doc.authorId !== userId;
    },
    remove(userId, doc) {
        // Can only remove your own documents.
        return doc.authorId !== userId;
    },
    fetch: ['authorId']
});



//export default Tasks;