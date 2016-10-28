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