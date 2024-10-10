// src/components/SearchSection.jsx
'use client'
import React, { useState } from 'react';
import TabNavigation from './TabNavigation';

const SearchSection = () => {
    const [selectedTab, setSelectedTab] = useState('Buy Hotels');

    // State for search inputs
    const [location, setLocation] = useState('');
    const [roomType, setRoomType] = useState('Standard');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(2);

    const handleSearch = () => {
        // Implement search logic based on selectedTab and inputs
        console.log('Searching for:', {
            selectedTab,
            location,
            roomType,
            checkInDate,
            checkOutDate,
            rooms,
            adults,
        });
        // Add your search logic here (e.g., API call)
    };

    return (
        <div className="bg-white shadow-md text-heavy-metal rounded-3xl">
            <TabNavigation tabs={['Buy Hotels', 'Tours/Packages', 'Transportation']} onTabChange={setSelectedTab} />
            {selectedTab === 'Buy Hotels' && (
                <div className="flex flex-col space-y-4">
                    <input
                        type="text"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="p-2 border border-gray-300 rounded"
                    />
                    <select
                        value={roomType}
                        onChange={(e) => setRoomType(e.target.value)}
                        className="p-2 border border-gray-300 rounded"
                    >
                        <option value="Standard">Standard</option>
                        <option value="Deluxe">Deluxe</option>
                        <option value="Suite">Suite</option>
                    </select>
                    <div className="flex space-x-4">
                        <input
                            type="date"
                            value={checkInDate}
                            onChange={(e) => setCheckInDate(e.target.value)}
                            className="p-2 border border-gray-300 rounded"
                        />
                        <input
                            type="date"
                            value={checkOutDate}
                            onChange={(e) => setCheckOutDate(e.target.value)}
                            className="p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="flex space-x-4">
                        <input
                            type="number"
                            value={rooms}
                            onChange={(e) => setRooms(Number(e.target.value))}
                            min="1"
                            className="p-2 border border-gray-300 rounded"
                            placeholder="Rooms"
                        />
                        <input
                            type="number"
                            value={adults}
                            onChange={(e) => setAdults(Number(e.target.value))}
                            min="1"
                            className="p-2 border border-gray-300 rounded"
                            placeholder="Adults"
                        />
                    </div>
                    <button onClick={handleSearch} className="bg-carrot-orange text-white p-2 rounded">
                        Search
                    </button>
                </div>
            )}
            {/* Add content for other tabs here (Tours/Packages, Transportation) */}
        </div>
    );
};

export default SearchSection;
