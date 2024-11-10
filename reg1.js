  // Show/Hide Password Functionality
  document.getElementById("togglePassword").addEventListener("click", function() {
    const passwordField = document.getElementById("password");
    const icon = document.getElementById("togglePassword");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.textContent = "🙈"; // Change to "Hide" icon
    } else {
        passwordField.type = "password";
        icon.textContent = "👁️"; // Change to "Show" icon
    }
});

document.getElementById("toggleConfirmPassword").addEventListener("click", function() {
    const confirmPasswordField = document.getElementById("confirmPassword");
    const icon = document.getElementById("toggleConfirmPassword");
    if (confirmPasswordField.type === "password") {
        confirmPasswordField.type = "text";
        icon.textContent = "🙈"; // Change to "Hide" icon
    } else {
        confirmPasswordField.type = "password";
        icon.textContent = "👁️"; // Change to "Show" icon
    }
});

// Form Validation
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const phone = document.getElementById("phone").value;
    const gender = document.getElementById("gender").value;

    // Clear previous messages
    const successMessage = document.getElementById("successMessage");
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(msg => msg.textContent = "");
    successMessage.textContent = "";

    let isValid = true;

    // Username Validation
    if (username.length < 3) {
        document.getElementById("usernameError").textContent = "Username must be at least 3 characters long.";
        isValid = false;
    }

    // Email Validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Password Validation
    if (password.length < 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters long, contain an uppercase letter and a number.";
        isValid = false;
    }

    // Confirm Password Validation
    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match!";
        isValid = false;
    }

    // Phone Number Validation
    const phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent = "Phone number must be between 10 and 15 digits.";
        isValid = false;
    }

    // Gender Validation
    if (gender === "") {
        document.getElementById("genderError").textContent = "Please select your gender.";
        isValid = false;
    }

    // If all fields are valid, show success message
    if (isValid) {
        successMessage.textContent = "Registration successful!";
        successMessage.style.color = "green";
        document.getElementById("registrationForm").reset();
    }
});