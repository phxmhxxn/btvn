var isShow = false;
function toggleTerms() {
    var collapsibleContent = document.getElementById("collapsibleContent")
    collapsibleContent.style.display = isShow == true ? "none": "block"
    isShow = !isShow
}

function success() { 
    alert("Your order saved successfully!");
}
