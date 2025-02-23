"use client";
import React from 'react'
import {Card, CardHeader, CardBody, Image} from "@heroui/react";
import Reveal from "@/app/Reveal";

const Service = () => {

    const services = [
        {
            icon: <img src="/imgs/school.svg" alt="School" className=" w-20 h-20 p-3 bg-white rounded-full border-1 border-black" />,
            title: "For School",
            description: "Manage school-wide operations, schedules, and communication efficiently with our system.",
        },
        {
            icon: <img src="/imgs/teacher.svg" alt="Teacher" className=" w-20 h-20 p-3 bg-white rounded-full border-1 border-black"/>,
            title: "For Teachers",
            description: "Teachers can track attendance, upload grades, and communicate with students and parents easily.",
        },
        {
            icon: <img src="/imgs/student.svg" alt="Student" className=" w-20 h-20 p-3 bg-white rounded-full border-1 border-black" />,
            title: "For Students",
            description: "Access learning materials, track progress, and stay updated with school activities.",
        },
        {
            icon: <img src="/imgs/parent.svg" alt="Parent" className=" w-20 h-20 p-3 bg-white rounded-full border-1 border-black" />,
            title: "For Parents",
            description: "Stay informed about your child's progress, attendance, and school events in real-time.",
        },
    ];

    return (
        <>
            {/*<div*/}
            {/*    className="w-full bg-logoColor grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-black sm:px-2 px-16 py-36">*/}
            {/*    {services.map((service, index) => (*/}
            {/*        <Card key={index}*/}
            {/*              className="py-4 bg-white bg-opacity-50 rounded-3xl min-h-[320px] h-full flex flex-col justify-between gap-y-3">*/}
            {/*            <CardHeader className="px-4 flex-col gap-y-2 items-center">*/}
            {/*                /!*<School className="text-white w-20 h-20 p-3 bg-black rounded-3xl" />*!/*/}
            {/*                {service.icon}*/}
            {/*                <p className="text-3xl font-bold">{service.title}</p>*/}
            {/*            </CardHeader>*/}
            {/*            <CardBody className="overflow-visible py-2 flex-grow text-center">*/}
            {/*                <p>*/}
            {/*                    {service.description}*/}
            {/*                </p>*/}
            {/*            </CardBody>*/}
            {/*        </Card>*/}
            {/*    ))}*/}
            {/*</div>*/}
            <div id="service" className="w-full bg-logoColor text-black px-4 sm:px-8 p-36">
                <Reveal>
                    {/* Section Title */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl sm:text-5xl font-bold text-white">OUR SERVICES</h2>
                        {/*<p className="text-lg sm:text-xl mt-3">Empowering schools, teachers, students, and parents</p>*/}
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:px-2 px-8">
                        {services.map((service, index) => (
                            <Card key={index}
                                  className="py-4 bg-white bg-opacity-80 rounded-3xl min-h-[320px] h-full flex flex-col justify-between gap-y-3 shadow-2xl">
                                <CardHeader className="px-4 flex flex-col gap-y-2 items-center">
                                    {service.icon}
                                    <p className="text-3xl font-bold">{service.title}</p>
                                </CardHeader>
                                <CardBody className="overflow-visible py-2 flex-grow text-center">
                                    <p>{service.description}</p>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </Reveal>
            </div>
        </>
    )
}
export default Service
