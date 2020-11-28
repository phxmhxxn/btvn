
window.onload = function getDate() {
  var today = new Date().toISOString().slice(0,10); 
  document.getElementById("arrival").min=today;

}

function goBack() {
    window.history.back();
}

function success() { 
        alert("Reservation success! Thank you!");
}

function check(input) {  
    if (input.value < document.getElementById("rooms").value ) {
      input.setCustomValidity('number of persons must be equal or more than number of rooms');
    }  
    else {
        input.setCustomValidity('');
    }
  }

  function goHome(){
    document.getElementById("iframe").src = "./home-page.html"; 
    document.getElementById("top").innerText = "Welcome to LakeView HOTEL"

  }

  function goReservation(){
    document.getElementById("iframe").src = "./reservation.html"; 
    document.getElementById("top").innerText = "Hotel Reservation Form"
  }

  function goContactUs(){
    document.getElementById("iframe").src = "./contact-us.html"; 
    document.getElementById("top").innerText = "Contact Us"
  }