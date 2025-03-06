import styled from 'styled-components';

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    width:70%;
    height: 100vh;
    background-color: rgb(226, 200, 167);
    padding-bottom: 0;
`
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
            <h2> Contact Information </h2>
            <div id = "main-text">
                <p> Below are a few different ways to get in contact with me. </p>
            </div>
            <ContactContainer>
                <ContactInfo>
                    <ContactInfoImg src = "assets/email.png" alt = "Email Logo" />
                    <p> <strong>Email:</strong> cjm72@bu.edu </p>
                </ContactInfo>
                <ContactInfo>
                    <ContactInfoImg src = "assets/phone.png" alt = "Phone Logo" />
                    <p> <strong>Phone:</strong> 609-555-5555 </p>
                </ContactInfo>
                <ContactInfo>
                    <ContactInfoImg src = "assets/linkedin.png" alt = "Linkedin Logo" />
                    <p> <strong>Linkedin:</strong> <a href = "https://linkedin.com/in/caroline-muscara-928b94211"> Caroline Muscara </a> </p>
                </ContactInfo>
                <ContactInfo>
                    <ContactInfoImg src = "assets/github.png" alt = "Github Logo" />
                    <p> <strong>Github:</strong> <a href = "https://github.com/444caro"> 444caro </a> </p>
                </ContactInfo>
            </ContactContainer>
        </StyledMain>
    )
}