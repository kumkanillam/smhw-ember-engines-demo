export default function() {
  this.get('/teachers');
  this.get('/teachers/:id');
  this.get('/parents');
  this.get('/parents/:id');
  this.get('/students');
  this.get('/students/:id');
  this.get('/class-groups');
  this.get('/class-groups/:id');
  this.get('/meetings');
  this.get('/meetings/:id');
  this.get('/homeworks');
  this.get('/homeworks/:id');
}
