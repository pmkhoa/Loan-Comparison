App.ApplicationView = Ember.View.extend({
  	templateName: "application",
  	setContainerHeight : function(container) {
		containerHeight = $(window).height();
		container.css({minHeight: containerHeight });
	},

	didInsertElement: function() {
		this.setContainerHeight($("#main"));
		context = this;
		$(window).resize(function(){
			context.setContainerHeight($("#main"));
		});
	},
});
