import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('posts', { path: '/posts/:post_id' });
  this.route('teachers', function() {
    this.route('posts', { path: '/posts/:post_id' });
  });
  this.route('parents', function() {
    this.route('posts', { path: '/posts/:post_id' });
  });
  this.route('students', function() {
    this.route('posts', { path: '/posts/:post_id' });
  });
});

export default Router;
