
//INELEGANT IMPLEMENTAION - CHANGE LATER

function add() {

    console.log("Pressed Add")

    let operand1 = Number(document.getElementById("operandField1").value)
    let operand2 = Number(document.getElementById("operandField2").value)

    let textDiv = document.getElementById("answer-area")
    textDiv.innerHTML = "Answer: " + (operand1 + operand2)

}

function subtract() {

    console.log("Pressed Subtract")

    let operand1 = Number(document.getElementById("operandField1").value)
    let operand2 = Number(document.getElementById("operandField2").value)

    let textDiv = document.getElementById("answer-area")
    textDiv.innerHTML = "Answer: " + operand1 - operand2

}

function multiply() {

    console.log("Pressed Multiply")

    let operand1 = Number(document.getElementById("operandField1").value)
    let operand2 = Number(document.getElementById("operandField2").value)

    let textDiv = document.getElementById("answer-area")
    textDiv.innerHTML = "Answer: " + operand1 * operand2

}

function divide() {

    console.log("Pressed Divide")

    let operand1 = Number(document.getElementById("operandField1").value)
    let operand2 = Number(document.getElementById("operandField2").value)

    let textDiv = document.getElementById("answer-area")
    textDiv.innerHTML = "Answer: " + operand1 / operand2

}

document.addEventListener('DOMContentLoaded', function() {

    //operations
    document.getElementById('add_button').addEventListener('click', add)    
    document.getElementById('subtract_button').addEventListener('click', subtract)    
    document.getElementById('multiply_button').addEventListener('click', multiply)    
    document.getElementById('divide_button').addEventListener('click', divide)    
})
