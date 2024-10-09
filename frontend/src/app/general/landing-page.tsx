"use client";
import React from "react";
//, { useEffect, useState } 
import SignupForm from "../components/auth/SignUpForm"


const LandingPage = () => {
    return (
        <div className="relative min-h-screen">
            <div className="fixed inset-0 z-0">
                {/* <Canvas camera={{ position: [0, 0, 1] }}>
                    <CloudParticleBg />
                </Canvas> */}
                <SignupForm />
                Hello World
            </div>

            {/* Main contents */}
            <div className="relative z-10 py-[24px] MobileScreen:py-[12px]">
                {/* <NavigationBar />
                <HeroPage />
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