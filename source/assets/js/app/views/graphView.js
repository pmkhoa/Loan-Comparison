App.GraphView = Ember.View.extend({
  tagName: 'div',
  classNames: ['highcharts'],
  title: 'Graph',
  type: 'line',
  didInsertElement: function() {
    console.log("Graph View");
    var graph = new App.GraphController();
    console.log(this.content);
    graph.render(this.elementId, this.type, this.content, this.categories, this.title);

  }
});