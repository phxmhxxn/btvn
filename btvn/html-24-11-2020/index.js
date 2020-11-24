
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