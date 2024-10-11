"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";
import Bridge from "../../../public/assets/images/inspiration.png"

const AirCharter: React.FC = () => {

    const airCharterTours = [
        {
            title: "Badrinath Yatra By Helicopter  [1Nights / 2 Days]",
            description: "Rajasthan Tour Package as the name itself suggests, provides you all wonderful experiences that Rajasthan offers. Forts, Palaces, Cenotaphs, Havelis, Desert, Folk performances, Lakes and much more.",
            url: "/",
        },
        {
            title: "Bandhavgarh Wildlife Safari Tour From Ahmedabad  [3Nights / 4 Days]",
            description: "A tour that takes the travelers through some of the most culturally vibrant cities of India. The cities that the travelers visit in this Tour are rich in cultural and historical significance.",
            url: "/",
        },
        {
            title: "Srinagar To Amarnath Helicopter  [0Nights / 1 Days]",
            description: "The Himachal holiday tour package takes you to visit the paradise of Himachal Pradesh. It gives you an experience of the very famous destinations of Manali and Shimla.",
            url: "/",
        },
    ];


    return (
        <>
            <div className="px-10 my-4 justify-center items-center">
                <div className="flex justify-between items-center">
                    <div className="text-[#FF8B02] text-3xl font-firaSans font-semibold py-6">
                        Explore our Air Charter Tours
                    </div>
                    {/* Right side: arrows */}
                    <div className="flex gap-2">
                        <ArrowCircleLeft
                            size={45}
                            weight="light"
                            color="#FF8B02"
                            className="cursor-pointer"
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                    {airCharterTours.map((card, index) => (
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

export default AirCharter