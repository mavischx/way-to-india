// components/Itinerary.tsx
import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { itinerary } from '@/app/details/content.dto'; // Adjust import according to your structure

const Itinerary = () => {
    return (
        <Box>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h2 className="text-2xl font-bold">Day-Wise Itinerary</h2>
            </AccordionSummary>

            {itinerary.map((item, index) => (
                <Accordion key={index}>

                    <Typography>{`Day ${item.day}`}</Typography>

                    <AccordionDetails>
                        <Typography>{item.title}</Typography> //m
                        <Typography>
                            <p>{item.description}</p>
                            <p className="font-semibold">Overnight Stay: {item.overnightStay}</p>
                            {item.trekDistance && <p>Trek Distance: {item.trekDistance}</p>}
                            {item.trekTime && <p>Trek Time: {item.trekTime}</p>}
                            {item.trekDifficulty && <p>Trek Difficulty: {item.trekDifficulty}</p>}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};

export default Itinerary;
