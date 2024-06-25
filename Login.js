function validateForm() {
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("repassword").value;
    var number = document.getElementById("number").value;

    var passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
        alert("Your Password is too weak must contain at least one number, one alphabet, one symbol, and be at least 8 characters long.");
        return false;
    } 

    if (password !== repassword) {
        alert("Passwords do not match.");
        return false;
    }

    var numberRegex = /^[0-9]{10}$/;
    if (!numberRegex.test(number)) {
        alert("Please enter a valid 10-digit mobile number.");
        return false;
    }
    window.location.assign("index.html");
    alert("Welcome")
    return true;
}
