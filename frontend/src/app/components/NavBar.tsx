"use client"; // This component should be client-side
import React from "react";
import Image from "next/image";
import WTIndiaLogo from "../../../public/assets/images/logo1.png"
import { UsersFour, Bed, Island, Headset, Bell } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";



const NavBar: React.FC = () => {
    const Router = useRouter();

    return (
        <>
        {/* Desktop view */}
            <div className="MobileScreen:hidden TabletScreen:hidden flex flex-row items-center justify-between px-20 py-5">
                <Image
                    // className="cursor-pointer"
                    src={WTIndiaLogo}
                    width={150}
                    alt="Way to India Logo"
                />

                <div className="text-black flex flex-row gap-[4rem] mx-10">

                    <div className="flex cursor-pointer" onClick={() => Router.push("/")}>
                        <UsersFour size={20} />
                        <span className="pl-2 font-lexend text-sm ">Group Tours</span>
                    </div>

                    <div className="flex cursor-pointer" onClick={() => Router.push("/")}>
                        <Bed size={20} />
                        <span className="pl-2 font-lexend text-sm">Hotels</span>
                    </div>

                    <div className="flex cursor-pointer" onClick={() => Router.push("/")}>
                        <Island size={20} />
                        <span className="pl-2 font-lexend text-sm">Transportation</span>
                    </div>

                    <div className="flex cursor-pointer" onClick={() => Router.push("/")}>
                        <Headset size={20} />
                        <span className="pl-2 font-lexend text-sm">Contact Us</span>
                    </div>

                </div>
                <div className="flex">
                    <Bell size={30} color="black"/>
                    <div className="bg-[#FF8B02] rounded-full px-5 py-2 text-center font-medium ml-10 font-lexend cursor-pointer" onClick={() => Router.push("/")}>Sign Up/Login</div>
                </div>
            </div>

        </>
    )

}

export default NavBar