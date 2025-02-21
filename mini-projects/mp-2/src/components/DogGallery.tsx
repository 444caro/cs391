import styled from "styled-components";
import {Dog} from "../interfaces/Dog.ts";


const AllDogsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
`;

const SingleDogDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 30%;
    padding: 15px;
    margin: 10px;
    border: 5px darkred solid;
    background-color: lightgoldenrodyellow;
    text-align: center;
    border-radius: 10px;
`;

const DogImage = styled.img`
    width: 95%;
    max-width: 95%;
    height: auto;
    aspect-ratio: 1/1;
    object-fit: cover;
    display: block;
    border-radius: 10px;
`;

const StyledH2 = styled.h2`
    min-width: 25%;
    max-width: 100%;
`;

export default function DogGallery(props:{data:Dog[]}){
    return(
        <AllDogsDiv>
            {props.data.map((dog: Dog) => (
                <SingleDogDiv key = {dog.id}>
                    <StyledH2> {dog.breed.toUpperCase()}</StyledH2>
                    <DogImage src={dog.image} alt={`Image of ${dog.breed}`}/>
                    {dog.subbreed && <p>Sub-breed: {dog.subbreed.toUpperCase()}</p>}
                </SingleDogDiv>
            ))}
        </AllDogsDiv>
    );
}