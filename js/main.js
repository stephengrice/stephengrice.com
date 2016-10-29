var TRANSITION_SPEED = 700;

$(document).ready(function() {
	// Sticky nav links
	var links = $(".links");
	var portfolio = $("#portfolio");
	var wdw = $(window)

	// Add scrolling
	$("#nav_portfolio").click(function() {
		$('html, body').animate({
			scrollTop: $("#portfolio").offset().top
		}, TRANSITION_SPEED);
		return false;
	});
	$("#nav_top").click(function() {
		$('html, body').animate({
			scrollTop: $("#top").offset().top
		}, TRANSITION_SPEED);
		return false;
	});
	$("#nav_resume").click(function() {
		$('html, body').animate({
			scrollTop: $("#resume").offset().top
		}, TRANSITION_SPEED);
		return false;
	});
});
