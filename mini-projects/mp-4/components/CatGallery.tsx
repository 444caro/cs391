'use client';
import { Cat } from '@/types';
import CatDisplay from './CatDisplay';
import styled from 'styled-components';


const AllCatsDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
`;



export default function CatGallery({ cats }: { cats: Cat[] }) {
  return (
    <>
    <AllCatsDiv>
      {cats.map((cat) => (
        <CatDisplay key={cat.id} cat={cat} />
      ))}
    </AllCatsDiv>
    </>
  );
}
