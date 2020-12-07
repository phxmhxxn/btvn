
function checkValidDate() {
    var m = parseInt(document.getElementById("DOBMonth").value);
    var d = parseInt(document.getElementById("DOBDay").value);
    var y = parseInt(document.getElementById("DOBYear").value);
    var date = new Date(y, m - 1, d);
    if (date.getFullYear() == y && date.getMonth() + 1 == m && date.getDate() == d) {
        document.getElementById("DOBDay").setCustomValidity('')
        document.getElementById("DOBvalid").innerText = ""
    } else {
        document.getElementById("DOBDay").setCustomValidity(' ')
        document.getElementById("DOBvalid").innerText = "- please enter valid date! -"
    }
}
/*
document.addEventListener('invalid', (function () {
    return function (e) {
        debugger
        e.cancelBubble = true;
        
    };
})(), true);
*/