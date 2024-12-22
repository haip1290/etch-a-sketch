let container = document.querySelector("#container");
const containerSize = 960;
container.style.width = containerSize + "px";
container.style.height = containerSize + "px";

// create 16*16 grid
const originalNumberOfSquare = 16;
createGrid(originalNumberOfSquare);
changeSquareColorWhenHover();

// add btn to change size
let btn = document.querySelector("button");
const MAX_NUM_OF_SQUARE = 100;
btn.addEventListener("click", () => {
  const numberOfSquare = prompt("Enter number of square per size");
  if (numberOfSquare > MAX_NUM_OF_SQUARE) {
    alert("Max size is " + MAX_NUM_OF_SQUARE);
  }
  container.innerHTML = "";
  createGrid(numberOfSquare);
  changeSquareColorWhenHover();
});

// function to create grid
function createGrid(numberOfSquare) {
  let squareSize = containerSize / numberOfSquare;
  for (let index = 0; index < numberOfSquare * numberOfSquare; index++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.width = squareSize + "px";
    square.style.height = squareSize + "px";
    container.appendChild(square);
  }
}

// change color of square when hover
function changeSquareColorWhenHover() {
  let squares = document.querySelectorAll(".square");
  let red = Math.round(Math.random() * 255);
  let blue = Math.round(Math.random() * 255);
  let green = Math.round(Math.random() * 255);
  const step = 0.1;
  squares.forEach((square) => {
    square.style.opacity = 0.1;
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = `rgb(${red},${blue},${green})`;
      let currentOpacity = parseFloat(square.style.opacity);
      currentOpacity += step;
      if (currentOpacity > 1) {
        currentOpacity = 1;
      }
      square.style.opacity = currentOpacity;
    });
  });
}
