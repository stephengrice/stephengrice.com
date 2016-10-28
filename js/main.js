$(document).ready(function() {
	// Sticky nav links
	var links = $(".links");
	var portfolio = $("#portfolio");
	var wdw = $(window)

	wdw.scroll(function(e) {
		if (wdw.scrollTop() > wdw.height() * .95) {
			links.addClass("links-state2");
			portfolio.addClass("portfolio-state2");
		} else {
			links.removeClass("links-state2");
			portfolio.removeClass("portfolio-state2");
		}
	});

	// Add scrolling
	$("#nav_portfolio").click(function() {
		$('html, body').animate({
			scrollTop: $("#portfolio").offset().top
		}, 1000);
		return false;
	});
	$("#nav_top").click(function() {
		$('html, body').animate({
			scrollTop: $("#top").offset().top
		}, 1000);
		return false;
	});
	$("#nav_resume").click(function() {
		$('html, body').animate({
			scrollTop: $("#resume").offset().top
		}, 1000);
		return false;
	});
});
