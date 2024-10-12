import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image"
import IndianHeritage from "@/assets/images/indian_building_scene.png"
import SearchSection from "@/app/general/SearchSection";

const HeroPage = () => {
    return (
        <div className="relative h-[800px] w-full overflow-hidden">
            {/* Orange overlay div */}
            <div>
                <div className="absolute inset-0 bg-carrot-orange opacity-20 z-10" />
                {/* Image component */}
                <Image
                    src={IndianHeritage}
                    alt="Indian Heritage"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                    className="z-0"
                />
            </div>

            {/* Content overlay */}
            <div className="relative z-20 flex flex-col items-start justify-center h-full p-10">
                {/* Heading text */}
                <h2 className="text-6xl font-limeLight font-bold text-white mb-4 ml-[5rem]">
                    Come, Explore the incredible land
                </h2>
                {/* Search Section */}
                <div className="mt-[5rem] w-full">
                    <SearchSection />
                </div>


            </div>
        </div>
    );
};

export default HeroPage;