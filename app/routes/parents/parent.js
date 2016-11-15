import Ember from 'ember';

export default Ember.Route.extend({
  model({ parent_id }) {
    return this.store.findRecord('parent', parent_id);
  },

  afterModel(parent) {
    return parent.get('meetings');
  }
});
