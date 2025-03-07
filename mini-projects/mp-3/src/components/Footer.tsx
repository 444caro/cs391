import styled from 'styled-components';
import StyledP from './ui-components/StyledP.tsx';
import { Link } from 'react-router-dom';

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
            <StyledP> All Rights Reserved by Caroline Muscara <Link to={'/credits'}> Credits</Link> &copy;</StyledP>
        </StyledFooter>
    )
}