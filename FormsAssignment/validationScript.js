    // JavaScript code for form validation
	// Prevent form from submitting
document.getElementById('myForm').addEventListener("submit", function (e) {
    // Retrieve the input field value
    let value = document.getElementById('inputField').value;

    // Regular expression pattern for alphanumeric input
    let regex = /^[a-zA-Z0-9]*$/;

    // Check if the input value matches the pattern
    // Valid input: display confirmation and submit the form
    if (regex.test(value)) {
        alert('Valid input!');
    }

    // Invalid input: display error message
    else {
        alert('Input is not alphanumeric.');
        e.preventDefault();
    }
});