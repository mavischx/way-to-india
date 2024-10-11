"use client";
import React, { useState } from "react";
import Image from "next/image";
import Fire from "../../../public/assets/images/hot-sale 1.png"

const Deals: React.FC = () => {
    return(
        <>
        <div className="px-10 my-4">
<div className="text-[#FF8B02] text-3xl font-firaSans font-semibold py-6">
                Avail Our Amazing Deals
            </div>

            <div className="flex border-2 border-[#FF8B02] text-[#FF8B02] p-4 items-center">
                <Image
                src={Fire}
                width={70}
                className="m-2 mr-6"
                alt="placeholder img">
                </Image>
                <span className="text-[#FF8B02] text-2xl ">Get <strong>20% off</strong> on your first Air Charter Tour Package!! </span>
            </div>
        </div>
         
        </>
    )
}

export default Deals