App.Loan = DS.Model.extend({
  name : DS.attr('string'),
  principal : DS.attr('number'),
  interest_rate : DS.attr('number'),
  months_to_pay : DS.attr('number'),
  
  monthly_payment : function() {
    var monthly_interest_rate = (this.get('interest_rate') / 12) / 100;
    var principal = this.get('principal');
    var months_to_pay = this.get('months_to_pay');
    var calculated_val = Math.pow((1 + monthly_interest_rate), months_to_pay);
    return Math.round(principal * ( monthly_interest_rate * calculated_val ) / (calculated_val - 1));
  }.property('principal', 'interest_rate', 'months_to_pay'),
  
  total_interest : function() {
    return Math.round((this.get('monthly_payment') * this.get('months_to_pay')) - this.get('principal'));
  }.property('principal', 'monthly_payment'),

});

// App.Loan.FIXTURES = [
//   {
//     id : 1,
//     name : 'Loan 1',
//     principal : 20000,
//     interest_rate : 4.5,
//     months_to_pay : 24,
//   },
//   {
//     id : 2,
//     name : 'Loan 2',
//     principal : 25000,
//     interest_rate : 4.2,
//     months_to_pay : 36,
//   },
//   {
//     id : 3,
//     name : 'Loan 3',
//     principal : 50000,
//     interest_rate : 4.2,
//     months_to_pay : 48,
//   },
// ];