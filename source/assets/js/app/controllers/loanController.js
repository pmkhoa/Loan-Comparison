App.LoanController = Ember.ObjectController.extend({
	isEditing: false,
  	actions: {
		edit: function () {
			this.set('isEditing', true);
	    },
		save: function () {
			this.set('isEditing', false);
			this.get('model').save();
	    },
	    removeLoan : function() {
			var loan = this.get('model');
			loan.deleteRecord();
			loan.save();
	    }
	},

});