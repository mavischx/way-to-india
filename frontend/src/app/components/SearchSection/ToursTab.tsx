'use client'
import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Button, InputAdornment } from '@mui/material';
import Image from 'next/image';
import TripIcon from '@/assets/icons/tripIcon.png';
import GuestsIcon from '@/assets/icons/people_3.png'
import HotelIcon from '@/assets/icons/hotel.png'
import ScheduleIcon from '@/assets/icons/schedule.png'
import { MapPin } from '@phosphor-icons/react';

const ToursTab = () => {
    // State for search inputs
    const [theme, setTheme] = useState('');
    const [destination, setDestination] = useState('');
    const [hotelType, setHotelType] = useState('');
    const [dateRange, setDateRange] = useState('');
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(2);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        // Implement search logic based on selectedTab and inputs
        e.preventDefault();
        const searchParams = {
            location,
            hotelType,
            dateRange,
            rooms,
            adults,
        };
        console.log(searchParams);
        // Add your search logic here (e.g., API call)
    };
    return (
        <form onSubmit={handleSearch} className="bg-milk-white text-heavy-metal rounded-2xl overflow-hidden ">
            <div className='relative flex items-center gap-4 p-4'>
                {/* Theme Selector */}
                <div className="flex flex-1 items-center">
                    <FormControl fullWidth size='medium'>
                        <InputLabel id="theme-label">Select Theme</InputLabel>
                        <Select
                            labelId="theme-label"
                            value={theme}
                            onChange={(e) => setTheme(e.target.value)}
                            startAdornment={
                                <InputAdornment position="start">
                                    <Image src={TripIcon} alt="Trip Icon" width={32} height={32} />
                                </InputAdornment>
                            }
                            className="w-full outline-none"
                        >
                            <MenuItem value="Adventure">Adventure</MenuItem>
                            <MenuItem value="Romantic">Romantic</MenuItem>
                            <MenuItem value="Luxury">Luxury</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                {/* Destination */}
                <div className="flex-1 flex items-center">
                    <FormControl fullWidth size='medium'>
                        <InputLabel id="destination-label">Select Destination</InputLabel>
                        <Select
                            labelId="destination-label"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            startAdornment={
                                <InputAdornment position="start">
                                    <MapPin className="text-2xl text-gray-500" />
                                </InputAdornment>
                            }
                            className="w-full outline-none"
                        >
                            <MenuItem value="Orissa">Orissa Tours</MenuItem>
                            <MenuItem value="Mumbai">Mumbai</MenuItem>
                            <MenuItem value="Kerala">Kerala Tours</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                {/* Hotel Type */}
                <div className="flex-1 flex items-center">
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
                            className="w-full outline-none"
                        >
                            <MenuItem value="Standard">Standard</MenuItem>
                            <MenuItem value="Deluxe">Deluxe</MenuItem>
                            <MenuItem value="Suite">Suite</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                {/* Date Range (could be Check-in/Check-out or other date range input) */}
                <div className="flex-1 flex items-center">
                    <FormControl fullWidth>
                        <InputLabel shrink>Date Range</InputLabel>
                        <div className="border rounded-md px-3 py-4 flex items-center">
                            <Image
                                src={ScheduleIcon}
                                alt='Schedule Icon'
                                width={24}
                                height={24}
                                className="mr-2 text-gray-400"
                            />
                            <input
                                type="date"
                                value={dateRange}
                                onChange={(e) => setDateRange(e.target.value)}
                                className="w-full outline-none"
                            />
                        </div>
                    </FormControl>
                </div>
                {/* Number of Guests and Rooms */}
                <div className="flex items-center gap-4">
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
                            className="w-52 outline-none bg-transparent"
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
            </div>
        </form>
    );
};

export default ToursTab;