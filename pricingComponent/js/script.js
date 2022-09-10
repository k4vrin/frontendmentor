"use strict";

const firstPrice = document.querySelector("#firstPrice");
const secondPrice = document.querySelector("#secondPrice");
const thirdPrice = document.querySelector("#thirdPrice");
const prices = document.querySelectorAll(".card__price");
const toggle = document.querySelector("#toggleBtn");
const labelSwitch = document.querySelector("#switch");
const cardBtns = document.querySelectorAll(".card__btn");

labelSwitch.addEventListener("click", function (e) {
	switchPrices();
	createRipple(e);
});

labelSwitch.addEventListener("keydown", function (e) {
	if (e.key === "Enter") {
		toggle.checked = !toggle.checked;
		switchPrices();
		createRipple(e);
	}
});

cardBtns.forEach((btn) => {
	btn.addEventListener("click", createRipple);
});

function switchPrices() {
	prices.forEach((price) => {
		price.style.opacity = 0;
	});
	setTimeout(() => {
		if (!toggle.checked) {
			firstPrice.textContent = "199.99";
			secondPrice.textContent = "249.99";
			thirdPrice.textContent = "399.99";
		} else {
			firstPrice.textContent = "19.99";
			secondPrice.textContent = "24.99";
			thirdPrice.textContent = "39.99";
		}
		prices.forEach((price) => {
			price.style.opacity = 1;
		});
	}, 500);
}

/**
 *
 * @param {Event} event
 *
 * https://css-tricks.com/how-to-recreate-the-ripple-effect-of-material-design-buttons/
 */
function createRipple(event) {
	const button = event.currentTarget;
	const circle = document.createElement("span");
	const diameter = Math.max(button.clientWidth, button.clientHeight);
	const radius = diameter / 2;
	circle.style.width = circle.style.height = `${diameter}px`;
	circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
	circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
	circle.classList.add("ripple");
	const ripple = button.getElementsByClassName("ripple")[0];

	if (ripple) {
		ripple.remove();
	}
	button.appendChild(circle);
}
