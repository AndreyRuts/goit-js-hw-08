function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");

let sizes = 30;

create.addEventListener("click", createMarkup);
destroy.addEventListener("click", () => {
  cleaner();
})

function createMarkup() {
  if (input.value < 1 || input.value > 100) {
    console.log("error");
    return;
  } 
    createBoxes(input.value);
}

function cleaner() {
  boxes.innerHTML = "";
  input.value = "";
  sizes = 30;
}

function createBoxes(amount) {
  cleaner(); 
  const test = []; //fix
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${sizes}px`;
    box.style.height = `${sizes}px`;
    box.style.backgroundColor = getRandomHexColor();
    sizes += 10;
    test.push(box) //fix
  }
  boxes.append(...test); //fix
  
}