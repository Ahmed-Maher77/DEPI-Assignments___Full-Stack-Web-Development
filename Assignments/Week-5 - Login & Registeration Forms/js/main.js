// Select Elements
const loginFormSection = document.querySelector("#login-form-section");
const registerFormSection = document.querySelector("#register-form-section");
const loginForm = document.querySelector("#login-form");
const registerForm = document.querySelector("#register-form");
const switchLogin = document.querySelector(".switch-login");
const switchRegister = document.querySelector(".switch-register");


// ======================== Manage Forms Visibility ========================
switchLogin.addEventListener("click", (e) => {
	e.preventDefault();
	loginFormSection.style.display = "block";
	registerFormSection.style.display = "none";
});
switchRegister.addEventListener("click", (e) => {
	e.preventDefault();
	loginFormSection.style.display = "none";
	registerFormSection.style.display = "block";
});


// ======================== Login Form Validation ========================
const loginInputs = loginForm.querySelectorAll(".input-field input");
const loginSubmitBtn = loginForm.querySelector(".submit-btn");
let validLoginEmail = false;
let validLoginPassword = false;
// Add input event listeners
loginInputs.forEach((input) => {
	input.addEventListener("input", handleLoginInput);
	input.addEventListener("blur", handleLoginInput);
});
// Function to validate login form inputs
function handleLoginInput(e) {
	validateLoginInput(
		e.target.name,
		e.target.value,
		e.target.closest(".input-field")
	);
}
// Handle form submit 
let loginFormSubmitLoading = false;
loginForm.onsubmit = (e) => {
	e.preventDefault();
	loginInputs.forEach((input) =>
		validateLoginInput(
			input.name,
			input.value,
			input.closest(".input-field")
		)
	);
	const validForm = validLoginEmail && validLoginPassword;
	if (validForm) {
		loginFormSubmitLoading = true;
		loginFormLoading();

		const formData = {
			email: document.getElementById("login-email").value,
			password: document.getElementById("login-password").value,
		};
		console.log("Login formData: ", formData);

		// Simulate API call delay
		setTimeout(() => {
			// Show success popup
			showPopup(
				"You logged in successfully! Check the console to see the sent data.",
				"success"
			);

			// Clear inputs after successful submission
			loginForm.reset();

			// Reset validation states
			validLoginEmail = false;
			validLoginPassword = false;

			// Clear any existing errors
			loginForm.querySelectorAll(".input-field").forEach((field) => {
				clearError(field);
			});

			loginFormSubmitLoading = false;
			loginFormLoading();
		}, 1500);
	}
};
// Function to handle loading state of login form
function loginFormLoading() {
	if (loginFormSubmitLoading) {
		loginSubmitBtn.setAttribute("disabled", true);
		loginSubmitBtn.innerText = "Loading...";
	} else {
		loginSubmitBtn.removeAttribute("disabled");
		loginSubmitBtn.innerText = "Login";
	}
}
// Function to validate login form inputs
function validateLoginInput(type, value, inputField) {
	const errorSpan = inputField.querySelector(
		".invalid-input span:nth-of-type(2)"
	);
	switch (type) {
		case "email":
			if (value.trim().length === 0) {
				showError(inputField, errorSpan, "Email is required");
				validLoginEmail = false;
			} else if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
				clearError(inputField);
				validLoginEmail = true;
			} else {
				showError(
					inputField,
					errorSpan,
					"Invalid email address, ex: example@gmail.com"
				);
				validLoginEmail = false;
			}
			break;
		case "password":
			if (value.trim().length === 0) {
				showError(inputField, errorSpan, "Password is required");
				validLoginPassword = false;
			} else if (value.length >= 6) {
				clearError(inputField);
				validLoginPassword = true;
			} else {
				showError(
					inputField,
					errorSpan,
					"Password must be at least 6 characters"
				);
				validLoginPassword = false;
			}
			break;
		default:
			console.error("Unexpected input type");
			break;
	}
}

// ======================== Register Form Validation ========================
const registerInputs = registerForm.querySelectorAll(
	".input-field input, .input-field select"
);
const registerSubmitBtn = registerForm.querySelector(".submit-btn");
let validUsername = false;
let validGender = false;
let validAge = false;
let validEmail = false;
let validPassword = false;
let validConfirmPassword = false;
// Add input event listeners
registerInputs.forEach((input) => {
	input.addEventListener("input", handleRegisterInput);
	input.addEventListener("blur", handleRegisterInput);
	input.addEventListener("change", handleRegisterInput);
});
// Function to validate register form inputs
function handleRegisterInput(e) {
	validateRegisterInput(
		e.target.name,
		e.target.value,
		e.target.closest(".input-field")
	);
}
// Handle form submit
let registerFormSubmitLoading = false;
registerForm.onsubmit = (e) => {
	e.preventDefault();
	registerInputs.forEach((input) =>
		validateRegisterInput(
			input.name,
			input.value,
			input.closest(".input-field")
		)
	);
	const validForm =
		validUsername &&
		validGender &&
		validAge &&
		validEmail &&
		validPassword &&
		validConfirmPassword;
	if (validForm) {
		registerFormSubmitLoading = true;
		registerFormLoading();

		const formData = {
			username: document.getElementById("username").value,
			gender: document.getElementById("gender").value,
			age: document.getElementById("age").value,
			email: document.getElementById("email").value,
			password: document.getElementById("password").value,
			confirmPassword: document.getElementById("confirm-password").value,
		};
		console.log("Register formData: ", formData);

		// Simulate API call delay
		setTimeout(() => {
			// Show success popup
			showPopup(
				"You signed up successfully! Check the console to see the sent data.",
				"success"
			);

			// Clear inputs after successful submission
			registerForm.reset();

			// Reset validation states
			validUsername = false;
			validGender = false;
			validAge = false;
			validEmail = false;
			validPassword = false;
			validConfirmPassword = false;

			// Clear any existing errors
			registerForm.querySelectorAll(".input-field").forEach((field) => {
				clearError(field);
			});

			registerFormSubmitLoading = false;
			registerFormLoading();
		}, 1500);
	}
};
// Function to handle loading state of register form
function registerFormLoading() {
	if (registerFormSubmitLoading) {
		registerSubmitBtn.setAttribute("disabled", true);
		registerSubmitBtn.innerText = "Loading...";
	} else {
		registerSubmitBtn.removeAttribute("disabled");
		registerSubmitBtn.innerText = "Register";
	}
}
// Function to validate register form inputs
function validateRegisterInput(type, value, inputField) {
	const errorSpan = inputField.querySelector(
		".invalid-input span:nth-of-type(2)"
	);
	switch (type) {
		case "username":
			if (value.trim().length === 0) {
				showError(inputField, errorSpan, "Username is required");
				validUsername = false;
			} else if (/^[A-Za-z][A-Za-z0-9_]{4,19}$/.test(value)) {
				clearError(inputField);
				validUsername = true;
			} else {
				showError(
					inputField,
					errorSpan,
					"Username must be 5-20 characters and starts with a letter"
				);
				validUsername = false;
			}
			break;
		case "gender":
			if (value === "default" || value.trim().length === 0) {
				showError(inputField, errorSpan, "Please select your gender");
				validGender = false;
			} else {
				clearError(inputField);
				validGender = true;
			}
			break;
		case "age":
			if (value.trim().length === 0) {
				showError(inputField, errorSpan, "Age is required");
				validAge = false;
			} else if (parseInt(value) >= 13 && parseInt(value) <= 120) {
				clearError(inputField);
				validAge = true;
			} else {
				showError(
					inputField,
					errorSpan,
					"Age must be between 13 and 120"
				);
				validAge = false;
			}
			break;
		case "email":
			if (value.trim().length === 0) {
				showError(inputField, errorSpan, "Email is required");
				validEmail = false;
			} else if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
				clearError(inputField);
				validEmail = true;
			} else {
				showError(
					inputField,
					errorSpan,
					"Invalid email address, ex: example@gmail.com"
				);
				validEmail = false;
			}
			break;
		case "password":
			if (value.trim().length === 0) {
				showError(inputField, errorSpan, "Password is required");
				validPassword = false;
			} else if (value.length >= 6) {
				clearError(inputField);
				validPassword = true;
			} else {
				showError(
					inputField,
					errorSpan,
					"Password must be at least 6 characters"
				);
				validPassword = false;
			}
			break;
		case "confirm-password":
			const password = document.getElementById("password").value;
			if (value.trim().length === 0) {
				showError(
					inputField,
					errorSpan,
					"Please confirm your password"
				);
				validConfirmPassword = false;
			} else if (value === password) {
				clearError(inputField);
				validConfirmPassword = true;
			} else {
				showError(inputField, errorSpan, "Passwords do not match");
				validConfirmPassword = false;
			}
			break;
		default:
			console.error("Unexpected input type");
			break;
	}
}


// ======================== Utility Functions ========================
function showError(inputField, errorSpan, message) {
	inputField.classList.add("activeError");
	errorSpan.innerText = message;
}

function clearError(inputField) {
	inputField.classList.remove("activeError");
}

function showPopup(message, type = "success") {
	// Create popup container
	const popup = document.createElement("div");
	popup.className = `popup-message ${type}`;
	popup.innerHTML = `
		<div class="popup-content">
			<div class="popup-icon">
				${type === "success" ? "✓" : "✗"}
			</div>
			<div class="popup-text">${message}</div>
			<button class="popup-close">&times;</button>
		</div>
	`;

	// Add popup to body
	document.body.appendChild(popup);

	// Show popup with animation
	setTimeout(() => {
		popup.classList.add("show");
	}, 100);

	// Auto remove after 4 seconds
	let autoRemove = setTimeout(() => {
		removePopup(popup);
	}, 4000);

	// Pause timer on hover
	popup.addEventListener("mouseenter", () => {
		clearTimeout(autoRemove);
	});

	// Resume timer when mouse leaves
	popup.addEventListener("mouseleave", () => {
		autoRemove = setTimeout(() => {
			removePopup(popup);
		}, 4000);
	});

	// Close button functionality
	const closeBtn = popup.querySelector(".popup-close");
	closeBtn.addEventListener("click", () => {
		clearTimeout(autoRemove);
		removePopup(popup);
	});
}

function removePopup(popup) {
	popup.classList.remove("show");
	setTimeout(() => {
		if (popup.parentNode) {
			popup.parentNode.removeChild(popup);
		}
	}, 300);
}
