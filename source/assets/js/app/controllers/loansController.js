App.LoansController = Ember.ArrayController.extend(Ember.Evented, {
	isEditing: false,
	needs: ['loan'],
	isCreating : false,
	data : null,
	actions : {
		createLoan : function() {
			var name = this.get('name');
			var principal = this.get('principal');
			var interest_rate = this.get('interest_rate');
			var months_to_pay = this.get('months_to_pay');

			if (!name.trim() || !principal.trim() || !interest_rate.trim() || !months_to_pay.trim() ) {
				return;
			}
			else {
				var loan = this.store.createRecord('loan', {
					name : name,
					principal : principal,
					interest_rate : interest_rate,
					months_to_pay : months_to_pay
				});
				this.set('name', '');
				this.set('principal', '');
				this.set('interest_rate', '');
				this.set('months_to_pay', '');
				this.set('isCreating', false);
				loan.save();
			}

		},
		activateCreateLoan : function() {
			this.set('isCreating', true);
		},
		cancelCreateLoan : function() {
			this.set('isCreating', false);
		},
	},

	doesModelExist : function() {
		return this.get('model').get('length') > 0;
	}.property('@each'),

});