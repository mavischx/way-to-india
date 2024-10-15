// components/DetailsPage.tsx
'use client'
import React, { useState } from 'react';
import BreadcrumbNav from '@/app/components/details-page/Breadcrumb-Nav';
import ImageGallery from '@/app/components/details-page/ImageGallery';
import Overview from '@/app/components/details-page/Overview';
import TabSection from '@/app/components/details-page/Tab';
import NavBar from '../components/NavBar';

const DetailsPage = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event: React.ChangeEvent<HTMLElement>, newValue: number) => {
        setSelectedTab(newValue);
    };

    return (
        <section className='relative min-h-screen text-black'>
            <NavBar />
            <div className="container mx-auto py-4 px-[5%] mt-4">
                {/* Breadcrumb Navigation */}
                <BreadcrumbNav />
                {/* Main Content Section */}
                <div className="flex flex-row gap-4 mt-8">
                    {/* Image Gallery */}
                    <div className='w-1/2'>
                        <ImageGallery />
                    </div>
                    {/* < ImageGallery /> */}
                    {/* Overview Section */}
                    <div className='w-1/2'>
                        <Overview />
                    </div>
                    {/* <Overview /> */}
                </div >
                {/* Tabs Section */}
                < TabSection />
            </div >
        </section >

    );
};

export default DetailsPage;
