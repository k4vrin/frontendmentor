const btns = document.querySelectorAll(".item");
// const btn = document.querySelector(".open");
// btn.classList.contains;
// btn.classList.add;
// btn.classList.remove;

function accordion() {
	this.classList.toggle("open");

	const content = this.querySelector(".hidden-box");

	// IF open, close | else open
	// if (content.style.maxHeight) content.style.maxHeight = null;
	// else content.style.maxHeight = content.scrollHeight + "px";

	if (content.classList.contains("max-height")) {
		content.classList.remove("max-height");
	} else {
		content.classList.add("max-height");
	}
}

btns.forEach((btn) => btn.addEventListener("click", accordion));
