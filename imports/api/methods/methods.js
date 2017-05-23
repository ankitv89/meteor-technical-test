import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { check } from 'meteor/check';
import { Tasks } from '../collections/collections';

export const taskAdd = new ValidatedMethod({
  name: 'task.add',
  validate(params) {
    check(params, {
      name: String,
      secret: String,
      authorId: String
    });
  },
  run(params) {
    const { name, secret, authorId } = params;

    try {
      let res = Tasks.insert({ name, secret, authorId });
      return { sucess: res }
    } catch (e) {
        throw new Meteor.Error('error-500', 'something went wrong on server', { method: 'task.add' });
    }
    return;
  },
});
