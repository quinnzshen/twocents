$(document).bind('touchmove', function(e) {
	e.preventDefault();
});

function hideURLbar() {
	if (window.location.hash.indexOf('#') == -1) {
		window.scrollTo(0, 1);
	}
}

if (navigator.userAgent.indexOf('iPhone') != -1 || navigator.userAgent.indexOf('Android') != -1) {
    addEventListener("load", function() {
            setTimeout(hideURLbar, 0);
    }, false);
}

$(function() {
	startY = 0;
	endY = 0;
	$( "#pennies" ).draggable({
	  axis: "y",
	  // start: function(event) {
	  // 	startY = event.clientY;
	  // 	$("#pennies").draggable("option", "revert", true);
	  // },
	  stop: function(event) {
	  	endY = event.clientY;
  		$("#pennies").animate(
	    {"margin-top": "-200%",
		 "margin-left": "auto",
		 "margin-right": "auto"},
	     "slow");	
	  }
	})
});

// $("#pennies").swipe({
//   swipe:function(event, direction, distance, duration, fingerCount) {
//   	if (direction == "up") {
// 	    // $(this).text("You swiped " + direction );
// 	    console.log("yo");
// 		$("#pennies").animate(
//             {"margin-top": "+=-120%"},
//             "slow");	
// 		console.log("yo");
// 	}
//   },
//   threshold:10
// });