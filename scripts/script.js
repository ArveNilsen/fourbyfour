import allImages from "../images/imageArrays.js";

const createGrid = (arr) => {
  const gridContainer = document.createElement("div");
  gridContainer.classList = "grid-container";

  const main = document.querySelector("main");
  main.appendChild(gridContainer);

  let counter = 0;

  for (let size = 4; size > 0; size -= 1) {
    let rowContainer = document.createElement("div");
    rowContainer.classList = "row-container";
    gridContainer.appendChild(rowContainer);

    for (let size2 = 4; size2 > 0; size2 -= 1) {
      let cell = document.createElement("div");
      cell.style.backgroundColor = `rgb(${arr[counter]})`;
      cell.classList = "cell";
      cell.style.height = 480 / 4 + "px";
      cell.style.width = 480 / 4 + "px";
      rowContainer.appendChild(cell);
      counter += 1;
    }
  }
};

const createGridSolved = (arr) => {
  const gridContainerSolved = document.createElement("div");
  gridContainerSolved.classList = "grid-container";

  const section = document.querySelector("section");
  section.appendChild(gridContainerSolved);

  let counter0 = 0,
    counter1 = 1,
    counter2 = 2;

  for (let size = 4; size > 0; size--) {
    let rowContainer = document.createElement("div");
    rowContainer.classList = "row-container";
    gridContainerSolved.appendChild(rowContainer);

    for (let size2 = 4; size2 > 0; size2--) {
      let cell = document.createElement("div");
      cell.style.backgroundColor = `rgb(${arr[counter0]}, ${arr[counter1]}, ${arr[counter2]}`;
      cell.classList = "cell";
      cell.style.height = 480 / 4 + "px";
      cell.style.width = 480 / 4 + "px";
      rowContainer.appendChild(cell);
      counter0 += 3;
      counter1 += 3;
      counter2 += 3;
    }
  }
};

const solveImage = (arr) => {
  return arr
    .flat()
    .map((x) => lowToHighBinary(x))
    .map((x) => parseInt(x, 2));
};

const lowToHighBinary = (decimal) => {
  let toBin = decimal.toString(2);

  while (toBin.length > 4) {
    toBin = toBin.substring(1);
  }
  return `${toBin}0000`;
};

const chooseImage = (arr) => {
  createGrid(arr);
  const arrayOfImage1SolvedFull = solveImage(arr);
  createGridSolved(arrayOfImage1SolvedFull);
};

const main = () => {
  for (let element of allImages) {
    chooseImage(element);
  }
};

main();
