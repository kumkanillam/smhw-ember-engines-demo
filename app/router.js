import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // this.route('parents', function() {
  //   this.route('parent', { path: '/:parent_id' });
  // });
  this.mount('teachers-engine', { as: 'teachers' });
  this.mount('students-engine', { as: 'students' });
  this.mount('parents-engine', { as: 'parents' });
});

export default Router;
