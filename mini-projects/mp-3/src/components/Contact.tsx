import styled from 'styled-components';
import StyledMain from './ui-components/StyledMain.tsx';
import MainText from './ui-components/MainText.tsx';
import StyledH2 from './ui-components/StyledH2.tsx';
import StyledP from './ui-components/StyledP.tsx';

const ContactContainer = styled.div`
    /* 2 column layout */
    width: 100%;
    display: flex;
    flex-direction: row;
`
const ContactInfo = styled.div`
    max-width: 25%;
`
const ContactInfoImg = styled.img`
    max-width: 75%;
    padding: 1.5vh 1.5vw;
    margin: 1vh 1vw;
`

export default function Contact(){
    return(
        <StyledMain>
            <StyledH2> Contact Information </StyledH2>
            <MainText>
                <StyledP> Below are a few different ways to get in contact with me. </StyledP>
            </MainText>
            <ContactContainer>
                <ContactInfo>
                    <ContactInfoImg src = "/email.png" alt = "Email Logo" />
                    <StyledP> <strong>Email:</strong> cjm72@bu.edu </StyledP>
                </ContactInfo>
                <ContactInfo>
                    <ContactInfoImg src = "/phone.png" alt = "Phone Logo" />
                    <StyledP> <strong>Phone:</strong> 609-555-5555 </StyledP>
                </ContactInfo>
                <ContactInfo>
                    <ContactInfoImg src = "/linkedin.png" alt = "Linkedin Logo" />
                    <StyledP> <strong>Linkedin:</strong> <a href = "https://linkedin.com/in/caroline-muscara-928b94211"> Caroline Muscara </a> </StyledP>
                </ContactInfo>
                <ContactInfo>
                    <ContactInfoImg src = "/github.png" alt = "Github Logo" />
                    <StyledP> <strong>Github:</strong> <a href = "https://github.com/444caro"> 444caro </a> </StyledP>
                </ContactInfo>
            </ContactContainer>
        </StyledMain>
    )
}