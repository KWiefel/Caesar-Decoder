let inputText = document.body.querySelector("#inputText");
let inputKey = document.body.querySelector("#inputKey");
const output = document.body.querySelector(".output");

let alphabet = "abcdefghijklmnopqrstuvwxyz";

const decoder = () => {
  output.textContent = "";
  inputTextArr = inputText.value.split("");
  alphabetArr = alphabet.split("");

  for (let alphaCode of inputTextArr) {
    for (let i = 0; i <= alphabetArr.length; i++) {
      if (alphaCode.toLowerCase() === alphabetArr[i]) {
        output.textContent +=
          alphabetArr[i + Number(inputKey.value)].toUpperCase();
      }
    }
  }
};

const encoder = () => {
  output.textContent = "";
  inputTextArr = inputText.value.split("");
  alphabetArr = alphabet.split("");

  for (let alphaCode of inputTextArr) {
    for (let i = 0; i <= alphabetArr.length; i++) {
      if (alphaCode.toLowerCase() === alphabetArr[i]) {
        output.textContent +=
          alphabetArr[i - Number(inputKey.value)].toUpperCase();
      }
    }
  }
};
