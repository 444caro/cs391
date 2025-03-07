import styled from 'styled-components';
import StyledH2 from './ui-components/StyledH2';
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
const StyledLabel = styled.label`
    font-size: calc(5px + 1.5vw);
    margin: 2vh 1.5vw;
    line-height: calc(15px +1vh); 
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
            <StyledH2> Calculator</StyledH2>
            <StyledLabel htmlFor= "first"> First Number: </StyledLabel>
            <CalculatorInput id = "first" type = "text" value = {firstInput} onChange = {(e) => setFirstInput(e.target.value)} /> <br/>
            <StyledLabel htmlFor= "second"> Second Number: </StyledLabel>
            <CalculatorInput id = "second" type = "text" value = {secondInput} onChange = {(e) => setSecondInput(e.target.value)} /><br/>
            <CalculatorButton onClick = {addition}> + </CalculatorButton>
            <CalculatorButton onClick = {subtraction}> - </CalculatorButton>
            <CalculatorButton onClick = {multiplication}> * </CalculatorButton>
            <CalculatorButton onClick = {division}> / </CalculatorButton>
            <CalculatorButton onClick = {power}> ** </CalculatorButton><br/>
            <CalculatorButton onClick = {clearBoxes}> Clear </CalculatorButton> 
            <CalculatorOutput> {output} </CalculatorOutput>
        </CalculatorContainer>
    )
}