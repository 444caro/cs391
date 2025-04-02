import { useEffect, useState } from 'react';

export default function Breeds() {
    const [breeds, setBreeds] = useState<any[]>([]);
    const [error, setError] = useState('');
    const [selected, setSelected] = useState('');
    const [images, setImages] = useState<any[]>([]);
    useEffect(() => {
        fetch('/api/breeds')
        .then((res) => res.json())
        .then((data) => setBreeds(data))
        .catch((err) => setError(err));
    }, []);
    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <>
        <h1>Breeds</h1>
        <ul>
            {breeds.map((breed) => (
            <li key={breed.id}>{breed.name}</li>
            ))}
        </ul>
        </>
    );
    }