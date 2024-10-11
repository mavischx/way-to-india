'use client'
import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Button, InputAdornment } from '@mui/material';
import Image from 'next/image';
import { MapPin } from '@phosphor-icons/react';
import GuestsIcon from '@/assets/icons/people_3.png'
import ScheduleIcon from '@/assets/icons/schedule.png'
import TruckIcon from '@/assets/icons/truck.png'

const TransportationTab = () => {
    // State for search inputs
    const [transportType, setTransportType] = useState('');
    const [destinationTo, setDestinationTo] = useState('');
    const [destinationFrom, setDestinationFrom] = useState('');
    const [dateRange, setDateRange] = useState('');
    const [adults, setAdults] = useState(2);
    const [kids, setKids] = useState(0);

    const handleSearch = (e: any) => {
        // Implement search logic based on inputs
        e.preventDefault();
        const searchParams = {
            transportType,
            destinationTo,
            destinationFrom,
            dateRange,
            adults,
            kids
        };
        console.log(searchParams);
        // Add your search logic here (e.g., API call)
    };
    return (
        <form onSubmit={handleSearch} className="bg-milk-white text-heavy-metal rounded-2xl overflow-hidden ">
            <div className='relative flex items-center gap-4 p-4'>
                {/* Transport Type */}
                <div className="flex flex-1 items-center">
                    <FormControl fullWidth size='medium'>
                        <InputLabel id="transport-type-label">Select Transport Type</InputLabel>
                        <Select
                            labelId="transport-type-label"
                            value={transportType}
                            onChange={(e) => setTransportType(e.target.value)}
                            startAdornment={
                                <InputAdornment position="start">
                                    <Image
                                        src={TruckIcon}
                                        alt='Truck Icon'
                                        width={24}
                                        height={24}
                                        className="mr-2 text-gray-400"
                                    />
                                </InputAdornment>
                            }
                            className="w-full outline-none"
                        >
                            <MenuItem value="Flight">Flight</MenuItem>
                            <MenuItem value="Bus">Bus</MenuItem>
                            <MenuItem value="Train">Train</MenuItem>
                            <MenuItem value="Car">Car</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                {/* Destination From */}
                <div className="flex-1 flex items-center">
                    <FormControl fullWidth size='medium'>
                        <InputLabel id="destination-from-label">From</InputLabel>
                        <Select
                            labelId="destination-from-label"
                            value={destinationFrom}
                            onChange={(e) => setDestinationFrom(e.target.value)}
                            startAdornment={
                                <InputAdornment position="start">
                                    <MapPin className="text-2xl text-gray-500" />
                                </InputAdornment>
                            }
                            className="w-full outline-none"
                        >
                            <MenuItem value="Delhi">Delhi</MenuItem>
                            <MenuItem value="Mumbai">Mumbai</MenuItem>
                            <MenuItem value="Chennai">Chennai</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                {/* Destination To */}
                <div className="flex-1 flex items-center">
                    <FormControl fullWidth size='medium'>
                        <InputLabel id="destination-to-label">To</InputLabel>
                        <Select
                            labelId="destination-to-label"
                            value={destinationTo}
                            onChange={(e) => setDestinationTo(e.target.value)}
                            startAdornment={
                                <InputAdornment position="start">
                                    <MapPin className="text-2xl text-gray-500" />
                                </InputAdornment>
                            }
                            className="w-full outline-none"
                        >
                            <MenuItem value="Goa">Goa</MenuItem>
                            <MenuItem value="Kerala">Kerala</MenuItem>
                            <MenuItem value="Jaipur">Jaipur</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                {/* Date Range */}
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
                {/* Number of Adults */}
                {/* Number of Kids */}
                <div className="flex items-center gap-4">
                </div>
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
                            {/* Kids Selector */}
                            <FormControl fullWidth>
                                <InputLabel id="adults-label">Number of Adults</InputLabel>
                                <Select
                                    labelId="kids-label"
                                    value={kids}
                                    onChange={(e) => setKids(Number(e.target.value))}
                                    className="w-full outline-none bg-transparent"
                                >
                                    <MenuItem value={0}>0 Kids</MenuItem>
                                    <MenuItem value={1}>1 Kid</MenuItem>
                                    <MenuItem value={2}>2 Kids</MenuItem>
                                    <MenuItem value={3}>3 Kids</MenuItem>
                                </Select>
                            </FormControl>
                        </Select>
                    </FormControl>
                </div>
                <Button type="submit" className="bg-carrot-orange rounded-lg text-white px-8 py-4 mx-2 font-bold hover:bg-orange-600 transition duration-300">
                    SEARCH
                </Button>
            </div>
        </form >
    );
};


export default TransportationTab;