import { Template } from 'meteor/templating';

import { Tasks } from '../../../api/collections/collections'
import './updateTask.html'

Template.updateTask.helpers({
  formCollection() {
      return Tasks;
  }
});
