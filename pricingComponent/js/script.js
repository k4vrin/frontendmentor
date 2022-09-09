"use strict";

const firstPrice = document.querySelector("#firstPrice");
const secondPrice = document.querySelector("#secondPrice");
const thirdPrice = document.querySelector("#thirdPrice");
const prices = document.querySelectorAll(".card__price");
const toggle = document.querySelector("#toggleBtn");

toggle.addEventListener("click", function () {
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
});
