function validate()
{
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "")
    {
        alert("All fields must be filled out");
        return;
    }

    var isThisReallyAnEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!isThisReallyAnEmail.test(email))
    {
        alert("Please check to make sure your Email was input correctly");
        return;
    }

    if (password !== confirmPassword)
    {
        alert("Please make sure your Passwords match");
        return;
    }

    alert("Good Job! Everything you input was valid! :)");
    document.getElementById('myInputValidationThingy').reset();
}
