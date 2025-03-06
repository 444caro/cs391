import styled from 'styled-components';

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    width:70%;
    height: 100vh;
    background-color: rgb(226, 200, 167);
    padding-bottom: 0;
`
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

export default function Experience(){
    return(
        <StyledMain>
            <h2> Work Experience</h2>
            <div id = "main-text">
                <p> Below is a detailed list of my past work experiences. </p>
            </div>
            <PastExperience>
                <h3> The Flower Shop at The Pennington Market, <em>Flower Shop Assistant</em></h3>
                <ExperienceDates> NOVEMBER 2019 - MARCH 2020, JUNE 2022 - AUGUST 2022, MAY 2023 - AUGUST 2023, MAY 2024 - PRESENT </ExperienceDates>
                <ExperienceDescription> Managed multiple responsibilities including processing flower orders, providing customer service, and maintaining store cleanliness and organization.
                    Developed an understanding of floral products and customer preferences, enhancing customer satisfaction and repeat business.
                </ExperienceDescription>
            </PastExperience>
            <PastExperience>
                <h3> Boston University, <em>Grader</em></h3>
                <ExperienceDates> SEPTEMBER 2024 - DECEMBER 2024 </ExperienceDates>
                <ExperienceDescription> I was an assignment grader for the course CS332, the Theory of Computation, during the fall semester of the 2024-2025 school year.</ExperienceDescription>
            </PastExperience>
            <PastExperience>
                <h3> Brokers Abstract, <em>Administrative Assistant</em></h3>
                <ExperienceDates>JUNE 2020 - SEPTEMBER 2020 </ExperienceDates>
                <ExperienceDescription> Supported office operations through data entry, document management, and proficient use of industry-specific software including KeyStoneB2B and TitleExpress.
                    Enhanced office efficiency by streamlining the preparation and management of policy packets and other administrative tasks.
                </ExperienceDescription>
            </PastExperience>
        </StyledMain>
    )
}