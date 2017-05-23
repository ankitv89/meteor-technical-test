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

export const taskUpdate = new ValidatedMethod({
  name: 'task.update',
  validate(params) {
    check(params, {
      _id: String,
      modifier: Object,
    });
  },
  run(params) {
    const { _id, modifier } = params;

    try {
      // not sure if this is recommneded way to get the modifier from quickform
      let res = Tasks.update({ _id }, modifier);
      return { sucess: res };
    } catch (e) {
        throw new Meteor.Error('error-500', 'something went wrong on server', { method: 'task.add' });
    }
    return;
  },
});
