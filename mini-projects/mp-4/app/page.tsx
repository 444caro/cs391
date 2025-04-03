
import { Cat } from '@/types';
import  getCats from '@/lib/getCats';
import CatDisplay from '@/components/CatDisplay';
import styled from "styled-components";

export default async function Home() {
  let cats = [];
  try {
    cats = await getCats();
  } catch (error) {
    return <div>Error: {(error as Error).message}</div>;
  }

  return (
    <>
    {cats.map((cat) => (
      <CatDisplay key={cat.id} cat={cat} />
    ))}
    </>
  );
}
