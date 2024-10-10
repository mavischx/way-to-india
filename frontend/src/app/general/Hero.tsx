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

            {/* Heading text */}
            <h2 className="absolute left-10 top-[40%] transform -translate-y-12 text-6xl font-bold z-20">
                Come, Explore the incredible land
            </h2>
            <div>
                <SearchSection />
            </div>
        </div>
    );
};

export default HeroPage;