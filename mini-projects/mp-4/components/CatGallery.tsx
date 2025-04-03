'use client';
import { Cat } from '@/types';
import CatDisplay from './CatDisplay';

export default function CatGallery({ cats }: { cats: Cat[] }) {
  return (
    <>
      {cats.map((cat) => (
        <CatDisplay key={cat.id} cat={cat} />
      ))}
    </>
  );
}
