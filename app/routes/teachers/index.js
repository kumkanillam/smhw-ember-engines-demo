import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    destination: { refreshModel: true }
  },

  model(params) {
    let data = { postType: 'teacher' };
    if (params.date) {
      data.createdAt = params.date;
    }
    if (params.destination) {
      data.location = params.destination;
    }
    return this.store.query('blog-post', data);
  }
});
