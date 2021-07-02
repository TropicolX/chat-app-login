const get_started_btn = document.querySelector("#get-started-btn");
const back_icon = document.querySelector("#back-icon");
const container = document.querySelector(".container");

get_started_btn.addEventListener("click", () => {
	container.classList.add("join-mode");
});

back_icon.addEventListener("click", () => {
	container.classList.remove("join-mode");
});
