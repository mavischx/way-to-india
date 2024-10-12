"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowCircleLeft, ArrowCircleRight, ArrowUpRight } from "@phosphor-icons/react";
import Bridge from "../../../public/assets/images/inspiration.png"

const Package: React.FC = () => {
    const airCharterTours = [
        {
            title: "Stay in Hari Mahal Palace starting from INR 10,000",
            description: "This 5-day trip offers thrilling outdoor activities and spiritual experiences. Enjoy white-water rafting, bungee jumping, yoga, and meditation. Explore beautiful landscapes, visit sacred temples, and immerse yourself in the vibrant local culture.",
            url: "/",
            type: "Hotel"
        },
        {
            title: "Valley of Flowers Trek - 8 Night/9 Days from INR 8899",
            description: "Escape to the misty hills of Coorg, a romantic paradise. Explore lush coffee plantations, trek through verdant forests, and relax by serene waterfalls. Indulge in local cuisine and enjoy cozy evenings together. Create unforgettable memories in this idyllic honeymoon destination.",
            url: "/",
            type: "Tour/Package"
        },
        {
            title: "Char Dham Yatra By Helicopter From Dehradun @ INR 4.95 Lac",
            description: "Escape to the misty hills of Coorg, a romantic paradise. Explore lush coffee plantations, trek through verdant forests, and relax by serene waterfalls. Indulge in local cuisine and enjoy cozy evenings together. Create unforgettable memories in this idyllic honeymoon destination.",
            url: "/",
            type: "Events"
        },
    ];

    return (
        <>
            <div className="relative my-4 -mt-36 justify-center items-center px-10 z-20 pb-10">
                <div className="flex justify-end mb-4">

                    {/* Right side: arrows */}
                    <div className="flex gap-2">
                        <ArrowCircleLeft
                            size={45}
                            weight="light"
                            color="#FF8B02"
                            className="cursor-pointer "
                        // onClick={handlePrev}
                        />
                        <ArrowCircleRight
                            size={45}
                            weight="light"
                            color="#FF8B02"
                            className="cursor-pointer"
                        // onClick={handleNext}
                        />
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {airCharterTours.map((card, index) => (
                        <div
                            key={index}
                            className="max-w-md bg-white rounded-2xl shadow-2xl flex flex-col" // Set the card as a flex container
                        >
                            <Image
                                src={Bridge}
                                className="h-60 max-w-full cursor-pointer rounded-t-2xl"
                                alt="placeholder img"
                            />

                            <div className="p-5 flex-grow"> {/* Make this section flexible to fill the available space */}
                                <div className="flex border-2 border-[#FF8B02] text-[#FF8B02] rounded-full text-center text-xs font-semibold inline-flex justify-center items-center px-1 py-1 tracking-wide mb-2">
                                    {card.type}
                                </div>
                                <h5 className="mb-2 text-xl font-bold text-black">
                                    {card.title}
                                </h5>
                                <p className="mb-3 text-base font-normal text-black">
                                    {card.description}
                                </p>
                            </div>

                            <div className="flex justify-between items-center px-5 pb-5"> {/* Button section */}
                                <a className="bg-[#FF8B02] rounded-full px-5 py-2 text-center font-semibold text-sm" href="/details">
                                    Explore Similar
                                </a>
                                <a className="flex" href={card.url}>
                                    <span className="text-[#FF8B02] font-semibold text-sm">View Package</span>
                                    <ArrowUpRight
                                        size={20}
                                        weight="bold"
                                        color="#FF8B02"
                                        className="cursor-pointer ml-2"
                                    />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </>
    )
}

export default Package