var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
var slideIndex = 0;
window.onload = showSlides;

function plusSlides(n) {
  if (n == 1) {
    var i;
    slides[slideIndex - 1].className = "mySlides slideOut";
    slideIndex += n;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].className = "mySlides slideIn";
  }

  if (n == -1) {
    var i;
    slides[slideIndex - 1].className = "mySlides slideOutR";
    slideIndex += n;
    if (slideIndex < 1) { slideIndex = slides.length }
    slides[slideIndex - 1].className = "mySlides slideInR";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex - 1].className += " active";

}

function currentSlide(n) {
  slides[slideIndex - 1].className = "mySlides slideOut";
  slideIndex = n;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].className = "mySlides slideIn";
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex - 1].className += " active";
}

function showSlides() {
  var i;
  if (slideIndex == 0) {
    slideIndex = slides.length;
  }
  slides[slideIndex - 1].className = "mySlides slideOut";
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].className = "mySlides slideIn";
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000);
}