"use strict";

const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");
const desc = document.querySelector(".description");
const student = document.querySelector(".name");
const job = document.querySelector(".job");
const textBox = document.querySelector(".text-box");
const img = document.querySelector(".img");

btnLeft.addEventListener("click", function (e) {
	if (!img.classList.contains("img-left")) {
		textBox.classList.add("text-box-transform");
		img.classList.remove("img-right");
		img.classList.add("img-left");
		setTimeout(() => {
			desc.textContent = `“ I’ve been interested in coding for a while but never
						taken the jump, until now. I couldn’t recommend this
						course enough. I’m now in the job of my dreams and so
						excited about the future. ”`;
			student.textContent = "Tanya Sinclair";
			job.textContent = "UX Engineer";
			textBox.classList.remove("text-box-transform");
		}, 300);
	}
});

btnRight.addEventListener("click", function (e) {
	if (!img.classList.contains("img-right")) {
		textBox.classList.add("text-box-transform");
		img.classList.remove("img-left");
		img.classList.add("img-right");
		setTimeout(() => {
			desc.textContent = `“ If you want to lay the best foundation possible I’d recommend
		taking this course. The depth the instructors go into is incredible. I
		now feel so confident about starting up as a professional developer. ”`;

			student.textContent = "John Tarkpor";
			job.textContent = "Junior Front-end Developer";
			textBox.classList.remove("text-box-transform");
		}, 300);
	}
});
