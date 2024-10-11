"use client"; // This component should be client-side
import React, { useState } from "react";
import Image from "next/image";
import Howard from "../../../public/assets/images/Frame 907.png"
import Phoenix from "../../../public/assets/images/Frame 908.png"
import Radha from "../../../public/assets/images/Frame 909.png"
import Royal from "../../../public/assets/images/Frame 911.png"
import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Trending: React.FC = () => {
    const Router = useRouter();
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeButton, setActiveButton] = useState("right");

    const imageSets = [
        {
            firstRow: [
                { src: Phoenix, desc: "Phoenix Park Inn Resort, Goa", link: "#" },
                { src: Howard, desc: "Howard Sarovar Portico, Agra", link: "#" },
                { src: Radha, desc: "Radha Hometel, Bangalore", link: "#" },
            ],
            secondRow: [
                { src: Royal, desc: "Royal Park Resort, Manali", link: "#" },
                { src: Royal, desc: "Best Western, Amritsar", link: "#" },
            ],
        },
        {
            firstRow: [
                { src: Royal, desc: "Royal Stay", link: "#" },
                { src: Radha, desc: "Radha Palace", link: "#" },
                { src: Phoenix, desc: "Phoenix Hotel", link: "#" },
            ],
            secondRow: [
                { src: Royal, desc: "Howard Hotel", link: "#" },
                { src: Royal, desc: "Royal Stay", link: "#" },
            ],
        },
        {
            firstRow: [
                { src: Howard, desc: "Howard Hotel", link: "#" },
                { src: Phoenix, desc: "Phoenix Hotel", link: "#" },
                { src: Radha, desc: "Radha Palace", link: "#" },
            ],
            secondRow: [
                { src: Royal, desc: "Radha Palace", link: "#" },
                { src: Royal, desc: "Royal Stay", link: "#" },
            ],
        },
    ];

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % imageSets.length);
        setActiveButton('right')

    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + imageSets.length) % imageSets.length);
        setActiveButton('left')
    };

    const handleClick = (link: string) => {
        Router.push(link);
    };

    return (
        <>
            <div className="bg-[#FF8B02] flex justify-center items-center">
                <div className="px-6 pb-10">
                    <div className="flex justify-between my-4">
                        <span className="text-3xl font-firaSans font-semibold">Trending Hotels and Stays</span>
                        <div className="flex gap-2">

                            <ArrowCircleLeft
                                size={45}
                                weight="light"
                                onClick={handlePrev}
                                style={{
                                    color: activeButton === "left" ? '#ffffff' : '#d1d1d1',
                                }}
                                className="cursor-pointer"
                            />
                            <ArrowCircleRight
                                size={45}
                                weight="light"
                                onClick={handleNext}
                                style={{
                                    color: activeButton === "right" ? '#ffffff' : '#d1d1d1',
                                }}
                                className="cursor-pointer"
                            />
                        </div>

                    </div>
                    <div className="container ">

                        {/* First Row of Images */}
                        <div className="grid grid-cols-3 gap-4">
                            {imageSets[activeIndex].firstRow.map((image, index) => (
                                <div key={index} className="relative">
                                    <Image
                                        src={image.src}
                                        className="h-60 max-w-full rounded-lg cursor-pointer"
                                        alt="placeholder img"
                                        onClick={() => handleClick(image.link || "#")}
                                    />
                                    <div className="absolute bottom-0 flex p-4 text-white font-bold text-xl">
                                        {image.desc}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Second Row of Images */}
                        <div className="grid grid-cols-2 gap-4 mt-3 justify-center w-fit mx-auto">
                            {imageSets[activeIndex].secondRow.map((image, index) => (
                                <div key={index} className="relative">
                                    <Image
                                        src={image.src}
                                        className="h-60 max-w-full rounded-lg cursor-pointer"
                                        alt="placeholder img"
                                        onClick={() => handleClick(image.link || "#")}
                                    />
                                    <div className="absolute bottom-0 flex p-4 text-white font-bold text-xl">
                                        {image.desc}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Trending