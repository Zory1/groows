Template.sign_in.onRendered(function(){
	/*var d = new Date();
d.setFullYear( d.getFullYear() - 100 );
$('.datepicker').pickadate(
{
   selectMonths: true,
   selectYears: d,
   max: new Date() //TODO- research documentaton
});*/
		$('.datepicker').pickadate({
		    selectMonths: true, // Creates a dropdown to control month
		    selectYears: 45 // Creates a dropdown of 15 years to control year
		  });
		 $('select').material_select();
		 $('ul.dropdown-content.select-dropdown li').click(function(e){
		 	$('label.i18n-select').addClass("active");
		 	if(e.target.innerText.length > 0){
		 		var langs = {
		 			"العربية":"ar",
		 			"English":"en",
		 			"Deutsch":"de",
		 			"Français":"fr",
		 			"Polski":"pl",
		 			"Русский":"ru",
		 			"Svenska":"sv",
		 			"Українська":"uk"
		 		};
				TAPi18n.setLanguage(langs[e.target.innerText.trim()])
			      .done(function () {
			      	//TODO:store user language
			      	console.log("Language was set " + TAPi18n.getLanguage());
			        //Session.set("showLoadingIndicator", false);
			      })
			      .fail(function (error_message) {
			        // Handle the situation
			        console.log(error_message);
			      });
			}
		 	
		 });
});

Template.sign_in.events({

});