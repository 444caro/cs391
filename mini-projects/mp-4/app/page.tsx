import  getCats from '@/lib/getCats';
import CatGalleryWrapper from '@/components/CatGalleryWrapper';



export default async function Home() {
  let cats = [];
  try {
    cats = await getCats();
  } catch (error) {
    return <div>Error: {(error as Error).message}</div>;
  }

  return <CatGalleryWrapper cats={cats} />;
}
