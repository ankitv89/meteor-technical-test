import { Tasks } from '../lib/collections/collections'
if (Meteor.isServer) {
    Meteor.publish('homePagePublications', function (userId) {
        return Tasks.find({authorId:userId});
    });
    Meteor.publish('editPagePublications', function (userId,id) {
        return Tasks.find({_id:id,authorId:userId});
    });
}