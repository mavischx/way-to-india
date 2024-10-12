// components/DetailsPage.tsx
import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material'; // Material UI for tabs if you prefer
import Itinerary from './Itinerary';
import HotelDetails from './HotelDetails';
import TransportationDetails from './TransportationDetails';
import InclusionsExclusions from './InclusionsExclusions';
import FAQs from './faq';
import BookingPolicy from './BookingDetails';
import Reviews from './Reviews';

const TabSection = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
    };

    return (
        <div className="mt-8">
            <Tabs value={selectedTab} onChange={handleTabChange}>
                <Tab label="Itinerary Details" />
                <Tab label="Hotel Details" />
                <Tab label="Transportation Details" />
                <Tab label="Inclusions & Exclusions" />
                <Tab label="General FAQ's" />
                <Tab label="Booking Policy" />
                <Tab label="Reviews" />
            </Tabs>

            {/* Conditionally render tab content based on selectedTab */}
            <div className="mt-4">
                {selectedTab === 0 && <Itinerary />}
                {selectedTab === 1 && <HotelDetails />}
                {selectedTab === 2 && <TransportationDetails />}
                {selectedTab === 3 && <InclusionsExclusions />}
                {selectedTab === 4 && <FAQs />}
                {selectedTab === 5 && <BookingPolicy />}
                {selectedTab === 6 && <Reviews />}
            </div>
        </div>
    );
};

export default TabSection;
