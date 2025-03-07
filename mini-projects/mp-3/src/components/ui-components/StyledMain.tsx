import styled from 'styled-components';


const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    width:70%;
    height: 100vh;
    background-color: rgb(226, 200, 167);
    padding-bottom: 0;
    
    @media (min-width: 1001px) {
        width: 70%;
    }
    @media (max-width: 750px){
        width: 100%;
    }
    @media (max-width: 900px){
        width: 100%;
    }  
`

export default StyledMain;




