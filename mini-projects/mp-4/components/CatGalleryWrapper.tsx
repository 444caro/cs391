'use client';
import { Cat } from '@/types';
import CatGallery from './CatGallery';
import styled from 'styled-components';


const ParentDiv = styled.div`
  width: 80vw;
  margin: auto;
  border: 10px rgb(168,153,138) solid;
  background-color: rgb(214,205,197);
  border-radius: 10px;
`;

const StyledH1 = styled.h1`
  font-family: Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif;
  font-size: calc(2em + 4vw);
  letter-spacing: 0.1em;
  text-align: center;
  color: rgb(239,235,231);
  background-color: rgb(138,153,168);
  margin: 2vw;
  padding: 2vw;
  border: 5px rgb(168,153,138) solid;
  border-radius: 10px;
`;
const StyledNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
`;
const StyledLink = styled.a`
  font-family: Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif;
  font-size: calc(0.2em + 2vw);
  color: rgb(168,153,138);
  font-weight: bold;
`;


export default function CatGalleryWrapper({ cats }: { cats: Cat[] }) {
  return (
    <ParentDiv>
        <StyledNav>
            <StyledLink href="/">Home</StyledLink>
            <StyledLink href="/about">About</StyledLink>
        </StyledNav>
        <StyledH1>Cat Gallery</StyledH1>
        <CatGallery cats={cats} />
    </ParentDiv>
  );
}
