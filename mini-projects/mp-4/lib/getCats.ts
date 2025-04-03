import { Cat } from "@/types";

function mapCatData(cat: any): Cat {
    return {
        id: cat.id,
        image: cat.url,
        breed: cat.breeds?.[0]?.name || "Unknown",
        temperament: cat.breeds?.[0]?.temperament || "Unknown",
    };
}


export default async function getCats(): Promise<Cat[]> {
    const CAT_API_KEY = process.env.CAT_API_KEY;
    const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=12", {
    headers: {
        "x-api-key": CAT_API_KEY || "",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
    const data = await res.json();
    return data.map(mapCatData);
}