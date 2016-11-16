import Ember from 'ember';

export default Ember.Route.extend({
  model({ class_group_id }) {
    return this.store.findRecord('class-group', class_group_id);
  }
});
