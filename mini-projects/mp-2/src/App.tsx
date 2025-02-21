import DogGallery from "./components/DogGallery.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {Dog} from "./interfaces/Dog.ts";

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px darkgoldenrod solid;
`;

export default function App() {
  const [data, setData] = useState<Dog[]>([]);

  // Fetch 5 random dog images 
  useEffect(() => {
    async function fetchRandomDogs(){
      const rawData = await fetch("https://dog.ceo/api/breeds/image/random/20");
      const results = await rawData.json();
      const formattedDogs: Dog[] = results.message.map((dog: string, index: number) => {
        const parts = dog.split("/");
        const breedParts = parts[4].split("-");
        const breed = breedParts[0];
        const subbreed = breedParts.length > 1 ? breedParts[1] : "";   //get subbreed if it exists
        return {
          id: index,
          image: dog,
          breed: breed,
          subbreed: subbreed
        }
      });
      setData(formattedDogs);
    }
    fetchRandomDogs().then(()=>console.log("dogs sucessfully fetched"))
    .catch((e)=>console.log("this happened",e));
  }, []);

  return (
    <ParentDiv>
      <h1>Random Dogs</h1>
      <DogGallery data = {data} />
    </ParentDiv>
  )
}

