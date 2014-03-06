//= require_self
//= require_tree ./models
//= require_tree ./controllers
//= require_tree ./views
//= require_tree ./templates
//= require_tree ./routes
//= require_tree ./helpers
//= require      ./router

window.App = Ember.Application.create();
// App.ApplicationAdapter = DS.FixtureAdapter.extend();
App.ApplicationAdapter = DS.LSAdapter;