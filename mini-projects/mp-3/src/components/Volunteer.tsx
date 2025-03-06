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


export default function Volunteer(){
    return(
        <StyledMain>
            <h2> Volunteer Experience</h2>
            <div id = "main-text">
                <p> Below is a detailed list of my past volunteering experiences. </p>
            </div>
            <PastExperience>
                <h3> Maximo Nivel Sea Turtle Conservation, <em>Volunteer</em></h3>
                <ExperienceDates> JUNE 2019 - JULY 2019 </ExperienceDates>
                <ExperienceDescription> Led the construction of a turtle hatchery and contributed to the preservation of local wildlife as part of a volunteer team.
                    Designed and painted a mural to enhance the visual appeal and educational value of the conservation site.
                </ExperienceDescription>
            </PastExperience>
            <PastExperience>
                <h3> Dog Walker and Sitter for the Pennington, NJ Area, <em>Volunteer</em></h3>
                <ExperienceDates> MAY 2018 - DECEMBER 2018 </ExperienceDates>
                <ExperienceDescription> Provided comprehensive pet care services including walking, feeding, and engaging in play, ensuring high levels of pet well-being.
                    Managed pet care schedules and responsibilities, demonstrating reliability and dedication to animal care.
                </ExperienceDescription>
            </PastExperience>
            <PastExperience>
                <h3> Unicorn Therapeutic Riding, <em>Volunteer</em></h3>
                <ExperienceDates> SEPTEMBER 2017 - MAY 2018 </ExperienceDates>
                <ExperienceDescription> Volunteered at a non-profit organization focused on equine therapy, aiding in the development of equestrian skills for individuals with disabilities.
                    Supported program activities and assisted participants in achieving greater independence through therapeutic riding skills.
                </ExperienceDescription>
            </PastExperience>
        </StyledMain>    
        
    )
}
