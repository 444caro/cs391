import styled from 'styled-components';
import Calculator from './Calculator';

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    width:70%;
    height: 100vh;
    background-color: rgb(226, 200, 167);
    padding-bottom: 0;
`
const MainText = styled.div`
    color: rgb(34, 42, 19);
`
const StyledProjects = styled.div`
    color: rgb(34, 42, 19);  
    font-size: calc(5px + 1.5vw);
    margin: vh vw;
    line-height: 15px +1vh;
`

export default function Projects(){
    return(
        <StyledMain>
            <h2> Projects </h2>
            <MainText>
                <p> Here are some of the projects I have worked on in the past with their corresponding Github links. Below that is my latest project, a calculator. </p>
            </MainText>
            <StyledProjects>
                <ul>
                    <li><p>A concert finder web application called <a href = "https://github.com/ivannadels/CS411-ConcertFinder"> Concert Compass</a>  that helps users locate concerts based on artist preferences and location using Java, Python, HTML/CSS, MongoDB, and APIs.</p></li>
                    <li><p><a href = "https://github.com/rowanwhelan/Boston-Budget-Project">Boston Budgetary Analysis Project </a> where my group observed historical trends in Boston's budget data and created expectations for the upcoming fiscal year. We successfully uncovered patterns in Boston's budget allocation and spending strategies. </p></li>
                    <li><p>A website called <a href = "">BloomBoard</a> where florists can share their arrangements and flower details with other florists. </p></li>
                </ul>
            </StyledProjects>
            <Calculator />
        </StyledMain>
    )
}
