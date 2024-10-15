// components/TransportationDetails.tsx
import React from 'react';
import { transportation } from '@/app/details/content.dto'; // Adjust import according to your structure
import Image from "next/image";
import Bus from "../../../../public/assets/images/bus.png"
import { User,Van,Star,Clock,MapPin} from "@phosphor-icons/react";

const TransportationDetails = () => {
    return (
        <div>

            <div className='my-4'>
                <div className="border border-gray-200 rounded-t-lg font-bold p-2 text-xs col-span-8">TRANSPORTATION INFORMATION</div>
                <div className='border border-gray-200 rounded-b-lg grid grid-cols-8 gap-2 p-2'>
                    <div className='col-span-8 text-sm '>
                        {transportation.map((transport, index) => (
                            <div>
                            <div>
                            <div className='col-span-8 flex justify-between font-bold text-xs'>
                                <div className='m-2'>Dehli to Rishikresh</div>
                                <div className='underline text-[#FF8B02]'>Change</div>
                            </div>
                            <div className='grid grid-cols-8 gap-2'>
                                <div className="col-span-2 flex items-center justify-center ">
                                    <Image
                                        src={Bus}
                                        className="w-40 h-40 rounded"
                                        alt="placeholder img"
                                    />
                                </div>
                                <div key={index} className="col-span-6 text-sm ">
                                    <div className='flex justify-between'>
                                        <div className="text-lg font-bold">transport.vehicleType</div>
                                        <div className="text-xs flex gap-1 items-center justify-center"><Star color="#fbe346" weight="fill"/>4.5 Ratings</div>
                                    </div>
                                    <div className='flex gap-1 text-xs'>
                                        <div className='border border-gray-200 rounded-lg p-1 flex gap-1 items-center justify-center'><User/>{transport.capacity} passengers</div>
                                        <div className='border border-gray-200 rounded-lg p-1 flex gap-1 items-center justify-center'><Van/>Public transport</div>
                                        <div className='border border-gray-200 rounded-lg p-1 flex gap-1 items-center justify-center'><MapPin/>Pick up from <span className='text-[#FF8B02] font-bold'>{transport.pickUpLocation}</span></div>
                                        <div className='border border-gray-200 rounded-lg p-1 flex gap-1 items-center justify-center'><Clock/>Pick up time:<span className='text-[#FF8B02] font-bold'>{transport.pickUpTime}</span></div>                   
                                    </div>
                                    <div className='font-bold text-xs my-1'>
                                        {transport.seatType}
                                    </div>
                                    <div className='text-xs my-1'>
                                        Amenities
                                    </div>
                                    <div className='border border-gray-200 rounded-lg p-1 text-xs my-1'>
                                        <div>Reclining chair - Water Bottle - Blanket pillow - Reading lamp</div>
                                    </div>
    
                                </div>
                            </div>
    
                        </div>
                        </div>
                        ))}
                        

                    </div>
                </div>

            </div>
        </div>
    );
};

export default TransportationDetails;
