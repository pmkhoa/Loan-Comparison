App.GraphConfig = Ember.Object.create
  chart: null
  renderToId: null
  chartType: null
  series: null
  categories: null

  initialize: ->
    chart =
      renderTo: @get('renderToId')
      type:     @get('chartType')

    xAxis =
      categories: @get('categories')

    title =
      text: @get('title')

    @set('chart', chart)
    @set('xAxis', xAxis)
    @set('title', title)

  credits:
    enabled: false
  plotOptions :
    column :
      stacking : 'normal'

  colors: [ "#2f69bf", "#a2bf2f", "#bf5a2f", "#bfa22f", "#772fbf",
            "#bf2f2f", "#00337f", "#657f00", "#7f2600", "#7f6500" ]