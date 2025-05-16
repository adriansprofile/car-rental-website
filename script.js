const navbar = document.querySelector("nav");
window.addEventListener("scroll", () =>
	navbar.classList.toggle("sticky", window.scrollY > 0)
);

const menu = document.querySelector(".menu");
const toggleMenu = () => menu.classList.toggle("active");

document.querySelector(".menu-btn").addEventListener("click", toggleMenu);
document.querySelector(".close-btn").addEventListener("click", toggleMenu);

document
	.querySelectorAll(".menu a")
	.forEach((link) => link.addEventListener("click", toggleMenu));

// Scroll Reveal
const sr = ScrollReveal({
	origin: "bottom",
	distance: "40px",
	duration: 800,
	delay: 200,
	easing: "ease-in-out"
});

sr.reveal(".hero-headlines", {origin: "left" });
sr.reveal(".hero-page img", {origin: "right" });
sr.reveal(".about");
sr.reveal(".about h1", {delay: "400" });
sr.reveal(".about p", {delay: "600" });
sr.reveal(".about-info", {delay: "800" });
sr.reveal(".collection h1");
sr.reveal(".collection-container", {delay: "500" });
sr.reveal(".review h1");
sr.reveal(".review-container", {delay: "500" });
sr.reveal(".callout");
sr.reveal(".contact");