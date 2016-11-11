import Ember from 'ember';

export default Ember.Mixin.create({
  queryParams: ['date', 'destination'],
  cities: ['Barcelona', 'London', 'New York', 'Porto'],
  destination: null,

  actions: {
    chooseDestination(city) {
      this.set('destination', city);
    }
  }
});
