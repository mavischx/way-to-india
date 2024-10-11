// src/components/SearchSection.jsx
'use client'
import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Button, InputAdornment } from '@mui/material';
import Image from 'next/image';
import { MapPin } from '@phosphor-icons/react';
import GuestsIcon from '@/assets/icons/people_3.png'
import HotelIcon from '@/assets/icons/hotel.png'
import ScheduleIcon from '@/assets/icons/schedule.png';
import HotelTab from '@/app/components/SearchSection/HotelTab';
import ToursTab from '@/app/components/SearchSection/ToursTab';
import TransportationTab from '@/app/components/SearchSection/TransportationTab';


const SearchSection = () => {
    const [selectedTab, setSelectedTab] = useState('Buy Hotels');

    // State for search inputs
    const [location, setLocation] = useState('');
    const [hotelType, setHotelType] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(2);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        // Implement search logic based on selectedTab and inputs
        e.preventDefault();
        const searchParams = {
            location,
            hotelType,
            checkInDate,
            checkOutDate,
            rooms,
            adults,
        };
        console.log(searchParams);
        // Add your search logic here (e.g., API call)
    };

    return (
        <div className="relative w-full max-w-7xl mx-auto mt-8">
            <div className="absolute inset-0 bg-milk-white rounded-b-2xl rounded-r-2xl"></div>
            {/* Content for Hotels */}
            {selectedTab === 'Buy Hotels' && (
                <HotelTab />
            )}
            {/* Content for Tours/Package */}
            {selectedTab === 'Tours/Packages' && (
                <ToursTab />
            )}
            {/* Content for Transportation Tab  */}
            {selectedTab === 'Transportation' && (
                <TransportationTab />
            )}

            {/* Tab Bar */}
            <div className="absolute top-0 left-0 transform -translate-y-full flex rounded-t-lg overflow-hidden">
                {['Buy Hotels', 'Tours/Packages', 'Transportation'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setSelectedTab(tab)}
                        className={`px-8 py-4 font-semibold ${selectedTab === tab
                            ? 'bg-white text-gray-800'
                            : 'bg-heavy-metal bg-opacity-80 text-white'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>
        // <div className="bg-transparent shadow-lg text-heavy-metal rounded-3xl">
        //     <div className='rounded-2xl bg-heavy-metal opacity-80 w-fit'>
        //         <TabNavigation tabs={['Buy Hotels', 'Tours/Packages', 'Transportation']} onTabChange={setSelectedTab} />
        //     </div>
        //     {selectedTab === 'Buy Hotels' && (
        //         <div className="flex flex-col space-y-4 bg-milk-white rounded-2xl">
        //             <input
        //                 type="text"
        //                 placeholder="Location"
        //                 value={location}
        //                 onChange={(e) => setLocation(e.target.value)}
        //                 className="p-2 border border-gray-300 rounded"
        //             />
        //             <select
        //                 value={hotelType}
        //                 onChange={(e) => setHotelType(e.target.value)}
        //                 className="p-2 border border-gray-300 rounded"
        //             >
        //                 <option value="Standard">Standard</option>
        //                 <option value="Deluxe">Deluxe</option>
        //                 <option value="Suite">Suite</option>
        //             </select>
        //             <div className="flex space-x-4">
        //                 <input
        //                     type="date"
        //                     value={checkInDate}
        //                     onChange={(e) => setCheckInDate(e.target.value)}
        //                     className="p-2 border border-gray-300 rounded"
        //                 />
        //                 <input
        //                     type="date"
        //                     value={checkOutDate}
        //                     onChange={(e) => setCheckOutDate(e.target.value)}
        //                     className="p-2 border border-gray-300 rounded"
        //                 />
        //             </div>
        //             <div className="flex space-x-4">
        //                 <input
        //                     type="number"
        //                     value={rooms}
        //                     onChange={(e) => setRooms(Number(e.target.value))}
        //                     min="1"
        //                     className="p-2 border border-gray-300 rounded"
        //                     placeholder="Rooms"
        //                 />
        //                 <input
        //                     type="number"
        //                     value={adults}
        //                     onChange={(e) => setAdults(Number(e.target.value))}
        //                     min="1"
        //                     className="p-2 border border-gray-300 rounded"
        //                     placeholder="Adults"
        //                 />
        //             </div>

        //         </div>
        //     )}
        //     {/* Add content for other tabs here (Tours/Packages, Transportation) */}
        // </div>
    );
};

export default SearchSection;
