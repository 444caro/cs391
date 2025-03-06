import styled from 'styled-components';

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    width:70%;
    height: 100vh;
    background-color: rgb(226, 200, 167);
    padding-bottom: 0;
`
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
    return(
        <StyledMain>
            <h2> Education </h2>
            <EducationContainer>
                <EducationImages>
                    <SchoolLogos src = "assets/pennington-logo.png" alt = "The Pennington School Logo" />
                    <SchoolLogos src = "assets/boston-university-logo.png" alt = "Boston University Logo" />
                </EducationImages>
                <div id = "main-text">
                    <p> I graduated from The Pennington School in 2021 with a highschool diploma.</p>
                    <p> I am currently a student at Boston University studying computer science. I will be graduating in the spring of 2025. </p>
                    <p> I have taken a variety of courses in computer science including: </p>
                    <ul>
                        <li> <p>Introduction to Computer Science </p></li>
                        <li> <p>Data Structures</p> </li>
                        <li> <p>Combinatoric Structures</p> </li>
                        <li> <p>Algorithm Analysis</p> </li>
                        <li> <p>Computer Systems</p> </li>
                        <li> <p>Distributed Systems</p> </li>
                        <li> <p>Theory of Computation</p>  </li>
                        <li> <p>Software Engineering</p> </li>
                        <li><p> Full-Stack Application Design and Developement </p></li>
                        <li><p> Introduction to Artificial Intelligence </p></li>
                    </ul>
                </div>
            </EducationContainer>
        </StyledMain>
    )
}