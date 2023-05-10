function register(event) {
    // alert("done")
    event.preventDefault();

    var f_UserName = document.getElementById("flipkart_userName").value;
    var f_email = document.getElementById("flipkart_email").value;
    var f_password = document.getElementById("flipkart_password").value;
    var f_confirmPassword = document.getElementById("flipkart_confirmPassword").value;

    var flipkart_Userdata = { name: f_UserName, email: f_email, password: f_password, confirmPassword: f_confirmPassword };

    var flipkart_storage = JSON.parse(localStorage.getItem("flipkartData")) || [];

    var flag = false;

    for (var i = 0; i < flipkart_storage.length; i++) {
        if (flipkart_storage[i].email === f_email) {
            flag = true;
        }
    }
    if (flag) {
        alert("email is already present use another one");
    }
    else if(f_UserName.length < 1 && f_email.length < 1 && f_password.length < 1 && f_confirmPassword.length < 1){
        alert("must be fill all field");
    }
    else if(f_password.length < 8){
        alert("password must be 8 digit");
    }
    else if(f_password !== f_confirmPassword){
        alert("password not a same");
    }
    else {
        flipkart_storage.push(flipkart_Userdata);
        localStorage.setItem("flipkartData", JSON.stringify(flipkart_storage));
        document.getElementById("flipkart_userName").value = "";
        document.getElementById("flipkart_email").value = "";
        document.getElementById("flipkart_password").value = "";
        document.getElementById("flipkart_confirmPassword").value = "";
        alert("registration done")
    }
}