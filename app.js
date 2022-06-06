const display = document.querySelector(".calculator_input");
const keys = document.querySelector(".calculator_keys");
const btn =document.getElementById("btn")
let displayValue = "0";
let firstValue = null;
let operator = null;
let waitingForSecondValue = false;

// !updateDislay
updateDislay();
function updateDislay() {
    display.value = displayValue;
}

btn.addEventListener("click", function () {
    
})
keys.addEventListener("click",function(e) {
    const element = e.target;
    const value = element.value;
    if (!element.matches("button")) return;


    switch (value) {
        case "-":
        case "+":
        case "*":
        case "/":
            case "=":
        
            handleOperator(value);
            break;
        case ".":
            inputDecimal()
            break;

        case "clear":
            clear();
            break;
        default:
            inputNumber(value)
     }

    
    updateDislay()
 })
//!function handleOperator
function handleOperator(nextoperator) {
    const value = parseFloat(displayValue);

    if (firstValue === null) {
        firstValue =value;
    }
    else if (operator) {
        const result = calculate(firstValue, value, operator,waitingForSecondValue);
        displayValue =`${parseFloat(result.toFixed(7))}` ;
        firstValue = result;
    }

    waitingForSecondValue = true;
    operator = nextoperator;
    
    console.log(displayValue,firstValue,operator,waitingForSecondValue);
}

// !function calculate
function calculate(first, second, operator,secondvalue) {
    if (operator === "+"&&!secondvalue) {
        return first + second;
    }
    else if (operator === "-"&&!secondvalue) {
        return first - second;
    }

    else if (operator === "*"&&!secondvalue) {
        return first * second;
    }

    else if (operator === "/"&&!secondvalue) {
        return first/second
    }

    return second;
}
// 
// !function inputNumber
function inputNumber(num) {

    if (waitingForSecondValue) {
        displayValue = num;
        waitingForSecondValue = false;
    } else {
    displayValue = displayValue==="0"?num:displayValue+num;
        
    }
    console.log(firstValue,displayValue,operator,waitingForSecondValue);

}
// 
// !function inputDecimal
function inputDecimal() {
    if (!displayValue.includes(".")) {
        displayValue += ".";
    }
}
//!
function clear() {
    displayValue="0"
    }

// 


