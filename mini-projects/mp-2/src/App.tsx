import DogGallery from "./components/DogGallery.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {Dog} from "./interfaces/Dog.ts";



export default function App() {
  const [data, setData] = useState<Dog[]>([]);
  const [breeds, setBreeds] = useState<string[]>([]);
  const [selectedBreed, setSelectedBreed] = useState("");

  useEffect(()=>{
    async function fetchData(){
      const rawData= await fetch("PLACEHOLDER");
      const {results}= await rawData.json();
      setData(results);

    }
    fetchData().then(()=>console.log("yippee"))
    .catch((e)=>console.log("this happened",e));
  },[data.length]);

  // Fetch 5 random dog images 
  useEffect(() => {
    async function fetchRandomDogs(){
      const rawData = await fetch("");
      const {results} : {results: Dog[]} = await rawData.json();
      setData(results)
    }
    fetchRandomDogs().then(()=>console.log("dogs sucessfully fetched"))
    .catch((e)=>console.log("this happened",e));
  }, []);


  // Fetch list of all dog breeds
  useEffect(() => {
    async function fetchBreeds(){
      const rawData = await fetch("");
      const {results} : {results: Dog[]} = await rawData.json();
      const breedList = Object.keys(results);
      setBreeds(breedList);
      setSelectedBreed(breedList[0])
    }
    fetchBreeds().then(()=>console.log("dogs sucessfully fetched"))
    .catch((e)=>console.log("this happened",e));
  }, []);


  // Fetch images of the selected breed 
  useEffect(() => {
    async function fetchDogBreed(){
      if (!selectedBreed) return;
      const rawData = await fetch("");
      const {results} : {results: Dog[]} = await rawData.json();
      const selectedImages = results.slice(0,5).map((img: string, index: number)=>({
        id: index,
        image: img
      }));
      setData(selectedImages);
    }
    fetchDogBreed().then(()=>console.log("dogs sucessfully fetched"))
    .catch((e)=>console.log("this happened",e));
  }, []);




  return (
    <>
      {
        data.map((character)=>
          <BluePrint data = {character} />
        )
      }
    
    </>
  )
}

export default App
