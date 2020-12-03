var slideIndex = 1;     


function plusSlides(n) {  
  
  
    if (n==1) {
      
    var i;
    var slides = document.getElementsByClassName("mySlides"); 
    m = slideIndex;
    slides[slideIndex-1].className = "mySlides slideOut";   
    slideIndex += n;
    if (slideIndex > slides.length) {slideIndex = 1}
    
    
    slides[slideIndex-1].className = "mySlides slideIn";   
   
    }

    if (n==-1) {
      var i;
      var slides = document.getElementsByClassName("mySlides"); 
      m = slideIndex;
      slides[slideIndex-1].className = "mySlides slideOutR";   
      slideIndex += n;
      if (slideIndex < 1) {slideIndex = slides.length}
      
      
      slides[slideIndex-1].className = "mySlides slideInR";   
     
      }


      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      } 
      dots[slideIndex-1].className += " active";

}
 
function currentSlide(n) { 
  var slides = document.getElementsByClassName("mySlides");  
  slides[slideIndex-1].className = "mySlides slideOut";   
  

  slideIndex = n;
  if (slideIndex > slides.length) {slideIndex = 1}
  
  
  slides[slideIndex-1].className = "mySlides slideIn";   
  
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  } 
  dots[slideIndex-1].className += " active";
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");  
  slides[slideIndex-1].className = "mySlides slideOut";   
  

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  
  
  slides[slideIndex-1].className = "mySlides slideIn";    
  
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  } 
  dots[slideIndex-1].className += " active";
  

   
  setTimeout(showSlides, 5000);  
}
  

window.onload = showSlides;