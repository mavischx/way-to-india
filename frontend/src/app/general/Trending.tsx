"use client"; // This component should be client-side
import React, { useState } from "react";
import Image from "next/image";
import Howard from "../../../public/assets/images/howard_trending.png"
import Phoenix from "../../../public/assets/images/phoenixPark_trending.png"
import Radha from "../../../public/assets/images/radha_trending.png"
import Royal from "../../../public/assets/images/royal_trending.png"
import Western from "../../../public/assets/images/western_trending.png"
import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";

const Trending: React.FC = () => {

    const [activeButton, setActiveButton] = useState('right');
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
                                onClick={() => setActiveButton('left')}
                                style={{
                                    color: activeButton === 'left' ? '#ffffff' : '#d1d1d1',
                                }}
                            />
                            <ArrowCircleRight
                                size={45}
                                weight="light"
                                onClick={() => setActiveButton('right')}
                                style={{
                                    color: activeButton === 'right' ? '#ffffff' : '#d1d1d1',
                                }}
                            />
                        </div>

                    </div>
                    <div className="container ">
                        <div className="grid grid-cols-3 gap-4">
                            <Image
                                src={Phoenix}
                                // width={400}
                                className="h-60 max-w-full rounded-lg"
                                alt="placeholder img"
                            ></Image>
                            <Image
                                src={Howard}
                                //width={400}
                                className="h-60 max-w-full rounded-lg"
                                alt="placeholder img"
                            ></Image>
                            <Image
                                src={Radha}
                                // width={400}
                                className="h-60 max-w-full rounded-lg"
                                alt="placeholder img"
                            ></Image>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-3">
                            <Image
                                src={Royal}
                                // width={500}
                                alt="placeholder img"
                                className="h-60 max-w-full rounded-lg"
                            ></Image>
                            <Image
                                src={Western}
                                // width={500}
                                alt="placeholder img"
                                className="h-60 max-w-full rounded-lg"
                            ></Image>

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