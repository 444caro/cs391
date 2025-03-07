import styled from 'styled-components';
import { useState } from 'react';

const CalculatorContainer = styled.div`
    color: rgb(34, 42, 19);  
    font-size: calc(5px + 1.5vw);
    margin: 2vh 2vw;
    line-height: calc(15px +1vh);
    text-align: center;
`
const CalculatorInput = styled.input`
    margin: 1vh 1vw;
`
const CalculatorButton = styled.button`
    margin: 1vh 1vw;
    padding: 1vh 2vw;
    border: none;
    border-radius: 50%;
    background-color:  rgb(125, 151, 125);
    color: rgb(34, 42, 19);
    font-weight: bolder;
`
const CalculatorOutput = styled.div`
    color: darkolivegreen;
    font-family: Impact, Haettenschweiler, "Franklin Gothic Bold", Charcoal, "Helvetica Inserat", "Bitstream Vera Sans Bold", "Arial Black", sans-serif;
    font-size: calc(20px + 5vw);
    letter-spacing: 0.2em;
    margin: 2vh 2vw;
    padding: 1vh 1vw;
    text-align: center;
`


export default function Calculator() {
    const [firstInput, setFirstInput] = useState("");
    const [secondInput, setSecondInput] = useState("");
    const [output, setOutput] = useState("");

    function clearBoxes() {
        setFirstInput("");
        setSecondInput("");
        setOutput("");
    }

    function checkNegative(){
        let result = output;
        if (Number(result) < 0){
            /* fill in later, i forget 
            Output style color red */
        } else {
            /* fill in later, i forget 
             Output style color dakr green*/
        }
    }

    function power(){
        const num1 = Number(firstInput);
        const num2 = Number(secondInput);
        let result = 1;
        for (let i = 0; i < Number(num2); i++){
            result *= Number(num1);
        }
        setOutput(String(result));
        checkNegative();
    }
    function addition(){
        const num1 = Number(firstInput);
        const num2 = Number(secondInput);
        let result = num1 + num2;
        setOutput(String(result));
        checkNegative();
    }
    function subtraction(){
        const num1 = Number(firstInput);
        const num2 = Number(secondInput);
        let result = num1 - num2;
        setOutput(String(result));
        checkNegative();
    }
    function multiplication(){
        const num1 = Number(firstInput);
        const num2 = Number(secondInput);
        let result = num1 * num2;
        setOutput(String(result));
        checkNegative();
    }
    function division(){
        const num1 = Number(firstInput);
        const num2 = Number(secondInput);
        let result = num1 / num2;
        setOutput(String(result));
        checkNegative();
    }

    return(
        <CalculatorContainer>
            <h2> Calculator</h2>
            <CalculatorInput type = "text" value = {firstInput} onChange = {(e) => setFirstInput(e.target.value)} />
            <CalculatorInput type = "text" value = {secondInput} onChange = {(e) => setSecondInput(e.target.value)} />
            <CalculatorButton onClick = {addition}> + </CalculatorButton>
            <CalculatorButton onClick = {subtraction}> - </CalculatorButton>
            <CalculatorButton onClick = {multiplication}> * </CalculatorButton>
            <CalculatorButton onClick = {division}> / </CalculatorButton>
            <CalculatorButton onClick = {power}> ** </CalculatorButton>
            <CalculatorButton onClick = {clearBoxes}> Clear </CalculatorButton>
            <CalculatorOutput> {output} </CalculatorOutput>
        </CalculatorContainer>
    )
}