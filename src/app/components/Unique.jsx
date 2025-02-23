"use client";
import React from 'react'
import {Image} from "@heroui/react";
import Reveal from "@/app/Reveal";

const Unique = () => {
    return (
        <div id="unique" className="h-full bg-white text-black py-36">
            <Reveal>
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 ">
                    <div className=" flex flex-col  text-center items-start gap-y-5 w-full px-8 ">
                        <p className="text-5xl text-center w-full font-bold ">Why are we UNIQUE?</p>
                        <p className="text-2xl mt-4  text-justify w-full ">
                            Unlike traditional LMS platforms, Schoolify
                            takes a holistic approach, designed not just for
                            educators, but also for students and parents.
                            With a user-friendly interface, real-time progress
                            tracking, interactive event scheduling, easy access
                            to school resources, and seamless communication tools,
                            Schoolify ensures effortless collaboration and keeps
                            everyone connected beyond the classroom.
                        </p>
                    </div>
                    <div className="sm:mr-10 sm:mt-0 mt-10 flex justify-center sm:justify-end">
                        <Image
                            alt="HeroUI hero Image"
                            src="imgs/unique.jpg"
                            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto"
                        />
                    </div>
                </div>
            </Reveal>
        </div>
    )
}
export default Unique
