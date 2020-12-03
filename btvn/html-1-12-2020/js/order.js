var isShow = false;
function toggleTerms() {
    var collapsibleContent = document.getElementById("collapsibleContent")
    var term = document.getElementById("term")
    collapsibleContent.style.display = isShow == true ? "none" : "block"
    collapsibleContent.style.display = isShow == true ? term.innerText = "Show" : term.innerText = "Hide"
    isShow = !isShow

}

function success() {
    alert("Your order saved successfully!");
}
