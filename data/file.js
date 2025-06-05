function toggleButton(selector) {
  const button = document.querySelector(selector);
  if (!button.classList.contains("toggle-button")) {
    toggleOff(selector);
    button.classList.add("toggle-button");
  }
}

function toggleOff() {
  const previousButton = document.querySelector(".toggle-button");
  if (previousButton) {
    previousButton.classList.remove("toggle-button");
  }
}

const contactElem = document.querySelector(".js-contact");
contactElem.addEventListener("click", () => {
  toggleOff();
});
