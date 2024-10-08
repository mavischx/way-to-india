'use client'
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:4000/api')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching API:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Welcome to the Next.js Firebase App</h1>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default HomePage;
