function main(){
    let errorMsg = "";
    let isValid = true;

    let username = document.getElementById("uname").value;
    let email = document.getElementById("mail").value;
    let phone = document.getElementById("num").value;
    let pass1 = document.getElementById("pw1").value;
    let pass2 = document.getElementById("pw2").value;

    if (!username || !email || !phone || !pass1 || !pass2){
        errorMsg += "All fields must be filled!\n";
        isValid = false;
    }

    if (username.includes(' ')){
        errorMsg += "Username cannot have a space!";
        isValid = false;
    }

    if (!/^\d{10}$/.test(phone)) {
        errorMsg += "Phone number must contain atleast 10 digits and numeric only!\n";
        isValid = false;
    }

    if (!validatePassword(pass1)){
        errorMsg += "Password must be atleast 7 characters long and must contain atleast 1 capital letter, 1 number and 1 special character (&,$,#,@)!\n";
        isValid = false;
    }

    if(pass1 !== pass2){
        errorMsg += "Both passwords must match!\n";
        isValid = false;
    }

    if(!isValid){
        displayError(errorMsg);
    } else{
        alert("Form submitted succesfully!\n");
    }

    function validatePassword(password) {
        const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@]).{7,}$/;
        return regex.test(password);
    }

    function displayError(message) {
        alert(errorMsg);
    }
}