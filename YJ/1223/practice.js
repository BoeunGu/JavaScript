const contents = document.querySelectorAll(".contents");

function startAnimation() {
  for (let content of contents) {
    if (
      !content.classList.contains("show") &&
      content.getBoundingClientRect().top < 200
    ) {
      content.classList.add("show");
    }
  }
}
window.addEventListener("scroll", startAnimation);
