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

  if (randomColor == "#000000") {
    color.style.color = "white";
    btn.style.color = "white";
    btn.style.borderColor = "white";
  }

  color.innerHTML = `<p>${randomColor}</p>`;
  btn.style.background = randomColor;
  body.style.background = randomColor;
}
