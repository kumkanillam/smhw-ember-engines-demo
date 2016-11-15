import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // this.route('posts', { path: '/posts/:post_id' });
  this.route('teachers', function() {
    this.route('teacher', { path: '/:teacher_id' }, function() {
      this.route('class', { path: '/class/:class_group_id' });
    });
  });
  this.route('parents', function() {
    this.route('parent', { path: '/:parent_id' });
  });
  this.route('students', function() {
    this.route('student', { path: '/:student_id' });
  });
});

export default Router;
