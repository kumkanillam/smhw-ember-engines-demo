import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('parents', function() {
    this.route('parent', { path: '/:parent_id' });
  });
  this.route('students', function() {
    this.route('student', { path: '/:student_id' });
  });
  this.mount('teachers-engine', { as: 'teachers' });
});

export default Router;
