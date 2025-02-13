import { useEffect, useState } from 'react'

function App() {

  const[data,setData ]=useState([]);
  useEffect(()=>{
    async function fetchData(){
      const rawData= await fetch("PLACEHOLDER");
      const {results}= await rawData.json();
      setData(results);

    }
    fetchData().then(()=>console.log("yippee"))
    .catch((e)=>console.log("this happened",e));
  },[data.length]);

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
