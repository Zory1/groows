FlowRouter.route("/", {	
	action:function(){
		FlowLayout.render('layout', {app_bar:'app_bar', nav_tabs:'nav_tabs', main:'main', fab:"fab"});
	},
	triggersEnter:function(){
		console.log("Entered route /");
		$(".button-collapse").sideNav();
        $('.collapsible').collapsible();
	}
});
