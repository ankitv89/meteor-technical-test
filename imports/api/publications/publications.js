import { Tasks } from '../collections/collections';

Meteor.publish ({
  tasks () {
    return Tasks.find({authorId: this.userId}, {fields: {secret: 0}});
  }
});
