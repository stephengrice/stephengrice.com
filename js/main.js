window.onload = main;

var slides;
var currentSlide;

function main() {
  slides = document.querySelectorAll('.slide');
  currentSlide = document.querySelector("#current-slide");
  console.log(currentSlide);
  currentSlide.onclick = onclick_test;
  // for (var i = 0; i < slides.length; i++) {
  //   slides[i].style.width = window.innerWidth + "px";
  //   slides[i].style.height = window.innerHeight + "px";
  // }
}

function onclick_test(e) {
  console.log("clicked");
  slides[1].setAttribute('id', 'current-slide');
  slides[1].setAttribute('class', 'slide');

  slides[0].setAttribute('id', '');
}
