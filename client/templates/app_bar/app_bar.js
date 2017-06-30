Template.app_bar.onRendered(function(){
		console.log("Entered onRendered /");
		$(".button-collapse").sideNav();
        $('.collapsible').collapsible();
});

Template.app_bar.helpers({
	"search_active":  true,
	"search_active2": false
});