import styled from 'styled-components';
import StyledMain from './ui-components/StyledMain.tsx';
import MainText from './ui-components/MainText.tsx';
import StyledH2 from './ui-components/StyledH2.tsx';
import StyledP from './ui-components/StyledP.tsx';
import { useEffect } from 'react';

const EducationContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
`
const EducationImages = styled.div`
    max-width: 40%;
    padding-left:2vw;
`
const SchoolLogos = styled.img`
    max-width: 75%;
`

export default function Education() {
    useEffect(() => {
        document.title = "Education | Resume";
    }, []);
    return(
        <StyledMain>
            <StyledH2> Education </StyledH2>
            <EducationContainer>
                <EducationImages>
                    <SchoolLogos src = "/pennington-logo.png" alt = "The Pennington School Logo" />
                    <SchoolLogos src = "/boston-university-logo.png" alt = "Boston University Logo" />
                </EducationImages>
                <MainText>
                    <StyledP> I graduated from The Pennington School in 2021 with a highschool diploma.</StyledP>
                    <StyledP> I am currently a student at Boston University studying computer science. I will be graduating in the spring of 2025. </StyledP>
                    <StyledP> I have taken a variety of courses in computer science including: </StyledP>
                    <ul>
                        <li> <StyledP>Introduction to Computer Science </StyledP></li>
                        <li> <StyledP>Data Structures</StyledP> </li>
                        <li> <StyledP>Combinatoric Structures</StyledP> </li>
                        <li> <StyledP>Algorithm Analysis</StyledP> </li>
                        <li> <StyledP>Computer Systems</StyledP> </li>
                        <li> <StyledP>Distributed Systems</StyledP> </li>
                        <li> <StyledP>Theory of Computation</StyledP>  </li>
                        <li> <StyledP>Software Engineering</StyledP> </li>
                        <li><StyledP> Full-Stack Application Design and Developement </StyledP></li>
                        <li><StyledP> Introduction to Artificial Intelligence </StyledP></li>
                    </ul>
                </MainText>
            </EducationContainer>
        </StyledMain>
    )
}