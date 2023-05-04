
//INELEGANT IMPLEMENTAION - CHANGE LATER

function add() {

    let operand1 = Number(document.getElementById("operandField1").value)
    let operand2 = Number(document.getElementById("operandField2").value)

    let textDiv = document.getElementById("answer-area")
    let answer = Math.round((operand1 + operand2) * 100) / 100
    textDiv.innerHTML = "Answer: " + answer
    document.getElementById("operandField1").value = answer
    document.getElementById("operandField2").value = ""

}

function subtract() {

    let operand1 = Number(document.getElementById("operandField1").value)
    let operand2 = Number(document.getElementById("operandField2").value)

    let textDiv = document.getElementById("answer-area")
    let answer = Math.round((operand1 - operand2) * 100) / 100
    textDiv.innerHTML = "Answer: " + answer
    document.getElementById("operandField1").value = answer
    document.getElementById("operandField2").value = ""
}

function multiply() {

    let operand1 = Number(document.getElementById("operandField1").value)
    let operand2 = Number(document.getElementById("operandField2").value)

    let textDiv = document.getElementById("answer-area")
    let answer = Math.round((operand1 * operand2) * 100) / 100
    textDiv.innerHTML = "Answer: " + answer
    document.getElementById("operandField1").value = answer
    document.getElementById("operandField2").value = ""
}

function divide() {

    let operand1 = Number(document.getElementById("operandField1").value)
    let operand2 = Number(document.getElementById("operandField2").value)

    let textDiv = document.getElementById("answer-area")
    let answer = Math.round((operand1 / operand2) * 100) / 100
    textDiv.innerHTML = "Answer: " + answer
    document.getElementById("operandField1").value = answer
    document.getElementById("operandField2").value = ""
}

document.addEventListener('DOMContentLoaded', function() {
    //operations
    document.getElementById('add_button').addEventListener('click', add)    
    document.getElementById('subtract_button').addEventListener('click', subtract)    
    document.getElementById('multiply_button').addEventListener('click', multiply)    
    document.getElementById('divide_button').addEventListener('click', divide)    
})
