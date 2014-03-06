Ember.Handlebars.helper('formatCurrentcy', function(amount){
  return accounting.formatMoney(amount);
});