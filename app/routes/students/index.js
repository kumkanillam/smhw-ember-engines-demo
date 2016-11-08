import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let data = { postType: 'student' };
    return this.store.query('blog-post', data);
  }
});
