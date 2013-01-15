/*
Copyright 2012 Jeremy R Perry.

You are free to utilize this slideshow in any manner on any number of websites that you own for non-commercial purposes (i.e. you are not using my code as a way of directly generating money, or using it to power paid content).  You are also free to modify the source code as you see fit, including but not limited to changing the timing, adjusting the HTML and CSS, etc.  If any part of my original code is used, you must keep notation in your code of me as either the author or that your work was based upon my original design.  Any web-based redistribution of my original code is prohibited.  Any commercial distribution of work based on my original code requires my pre-approval, including sites with paid content that utilize my code in whole or in part.
*/
$(document).ready(function(){
$.slide_show = function() {
		var id = "#slide_" + show_id;
		if(!start){
			$(previous).fadeOut(3000);
			$(id).delay(3000).fadeIn(3000);
		}
		if (show_id == count){
			show_id = 1;
		}
		else{show_id++;}
		previous = id;
		if(start){
			setTimeout("$.set_timer()",6000);
			start = false;
		}
	};
	$.set_timer = function() {
		setInterval( "$.slide_show()", 15000);
	}
	var start = true;
	var previous = "";
	var count = $(".slider li").length;
	var show_id = 1;
	$('.slider li:first').show();
	$.slide_show();
});
