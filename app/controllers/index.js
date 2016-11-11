import Controller from 'ember-controller';

export default Controller.extend({
  blogTypes: ['Teachers', 'Parents', 'Students'],

  actions: {
    selectBlogType(blogType) {
      this.set('blogType', blogType);
    },

    selectDate(date) {
      this.set('date', date.format('DD-MM-YYYY'));
    },

    selectBlog(e) {
      e.preventDefault();
      this.transitionToRoute(this.get('blogType').toLowerCase(), { queryParams: { date: this.get('date') }});
    }
  }
});
