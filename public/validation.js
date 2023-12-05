function validate()
{
    var firstNameInput = document.getElementById('firstName').value;
    var lastNameInput = document.getElementById('lastName').value;
    var emailAddressInput = document.getElementById('email').value;
    var passwordInput = document.getElementById('password').value;
    var confirmPasswordInput = document.getElementById('confirmPassword').value;

    if (firstNameInput === "" || lastNameInput === "" || emailAddressInput === "" || passwordInput === "" || confirmPasswordInput === "")
    {
        alert("Please make sure all boxes are filled with your information");
        return;
    }

    var isThisReallyAnEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!isThisReallyAnEmail.test(emailAddressInput))
    {
        alert("Please check to make sure your Email was input correctly");
        return;
    }

    if (passwordInput !== confirmPasswordInput)
    {
        alert("Please make sure your Passwords match");
        return;
    }

    alert("Good Job! Everything you input was valid! :)");
}
