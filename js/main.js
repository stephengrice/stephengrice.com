window.onload = function() {
    document.getElementById("footer_year").innerHTML = new Date().getFullYear();
    setGreeting();
};

function setGreeting() {
    var hour = new Date().getHours();
    var greeting;
    if (hour < 12) {
        greeting = "Good evening.";
    } else if (hour < 18) {
        greeting = "Good afternoon.";
    } else {
        greeting = "Good evening.";
    }
    document.getElementById("main_greeting").innerHTML = greeting;
}