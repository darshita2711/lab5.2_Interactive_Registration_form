const form = document.querySelector("#registrationForm");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const usernameError = document.querySelector("#usernameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const confirmPasswordError = document.querySelector("#confirmPasswordError");


window.addEventListener("load", function () {
        const savedData = localStorage.getItem("userForm");
    if (savedData) {
        const userData = JSON.parse(savedData);
        username.value = userData.username;
    }
});

username.addEventListener("input", function () {
    username.setCustomValidity("");
    if (username.validity.valueMissing) {
        username.setCustomValidity("Username is required");
    } else if (username.validity.tooShort) {
        username.setCustomValidity("Username must be at least 3 characters");}

    usernameError.textContent = username.validationMessage;
});

email.addEventListener("input", function () {
    email.setCustomValidity("");
    if (email.validity.valueMissing) {
        email.setCustomValidity("Email is required");
    }else if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter a valid email");}

    emailError.textContent = email.validationMessage;
});

password.addEventListener("input", function () {
    password.setCustomValidity("");
    if (password.validity.valueMissing) {
        password.setCustomValidity("Password is required");
    }else if (password.validity.tooShort) {
        password.setCustomValidity("Password must be at least 8 characters");
    }else if (password.validity.patternMismatch) {
        password.setCustomValidity("Password needs uppercase, lowercase and a number");}

    passwordError.textContent = password.validationMessage;
    if (confirmPassword.value !== "") {
        checkConfirmPassword();
    }
});

confirmPassword.addEventListener("input", function () {
    checkConfirmPassword();
});


function checkConfirmPassword() {
    confirmPassword.setCustomValidity("");
    if (confirmPassword.validity.valueMissing) {
        confirmPassword.setCustomValidity("Please confirm your password");
    }else if (confirmPassword.value !== password.value) {
        confirmPassword.setCustomValidity("Passwords do not match");
    }

    confirmPasswordError.textContent =
        confirmPassword.validationMessage;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Run validation one more time
    username.dispatchEvent(new Event("input"));
    email.dispatchEvent(new Event("input"));
    password.dispatchEvent(new Event("input"));
    checkConfirmPassword();

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    const formData = {
        username: username.value,
        email: email.value
    };

    localStorage.setItem(
        "userForm",
        JSON.stringify(formData)
    );
    alert("SUCCESS! Your Registration Done!!");
});
