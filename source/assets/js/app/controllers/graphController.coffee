App.GraphController = Ember.ObjectController.extend
  needs: ['loans'],
  graphConfig: (type) ->
    switch type
      when 'line' then App.LineGraphConfig

  graphType: (type) ->
    switch type
      when 'line' then 'line'
  data : [{ name: 'Tokyo', data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6] }],
  categories : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

  render: (render_to, type, data, categories, title) ->
    graph     = @graphConfig(type).create()
    graphType = @graphType(type)

    graph.set('chartType',  graphType)
    graph.set('renderToId', render_to)
    graph.set('series',     data)
    graph.set('categories', categories)
    graph.set('title',      title)

    graph.initialize()

    new Highcharts.Chart(graph)
