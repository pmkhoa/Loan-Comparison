App.GraphController = Ember.ObjectController.extend({
	needs: ['loans'],
	data: [
      {
        name: 'Tokyo',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
      }
    ],
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

	graphConfig : function(type) {
		switch (type) {
			case 'line':
				return App.LineGraphConfig;
			case 'stack':
				return App.StackGraphConfig;
			default:
				return App.StackGraphConfig;
		}
	},
	graphType : function(type) {
		switch (type) {
			case 'line':
				return 'line';
			case 'stack':
				return 'stack';
			default:
				return 'stack';
		}
	},

	setData : function() {
		console.log (this.get('model'));
	},

	render : function(render_to, type, data, categories, title) {
		var graph, graphType;
		console.log (this.setData() );
		graph = this.graphConfig(type).create();
		graphType = this.graphType(type);
		graph.set('chartType', graphType);
		graph.set('renderToId', render_to);
		graph.set('series', this.data);
		graph.set('categories', this.categories);
		graph.set('title', title);
		graph.initialize();
		new Highcharts.Chart(graph);
	}
});