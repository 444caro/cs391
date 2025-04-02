import { useEffect, useState} from 'react';

export default function Home() {
  const [cats, setCats] = useState<any[]>([]);
  const [error, setError] = useState('');
  useEffect(() => {
    fetch('/api/cats')
      .then((res) => res.json())
      .then((data) => setCats(data))
      .catch((err) => setError(err));
  }, []);
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
    </>
  );
}
