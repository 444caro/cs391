import styled from "styled-components";
import { Link } from 'react-router-dom';

const StyledNav = styled.nav`
    width: 30%;
    @media (max-width: 750px){
        width: 100%;
    }
    @media (min-width: 751px){
        width: 30%;
    }
`

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: rgb(125, 151, 125);
    font-size: calc(2px + 2vw);
    text-align: center;
    list-style: none;
    padding-left: 0;
    @media (max-width: 900px){
        flex-direction: row;
        justify-content: center;
    }
    @media (max-width: 750px){
        flex-direction: row;
    }
    @media (min-width: 751px){
        flex-direction: column;
    }
`
const StyledLi = styled.li`
    font-size: calc(5px + 1.5vw);
    width: 90%;
    background-color:darkolivegreen;
    padding: 2vh 0;
    margin: 5vh auto;
`

const StyledLink = styled(Link)`
    text-decoration: underline dotted;
    color: rgb(226, 200, 167);
`

export default function Nav() {
    return (
        <>
            <StyledNav>
                <StyledUl>
                    <StyledLi>
                        <StyledLink to='/'>Home</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to='/projects'>Projects</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to='/education'>Education</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to='/experience'>Experience</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to='/volunteer'>Volunteer</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to='/skills'>Skills</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to='/contact'>Contact</StyledLink>
                    </StyledLi>
                </StyledUl>
            </StyledNav>
        </>
    )
}