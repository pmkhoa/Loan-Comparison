App.GraphConfig = Ember.Object.create({
    chart: null,
    renderToId: null,
    chartType: null,
    series: null,
    categories: null,
    credits: {
      enabled: false
    },
    initialize: function() {
      var chart, title, xAxis;
      chart = {
        renderTo: this.get('renderToId'),
        type: this.get('chartType')
      };
      xAxis = {
        categories: this.get('categories')
      };
      title = {
        text: this.get('title')
      };
      this.set('chart', chart);
      this.set('xAxis', xAxis);
      this.set('title', title);
    },
});