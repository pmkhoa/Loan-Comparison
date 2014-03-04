App.GraphView = Ember.View.extend
  tagName: 'div'
  classNames: [ 'highcharts' ]
  title: 'Graph'
  type: 'line'

  didInsertElement: ->
    console.log("Graph View")
    graph = new App.GraphController()
    console.log (@content)
    graph.render(@elementId, @type, @content, @categories, @title)