Template.timeline_tabs.onRendered(function(){
		console.log("Entered onRendered /timeline_tabs");
		//debugger;
		$('ul.tabs').tabs({ 'swipeable': true });
});

 Template.timeline_content.onRendered(function(){
    console.log("Entered timeline_content on render");
});

Template.timeline_content.helpers({
	tags: function(){return  ["winter","snow","park","walk with a dog","good day","colors","smells","emotions"]}
	//"content_tags": function(){ console.log("inside timeline-content helper"); return ["winter","snow","park","walk with a dog","good day","colors","smells","emotions"]}
});