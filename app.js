const para = document.getElementById("color-hex");
const generateBtn = document.getElementById("generate-btn");
const formatBtn = document.getElementById("format-btn");
const body = document.querySelector("body");

const randomColors = [
  "#87CEEB",
  "#FFA07A",
  "#20B2AA",
  "#FFD700",
  "#7FFF00",
  "#40E0D0",
  "#9370DB",
  "#FF6347",
  "#00FF7F",
  "#FF69B4",
];

const hexSymbols = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const random = (array) => {
  return Math.floor(Math.random() * array.length);
};

const generateColor = (array) => {
  let colorIndex = random(array);
  let color = array[colorIndex];
  para.textContent = color;
  body.style.backgroundColor = color;
};

const generateRandomHex = (array) => {
  let hexNumber = "#";
  for (let i = 0; i <= 5; i++) {
    hexNumber += array[random(hexSymbols)];
    body.style.backgroundColor = hexNumber;
    para.textContent = hexNumber;
  }
};

const changeFormat = () => {
  if (formatBtn.textContent === "Limited Version") {
    formatBtn.textContent = "Full Version";
    generateBtn.addEventListener("click", () => {
      generateColor(randomColors);
    });
  } else {
    formatBtn.textContent = "Limited Version";
    generateBtn.addEventListener("click", () => {
      generateRandomHex(hexSymbols);
    });
  }
};

generateBtn.addEventListener("click", () => {
  generateColor(randomColors);
});
formatBtn.addEventListener("click", changeFormat);
