const inputSlider = document.querySelector("[data-lengthslider]");
const lenghthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("[#uppercase]");
const lowerCaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers"); 
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateButton = document.querySelector(".generateBtn");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");

let password = "";
 let passwordLength = 10;
 let checkCount = 1;


// Function For Handling Slider 
function handelSlider() {
    inputSlider.value = passwordLength;
    lenghthDisplay.innerHTML = passwordLength;
}

// Function For Setting Indicator 
function setIndicator(color) {
    indicator.style.backgroundColor = color;
}

function getRandomInteger(min , max){
    Math.floor(Math.random() * (max -min)) + min;
}
  