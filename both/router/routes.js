FlowRouter.route(["/", "/home"], {	
	action:function(){
		FlowLayout.render('layout', {app_bar:'app_bar', nav_tabs:'nav_tabs', main:'main', fab:"fab"});
	},
	triggersEnter:function(){
		console.log("Entered route /");
		$(".button-collapse").sideNav();
        $('.collapsible').collapsible();
        //check that user is logged in
	},
	triggerExit:function(params){
		console.log("EXIT", params);
		//check that there is no unsaved data
	},
	subscriptions:function(params){
		console.log("SUBSCRIBE", params);
		//make sure subscriptions exist
	}
});

FlowRouter.route("/login", {	
	action:function(){
		FlowLayout.render('layout', {app_bar:'', nav_tabs:'', main:'login', fab:''});
	}
});

FlowRouter.route("/sign_in", {	
	action:function(){
		FlowLayout.render('layout', {app_bar:'', nav_tabs:'', main:'sign_in', fab:''});
	}
});

FlowRouter.route("/profile", {	
	action:function(){
		FlowLayout.render('layout', {app_bar:'app_bar', nav_tabs:'nav_tabs', main:'profile', fab:"fab"});
	}
});

FlowRouter.route("/achievements", {	
	action:function(){
		FlowLayout.render('layout', {app_bar:'app_bar', nav_tabs:'nav_tabs', main:'achievements', fab:"fab"});
	}
});

FlowRouter.route("/library", {	
	action:function(){
		FlowLayout.render('layout', {app_bar:'app_bar', nav_tabs:'nav_tabs', main:'library', fab:"fab"});
	}
});

FlowRouter.route("/practice", {	
	action:function(){
		FlowLayout.render('layout', {app_bar:'app_bar', nav_tabs:'nav_tabs', main:'practice', fab:"fab"});
	}
});

FlowRouter.route("/review", {	
	action:function(){
		FlowLayout.render('layout', {app_bar:'app_bar', nav_tabs:'nav_tabs', main:'review', fab:"fab"});
	}
});

FlowRouter.route("/story_mode", {	
	action:function(){
		FlowLayout.render('layout', {app_bar:'app_bar', nav_tabs:'nav_tabs', main:'story_mode', fab:"fab"});
	}
});

FlowRouter.route("/assets", {	
	action:function(){
		FlowLayout.render('layout', {app_bar:'app_bar', nav_tabs:'nav_tabs', main:'assets', fab:"fab"});
	}
});

FlowRouter.route("/in_progress", {	
	action:function(){
		FlowLayout.render('layout', {app_bar:'app_bar', nav_tabs:'nav_tabs', main:'in_progress', fab:"fab"});
	}
});

FlowRouter.route("/bids", {	
	action:function(){
		FlowLayout.render('layout', {app_bar:'app_bar', nav_tabs:'nav_tabs', main:'bids', fab:"fab"});
	}
});

FlowRouter.route("/search", {	
	action:function(){
		FlowLayout.render('layout', {app_bar:'app_bar', nav_tabs:'nav_tabs', main:'search', fab:"fab"});
	}
});

FlowRouter.route("/timeline", {	
	action:function(){
		FlowLayout.render('layout', {app_bar:'app_bar', screen_title:'timeline_screen_title', tabs:'timeline_tabs', main:'timeline', fab:"fab"});
	}
});