"use strict";

const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const inputs = document.querySelectorAll(".input");

//Show input error messages
function showError(input, message) {
	const inputBox = input.parentElement;
	inputBox.className = "input-box error";
	const paragraph = inputBox.querySelector("p");
	paragraph.innerText = message;
}

//show success color
function showSuccess(input) {
	const inputBox = input.parentElement;
	inputBox.className = "input-box success";
}

//check email is valid
function checkEmail(input) {
	// https://emailregex.com/
	const reg =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (input.value.trim() === "") {
		showError(input, `${input.ariaLabel} cannot be empty`);
		return false;
	} else if (reg.test(input.value.trim())) {
		showSuccess(input);
		return true;
	} else {
		showError(input, "Looks like this is not an email");
		return false;
	}
}

// checkRequired fields
function checkRequired(inputArr) {
	let error = 0;
	inputArr.forEach((input) => {
		if (input.value.trim() === "") {
			showError(input, `${input.ariaLabel} cannot be empty`);
			error++;
		} else {
			showSuccess(input);
		}
	});
	return error;
}

// check input Length
function checkLength(input, min, max) {
	if (input.value.length < min) {
		showError(
			input,
			`${input.ariaLabel} must be at least ${min} characters`
		);
		return false;
	} else if (input.value.length > max) {
		showError(
			input,
			`${input.ariaLabel} must be less than ${max} characters`
		);
		return false;
	} else {
		showSuccess(input);
		return true;
	}
}

function openModal() {
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
}

function closeModal() {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
}

//Event Listeners
form.addEventListener("submit", function (e) {
	e.preventDefault();
	const required = checkRequired([firstName, lastName, email, password]);
	const passLength = checkLength(password, 6, 25);
	const emailCheck = checkEmail(email);

	if (required === 0 && passLength && emailCheck) {
		openModal();
	}
});

inputs.forEach((input) => {
	input.addEventListener("input", function () {
		const inputBox = input.parentElement;
		inputBox.className = "input-box";
	});
});

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
	// console.log(e.key);

	if (e.key === "Escape" && !modal.classList.contains("hidden")) {
		closeModal();
	}
});
