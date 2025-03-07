import styled from 'styled-components';
import StyledMain from './ui-components/StyledMain.tsx';
import MainText from './ui-components/MainText.tsx';
import StyledH2 from './ui-components/StyledH2.tsx';
import StyledP from './ui-components/StyledP.tsx';
import { useEffect } from 'react';

const PastExperience = styled.div`
    margin: 1vh 1vw;
    padding: 1.5vh 1.5vw;
    border: 2px solid darkolivegreen;
`
const ExperienceDates = styled.div`
    color: rgb(78, 96, 79);
    letter-spacing: 0.1em;
    margin: 1vh 1vw;
    padding: 1vh 1vw;
    text-align: center;
    font-size: calc(2px + 1.4vw);
`
const ExperienceDescription = styled.div`
    color: rgb(34, 42, 19);
    margin: 1vh 0;
    padding: 0;
    font-size: calc(3px + 1.4vw);
`
const StyledH3 = styled.h3`
    color: rgb(34, 42, 19);
    font-size: calc(7px + 1.5vw);
`

export default function Experience(){
    useEffect(() => {
        document.title = "Experience | Resume";
    }, []);
    return(
        <StyledMain>
            <StyledH2> Work Experience</StyledH2>
            <MainText>
                <StyledP> Below is a detailed list of my past work experiences. </StyledP>
            </MainText>
            <PastExperience>
                <StyledH3> The Flower Shop at The Pennington Market, <em>Flower Shop Assistant</em></StyledH3>
                <ExperienceDates> NOVEMBER 2019 - MARCH 2020, JUNE 2022 - AUGUST 2022, MAY 2023 - AUGUST 2023, MAY 2024 - PRESENT </ExperienceDates>
                <ExperienceDescription> Managed multiple responsibilities including processing flower orders, providing customer service, and maintaining store cleanliness and organization.
                    Developed an understanding of floral products and customer preferences, enhancing customer satisfaction and repeat business.
                </ExperienceDescription>
            </PastExperience>
            <PastExperience>
                <StyledH3> Boston University, <em>Grader</em></StyledH3>
                <ExperienceDates> SEPTEMBER 2024 - DECEMBER 2024 </ExperienceDates>
                <ExperienceDescription> I was an assignment grader for the course CS332, the Theory of Computation, during the fall semester of the 2024-2025 school year.</ExperienceDescription>
            </PastExperience>
            <PastExperience>
                <StyledH3> Brokers Abstract, <em>Administrative Assistant</em></StyledH3>
                <ExperienceDates>JUNE 2020 - SEPTEMBER 2020 </ExperienceDates>
                <ExperienceDescription> Supported office operations through data entry, document management, and proficient use of industry-specific software including KeyStoneB2B and TitleExpress.
                    Enhanced office efficiency by streamlining the preparation and management of policy packets and other administrative tasks.
                </ExperienceDescription>
            </PastExperience>
        </StyledMain>
    )
}