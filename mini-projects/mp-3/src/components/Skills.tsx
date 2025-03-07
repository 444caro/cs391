import styled from 'styled-components';
import StyledMain from './ui-components/StyledMain.tsx';
import MainText from './ui-components/MainText.tsx';
import StyledH2 from './ui-components/StyledH2.tsx';
import StyledP from './ui-components/StyledP.tsx';
import { useEffect } from 'react';

const StyledSkills = styled.div`
`

export default function Skills(){
    useEffect(() => {
        document.title = "Skills | Resume";
    }, []);
    return(
        <StyledMain>
            <StyledH2> Skills </StyledH2>
            <MainText>
                <StyledP> This page contains a list of my technical and practical skills. </StyledP>
            </MainText>
            <StyledSkills>
                <ul>
                    <li><StyledP> Proficient in Java, Python, Golang, HTML/CSS, and JavaScript. </StyledP></li>
                    <li><StyledP> Experience with MongoDB, APIs, and SQL. </StyledP></li>
                    <li><StyledP> Familiar with React, Node.js, and Express. </StyledP></li>
                    <li><StyledP> Knowledgeable in data structures and algorithms. </StyledP></li>
                    <li><StyledP> Experience with full-stack application design and development. </StyledP></li>
                    <li><StyledP> Experience with software engineering and distributed systems. </StyledP></li>
                    <li><StyledP> Experience with theory of computation and combinatoric structures. </StyledP></li>
                    <li><StyledP> Experience with artificial intelligence and machine learning. </StyledP></li>
                    <li><StyledP>Proficient in customer relationship management and sales techniques. </StyledP></li>
                    <li><StyledP>Skilled in data entry, document management, and the use of KeyStoneB2B and TitleExpress. </StyledP></li>
                    <li><StyledP>Fluent in both English and French. </StyledP></li>
                </ul>
            </StyledSkills>
        </StyledMain>
    )
}