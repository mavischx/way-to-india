// components/HotelTabs.tsx
import { Button, IconButton } from '@mui/material';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import React from 'react';

const WindowTabs = () => {
    return (
        <div className="flex items-center justify-between my-4">
            <IconButton
                size="small"
                color="primary"
                // onClick={() => router.push("/#timeline")}
                className="border-2 border-carrot-orange text-carrot-orange hover:scale-110 transition-transform duration-300"
                edge="start"
                aria-label="back to home"
            >
                <ArrowLeft size={24} />
            </IconButton>


            <div className="flex overflow-x-auto">
                <Button variant="contained" className="mx-2 bg-carrot-orange font-bold">
                    Sherpa Hotel
                </Button>
                <Button variant="text" className="mx-2" style={{ color: '#FFA500' }}>
                    Hotel Lotus Pearl
                </Button>
                <Button variant="text" className="mx-2" style={{ color: '#FFA500' }}>
                    Grand Plaza Hotel
                </Button>
                <Button variant="text" className="mx-2" style={{ color: '#FFA500' }}>
                    Marriott
                </Button>
            </div>

            <IconButton
                size="small"
                color="primary"
                // onClick={() => router.push("/#timeline")}
                className="border-2 border-carrot-orang text-carrot-orange hover:scale-110 transition-transform duration-300"
                edge="start"
                aria-label="back to home"
            >
                <ArrowRight size={24} />
            </IconButton>
        </div>
    );
};

export default WindowTabs;
