import Ember from 'ember';
import DS from 'ember-data';

const { computed } = Ember;

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName:  DS.attr('string'),

  // Relations
  blogPosts: DS.hasMany('blog-post'),

  // CP's

  fullName: computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })
});
