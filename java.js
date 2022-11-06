const buttons = document.querySelectorAll(".btn");
const numberOutput = document.querySelector(".numbersWrapper")
                             .firstElementChild;
const operatorDisplay = document.querySelector(".topDisplay")
const clearButton = document.getElementById("clearButton")




let displayValueArray = [ ]
let num1 = 0
let num2 = 0
let additonalNumber = 0

buttons.forEach(button => 
    
    button.addEventListener("click", populateDisplay));

function populateDisplay(e) {
    if (additonalNumber !== 0 && displayValueArray.length === 0) {
        num1 = additonalNumber;
        numberOutput.innerHTML = " "
    }
    if (isNaN(this.innerText) == true) {
        return storeForOperate(e);
    }
    if (displayValueArray.length === 0) {
            numberOutput.innerHTML = " "
    }
    const num = this.innerText;
    numberOutput.innerText += num;
    displayValueArray.push(num);
}

function storeForOperate(button){
    const buttonOperator = button.target.innerText;
    if (operatorDisplay.innerText !== '') {
        additonalNumber = 0;
        num2 = displayValueArray.join("")
        console.log(num2);
        let total = 0;

        switch (buttonOperator) {    
            case "=":
                if (operatorDisplay.innerHTML.includes("+")) {
                    total2 = operate(operatorAdd, num1, num2);
                    operatorDisplay.innerText = `${num1} + ${num2} = `
                    displayValueArray = [ ];
                    num1 = 0;
                    num2 = 0;
                    additonalNumber = total2;
                    return numberOutput.innerText = total2;   
                } else if (operatorDisplay.innerHTML.includes("-")) {
                    total2 = operate(operatorSubtract, num1, num2);
                    operatorDisplay.innerText = `${num1} - ${num2} = `
                    num1 = 0;
                    num2 = 0;
                    displayValueArray = [ ];
                    additonalNumber = total2;
                    return numberOutput.innerText = total2;
                } else if (operatorDisplay.innerHTML.includes("x")) {
                    total2 = operate(operatorMultiply, num1, num2);
                    operatorDisplay.innerText = `${num1} x ${num2} = `
                    num1 = 0;
                    num2 = 0;
                    displayValueArray = [ ];
                    additonalNumber = total2;
                    return numberOutput.innerText = total2;
                } else if (operatorDisplay.innerHTML.includes("/")) {
                    total2 = operate(operatorDivide, num1, num2);
                    operatorDisplay.innerText = `${num1} / ${num2} = `
                    num1 = 0;
                    num2 = 0;
                    additonalNumber = total2;
                    displayValueArray = [ ];
                    return numberOutput.innerText = total2;
                } else {
                    break;
                }
                

                
                
            case '+':
            total = operate(operatorAdd, num1, num2);
            operatorDisplay.innerText = total + buttonOperator;
            additonalNumber = total;
            displayValueArray = [ ];
            num1 = 0;
            num2 = 0;
            return numberOutput.innerText = total;
            
            case "-":
            total = operate(operatorSubtract, num1, num2);
            operatorDisplay.innerText = total + buttonOperator;
            additonalNumber = total;
            displayValueArray = [ ];
            num1 = 0;
            num2 = 0;
            return numberOutput.innerText = total;
            
            case "/":
            total = operate(operatorDivide, num1, num2);
            operatorDisplay.innerText = total + buttonOperator;
            additonalNumber = total;
            displayValueArray = [ ];
            num1 = 0;
            num2 = 0;
            return numberOutput.innerText = total;
    
            case "x":
            total = operate(operatorMultiply, num1, num2);
            operatorDisplay.innerText = total + buttonOperator;
            additonalNumber = total;
            displayValueArray = [ ];
            num1 = 0;
            num2 = 0;
            return numberOutput.innerText = total;
            default: break;
        }
    } else

        num1 = displayValueArray.join("");
        switch (buttonOperator) {
            case '+':
            operatorDisplay.innerText = num1 + " + ";
            break;
            
            case "-":
                
            operatorDisplay.innerText = num1 + " - ";
            break;

            case "/":
            
            operatorDisplay.innerText = num1 + " / ";
            break;

            case "x":
                
            operatorDisplay.innerText = num1 + " x ";
            break;

            default: break;
        }
        displayValueArray = [ ];
        numberOutput.innerText = num1;

}

function operatorAdd(num, num2){
let total = parseInt(num1) + parseInt   (num2);
return total;
}
function operatorSubtract(num, num2){
let total = num - num2;
return total;
}
function operatorDivide(num, num2){
let total = num / num2;
return total
}
function operatorMultiply(num, num2){
let total = num * num2;
return total;
}

function operate(operator, num, num2) {
    parseInt(num);
    parseInt(num2);
    let total = operator(num,num2);
    return total;
}

clearButton.addEventListener("click", () =>
{
    num1 = 0
    num2 = 0
    operatorDisplay.innerText = ""
    document.getElementById("numberDisplay").innerText = ""
    return;
} )