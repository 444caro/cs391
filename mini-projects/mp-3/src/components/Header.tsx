import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding: 2vh 2vw;
    background-color: darkolivegreen;
    color: rgb(226, 200, 167);
`

export default function Header() {
    return (
        <StyledHeader>
            <h1>Caroline Muscara</h1>
            <p>My Online Resume</p>
        </StyledHeader>
    );
}