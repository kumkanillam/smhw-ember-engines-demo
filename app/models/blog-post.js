import DS from 'ember-data';

export default DS.Model.extend({
  title:     DS.attr('string'),
  subtitle:  DS.attr('string'),
  postType:  DS.attr('string'),
  content:   DS.attr('string'),
  createdAt: DS.attr('date'),

  // Relations
  author: DS.belongsTo('author')
});
