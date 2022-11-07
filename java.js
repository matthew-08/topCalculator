const buttons = document.querySelectorAll(".btn");
const numberOutput = document.querySelector(".numbersWrapper")
                             .firstElementChild;
const operatorDisplay = document.querySelector(".topDisplay");
const clearButton = document.getElementById("clearButton");
const deleteButton = document.getElementById("deleteButton");


let displayValueArray = [ ]
let num1 = 0
let num2 = 0
let additonalNumber = 0
let timesClicked = 0;




buttons.forEach(button => 
    
    button.addEventListener("click", populateDisplay));

function populateDisplay(e) {
    if(e.target == deleteButton) {
        console.log(numberOutput.innerHTML)
        let numberToDelete = numberOutput.innerText.charAt(numberOutput.innerHTML.length - 1)
        let ok = numberOutput.innerText.replace(`${numberToDelete}`,'')
        displayValueArray.pop();
        return numberOutput.innerText = ok;
    }
    if (additonalNumber !== 0 && displayValueArray.length === 0) {
        num1 = additonalNumber;
        numberOutput.innerHTML = " "
    }
    if (isNaN(this.innerText) == true && this.innerText !== ".") {
        if (timesClicked === 1) return;
        else
        return storeForOperate(e);
    }
    if (displayValueArray.length === 0) {
            numberOutput.innerHTML = " "
    }
    const num = this.innerText;
    if (num == "." && numberOutput.innerHTML.includes(".")) {
        return;
    } else
    numberOutput.innerText += num;
    displayValueArray.push(num);
    timesClicked = 0;
}

function storeForOperate(button){
    const buttonOperator = button.target.innerText;
    if (operatorDisplay.innerText !== '') {
        num2 = displayValueArray.join("")
        console.log(num2);
        let total = 0;

        switch (buttonOperator) {    
            case "=":
                if (operatorDisplay.innerHTML.includes("+")) {
                    timesClicked++
                    total2 = operate(operatorAdd, num1, num2);
                    operatorDisplay.innerText = `${num1} + ${num2} = `
                    displayValueArray = [ ];
                    num1 = 0;
                    num2 = 0;
                    timesClicked = 0;
                    additonalNumber = total2;
                    return numberOutput.innerText = total2;   
                } else if (operatorDisplay.innerHTML.includes("-")) {
                    total2 = operate(operatorSubtract, num1, num2);
                    operatorDisplay.innerText = `${num1} - ${num2} = `
                    num1 = 0;
                    num2 = 0;
                    timesClicked = 0;
                    displayValueArray = [ ];
                    additonalNumber = total2;
                    return numberOutput.innerText = total2;
                } else if (operatorDisplay.innerHTML.includes("x")) {
                    total2 = operate(operatorMultiply, num1, num2);
                    operatorDisplay.innerText = `${num1} x ${num2} = `
                    num1 = 0;
                    num2 = 0;
                    timesClicked = 0;
                    displayValueArray = [ ];
                    additonalNumber = total2;
                    return numberOutput.innerText = total2;
                } else if (operatorDisplay.innerHTML.includes("/")) {
                    total2 = operate(operatorDivide, num1, num2);
                    operatorDisplay.innerText = `${num1} / ${num2} = `
                    num1 = 0;
                    num2 = 0;
                    timesClicked = 0;
                    additonalNumber = total2;
                    displayValueArray = [ ];
                    return numberOutput.innerText = total2;
                } else {
                    break;
                }
                

        }    
        if (operatorDisplay.innerText.includes("+"))     {
            timesClicked++
            if (timesClicked > 1) {
                return;
            }
            total = operate(operatorAdd, num1, num2);
            operatorDisplay.innerText = total + " " + buttonOperator;
            additonalNumber = total;
            displayValueArray = [ ];
            timesClicked = 0;
            num1 = 0;
            return numberOutput.innerText = total;
        } else if (operatorDisplay.innerText.includes("-")) {
            timesClicked++
            if (timesClicked > 1) {
                return;
            }
            total = operate(operatorSubtract, num1, num2);
            operatorDisplay.innerText = total + " " + buttonOperator;
            additonalNumber = total;
            displayValueArray = [ ];
            timesClicked = 0;
            num1 = 0;
            return numberOutput.innerText = total;
        } else if (operatorDisplay.innerText.includes("/")) {
            timesClicked++
            if (timesClicked > 1) {
                return;
            }
            total = operate(operatorDivide, num1, num2);
            operatorDisplay.innerText = total + " " + buttonOperator;
            additonalNumber = total;
            displayValueArray = [ ];
            timesClicked = 0;
            num1 = 0;
            return numberOutput.innerText = total;
        }
            else if (operatorDisplay.innerText.includes("x")) {
                timesClicked++
            if (timesClicked > 1) {
                return;
            }
            total = operate(operatorMultiply, num1, num2);
            operatorDisplay.innerText = total + " "  + buttonOperator;
            additonalNumber = total;
            timesClicked = 0;
            displayValueArray = [ ];
            num1 = 1;
            return numberOutput.innerText = total;
        }
    } else

        num1 = displayValueArray.join("");
        switch (buttonOperator) {
            case '+':
                timesClicked++
                if (timesClicked > 1) {
                    return;
                }
            operatorDisplay.innerText = num1 + " + ";
                timesClicked = 0;
            break;
            
            case "-":
                timesClicked++
                if (timesClicked > 1) {
                    return;
                }
                
            operatorDisplay.innerText = num1 + " - ";
            break;

            case "/":
                timesClicked++
                if (timesClicked > 1) {
                    return;
                }
                
            operatorDisplay.innerText = num1 + " / ";
            
            break;

            case "x":
                
            operatorDisplay.innerText = num1 + " x ";
            timesClicked++
            break;

            default: return;
        }
        displayValueArray = [ ];
        numberOutput.innerText = num1;

}

function operatorAdd(num, num2){
    if (num2 == ""){
        let total = parseFloat(num);
        return total;
    }
let total = parseInt(num1) + parseInt   (num2);
return total;
}
function operatorSubtract(num, num2){
let total = num - num2;
return total;
}
function operatorDivide(num, num2){
    if (num2 == ""){
        let total = parseFloat(num);
        return total;
    }
let total = num / num2;
return total
}
function operatorMultiply(num, num2){
    if (num2 == ""){
        let total = parseFloat(num);
        return total;
    }
let total = num * num2;
return total;
}

function operate(operator, num, num2) {
    parseFloat(num);
    parseFloat(num2);
    let total = operator(num,num2);
    if (total % 1 != 0) {
        let newtotal = total.toFixed(3);
        return newtotal;
    }
    return total;
}

clearButton.addEventListener("click", () =>
{
    num1 = 0
    num2 = 0
    displayValueArray  = [ ]
    additonalNumber = 0 
    timesClicked = 0;
    operatorDisplay.innerText = ""
    document.getElementById("numberDisplay").innerText = ""
    return;
} )
