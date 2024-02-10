// Accessing HTML Elements
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

function getRndInteger(min , max){
    Math.floor(Math.random() * (max - min)) + min;
}
  
function generateRandomNumber(){
    return getRndInteger(0,9);
}

function generateLowerCase() {
    String.fromCharCode(getRndInteger(97,123)) // 97 - lower case A ke ascii value and 123 - Lower case z ke ascii value 
}
  

function generateUpperCase() {
    String.fromCharCode(getRndInteger(65,91)) // 65 - Upper case A ke ascii value and 91 - Upper  case z ke ascii value 
}

function generateSymbol() {
    const randNum = getRndIntegerO(0, symbols.legth);
    return symbols.charAt(randNum);
}

function calcStrength() {
       let hasUpper = false;
       let hasLower = false ;
       let hasNum =   false;
       let hasSym = false;
       if (uppercaseCheck.checked) hasUpper = true;
       if (lowercaseCheck.checked) hasLower = true;
       if (numberCheck.checked)     hasNum   = true;
       if (symbolsCheck.checked)    hasSym   = true;

       if(hasUpper && hasLower &&(hasNum || hasSym) && passwordLength >=8){
        setIndicator("#0f0");
       }

       else if(( hasLower || hasUpper) && 
       (hasNum || hasSym) &&
       passwordLength >=6
       ){
        setIndicator("#ff0");
       } else{
        setIndicator("#f00");
       }
}
