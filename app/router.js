import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('teachers', function() {
    this.route('show');
  });
  this.route('parents');
  this.route('students');
});

export default Router;
