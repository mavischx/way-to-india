// components/Itinerary.tsx
import React, { useState } from 'react';
import Image from "next/image";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Grid2 } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { itinerary } from '@/app/details/content.dto'; // Adjust import according to your structure
import Bridge from "../../../../public/assets/images/inspiration.png"
import HotelDetails from './HotelDetails';
import TransportationDetails from './TransportationDetails';

const Itinerary = () => {

    const [selectedDay, setSelectedDay] = useState(0); // Track selected day
    return (

        <Box>

            {/* <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h2 className="text-2xl font-bold">Day-Wise Itinerary</h2>
            </AccordionSummary> */}

            {/* {itinerary.map((item, index) => (
                <Accordion key={index}>

                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{`Day ${item.day}`}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="h6">{item.title}</Typography>
                        <Typography variant="body1">{item.description}</Typography>
                        <Typography variant="body1" className="font-semibold">Overnight Stay: {item.overnightStay}</Typography>
                        {item.trekDistance && (
                            <Typography variant="body2">Trek Distance: {item.trekDistance}</Typography>
                        )}
                        {item.trekTime && (
                            <Typography variant="body2">Trek Time: {item.trekTime}</Typography>
                        )}
                        {item.trekDifficulty && (
                            <Typography variant="body2">Trek Difficulty: {item.trekDifficulty}</Typography>
                        )}
                    </AccordionDetails>
                </Accordion>
            ))} */}
            <div className='grid grid-cols-12 gap-2 text-black'>
                {/* Left Column: List of Days */}
                <div className='text-black col-span-1 font-bold text-sm tracking-wider'>
                    {itinerary.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedDay(index)}
                            className={`p-2.5 cursor-pointer rounded-md flex items-center justify-center ${selectedDay === index ? 'bg-[#FF8B02] text-white' : 'bg-transparent'}`}
                        >
                            Day {item.day}
                        </div>
                    ))}
                </div>

                {/* Right Column: Details of Selected Day */}
                <div className='col-span-8'>
                    {/* plan card */}
                    <div>
                        <div className='border border-gray-200 rounded-t-lg font-bold p-2 text-xs'>PLAN OF ACTION</div>
                        <div className='border border-gray-200 rounded-b-lg grid grid-cols-8 gap-2'>
                            {/* image */}
                            <div className="col-span-2 flex items-center justify-center ">
                                <Image
                                    src={Bridge}
                                    className="w-40 h-40 rounded"
                                    alt="placeholder img"
                                />
                            </div>
                            {/* text details */}
                            <div className='col-span-6 text-sm '>
                                {selectedDay !== null && (
                                    <div className='py-3 pr-2'>
                                        <h2 className='font-bold'>{itinerary[selectedDay].title}</h2>
                                        <p>{itinerary[selectedDay].description}</p>
                                        <p><strong>Overnight Stay:</strong> {itinerary[selectedDay].overnightStay}</p>
                                        {itinerary[selectedDay].trekDistance && (
                                            <p><strong>Trek Distance:</strong> {itinerary[selectedDay].trekDistance}</p>
                                        )}
                                        {itinerary[selectedDay].trekTime && (
                                            <p><strong>Trek Time:</strong> {itinerary[selectedDay].trekTime}</p>
                                        )}
                                        {itinerary[selectedDay].trekDifficulty && (
                                            <p><strong>Trek Difficulty:</strong> {itinerary[selectedDay].trekDifficulty}</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <HotelDetails />
                    <TransportationDetails/>

                
                </div>
                

                <div className='col-span-2'>
                <div className='border border-gray-200 rounded-lg p-2 my-1'>
                    <div className='font-bold text-xs  my-1'>TRIP PRICE</div>
                    <div className='text-sm font-bold text-[#FF8B02]  my-1'>6500 per person</div>
                    <div className='text-xs  my-1'>Excluding applicable taxes</div>
                    <div className=' p-2 cursor-pointer rounded-md flex items-center justify-center bg-[#FF8B02] text-white font-bold '>Book Now</div>

                </div>
                </div>
            </div>


        </Box>

    );
};

export default Itinerary;
