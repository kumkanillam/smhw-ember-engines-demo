import Ember from 'ember';

export default Ember.Route.extend({
  model({ teacher_id }) {
    return this.store.findRecord('teacher', teacher_id);
  },

  afterModel(teacher) {
    return teacher.get('classGroups');
  }
});
