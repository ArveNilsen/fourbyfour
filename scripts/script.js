function createGrid(arr) {
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
}

function createGridSolved(arr) {
  const gridContainerSolved = document.createElement("div");
  gridContainerSolved.classList = "grid-container";

  const section = document.querySelector("section");
  section.appendChild(gridContainerSolved);

  let counter0 = 0;
  let counter1 = 1;
  let counter2 = 2;

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
}

function solveImage(arr) {
  return arr
    .flat()
    .map((x) => lowToHighBinary(x))
    .map((x) => parseInt(x, 2));
}

function lowToHighBinary(decimal) {
  let toBin = decimal.toString(2);

  while (toBin.length > 4) {
    toBin = toBin.substring(1);
  }
  return `${toBin}0000`;
}

function chooseImage(arr) {
  createGrid(arr);
  const arrayOfImage1SolvedFull = solveImage(arr);
  createGridSolved(arrayOfImage1SolvedFull);
}

const arrayOfImage1 = [
  [218, 234, 250],
  [250, 250, 42],
  [250, 250, 42],
  [218, 234, 250],
  [250, 250, 42],
  [255, 240, 32],
  [255, 240, 32],
  [255, 240, 32],
  [10, 10, 10],
  [255, 208, 112],
  [255, 208, 112],
  [10, 10, 10],
  [218, 234, 250],
  [10, 154, 154],
  [10, 154, 154],
  [218, 234, 250],
];

const arrayOfImage2 = [
  [0, 240, 15],
  [0, 240, 15],
  [0, 240, 15],
  [0, 240, 15],
  [0, 0, 255],
  [15, 15, 255],
  [15, 15, 255],
  [0, 0, 255],
  [240, 240, 15],
  [240, 240, 15],
  [240, 240, 15],
  [240, 240, 15],
  [240, 0, 15],
  [255, 15, 15],
  [240, 0, 15],
  [255, 15, 15],
];

const arrayOfImage3 = [
  [208, 239, 240],
  [144, 207, 224],
  [64, 127, 192],
  [0, 47, 80],
  [144, 207, 224],
  [79, 127, 207],
  [15, 47, 95],
  [0, 47, 80],
  [144, 207, 224],
  [64, 127, 192],
  [64, 127, 192],
  [0, 47, 80],
  [208, 239, 240],
  [79, 127, 207],
  [223, 239, 255],
  [176, 223, 224],
];

const arrayOfImage4 = [
  [255, 240, 240],
  [255, 240, 240],
  [255, 0, 16],
  [255, 240, 240],
  [255, 240, 240],
  [223, 206, 205],
  [79, 126, 205],
  [223, 206, 205],
  [223, 192, 192],
  [223, 206, 205],
  [223, 206, 205],
  [223, 206, 205],
  [255, 240, 240],
  [15, 0, 0],
  [255, 240, 240],
  [15, 0, 0],
];

const arrayOfImage5 = [
  [160, 160, 160],
  [224, 224, 224],
  [112, 112, 112],
  [160, 160, 160],
  [160, 160, 160],
  [160, 160, 160],
  [160, 160, 160],
  [175, 174, 173],
  [160, 160, 160],
  [255, 254, 253],
  [255, 254, 253],
  [175, 174, 173],
  [160, 160, 160],
  [240, 240, 240],
  [240, 240, 240],
  [160, 160, 160],
];

const arrayOfImage6 = [
  [208, 224, 240],
  [125, 174, 79],
  [221, 238, 255],
  [208, 224, 240],
  [208, 224, 240],
  [125, 174, 79],
  [125, 174, 79],
  [208, 224, 240],
  [112, 160, 64],
  [192, 80, 32],
  [144, 192, 80],
  [112, 160, 64],
  [176, 192, 224],
  [205, 94, 47],
  [189, 206, 239],
  [176, 192, 224],
];

const arrayOfImage7 = [
  [189, 222, 239],
  [189, 222, 239],
  [189, 222, 239],
  [253, 14, 31],
  [189, 222, 239],
  [247, 10, 20],
  [247, 10, 20],
  [189, 222, 239],
  [189, 222, 239],
  [247, 10, 20],
  [183, 218, 228],
  [253, 14, 31],
  [253, 14, 31],
  [253, 14, 31],
  [173, 174, 175],
  [173, 174, 175],
];

const arrayOfImage8 = [
  [253, 238, 223],
  [253, 238, 223],
  [253, 238, 223],
  [253, 238, 223],
  [253, 238, 223],
  [121, 92, 21],
  [185, 40, 21],
  [189, 142, 31],
  [253, 238, 223],
  [189, 142, 31],
  [253, 254, 255],
  [253, 254, 255],
  [125, 126, 127],
  [185, 40, 21],
  [121, 124, 117],
  [249, 252, 245],
];

const arrayOfImage9 = [
  [255, 14, 13],
  [255, 14, 13],
  [255, 14, 13],
  [255, 14, 13],
  [15, 254, 13],
  [11, 248, 1],
  [11, 248, 1],
  [15, 254, 13],
  [15, 14, 254],
  [15, 14, 254],
  [15, 14, 254],
  [15, 14, 254],
  [255, 14, 13],
  [251, 248, 1],
  [251, 248, 1],
  [251, 248, 1],
];

const arrayOfImage10 = [
  [223, 239, 240],
  [159, 207, 224],
  [79, 127, 197],
  [15, 47, 80],
  [159, 207, 224],
  [79, 127, 197],
  [15, 47, 80],
  [15, 32, 80],
  [159, 207, 224],
  [79, 112, 192],
  [79, 112, 192],
  [15, 32, 80],
  [223, 239, 240],
  [79, 127, 197],
  [223, 239, 240],
  [191, 223, 224],
];

const arrayOfImage11 = [
  [160, 160, 175],
  [224, 224, 239],
  [112, 112, 127],
  [160, 160, 175],
  [160, 160, 175],
  [169, 172, 174],
  [169, 172, 174],
  [160, 160, 175],
  [160, 160, 175],
  [240, 240, 255],
  [240, 240, 255],
  [160, 160, 175],
  [160, 160, 175],
  [249, 252, 254],
  [240, 240, 255],
  [169, 172, 174],
];

const allImages = [
  arrayOfImage1,
  arrayOfImage2,
  arrayOfImage3,
  arrayOfImage4,
  arrayOfImage5,
  arrayOfImage6,
  arrayOfImage7,
  arrayOfImage8,
  arrayOfImage9,
  arrayOfImage10,
  arrayOfImage11,
];

for (let element of allImages) {
  chooseImage(element);
}
