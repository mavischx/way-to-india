"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";
import Bridge from "../../../public/assets/images/inspiration.png"

const Inspiration: React.FC = () => {
    // Data sets for each button
    const winterTours = [
        {
            title: "Rajasthan Tour Packages",
            description: "Rajasthan Tour Package as the name itself suggests, provides you all wonderful experiences that Rajasthan offers. Forts, Palaces, Cenotaphs, Havelis, Desert, Folk performances, Lakes and much more.",
            url: "/",
        },
        {
            title: "Golden Triangle Tour With Varanasi",
            description: "Golden Triangle Tour With Varanasi. A tour that takes the travelers through some of the most culturally vibrant cities of India. The cities that the travelers visit in this Tour are rich in cultural and historical significance.",
            url: "/",
        },
        {
            title: "Himachal Holiday Tour Package",
            description: "The Himachal holiday tour package takes you to visit the paradise of Himachal Pradesh. It gives you an experience of the very famous destinations of Manali and Shimla.",
            url: "/",
        },
    ];

    const summerHoliday = [
        {
            title: "Goa Beach Vacation",
            description: "Relax on the beautiful beaches of Goa with sun, sand, and sea.",
            url: "/",
        },
        {
            title: "Kerala Backwaters Tour",
            description: "Enjoy the calm and serene backwaters of Kerala with houseboat stays.",
            url: "/",
        },
        {
            title: "Leh-Ladakh Adventure",
            description: "Discover the rugged beauty of Leh-Ladakh with this adventure-filled tour.",
            url: "/",
        },
    ];

    const luxuryHotels = [
        {
            title: "The Oberoi, Mumbai",
            description: "A luxurious stay at The Oberoi with stunning views of Marine Drive.",
            url: "/",
        },
        {
            title: "Taj Mahal Palace, Mumbai",
            description: "Experience the grandeur of the Taj Mahal Palace with royal hospitality.",
            url: "/",
        },
        {
            title: "The Leela Palace, Udaipur",
            description: "Enjoy the royal luxury at The Leela Palace, Udaipur with lake views.",
            url: "/",
        },
    ];


    // Arrays for each category
    const cardSets = [winterTours, summerHoliday, luxuryHotels];

    // State to keep track of the currently active button and card set
    const [activeButton, setActiveButton] = useState(0); // Track the active button index
    const [currentCardIndex, setCurrentCardIndex] = useState(0); // Track current visible card set

    // Buttons corresponding to the card sets
    const buttons = [
        "Best Winter Tours",
        "Summer Holiday Destinations",
        "Best Luxury Hotels",
    ];

    // Handle previous arrow click
    const handlePrev = () => {
        setCurrentCardIndex((prevIndex) =>
            prevIndex === 0 ? cardSets[activeButton].length - 1 : prevIndex - 1
        );
    };

    // Handle next arrow click
    const handleNext = () => {
        setCurrentCardIndex((prevIndex) =>
            prevIndex === cardSets[activeButton].length - 1 ? 0 : prevIndex + 1
        );
    };
    return (
        <>
            <div className="px-10 my-4 justify-center items-center">
                <div className="text-[#FF8B02] text-3xl font-firaSans font-semibold ">
                    WayToIndia Travel Inspiration
                </div>

                {/* Buttons */}
                <div className="flex justify-between items-center">
                    <div className="flex my-6">
                        {buttons.map((buttonText, index) => (
                            <div
                                key={index}
                                className={`flex rounded-full px-5 py-2 text-center text-sm font-bold cursor-pointer 
                                ${activeButton === index
                                        ? "border-2 border-[#FF8B02] text-[#FF8B02]" // Active button
                                        : "border-none text-black font-medium" // Inactive button
                                    }`}
                                onClick={() => {
                                    setActiveButton(index);
                                    setCurrentCardIndex(0); // Reset card index when button is clicked
                                }}
                            >
                                {buttonText}
                            </div>
                        ))}
                    </div>

                    {/* Right side: arrows */}
                    <div className="flex gap-2">
                        <ArrowCircleLeft
                            size={45}
                            weight="light"
                            color="#FF8B02"
                            className="cursor-pointer"
                            onClick={handlePrev}
                        />
                        <ArrowCircleRight
                            size={45}
                            weight="light"
                            color="#FF8B02"
                            className="cursor-pointer"
                            onClick={handleNext}
                        />
                    </div>
                </div>


                {/* Cards Display */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                    {cardSets[activeButton].map((card, index) => (
                        <div
                            key={index}
                            className={`max-w-md bg-white border rounded-2xl shadow-xl }`}
                        >
                            <Image
                                src={Bridge}
                                className="h-60 max-w-full cursor-pointer rounded-t-2xl"
                                alt="placeholder img"
                            />
                            <div className="p-5">
                                <a href={card.url}>
                                    <h5 className="mb-2 text-xl font-bold text-black underline">
                                        {card.title}
                                    </h5>
                                </a>
                                <p className="mb-3 text-base font-normal text-black">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
          </div>
        </>
    )

}

export default Inspiration