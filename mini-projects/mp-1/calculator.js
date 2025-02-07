/*    /mini-projects/mp-1/calculator.js/      */

// Function to add two numbers input by the user
function addition(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = Number(num1) + Number(num2);
    document.getElementById("output").innerHTML = String(result);
}

// Function to subtract two numbers input by the user
function subtraction(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = Number(num1) - Number(num2);
    document.getElementById("output").innerHTML = String(result);
}

// Function to multiply two numbers input by the user
function multiplication(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = Number(num1) * Number(num2);
    document.getElementById("output").innerHTML = String(result);
}

// Function to divide two numbers input by the user
function division(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = Number(num1) / Number(num2);
    document.getElementById("output").innerHTML = String(result);
}

// Function to raise the value of the first input to the power of the second input
function power(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = 1;
    for (let i = 0; i < Number(num2); i++){
        result *= Number(num1);
    }
    document.getElementById("output").innerHTML = String(result);
}

// Function to erase the contents of the 2 input boxes and the output box
function clearBoxes(){
    document.getElementById("num1").value = " ";
    document.getElementById("num2").value = " ";
    document.getElementById("output").innerHTML = " ";
}
