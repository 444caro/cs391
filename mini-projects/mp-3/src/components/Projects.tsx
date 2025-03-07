import styled from 'styled-components';
import StyledMain from './ui-components/StyledMain.tsx';
import MainText from './ui-components/MainText.tsx';
import StyledH2 from './ui-components/StyledH2.tsx';
import StyledP from './ui-components/StyledP.tsx';
import StyledAnchor from './ui-components/StyledAnchor.tsx';
import Calculator from './Calculator';


const StyledProjects = styled.div`
    color: rgb(34, 42, 19);  
    font-size: calc(5px + 1.5vw);
    margin: 1vh 1vw;
    line-height: calc(15px +1vh);
`

export default function Projects(){
    return(
        <StyledMain>
            <StyledH2> Projects </StyledH2>
            <MainText>
                <StyledP> Here are some of the projects I have worked on in the past with their corresponding Github links. Below that is my latest project, a calculator. </StyledP>
            </MainText>
            <StyledProjects>
                <ul>
                    <li><StyledP>A concert finder web application called <StyledAnchor href = "https://github.com/ivannadels/CS411-ConcertFinder"> Concert Compass</StyledAnchor>  that helps users locate concerts based on artist preferences and location using Java, Python, HTML/CSS, MongoDB, and APIs.</StyledP></li>
                    <li><StyledP><StyledAnchor href = "https://github.com/rowanwhelan/Boston-Budget-Project">Boston Budgetary Analysis Project </StyledAnchor> where my group observed historical trends in Boston's budget data and created expectations for the upcoming fiscal year. We successfully uncovered patterns in Boston's budget allocation and spending strategies. </StyledP></li>
                    <li><StyledP>A website called <StyledAnchor href = "">BloomBoard</StyledAnchor> where florists can share their arrangements and flower details with other florists. </StyledP></li>
                </ul>
            </StyledProjects>
            <Calculator />
        </StyledMain>
    )
}
