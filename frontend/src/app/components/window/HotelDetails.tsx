// components/HotelDetails.tsx
import React, { useState } from 'react';
import { Box, Button, Drawer, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { hotels, HotelDetailsType } from '@/app/details/hotelData.dto'; // Import the correct type
import Image from 'next/image';
import hotelImg from '@/assets/images/hotel.png'

interface RoomCardProps {
    title: string;
    capacity: string;
    size: string;
    description: string;
    amenities: string[];
    price: number;
}

const RoomCard: React.FC<RoomCardProps> = ({ title, capacity, size, description, amenities, price }) => {
    return (
        <div className="border border-gray-300 rounded-lg p-4 my-2">
            <div className='flex flex-row'>
                <div className='w-1/3'>
                    <Image src={hotelImg} alt={'Hotel'} />
                </div>
                <div className='w-2/3'>
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-sm text-gray-500">{capacity} | {size}</p>
                    <p className="mt-2">{description}</p>
                    <h4 className="font-semibold mt-2">AMENITIES</h4>
                    <ul className="list-disc pl-5">
                        {amenities.map((amenity, index) => (
                            <li key={index} className="text-sm">{amenity}</li>
                        ))}
                    </ul>
                </div>

            </div>

            <div className="flex justify-between items-center mt-4">
                <div>
                    <span className="text-lg font-bold">₹{price}</span>
                    <span className="text-sm text-gray-500"> per room for 1 night (excluding tax)</span>
                </div>
                <Button variant="contained" color="primary">
                    Select Room
                </Button>
            </div>
        </div>
    );
};

const HotelDetails = () => {
    const rooms = [
        {
            title: 'Standard Room',
            capacity: '2-3 Guests',
            size: '150 sq.ft',
            description: "Sherpa Hotel's standard rooms in Rishikesh offer a comfortable and cozy retreat. Enjoy a peaceful night's sleep in a well-appointed space featuring modern amenities.",
            amenities: [
                'Comfortable bedding and linens',
                'Private Bathroom',
                'Hot Water',
                'Television',
                'Wifi-access',
                'Desk',
                'Wardrobe',
            ],
            price: 2500,
        },
        {
            title: 'Standard Room with Balcony',
            capacity: '2-3 Guests',
            size: '175 sq.ft',
            description: "Sherpa Hotel's standard rooms in Rishikesh offer a comfortable and cozy retreat. Enjoy a peaceful night's sleep in a well-appointed space featuring modern amenities.",
            amenities: [
                'Comfortable bedding and linens',
                'Private Bathroom',
                'Hot Water',
                'Television',
                'Wifi-access',
                'Desk',
                'Wardrobe',
            ],
            price: 3500,
        },
    ];

    return (
        <div>
            {rooms.map((room, index) => (
                <RoomCard key={index} {...room} />
            ))}
        </div>
    );
}
export default HotelDetails;
