'use client'
import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Button, InputAdornment } from '@mui/material';
import Image from 'next/image';
import { MapPin } from '@phosphor-icons/react';
import GuestsIcon from '@/assets/icons/people_3.png'
import HotelIcon from '@/assets/icons/hotel.png'
import ScheduleIcon from '@/assets/icons/schedule.png'

const TransportationTab = () => {
    const [selectedTab, setSelectedTab] = useState('Buy Hotels');

    // State for search inputs
    const [location, setLocation] = useState('');
    const [hotelType, setHotelType] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(2);

    const handleSearch = (e: any) => {
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
        <div>
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
                <Image
                    src={ScheduleIcon}
                    alt='Schedule Icon'
                    width={24}
                    height={24}
                    className="text-gray-400"
                />
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
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (!isNaN(Number(value))) {
                                        setAdults(Number(value));
                                    }
                                }}
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
        </div>
    );
};


export default TransportationTab;