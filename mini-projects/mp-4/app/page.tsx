import  getCats from '@/lib/getCats';
import CatGallery from '@/components/CatGallery';
import Nav from '@/components/Nav';


export default async function Home() {
  let cats = [];
  try {
    cats = await getCats();
  } catch (error) {
    return <div>Error: {(error as Error).message}</div>;
  }
  return (
    
    <div className = "page-wrapper">
      <Nav />
      <h1> Cat Gallery </h1>
      <CatGallery cats={cats} />
    </div>
  );
}
