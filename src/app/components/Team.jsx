"use client";
import React from 'react'
import { Linkedin, Github } from 'lucide-react';
import {Card, CardHeader, CardBody, Image, Avatar} from "@heroui/react";
import Reveal from "@/app/Reveal";

const Team = () => {

    const members = [
        {
            photo:<Image alt="Sonal Image"
                         src="imgs/sonal.jpeg"
                         className="circular-image rounded-full object-cover border-3 border-black"
                         width={150}
                         height={150}
            /> ,
            name: "Sonal Pathinayaka",
            role: "Client-Side/Server-Side/Marketing",
            description: "Implemented the Appointment Scheduler and the Gradebook features. Implemented the marketing site. Handles Social Media Marketing.",
            linkedin:   <a href="https://www.linkedin.com/in/sonal-pathinayaka" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="text-black w-6 h-6 cursor-pointer"/>
                        </a>,
            github:     <a href="https://github.com/SonalKethaka" target="_blank" rel="noopener noreferrer">
                            <Github className="text-black w-7 h-7 cursor-pointer"/>
                        </a>,

        },
        {
            photo: <Image alt="Hasaru Image"
                          src="imgs/hasaru.jpg"
                         className="circular-image rounded-full object-cover border-3 border-black"
                         width={150}
                         height={150}
            /> ,
            name: "Hasaru Uyanahewa",
            role: "Client-Side/Server-Side/Marketing",
            description: "Implemented Event Scheduler/School Calendar features. Oversaw the development of the marketing site interface. Handles Social Media Marketing.",
            linkedin:   <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-black w-6 h-6 cursor-pointer"/>
            </a>,
            github:     <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                <Github className="text-black w-7 h-7 cursor-pointer"/>
            </a>,

        },
        {
            photo:<Image alt="Chalitha Image"
                         src="imgs/chalitha.jpeg"
                         className="circular-image rounded-full object-cover border-3 border-black"
                         width={150}
                         height={150}
            /> ,
            name: "Chalitha Gunarathna",
            role: "Client-Side/Server-Side",
            description: "Responsible for building the Dashboard feature for all the users",
            linkedin:   <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-black w-6 h-6 cursor-pointer"/>
            </a>,
            github:     <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                <Github className="text-black w-7 h-7 cursor-pointer"/>
            </a>,

        },
        {
            photo:<Image alt="Sathira Image"
                         src="imgs/sathira.png"
                         className="circular-image rounded-full object-cover border-3 border-black"
                         width={150}
                         height={150}
            /> ,
            name: "Sathira Dahanayaka",
            role: "Client-Side/Server-Side",
            description: "Implemented the School Resources/Materials feature. Responsible for creating content for SMM",
            linkedin:   <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-black w-6 h-6 cursor-pointer"/>
            </a>,
            github:     <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                <Github className="text-black w-7 h-7 cursor-pointer"/>
            </a>,

        },
        {
            photo:<Image alt="Amna Image"
                         src="imgs/amna.png"
                         className="circular-image rounded-full object-cover border-3 border-black"
                         width={150}
                         height={150}
            /> ,
            name: "Amna Ibrahim",
            role: "Client-Side/Server-Side",
            description: "Responsible for implementing the Attendance Tracker feature",
            linkedin:   <a href="https://www.linkedin.com/in/amna-ibrahim-69401b298/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BzB6Y0Wm%2BStmVpdoONKKGVg%3D%3D" target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-black w-6 h-6 cursor-pointer"/>
            </a>,
            github:     <a href="https://github.com/IbrahimAmna" target="_blank" rel="noopener noreferrer">
                <Github className="text-black w-7 h-7 cursor-pointer"/>
            </a>,
        },
        {
            photo:<Image alt="Sachini Image"
                         src="imgs/sachini.png"
                         className="circular-image rounded-full object-cover border-3 border-black"
                         width={150}
                         height={150}
            /> ,
            name: "Sachini Nishshanka",
            role: "Client-Side/Server-Side",
            description: "Responsible for building the Client-Side of the Gradebook feature.",
            linkedin:   <a href="https://www.linkedin.com/in/sachini-nishshanka-052637294?trk=contact-info" target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-black w-6 h-6 cursor-pointer"/>
            </a>,
            github:     <a href="https://github.com/SachiniNishshanka" target="_blank" rel="noopener noreferrer">
                <Github className="text-black w-7 h-7 cursor-pointer"/>
            </a>,
        },
    ];

    return (
        <>
            <div id="team" className="w-full bg-logoColor text-black px-4 sm:px-8 pt-36 pb-24">
                <Reveal>
                    {/* Section Title */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl sm:text-5xl text-white font-bold">MEET OUR TEAM</h2>
                        {/*<p className="text-lg sm:text-xl mt-3">ala bathala kola sambala kana bathala mama</p>*/}
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3  gap-6 sm:px-2 px-8">
                        {members.map((member, index) => (
                            <Card key={index}
                                  className="py-4 bg-white bg-opacity-80 rounded-3xl min-h-[320px] h-full flex flex-col justify-between gap-y-1 shadow-2xl">
                                <CardHeader className="px-4 flex flex-col gap-y-0.5 items-center">
                                    {member.photo}
                                    <h1 className="mt-3 text-2xl font-bold">{member.name}</h1>
                                    <p className="text-md opacity-70">{member.role}</p>
                                </CardHeader>
                                <CardBody className="overflow-visible py-2 gap-y-3 flex flex-col flex-grow text-center">
                                    <p>{member.description}</p>
                                    <div className="flex justify-end mt-auto space-x-4 ">
                                        {member.linkedin}
                                        {member.github}
                                    </div>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </Reveal>
            </div>
        </>
    )
}
export default Team
