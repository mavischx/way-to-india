// components/Itinerary.tsx
import React from 'react';
import { itinerary } from '@/app/details/content.dto'; // Adjust import according to your structure

const Itinerary = () => {
    return (
        <div>
            <h2 className="text-xl font-bold">Itinerary Details</h2>
            <ul className="list-disc ml-5">
                {itinerary.map((item, index) => (
                    <li key={index} className="mb-2">
                        <h3 className="font-semibold">{item.day}</h3>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Itinerary;
