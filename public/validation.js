function validateForm() {
    // Fetching input values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Checking for empty fields
    if (firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "") {
        alert("All fields must be filled out");
        return;
    }

    // Validating email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email format");
        return;
    }

    // Checking if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // If all validations pass, submit the form
    alert("Form submitted successfully!");
    document.getElementById('myForm').reset();
}
