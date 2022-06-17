const btn = document.querySelector(".j-btn-test");

btn.addEventListener("click", () => {
  if (btn.classList.contains("svg-background_1")) {
    btn.classList.remove("svg-background_1");
    btn.classList.add("svg-background_2");
  } else {
    btn.classList.remove("svg-background_2");
    btn.classList.add("svg-background_1");
  }
});