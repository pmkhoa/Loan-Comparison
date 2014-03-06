App.LoansView = Ember.View.extend({
	templateName: "loans",
	didInsertElement: function() {
		this.loadHighChart();
		// console.log (this.get('controller.needs'));
		// console.log (this.get('controller').toString());
		this.get('controller.controllers.loan').on('highChartReload', $.proxy(this.loadHighChart, this));

	},

	// loansChanged: function() {
 //  	//this.rerender();
 //  	Ember.run.scheduleOnce('afterRender', this, 'propertyChanged');
	// }.observes('controller.@each', 'controller.@each.principal', 'controller.@each.name', 'controller.@each.interest_rate', 'controller.@each.months_to_pay'),

	// propertyChanged : function() {
	// 	console.log("property changed");
	// 	this.loadHighChart();
	// },

	loadHighChart : function() {
		console.log ("Reload Highchart");
		if ( this.get('controller').get('model') ) {	
			highChartData = this.loadHightChartsData();
			var category = highChartData.category;
			var principalData = highChartData.principalData;
			var interestData = highChartData.interestData;
			if ( !$('#loans-chart-container') ) {return;}
			var highchart = $('#loans-chart-container').highcharts({
				credits: { enabled: false },
				chart: { type: 'column', backgroundColor: '#f2f4f7' },
				title: { text: 'Loan Comparision' },
				xAxis: {  categories: category },
				yAxis: { allowDecimals: false, min: 0 },
				tooltip: {
					formatter: function() {
						return '<b>'+ this.x +'</b><br/>'+ this.series.name;
					}
				},
				plotOptions: { column: { stacking: 'normal' } },

				series: [{
					name: 'Interest',
					data: interestData
				}, {
					name: 'Principal',
					data: principalData,
				}]
			});
		}
	},

	loadHightChartsData : function() {
		var models = this.get('controller').get('model');
		var category = new Array(); 
		var principalData = new Array(); 
		var interestData = new Array();

		$.each(models.content, function(key, value) {
			var data = value._data;
			var interest = value.get('total_interest');
			category.push(data.name);
			principalData.push(parseInt(data.principal));
			interestData.push(parseInt(interest));
		});

		return {category : category, principalData: principalData, interestData : interestData};
	}

});

// App.LoansView = Ember.View.extend({
// 	templateName: "loans",
// 	didInsertElement: function() {
// 		this.loadHighChart();
// 	},
// 	loansChanged: function() {
// 		Ember.run.once(this, 'redrawHighChart');
// 	}.observes('controller.@each.monthly_payment'),

// 	redrawHighChart : function() {
// 		var models = this.get('controller').get('model');
// 		$.each(models.content, function(key, value) {
// 			console.log (value._data);
// 		});
// 	},

// });
