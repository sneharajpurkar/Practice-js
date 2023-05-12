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
        window.location.href = "/Login.html";
        alert("registration done")
    }
}

function login(event){
    event.preventDefault();

    var f_email = document.getElementById("flipkart_email").value;
    var f_password = document.getElementById("flipkart_password").value;

    var flipkart_storage = JSON.parse(localStorage.getItem("flipkartData"));
    var flipkart_currentdata;
    var flag = false;

    for(var i = 0; i < flipkart_storage.length; i++){
        if(flipkart_storage[i].email === f_email && flipkart_storage[i].password === f_password){
            flipkart_currentdata = flipkart_storage[i];
            flag = true;
        }
    }
    if(flag){
        localStorage.setItem("flipkart_Currunt_User", JSON.stringify(flipkart_currentdata));
        document.getElementById("flipkart_email").value = "";
        document.getElementById("flipkart_password").value = "";
        window.location.href = "/Index.html";
        alert("Login Done")
    }
    else{
        alert("Login is not done")
    }

}

function logout(){
  alert("Logout")  
  localStorage.removeItem("flipkart_Currunt_User");
  location.reload();
}

function addProduct(event){
    // alert("done");
    event.preventDefault();

    var seller_image = document.getElementById("product_image").value;
    var seller_name = document.getElementById("product_name").value;
    var seller_price = document.getElementById("product_price").value;

    // var seller_data = {image: seller_image, name: seller_name, price: seller_price}

    // var seller_storage = JSON.parse(localStorage.getItem("seller-products")) || [];

    // var flag = false;

    // for(var i = 0; i < seller_storage.length; i++){
    //     if(seller_storage[i].image === seller_image && seller_storage[i].name === seller_name && seller_storage[i].price === seller_price){
    //         flag = true;
    //     }
    // }
    // if(flag){
    //     alert("please added products");
    // }
    // else{
    //     seller_storage.push(seller_data);
    //     localStorage.setItem("seller-products", JSON.stringify(seller_storage));
    //     document.getElementById("product_image").value = "";
    //     document.getElementById("product_name").value = "";
    //     document.getElementById("product_price").value = "";
    //     alert("Product Added!");
    // }
      
    var seller_data = {image:seller_image, name: seller_name, price:seller_price}

    var seller_storage = JSON.parse(localStorage.getItem("seller-products")) || [];

    var flag = false;

    for(var i=0; i<seller_storage.length; i++){
        if(seller_storage[i].image === seller_image && seller_storage[i].name === seller_name && seller_storage[i].price === seller_price){
            flag = true;
        }
    }
    if(flag){
        alert("please added products");
    }
    else if(seller_image.length < 1 && seller_name.length < 1 && seller_price.length < 1){
        alert("must be fill all  fields")
    } 
    else{
        seller_storage.push(seller_data);
        localStorage.setItem("seller-products", JSON.stringify(seller_storage));
        document.getElementById("product_image").value = "";
        document.getElementById("product_name").value = "";
        document.getElementById("product_price").value = "";
        window.location.href = "/Index.html";
        alert("Product Added!");
    }

}

function addToCart(){
    
}
