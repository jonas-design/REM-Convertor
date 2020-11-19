//selectors
const input = document.querySelector(".input");
const result = document.querySelector(".result");
const changeBtn = document.querySelector(".change");
const inputLable = document.querySelector(".value-lable");
const resultLable = document.querySelector(".result-lable");

let px = true;

changeBtn.addEventListener("click", () => {
  px = !px;
  input.value = parseFloat(result.innerText);
  if (px) {
    resultLable.innerText = "result in rem:";
    inputLable.innerText = "Enter value in pixels";
  } else {
    resultLable.innerText = "result in pixel:";
    inputLable.innerText = "Enter value in rems";
  }
  convert();
});

input.addEventListener("change", () => {
  convert();
});

function convert() {
  if (px) {
    result.innerText = input.value / 16 + "rem";
    resultLable.innerText = "result in rem:";
    inputLable.innerText = "Enter value in pixels";
  } else {
    result.innerText = input.value * 16 + "px";
    resultLable.innerText = "result in pixel:";
    inputLable.innerText = "Enter value in rems";
  }
}
