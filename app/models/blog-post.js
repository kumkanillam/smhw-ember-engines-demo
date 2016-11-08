import DS from 'ember-data';

export default DS.Model.extend({
  authorFullName: DS.attr('string'),
  title: DS.attr('string'),
  subtitle: DS.attr('string'),
  postType: DS.attr('string')
});
