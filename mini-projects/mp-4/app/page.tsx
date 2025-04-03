
import  getCats from '@/lib/getCats';
import CatGallery from '@/components/CatGallery';
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
    <CatGallery cats={cats} />
    </>
  );
}
