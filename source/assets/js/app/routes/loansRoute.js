App.LoansRoute = Ember.Route.extend({
  model : function() {
    return this.store.find('loan');
  }
});