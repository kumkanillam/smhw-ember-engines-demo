import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  homeworks: DS.hasMany('homework')
});
