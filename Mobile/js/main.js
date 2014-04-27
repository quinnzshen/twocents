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

$("#pennies").swipe({
  swipe:function(event, direction, distance, duration, fingerCount) {
  	if (direction == "up") {
	    $(this).text("You swiped " + direction );
	}
  },
  threshold:0
});