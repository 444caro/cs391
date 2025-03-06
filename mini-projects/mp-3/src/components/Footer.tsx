import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color: darkolivegreen;
    color: rgb(226, 200, 167);
    text-align: center;
    padding: 1vh 1vw;
    display: flex;
    justify-content: space-evenly;
`

export default function Footer() {
    return (
        <StyledFooter>
            <p> All Rights Reserved by Caroline Muscara <a href = "credits.html"> Credits</a> &copy;</p>
        </StyledFooter>
    )
}