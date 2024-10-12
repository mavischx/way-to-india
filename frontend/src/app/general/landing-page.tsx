"use client";
import React from "react";
//, { useEffect, useState } 
import HeroPage from "@/app/general/Hero"
import Trending from "@/app/general/Trending";
import NavBar from "../components/NavBar";
import Deals from "./Deals";
import Inspiration from "./Inspiration";
import AirCharter from "./AirCharterTour";
import Package from "./Package";


const LandingPage = () => {
    return (
        <div className="relative min-h-screen">
            {/* Main contents */}
            <div className="relative z-10">
                <NavBar />
                <HeroPage />
                <Package />
                <Trending />
                <Inspiration />
                <AirCharter />
                <Deals />
            </div>
        </div>
    );
};

export default LandingPage;