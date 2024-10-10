import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image"
import IndianHeritage from "@/assets/images/indian_building_scene.png"
import SearchSection from "./TabSection/SearchSection";

const HeroPage = () => {
    return (
        <div className="relative h-[800px] w-full overflow-hidden">
            {/* Orange overlay div */}
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

            {/* Content overlay */}
            <div className="relative z-20 flex flex-col items-start justify-center h-full p-10">
                {/* Heading text */}
                <h2 className="text-6xl font-bold text-white mb-4">
                    Come, Explore the incredible land
                </h2>
                <div className="m-4 w-full">
                    <SearchSection />
                </div>
                {/* Search Section */}

            </div>
        </div>
    );
};

export default HeroPage;