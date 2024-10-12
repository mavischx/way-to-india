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
            ))}
        </Box>
    );
};

export default Itinerary;
