App.LoanController = Ember.ObjectController.extend(Ember.Evented, {
	isEditing: false,
  	actions: {
		edit: function () {
			this.set('isEditing', true);
	    },
		save: function () {
			this.set('isEditing', false);
			this.get('model').save().then(function () {
	        	this.triggerHighChartReload();
	        	
	      	}.bind(this));
	    },
	    removeLoan : function() {
			var loan = this.get('model');
			loan.deleteRecord();
			loan.save();
	    },

	},
	triggerHighChartReload : function() {
		console.log ("reload");
		this.trigger('highChartReload');
	}
});