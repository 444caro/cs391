import styled from 'styled-components';
import StyledMain from './ui-components/StyledMain.tsx';
import MainText from './ui-components/MainText.tsx';
import StyledH2 from './ui-components/StyledH2.tsx';
import StyledP from './ui-components/StyledP.tsx';
import StyledAnchor from './ui-components/StyledAnchor.tsx';
import { useEffect } from 'react';


const HomeContainer = styled.div`
    /* 2 column layout */
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
`
const ProfileImage = styled.img`
    max-width: 100%;
    padding: 3vh 3vw;
`

export default function Home(){
    useEffect(() => {
        document.title = "Home | Resume";
    }, []);
    return(
        <StyledMain>
            <StyledH2> Home </StyledH2>
            <HomeContainer>
                <ProfileImage src = "/profile-image.jpg" alt = "Caroline Muscara Profile Picture" />
                <MainText>
                    <StyledP> My name is Caroline Muscara and I am a student at the Boston University studying computer science.</StyledP> 
                    <StyledP> I will be graduating in the spring and am currently looking for future job or internship opportunities. </StyledP>
                </MainText>

            </HomeContainer>
            <StyledP> Welcome to my website which showcases my resume, click on the links above to learn more about me. </StyledP>
            <StyledP> Feel free to check out my <StyledAnchor href = "https://linkedin.com/in/caroline-muscara-928b94211">Linkedin profile</StyledAnchor> if it interests you. </StyledP>
        </StyledMain>

    )
}
