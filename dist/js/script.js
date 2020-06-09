const body = document.querySelector("body");
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");
const numAlphaArray = [
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

btn.addEventListener("click", changeBackground);

function changeBackground() {
  let randomColor = ["#"];

  for (let i = 0; i < 6; i++) {
    let num = Math.floor(Math.random() * 16);
    randomColor.push(numAlphaArray[num]);
  }

  randomColor = randomColor.join("");
  color.innerHTML = `<p>${randomColor}</p>`;
  btn.style.background = randomColor;
  body.style.background = randomColor;
  colorText();
}

function colorText() {
  const rgbPattern = /(\d+)/g;
  const darkColorLimit = 128;
  let backgroundColor, rgbValue, red, green, blue;

  backgroundColor = btn.style.getPropertyValue("background");
  rgbValue = Array.from(backgroundColor.match(rgbPattern));
  red = rgbValue[0];
  green = rgbValue[1];
  blue = rgbValue[2];

  if (
    (red <= darkColorLimit && green <= darkColorLimit) ||
    (green <= darkColorLimit && blue <= darkColorLimit) ||
    (blue <= darkColorLimit && red <= darkColorLimit)
  ) {
    btn.style.color = "white";
    btn.style.borderColor = "white";
    color.style.color = "white";
  } else {
    btn.style.color = "#333";
    btn.style.borderColor = "#333";
    color.style.color = "#333";
  }
}
