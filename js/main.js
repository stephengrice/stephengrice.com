window.onload = function() {
    document.getElementById("footer_year").innerHTML = new Date().getFullYear() + " ";
    console.log(location.pathname);
    if (location.pathname == "/" || location.pathname == "/index.html") {
        setGreeting();
    }
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