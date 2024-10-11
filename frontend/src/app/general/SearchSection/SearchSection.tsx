// src/components/SearchSection.jsx
'use client'
import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Button, InputAdornment } from '@mui/material';
import Image from 'next/image';
import TabNavigation from '../../components/SearchSection/TabNavigation';
import { MapPin } from '@phosphor-icons/react';
import GuestsIcon from '@/assets/icons/people_3.png'
import HotelIcon from '@/assets/icons/hotel.png'
import ScheduleIcon from '@/assets/icons/schedule.png';
import HotelTab from '@/app/components/SearchSection/HotelTab';
import ToursTab from '@/app/components/SearchSection/HotelTab';
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
            <form onSubmit={handleSearch} className="relative flex items-center bg-milk-white text-heavy-metal rounded-2xl overflow-hidden">
                <div className="flex flex-1 items-center space-x-4 p-4 relative">
                    <FormControl fullWidth>
                        <InputLabel id="location-label">Select Destination</InputLabel>
                        <Select
                            labelId="location-label"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            startAdornment={
                                <InputAdornment position="start">
                                    <MapPin className="text-2xl text-gray-500" />
                                </InputAdornment>
                            }
                            className="w-full outline-none"
                        >
                            {/* Placeholder value */}
                            <MenuItem value="Orissa">Orissa Tours</MenuItem>
                            <MenuItem value="Mumbai">Mumbai</MenuItem>
                            <MenuItem value="Kerala">Kerala Tours</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="flex-1 flex items-center space-x-4 p-4 border-l border-gray-300">
                    <FormControl fullWidth>
                        <InputLabel id="hotel-type-label">Select Hotel Type</InputLabel>
                        <Select
                            labelId="hotel-type-label"
                            value={hotelType}
                            onChange={(e) => setHotelType(e.target.value)}
                            startAdornment={
                                <InputAdornment position="start">
                                    <Image src={HotelIcon} alt="Hotel Icon" width={32} height={32} />
                                </InputAdornment>
                            }
                            className="w-full outline-none bg-transparent"
                        >
                            <MenuItem value="Standard">Standard</MenuItem>
                            <MenuItem value="Deluxe">Deluxe</MenuItem>
                            <MenuItem value="Suite">Suite</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="flex-1 flex items-center space-x-4 p-4 border-l border-gray-300">
                    <Image
                        src={ScheduleIcon}
                        alt='Schedule Icon'
                        width={24}
                        height={24}
                        className="text-gray-400" />
                    <input
                        type="date"
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                        className="w-full outline-none"
                    />
                </div>
                <div className="flex-1 flex items-center space-x-4 p-4 border-l border-gray-300">
                    <Image
                        src={ScheduleIcon}
                        alt='Schedule Icon'
                        width={24}
                        height={24}
                        className="text-gray-400" />
                    <input
                        type="date"
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
                        className="w-full outline-none"
                    />
                </div>
                <div className="flex-1 flex items-center space-x-4 p-4 border-l border-gray-300">

                    <FormControl fullWidth>
                        <InputLabel id="adults-label">Number of Guests</InputLabel>
                        <Select
                            labelId="adults-label"
                            value={adults}
                            onChange={(e) => setAdults(1)} //TODO
                            startAdornment={
                                <InputAdornment position="start">
                                    <Image src={GuestsIcon} alt="Guests Icon" width={40} height={40} />
                                </InputAdornment>
                            }
                            className="w-full outline-none bg-transparent"
                        >
                            {/* Rooms Selector */}
                            <FormControl fullWidth>
                                <InputLabel id="rooms-label">Number of Rooms</InputLabel>
                                <Select
                                    labelId="rooms-label"
                                    value={rooms}
                                    onChange={(e) => setRooms(Number(e.target.value))} // Ensure it's a number
                                    className="w-full outline-none bg-transparent"
                                >
                                    <MenuItem value={1}>1 Room</MenuItem>
                                    <MenuItem value={2}>2 Rooms</MenuItem>
                                    <MenuItem value={3}>3 Rooms</MenuItem>
                                </Select>
                            </FormControl>

                            {/* Adults Selector */}
                            <FormControl fullWidth>
                                <InputLabel id="adults-label">Number of Adults</InputLabel>
                                <Select
                                    labelId="adults-label"
                                    value={adults}
                                    onChange={(e) => setAdults(Number(e.target.value))} // Ensure it's a number
                                    className="w-full outline-none bg-transparent"
                                >
                                    <MenuItem value={1}>1 Adult</MenuItem>
                                    <MenuItem value={2}>2 Adults</MenuItem>
                                    <MenuItem value={3}>3 Adults</MenuItem>
                                    <MenuItem value={4}>4 Adults</MenuItem>
                                </Select>
                            </FormControl>
                        </Select>
                    </FormControl>
                </div>
                <Button type="submit" className="bg-carrot-orange rounded-lg text-white px-8 py-4 mx-2 font-bold hover:bg-orange-600 transition duration-300">
                    SEARCH
                </Button>
            </form>
            {/* Content for Tours/Package */}
            {selectedTab === 'Tours/Packages' && (
                <>
                    {/* <ToursTab /> */}
                </>
            )}
            {/* Content for Transportation Tab  */}
            {selectedTab === 'Transportation' && (
                <div>
                    {/* <TransportationTab /> */}
                </div>
            )}
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
