// src/components/TabNavigation.jsx
import React, { useState } from 'react';

interface TabNavigationProps {
    tabs: string[]; // Expecting an array of strings for the tab labels
    onTabChange: (tab: string) => void; // Expecting a function that takes a string argument (the tab)
}

const TabNavigation: React.FC<TabNavigationProps> = ({ tabs, onTabChange }) => {
    const [activeTab, setActiveTab] = useState<string>(tabs[0]);

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        onTabChange(tab);
    };

    return (
        <div className="flex border-b border-gray-300">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    className={`flex-1 p-4 text-center transition duration-300 ${activeTab === tab
                        ? 'bg-white font-bold'
                        : 'bg-heavy-metal opacity-80 text-milk-white' // Add opacity and background for non-active tabs
                        }`}
                    onClick={() => handleTabClick(tab)}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default TabNavigation;
