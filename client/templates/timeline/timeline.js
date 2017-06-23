Template.timeline_tabs.onRendered(function(){
		console.log("Entered onRendered /timeline_tabs");
		//debugger;
		$('ul.tabs').tabs({ 'swipeable': true });
});