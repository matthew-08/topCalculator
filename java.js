const buttons = document.querySelectorAll(".btn");
const numberOutput = document.querySelector(".numbersWrapper")
                             .firstElementChild;
const operatorDisplay = document.querySelector(".topDisplay")
const clearButton = document.getElementById("clearButton")




let displayValueArray = [ ]
let num1 = 0
let num2 = 0

buttons.forEach(button => 
    
    button.addEventListener("click", populateDisplay));

function populateDisplay(e) {
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
        num2 = displayValueArray.join("")

        switch (buttonOperator) {
            case "=":
                if (operatorDisplay.innerHTML.includes("+")) {
                    operatorDisplay.innerText = `${num1} + ${num2} = `
                    return numberOutput.innerText = operate(operatorAdd, num1, num2)    
                } else if (operatorDisplay.innerHTML.includes("-")) {
                    operatorDisplay.innerText = `${num1} - ${num2} = `
                    return numberOutput.innerText = operate(operatorSubtract, num1, num2)
                } else if (operatorDisplay.innerHTML.includes("x")) {
                    operatorDisplay.innerText = `${num1} x ${num2} = `
                    return numberOutput.innerText = operate(operatorMultiply, num1, num2)
                } else if (operatorDisplay.innerHTML.includes("/")) {
                    operatorDisplay.innerText = `${num1} / ${num2} = `
                    return numberOutput.innerText = operate(operatorDivide, num1, num2)
                } else {
                    return;
                }
                
                
                
                
            case '+':
            return numberOutput.innerText = operate(operatorAdd, num1, num2)
            
            case "-":
            return numberOutput.innerText = operate(operatorSubtract, num1, num2)   
            
            case "/":
            return numberOutput.innerText = operate(operatorDivide, num1, num2)
    
            case "x":
            return numberOutput.innerText = operate(operatorMultiply, num1, num2)
    
            default: break;
        }
    }

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