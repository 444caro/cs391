import styled from "styled-components";
import {Dog} from "../interfaces/Dog.ts";


const AllDogsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: bisque;
`;

const SingleDogDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 30%;
    padding: 15px;
    margin: 10px;
    border: 3px darkred solid;
    background-color: white;
    text-align: center;
    border-radius: 10px;
`;

const DogImage = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
`;

export default function DogGallery(props:{data:Dog[]}){
    return(
        <AllDogsDiv>
            {props.data.map((dog: Dog) => (
                <SingleDogDiv key = {dog.id}>
                    <h1> {dog.breed.toUpperCase()}</h1>
                    <DogImage src={dog.image} alt={`Image of ${dog.breed}`}/>
                    {dog.subbreed && <p>Sub-breed: {dog.subbreed}</p>}

                </SingleDogDiv>
            ))}
        </AllDogsDiv>
    );
}