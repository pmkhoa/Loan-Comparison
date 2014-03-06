App.StackGraphConfig = Ember.Object.extend(App.GraphConfig, {
	plotOptions : {
		column : {
			stacking : 'normal'
		}
	}
});