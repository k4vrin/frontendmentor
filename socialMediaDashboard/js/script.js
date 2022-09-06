"use strict";

const darkModeSwitch = document.querySelector(".checkbox");

const html = document.documentElement;

darkModeSwitch.addEventListener("click", function () {
	const dataTheme = html.getAttribute("data-theme");
	if (dataTheme === "light") {
		html.setAttribute("data-theme", "dark");
	} else {
		html.setAttribute("data-theme", "light");
	}
});
