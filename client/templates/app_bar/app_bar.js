Template.app_bar.onRendered(function(){
		console.log("Entered onRendered / app_bar");
		$(".button-collapse").sideNav();
        $('.collapsible').collapsible();
		this.animations_on = new ReactiveVar(true);
});

Template.app_bar.helpers({
	"search_active":  true,
	"search_active2": false
});

Template.app_bar.onCreated(function(){
	this.animations_on = new ReactiveVar(true);
});