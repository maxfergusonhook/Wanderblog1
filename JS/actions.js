// Validating Empty Field
function check_empty() {
    if (document.getElementById('email').value == "" || document.getElementById('pword').value == "" ) {
        alert("Fill All Fields !");
    } else {
        document.getElementById('form').submit();
        alert("Form Submitted Successfully...");
    }
}
//Function To Display Popup
function div_show() {
    document.getElementById('popuplogin').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
    document.getElementById('popuplogin').style.display = "none";
}
