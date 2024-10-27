function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorChanger = document.querySelector(".change-color");
const colorBg = document.querySelector(".color-widget");
const spanColor = document.querySelector(".color");

colorChanger.addEventListener("click", handleClick);

function handleClick() {
  const colorOweride = getRandomHexColor();
  colorBg.style.backgroundColor = colorOweride;
  spanColor.textContent = colorOweride;
}