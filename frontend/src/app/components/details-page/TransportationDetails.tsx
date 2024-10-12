// components/TransportationDetails.tsx
import React from 'react';
import { transportation } from '@/app/details/content.dto'; // Adjust import according to your structure

const TransportationDetails = () => {
    return (
        <div>
            <h2 className="text-xl font-bold">Transportation Details</h2>
            {transportation.map((transport, index) => (
                <div key={index} className="mb-4">
                    <h3 className="text-lg">{transport.vehicleType}</h3>
                    <p>Pick up from: {transport.pickUpLocation}</p>
                    <p>Pick up time: {transport.pickUpTime}</p>
                    <p>Details: {transport.capacity}</p>
                </div>
            ))}
        </div>
    );
};

export default TransportationDetails;
