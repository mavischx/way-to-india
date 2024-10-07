"use client";
import React, { useEffect, useState } from "react";


const LandingPage = () => {
    const [token, setToken] = useState("");
    const [notificationPermissionStatus, setNotificationPermissionStatus] = useState("");

    return (
        <div className="relative min-h-screen bg-black text-white">
            <div className="fixed inset-0 z-0">
                {/* <Canvas camera={{ position: [0, 0, 1] }}>
                    <CloudParticleBg />
                </Canvas> */}
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