// funtions
const selectId = (nameId) => document.getElementById(nameId);
const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// vars
const btn = selectId("menu");
const menu = selectId("menu-table");
const overlay = selectId("overlay");
const input = selectId("input");
const go = selectId("go");
const text = selectId("error-text");

// event click
btn.addEventListener("click", () => {
  const logos = btn.querySelectorAll("img");
  logos.forEach((e) => e.classList.toggle("hidden"));
  menu.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});
go.addEventListener("click", () => {
  const email = input.value;
  if (!validateEmail(email)) {
    text.classList.remove("hidden");
    input.classList.add("error");
  }
  else {
    text.classList.add("hidden");
    input.classList.remove("error");
  }
});
