import { Cat } from "@/types";
import styled from "styled-components"; 

const CatCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  margin: 16px;
`;
const CatImage = styled.img`
  max-width: 100%;
  border-radius: 8px;
`;
const CatName = styled.h2`
  font-size: 24px;
  margin: 8px 0;
`;
const CatTemperament = styled.p`
    font-size: 16px;
`

export default function CatDisplay({ cat }: { cat: Cat }) {
  return (
    <CatCard>
      <CatImage src={cat.image} alt={cat.breed} />
      <CatName>{cat.breed}</CatName>
      <CatTemperament>{cat.temperament}</CatTemperament>
    </CatCard>
  );
}