$(document).ready(function(){
    $(".navLinks a").each(function(){

		console.log("In JS");
		var href = $(this)[0].getAttribute('href');
        //console.log(href)
		var hrefArr = href.split("/");
		var navTitleWHTML = hrefArr[hrefArr.length-1];
        
		var navTitle = navTitleWHTML.split(".")[0]
        console.log(navTitle)
		if(window.location.href.indexOf(navTitle) > -1){
			$(this).addClass("hovered-header");
		}
		else {
			$(this).removeClass("hovered-header");
		}
	 });
});

