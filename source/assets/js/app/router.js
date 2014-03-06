App.Router.map(function() {
  this.resource('loans', {path: '/'}, function() {
    // child route in here
    this.route('graph');
    // this.route('completed');
  });
});