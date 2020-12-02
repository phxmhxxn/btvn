var slideIndex = 0;    

function plusSlides(n) {
  slideIndex += n;
  
  var slides = document.getElementsByClassName("mySlides");
  if (slideIndex < 1) {slideIndex = slides.length};
  if (slideIndex > slides.length) {slideIndex = 1};
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  } 
  
  slides[slideIndex-1].style.display = "block";
}

// Thumbnail image controls
function currentSlide(n) {
    var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex = n; 
  
  slides[slideIndex-1].style.display = "block";
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
  

window.onload = showSlides;