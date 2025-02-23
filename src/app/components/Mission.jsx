"use client";
import React from 'react'
import {Image} from "@heroui/react";
import Reveal from "@/app/Reveal";

const Mission = () => {
    return (
        <div id="mission" className=" h-full bg-white text-black py-36">
            <Reveal>
                <div
                    className="sm:grid sm:grid-cols-2 flex flex-col-reverse sm:flex-row items-center">
                    <div className="sm:mr-10 sm:mt-0 mt-10 flex justify-center sm:justify-end">
                        <Image
                            alt="HeroUI hero Image"
                            src="imgs/mission.jpg"
                            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto"
                        />
                    </div>
                    <div className=" flex flex-col  text-center items-start gap-y-5 w-full px-8 ">
                        <p className="text-6xl font-bold text-center w-full text-logoColor">OUR MISSION</p>
                        <p className="text-2xl mt-4 text-justify w-full ">
                            Schoolify is on a mission to revolutionize education by providing a seamless, intuitive,
                            and powerful Learning Management System that bridges the gap between schools, teachers, s
                            tudents, and parents. We believe in making learning accessible, engaging, and efficient with
                            innovative digital tools that enhance classroom experiences, simplify school management,
                            and foster meaningful connections in the education ecosystem. Our goal is to empower educators, inspire students,
                            and keep parents informed, transforming traditional learning into a smarter, future-ready approach.
                        </p>
                    </div>
                </div>
            </Reveal>
        </div>
    )
}
export default Mission
