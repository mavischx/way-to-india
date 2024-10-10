"use client";
import React from "react";
//, { useEffect, useState } 
import HeroPage from "@/app/general/Hero"


const LandingPage = () => {
    return (
        <div className="relative min-h-screen">
            <div className="fixed inset-0 z-0">
            </div>

            {/* Main contents */}
            <div className="relative z-10 py-[24px] MobileScreen:py-[12px]">
                <HeroPage />
                {/* <NavigationBar />
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