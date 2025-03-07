import styled from 'styled-components';
import StyledP from './ui-components/StyledP';

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding: 2vh 2vw;
    background-color: darkolivegreen;
    color: rgb(226, 200, 167);
`
const StyledH1 = styled.h1`
    font-size: calc(20px + 2vw);
    letter-spacing: 0.2em;
`

export default function Header() {
    return (
        <StyledHeader>
            <StyledH1>Caroline Muscara</StyledH1>
            <StyledP>My Online Resume</StyledP>
        </StyledHeader>
    );
}