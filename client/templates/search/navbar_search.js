Template.navbar_search.events({
	'blur input#searchinput': function(event,template){
        console.log("Left input search!!!!");
        var search_string = $('input#searchinput').val();
        console.log(search_string);
       
        template.search_off.set(true);
        template.search_on.set(false);
        $('#search-icon').css('color','rgba(255,255,255,0.7)');
        return;
    },
    'click #search-label': function(event,template){
       // debugger;
        if(template.search_on.get() &&  typeof $('input#searchinput').val()!="undefined" && $('input#searchinput').val().length == 0){
            template.search_off.set(true);
            template.search_on.set(false);
            $('#search-icon').css('color','rgba(255,255,255,0.7)');
            return;
        }
        if(!template.search_on.get() &&  typeof $('input#searchinput').val()!="undefined" &&  $('input#searchinput').val().length >0){
            console.log("search is on!!!!!")
             $('input#searchinput').val('');
            template.search_off.set(true);
            template.search_on.set(false);
            $('#search-icon').css('color','rgba(255,255,255,0.7)');
        } else {
            template.search_on.set(true);
            template.search_off.set(false);
            $('#search-icon').css('color','rgba(0,0,0,0.3)');
        }
        return;
    },
    'click #more_vert': function(){
        $('dropdown1').css('width','200px');
    }
});

Template.navbar_search.helpers({
    search_on: function(){
        return Template.instance().search_on.get();
    },
    search_off: function(){
        return Template.instance().search_off.get();
    }
});

Template.navbar_search.onCreated(function(){
    this.search_on = new ReactiveVar(false);
    this.search_off = new ReactiveVar(true);
});

Template.navbar_search.onRendered(function(){
    $(".dropdown-button").dropdown();
});