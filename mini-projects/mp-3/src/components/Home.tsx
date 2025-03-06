import styled from 'styled-components';

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    width:70%;
    height: 100vh;
    background-color: rgb(226, 200, 167);
    padding-bottom: 0;
`

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
    return(
        <StyledMain>
            <h2> Home </h2>
            <HomeContainer>
                <ProfileImage src = "images/profile-image.jpg" alt = "Caroline Muscara Profile Picture" />
                <div id = "main-text">
                    <p> My name is Caroline Muscara and I am a student at the Boston University studying computer science.</p> 
                    <p> I will be graduating in the spring and am currently looking for future job or internship opportunities. </p>
                </div>

            </HomeContainer>
            <p> Welcome to my website which showcases my resume, click on the links above to learn more about me. </p>
            <p> Feel free to check out my <a href = "https://linkedin.com/in/caroline-muscara-928b94211">Linkedin profile</a> if it interests you. </p>
        </StyledMain>

    )
}
