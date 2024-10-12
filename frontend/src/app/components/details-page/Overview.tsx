// components/DetailsPage.tsx
import React, { useState } from 'react';
import Star from '@/assets/icons/Star.png';
import Image from 'next/image';
import { Clock, HandPeace, Heart, MapPin } from '@phosphor-icons/react';
import { Button } from '@mui/material';
import Export from '@/assets/icons/Export.png'

const Overview = () => {
    return (
        <div className='max-w-full ml-4 px-4'>
            <div className='w-full block inline-flex justify-between'>
                <h1 className="text-4xl font-bold text-carrot-orange mb-2">Valley of Flowers</h1>
                <Button
                    className='bg-carrot-orange rounded-xl'
                >
                    <Image src={Export} alt={'Export'} width={32} height={32} />
                </Button>
            </div>

            <div className="flex flex-wrap items-center my-4">
                <div className='rounded-xl border-2 border-carrot-orange px-1'>
                    <span className="text-carrot-orange text-md font-[500] mr-2">Trekking Tours in India</span>
                </div>
                <Image
                    src={Star}
                    alt={'Star Icon'}
                    width={20}
                    height={20}
                    className='ml-4'
                />
                <span className="ml-1 text-gray-700">4.5 Ratings</span>
            </div>

            {/* Overview details */}
            <h2 className='text-heavy-metal text-2xl font-bold'>Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-4">
                <div className='rounded-xl border-2 border-[#BABABA] '>
                    <div className='px-4 py-3'>
                        <span className="block text-gray-700 inline-flex items-center">
                            <Clock size={28} className='mr-2' />
                            Duration
                        </span>
                        <span className="block text-lg font-semibold">5 Nights/6 Days</span>
                    </div>

                </div>
                <div className='rounded-xl border-2 border-[#BABABA] '>
                    <div className='px-4 py-3'>

                        <span className="block text-gray-700 inline-flex items-center">
                            <MapPin size={28} className='mr-2' />
                            Starting From</span>
                        <span className="block text-lg font-semibold">Govindghat</span>
                    </div>
                </div>
                <div className='rounded-xl border-2 border-[#BABABA]'>
                    <div className='px-4 py-3'>
                        <span className="block text-gray-700 inline-flex items-center">
                            <Heart size={28} className='mr-2' />
                            Best Time
                        </span>
                        <span className="block text-lg font-semibold">Govindghat</span>
                    </div>
                </div>
                <div className='rounded-xl border-2 border-[#BABABA]'>
                    <div className='px-4 py-3'>
                        <span className="block text-gray-700 inline-flex items-center">
                            <HandPeace size={28} className='mr-2' />
                            Ideal For
                        </span>
                        <span className="block text-lg font-semibold">Friends/Couples</span>
                    </div>
                </div>
                <div className='rounded-xl border-2 border-[#BABABA]'>
                    <div className='px-4 py-3'>
                        <span className="block text-gray-700 inline-flex items-center">
                            <Clock size={28} className='mr-2' />
                            Cities Covering
                        </span>
                        <span className="block text-lg font-semibold">1</span>
                    </div>
                </div>
            </div>

            {/* Description Section */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">Description</h2>
                <p className="text-heavy-metal mt-2 pr-8">
                    Escape to the misty hills of Coorg, a romantic paradise. Explore lush coffee plantations, trek through verdant forests, and relax by serene waterfalls. Indulge in local cuisine and enjoy cozy evenings together. Create unforgettable memories in this idyllic honeymoon destination. Explore lush coffee plantations, trek through verdant forests, and relax by serene waterfalls. Indulge in local cuisine and enjoy cozy evenings together. Create unforgettable memories in this idyllic honeymoon destination.
                    <span className="text-orange-500 cursor-pointer"> Read more</span>
                </p>
            </div>
        </div>
    );
};

export default Overview;
