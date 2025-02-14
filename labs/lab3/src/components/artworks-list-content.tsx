import { useState } from 'react';
import { useEffect } from 'react';
import {Artwork} from '../types';
import {styled} from "styled-components";

const ArtworkPreviewDiv = styled.div`
    margin: 3rem;
    padding: 1rem;
    width: 20rem;
    background-color: lightblue;
`;

const ArtworkPreview = ({artwork}: {artwork:Artwork})=>{
    return(
        <ArtworkPreviewDiv>
            <h3> {artwork.title} </h3>
            <p> {artwork.place_of_origin} </p>
            <p> {artwork.medium_display} </p>
        </ArtworkPreviewDiv>

    )


}


export default function ArtworksListContent(){
    const [numArtworks, setNumArtworks] = useState(5)
    const [artworks, setArtworks] = useState<Artwork[]>([]);
    
    useEffect(()=>{
        async function getArtworks(){
            const res = await fetch(`https://api.artic.edu/api/v1/artworks?limit=${numArtworks}`);
            const data = await res.json();
            setArtworks(data.data);
        }
        getArtworks();

    })
    
    
    
    return(
        <div>
            <h2>Artworks</h2>
            <input type ="number" placeholder = "Number of artworks" value = {numArtworks} onChange={(e)=>setNumArtworks(Number(e.target.value))}/>
            <p> numArtworks: {numArtworks}</p>
            <div>
                {
                    artworks.map(
                        (a)=>{
                            return(
                                <ArtworkPreview artwork={a}/>
                            )
                        }
                    )
                }
            </div>
        </div>

    );
}

