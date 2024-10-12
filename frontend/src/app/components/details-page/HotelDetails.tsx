// components/HotelDetails.tsx
import React from 'react';
import { hotels } from '@/app/details/content.dto'; // Adjust import according to your structure

const HotelDetails = () => {
    return (
        <div>
            <h2 className="text-xl font-bold">Hotel Details</h2>
            {hotels.map((hotel, index) => (
                <div key={index} className="mb-4">
                    <h3 className="text-lg">{hotel.name} - {hotel.starRating} Stars</h3>
                    <p>{hotel.location}</p>
                    <p>Rating: {hotel.rating}</p>
                    <p>{hotel.description}</p>
                </div>
            ))}
        </div>
    );
};

export default HotelDetails;
