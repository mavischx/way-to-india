// components/HotelDetails.tsx
import React from 'react';
import Image from "next/image";
import { hotels } from '@/app/details/content.dto';
// Adjust import according to your structure
// import { hotelDets } from '@/app/details/hotelData.dto'
import Hotel from "../../../../public/assets/images/hotel.png"
import { User,ArrowsOutSimple,Star,MapPin,ForkKnife  } from "@phosphor-icons/react";

const HotelDetails = () => {
    return (

        <div className='my-4 text-sm'>
            <div className="border border-gray-200 rounded-t-lg font-bold p-2 text-xs col-span-8">HOTEL INFORMATION</div>
            <div className='border border-gray-200 rounded-b-lg col-span-8 p-2'>
                {/* text details */}
                {/* {hotels.map((hotel, index) => (
                    <div>
                        <div className='col-span-8 flex justify-between font-bold text-xs'>
                            <div className='m-2'>1 night stay in {hotel.location}</div>
                            <div className='underline text-[#FF8B02]'>Change</div>
                        </div>
                        <div className='grid grid-cols-8 gap-2'>
                            <div className="col-span-2 flex items-center justify-center ">
                                <Image
                                    src={Hotel}
                                    className="w-40 h-40 rounded"
                                    alt="placeholder img"
                                />
                            </div>
                            <div key={index} className="col-span-6 text-sm ">
                                <div className='flex justify-between'>
                                    <div className="text-lg font-bold">{hotel.name}</div>
                                    <div className="text-xs flex gap-1 items-center justify-center"><Star color="#fbe346" weight="fill"/>{hotel.rating} Ratings</div>
                                </div>
                                <div className='flex gap-1 text-xs'>
                                    <div className='border border-gray-200 rounded-lg p-1 flex gap-1 items-center justify-center'><User/>2-3 Guests</div>
                                    <div className='border border-gray-200 rounded-lg p-1 flex gap-1 items-center justify-center'><ArrowsOutSimple/>150.sq.ft</div>
                                    <div className='border border-gray-200 rounded-lg p-1'>4 stars</div>
                                    <div className='border border-gray-200 rounded-lg p-1 flex gap-1 items-center justify-center'><MapPin/>{hotel.location}</div>
                                    <div className='border border-green-500 rounded-lg p-1 text-green-400 flex gap-1 items-center justify-center'><ForkKnife/>Only Breakfast</div>
                                </div>
                                <div className='font-bold text-xs my-1'>
                                    Standard Room x 1
                                </div>
                                <div className='text-xs my-1'>
                                    Amenities
                                </div>
                                <div className='border border-gray-200 rounded-lg p-1 text-xs my-1'>
                                    <div>Comfortable bedding and linens - Private Bathroom - Hot Water - Television - Wifi-access - Desk - Wardrobe</div>
                                </div>

                            </div>
                        </div>

                    </div>
                ))} */}
                {hotels.map((hotel, index) => (
    <div key={index}>  {/* Key prop added here */}
        <div className='col-span-8 flex justify-between font-bold text-xs'>
            <div className='m-2'>1 night stay in {hotel.location}</div>
            <div className='underline text-[#FF8B02]'>Change</div>
        </div>
        <div className='grid grid-cols-8 gap-2'>
            <div className="col-span-2 flex items-center justify-center ">
                <Image
                    src={Hotel}
                    className="w-40 h-40 rounded"
                    alt="placeholder img"
                />
            </div>
            <div className="col-span-6 text-sm ">
                <div className='flex justify-between'>
                    <div className="text-lg font-bold">{hotel.name}</div>
                    <div className="text-xs flex gap-1 items-center justify-center">
                        <Star color="#fbe346" weight="fill"/>{hotel.rating} Ratings
                    </div>
                </div>
                <div className='flex gap-1 text-xs'>
                    <div className='border border-gray-200 rounded-lg p-1 flex gap-1 items-center justify-center'>
                        <User/>2-3 Guests
                    </div>
                    <div className='border border-gray-200 rounded-lg p-1 flex gap-1 items-center justify-center'>
                        <ArrowsOutSimple/>150.sq.ft
                    </div>
                    <div className='border border-gray-200 rounded-lg p-1'>4 stars</div>
                    <div className='border border-gray-200 rounded-lg p-1 flex gap-1 items-center justify-center'>
                        <MapPin/>{hotel.location}
                    </div>
                    <div className='border border-green-500 rounded-lg p-1 text-green-400 flex gap-1 items-center justify-center'>
                        <ForkKnife/>Only Breakfast
                    </div>
                </div>
                <div className='font-bold text-xs my-1'>
                    Standard Room x 1
                </div>
                <div className='text-xs my-1'>
                    Amenities
                </div>
                <div className='border border-gray-200 rounded-lg p-1 text-xs my-1'>
                    <div>Comfortable bedding and linens - Private Bathroom - Hot Water - Television - Wifi-access - Desk - Wardrobe</div>
                </div>
            </div>
        </div>
    </div>
))}

            </div>

        </div>



    );
};

export default HotelDetails;
