const userName = document.querySelector("#name-input")
const greetName = document.querySelector("#name-output")

userName.addEventListener("input", () => {
    const inputValue = userName.value.trim();
    greetName.textContent = inputValue === "" ? "Anonymous" : inputValue;
});