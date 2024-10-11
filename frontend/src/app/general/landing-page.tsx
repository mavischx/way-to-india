"use client";
import React from "react";
//, { useEffect, useState } 
import HeroPage from "@/app/general/Hero"
import Trending from "@/app/general/Trending";
import NavBar from "../components/NavBar";


const LandingPage = () => {
    return (
        <div className="relative min-h-screen">
            <div className="fixed inset-0 z-0">
            </div>

            {/* Main contents */}
            <div className="relative z-10">
                <NavBar />
                <HeroPage />
                <Trending />
                {/* 
                <JoinUsPage />
                <SpaceAgencies />
                <GlobalCollabrators />
                <Shannon />
                <TeamStories />
                <HackathoneTimeline />
                <Socials />
                <BackToTopButton />
                <Footer /> */}
            </div>
        </div>
    );
};

export default LandingPage;