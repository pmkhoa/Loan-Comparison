App.LoanController = Ember.ObjectController.extend(Ember.Evented, {
	isEditing: false,
	deleteMode: false,
  	actions: {
		edit: function () {
			this.set('isEditing', true);
	    },
		save: function () {
			this.set('isEditing', false);
			this.get('model').save();
			this.get('model').set('modified', new Date());
	    },
	    delete: function(){
	      // our delete method now only toggles deleteMode's value
	      this.toggleProperty('deleteMode');
	    },
	    cancelDelete: function(){
	      // set deleteMode back to false
	      this.set('deleteMode', false);
	    },
	    confirmDelete: function(){
	      // this tells Ember-Data to delete the current user
	      this.get('model').deleteRecord();
	      this.get('model').save();
	      // and then go to the users route
	      this.transitionToRoute('/');
	      // set deleteMode back to false
	      this.set('deleteMode', false);
	    },
	},
});