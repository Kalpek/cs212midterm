function validateForm(event) {
    // Your validation logic here

    // Example: Check for empty fields
    const form = document.getElementById('registration-form');
    const elements = form.elements;

    for (let i = 0; i < elements.length; i++) {
        if (!elements[i].value.trim()) {
            alert('Please fill in all fields.');
            event.preventDefault(); // Prevent form submission
            return;
        }
    }

    // Add more validation logic as needed

    // If all validations pass, you can submit the form
    // form.submit();
}
