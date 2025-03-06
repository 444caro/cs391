import styled from 'styled-components';

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    width:70%;
    height: 100vh;
    background-color: rgb(226, 200, 167);
    padding-bottom: 0;
`
const StyledSkills = styled.div`
`

export default function Skills(){
    return(
        <StyledMain>
            <h2> Skills </h2>
            <div id = "main-text">
                <p> This page contains a list of my technical and practical skills. </p>
            </div>
            <StyledSkills>
                <ul>
                    <li><p> Proficient in Java, Python, Golang, HTML/CSS, and JavaScript. </p></li>
                    <li><p> Experience with MongoDB, APIs, and SQL. </p></li>
                    <li><p> Familiar with React, Node.js, and Express. </p></li>
                    <li><p> Knowledgeable in data structures and algorithms. </p></li>
                    <li><p> Experience with full-stack application design and development. </p></li>
                    <li><p> Experience with software engineering and distributed systems. </p></li>
                    <li><p> Experience with theory of computation and combinatoric structures. </p></li>
                    <li><p> Experience with artificial intelligence and machine learning. </p></li>
                    <li><p>Proficient in customer relationship management and sales techniques. </p></li>
                    <li><p>Skilled in data entry, document management, and the use of KeyStoneB2B and TitleExpress. </p></li>
                    <li><p>Fluent in both English and French. </p></li>
                </ul>
            </StyledSkills>
        </StyledMain>
    )
}