App.LineGraphConfig = Ember.Object.extend App.GraphConfig,
  yAxis:
    title:
      text: null

  plotOptions:
    bar:
      animation: false
      borderWidth: 0
      shadow: false
      dataLabels:
        enabled: true