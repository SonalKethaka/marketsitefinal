"use client";
import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
import { FlipWords } from "@/app/components/ui/flip-words";
import {Button} from "@heroui/react";

const Hero = () => {

    const words = ["SMARTER", "NOT HARDER!"];

    const DiagonalArrowIcon = ({ fill = "currentColor", size, height, width, ...props }) => {
        return (
            <svg
                height={size || height || 24}
                width={size || width || 24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <g stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* Arrow Body - Diagonal Line */}
                    <path d="M5 19L19 5" />
                    {/* Arrow Head */}
                    <path d="M6 5h13v13" />
                </g>
            </svg>
        );
    };

    return (
        // <div
        //     className="relative flex flex-wrap top-0 h-full bg-[url('/imgs/hero.jpg')] bg-cover bg-center bg-no-repeat">
        //     <div className=" flex flex-col mt-36 sm:text-right items-end gap-y-8 w-full px-8 ">
        //         <p className="text-7xl font-bold text-logoColor">STAY CONNECTED</p>
        //         <p className="text-7xl font-bold">WITH YOUR</p>
        //         <p className="text-7xl font-bold">CHILDREN</p>
        //         <p className="text-3xl  mt-16 w-1/2 text-left  ">
        //             Check your child's progress, attendance their events in school and etc.
        //             Check your child's progress, attendance their events in school and etc.
        //             Check your child's progress, attendance their events in school and etc.
        //         </p>
        //     </div>
        //     <div className="flex w-full mt-24">
        //         <div className="text-right w-full flex flex-col  items-end justify-end">
        //             <div className="w-auto space-x-16 mr-8 mb-8 flex flex-row text-right">
        //                 <SocialIcon target="_blank" rel="noopener noreferrer" url="https://www.linkedin.com" style={{ width: 30, height: 30 }} />
        //                 <SocialIcon target="_blank" rel="noopener noreferrer" url="https://www.instagram.com" style={{ width: 30, height: 30 }} />
        //                 <SocialIcon target="_blank" rel="noopener noreferrer" url="https://www.facebook.com" style={{ width: 30, height: 30 }} />
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // <div id="hero"
        //     className="relative h-screen bg-[url('/imgs/hero.jpg')] bg-cover bg-center bg-no-repeat flex items-center px-4 md:px-16">
        <div
            className="relative h-screen bg-[url('/imgs/hero.jpg')] bg-cover bg-center bg-no-repeat flex items-center px-4 md:px-16 before:absolute before:inset-0 before:bg-black/30 before:backdrop-blur-sm">
            <div className="grid grid-cols-1 w-full items-center z-10">
                {/* Text Section */}
                <div className="flex flex-col text-center md:text-right items-center md:items-end gap-y-6">
                    <p className="text-4xl md:text-7xl font-bold text-heroColor">YOUR ALL-IN-ONE</p>
                    <p className="text-4xl md:text-7xl font-bold">LEARNING COMPANION,</p>
                    <p className="text-4xl md:text-7xl font-bold">MAKING STUDYING</p>
                    <FlipWords className="text-4xl md:text-7xl font-bold " words={words}/>
                    <br/>
                    <Button
                        variant="ghost"
                        endContent={<DiagonalArrowIcon />}
                        className="bg-gradient-to-tr from-logoColor to-heroColor text-md text-white border-none shadow-lg"
                        radius="full"
                    >
                        Get Started
                    </Button>
                </div>

                {/* Social Media Section */}
                <div className="absolute bottom-6 right-6 flex space-x-4">
                    <div className="flex space-x-6">
                        <SocialIcon target="_blank" rel="noopener noreferrer" url="https://www.linkedin.com"
                                    style={{width: 40, height: 40}}/>
                        <SocialIcon target="_blank" rel="noopener noreferrer" url="https://www.instagram.com/schoolify._/?utm_source=ig_web_button_share_sheet"
                                    style={{width: 40, height: 40}}/>
                        <SocialIcon target="_blank" rel="noopener noreferrer" url="https://web.facebook.com/profile.php?id=61571031742228"
                                    style={{width: 40, height: 40}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero
