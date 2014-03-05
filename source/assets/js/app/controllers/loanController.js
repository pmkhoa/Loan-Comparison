App.LoanController = Ember.ObjectController.extend(Ember.Evented, {
	isEditing: false,
  	actions: {
		edit: function () {
			this.set('isEditing', true);
	    },
		save: function () {
			this.set('isEditing', false);
			var context = this;
			this.get('model').save().then(function () {
	        	this.trigger('highChartReload'); 
	        	console.log ("reload");
	      	}.bind(this));
	    },
	    removeLoan : function() {
			var loan = this.get('model');
			loan.deleteRecord();
			loan.save();
	    }
	},

});