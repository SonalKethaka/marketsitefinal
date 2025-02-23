"use client";
import React from "react";
import {Card, CardBody, CardHeader, Link} from "@heroui/react";
import NextLink from "next/link";

export function Footer() {

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <footer className="bg-heroColor bg-opacity-100 py-8  sm:py-8 lg:py-8 w-full left-0">
            {/* Divider */}
            <div className="px-6 max-w-screen-xl mx-auto ">
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:items-center ">
                    {/* Logo Section */}
                    <div className="mb-4 md:mb-0">
                        <NextLink href="#" className="font-bold flex items-center">
                            <img src="/imgs/logo.png" alt="star" className="w-36 text-black"/>
                        </NextLink>
                    </div>

                    {/* Links Section */}
                    <div className="grid grid-cols-2  gap-6 ">
                        <div></div>
                        <div className="">
                            <div className="text-left">
                                <h2 className="text-lg sm:text-3xl font-bold text-white">Contact Us</h2>
                                {/*<p className="text-lg sm:text-xl mt-3">Empowering schools, teachers, students, and parents</p>*/}
                            </div>
                            <div
                                className=" flex flex-col justify-start gap-y-3 bg-transparent ">
                                <div className="overflow-visible py-2 flex-grow items-start">
                                    <h1 className="sm:text-lg text-md"><span
                                        className="font-bold">Email:</span> schoolify.sdgp@gmail.com</h1>
                                    <h1 className="sm:text-lg text-md"><span
                                        className="font-bold">Telephone:</span> 0716666666</h1>
                                    <h1 className="sm:text-lg text-md"><span
                                        className="font-bold">Location:</span> Colombo 03</h1>
                                    <div className="text-left mt-5 mb-3">
                                        <h2 className="text-lg sm:text-3xl font-bold text-white">Visit Us</h2>
                                        {/*<p className="text-lg sm:text-xl mt-3">Empowering schools, teachers, students, and parents</p>*/}
                                    </div>

                                    <div className="flex justify-start space-x-6">
                                        <a
                                            href="https://linkedin.com"
                                            className="hover:opacity-80"
                                            aria-label="LinkedIn"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 text-blue-600"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    d="M20.45 20.45h-3.56v-5.6c0-1.33 0-3.05-1.87-3.05-1.87 0-2.16 1.46-2.16 2.96v5.69h-3.56V9h3.43v1.57h.05a3.78 3.78 0 013.4-1.87c3.63 0 4.3 2.39 4.3 5.5v6.25zM5.34 7.35a2.06 2.06 0 11-.04-4.12 2.06 2.06 0 01.04 4.12zM7.12 20.45H3.57V9h3.55zM22.23 0H1.77A1.77 1.77 0 000 1.77v20.46A1.77 1.77 0 001.77 24h20.46A1.77 1.77 0 0024 22.23V1.77A1.77 1.77 0 0022.23 0z"/>
                                            </svg>
                                        </a>
                                        <a
                                            href="https://github.com"
                                            className="hover:opacity-80"
                                            aria-label="GitHub"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 text-gray-800"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    d="M12 .5A12 12 0 000 12a11.93 11.93 0 008.21 11.4c.6.1.82-.26.82-.57v-2.23c-3.34.72-4.04-1.56-4.04-1.56-.55-1.42-1.34-1.8-1.34-1.8-1.1-.77.09-.75.09-.75 1.22.09 1.86 1.27 1.86 1.27 1.09 1.87 2.85 1.33 3.54 1 .1-.8.43-1.34.77-1.65-2.66-.3-5.46-1.34-5.46-5.96 0-1.32.47-2.4 1.25-3.25-.13-.3-.54-1.54.12-3.2 0 0 1-.32 3.3 1.23a11.55 11.55 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.9.12 3.2a4.56 4.56 0 011.25 3.25c0 4.64-2.81 5.66-5.49 5.95.45.39.83 1.13.83 2.28v3.4c0 .32.22.69.83.57A12 12 0 0012 .5z"/>
                                            </svg>
                                        </a>
                                        <a
                                            href="https://facebook.com"
                                            className="hover:opacity-80"
                                            aria-label="Facebook"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 text-blue-600"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    d="M22.675 0H1.325A1.32 1.32 0 000 1.318v21.363C0 23.684.316 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.797c0-3.1 1.894-4.787 4.659-4.787 1.325 0 2.464.098 2.795.143v3.242h-1.918c-1.504 0-1.796.715-1.796 1.762v2.311h3.591l-.467 3.622h-3.124V24h6.116A1.32 1.32 0 0024 22.682V1.318A1.32 1.32 0 0022.675 0z"/>
                                            </svg>
                                        </a>
                                        <a
                                            href="https://instagram.com"
                                            className="hover:opacity-80"
                                            aria-label="Instagram"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 text-pink-500"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5A3.75 3.75 0 0020 16.25v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm5.25-3a.75.75 0 110 1.5.75.75 0 010-1.5z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/*))}*/}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-black my-6"></div>

                {/* Social Media Icons */}
                {/*<div className="flex justify-center space-x-6">*/}
                {/*    <a*/}
                {/*        href="https://linkedin.com"*/}
                {/*        className="hover:opacity-80"*/}
                {/*        aria-label="LinkedIn"*/}
                {/*    >*/}
                {/*        <svg*/}
                {/*            xmlns="http://www.w3.org/2000/svg"*/}
                {/*            className="w-6 h-6 text-blue-600"*/}
                {/*            fill="currentColor"*/}
                {/*            viewBox="0 0 24 24"*/}
                {/*        >*/}
                {/*            <path*/}
                {/*                d="M20.45 20.45h-3.56v-5.6c0-1.33 0-3.05-1.87-3.05-1.87 0-2.16 1.46-2.16 2.96v5.69h-3.56V9h3.43v1.57h.05a3.78 3.78 0 013.4-1.87c3.63 0 4.3 2.39 4.3 5.5v6.25zM5.34 7.35a2.06 2.06 0 11-.04-4.12 2.06 2.06 0 01.04 4.12zM7.12 20.45H3.57V9h3.55zM22.23 0H1.77A1.77 1.77 0 000 1.77v20.46A1.77 1.77 0 001.77 24h20.46A1.77 1.77 0 0024 22.23V1.77A1.77 1.77 0 0022.23 0z"/>*/}
                {/*        </svg>*/}
                {/*    </a>*/}
                {/*    <a*/}
                {/*        href="https://github.com"*/}
                {/*        className="hover:opacity-80"*/}
                {/*        aria-label="GitHub"*/}
                {/*    >*/}
                {/*        <svg*/}
                {/*            xmlns="http://www.w3.org/2000/svg"*/}
                {/*            className="w-6 h-6 text-gray-800"*/}
                {/*            fill="currentColor"*/}
                {/*            viewBox="0 0 24 24"*/}
                {/*        >*/}
                {/*            <path d="M12 .5A12 12 0 000 12a11.93 11.93 0 008.21 11.4c.6.1.82-.26.82-.57v-2.23c-3.34.72-4.04-1.56-4.04-1.56-.55-1.42-1.34-1.8-1.34-1.8-1.1-.77.09-.75.09-.75 1.22.09 1.86 1.27 1.86 1.27 1.09 1.87 2.85 1.33 3.54 1 .1-.8.43-1.34.77-1.65-2.66-.3-5.46-1.34-5.46-5.96 0-1.32.47-2.4 1.25-3.25-.13-.3-.54-1.54.12-3.2 0 0 1-.32 3.3 1.23a11.55 11.55 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.9.12 3.2a4.56 4.56 0 011.25 3.25c0 4.64-2.81 5.66-5.49 5.95.45.39.83 1.13.83 2.28v3.4c0 .32.22.69.83.57A12 12 0 0012 .5z" />*/}
                {/*        </svg>*/}
                {/*    </a>*/}
                {/*    <a*/}
                {/*        href="https://facebook.com"*/}
                {/*        className="hover:opacity-80"*/}
                {/*        aria-label="Facebook"*/}
                {/*    >*/}
                {/*        <svg*/}
                {/*            xmlns="http://www.w3.org/2000/svg"*/}
                {/*            className="w-6 h-6 text-blue-600"*/}
                {/*            fill="currentColor"*/}
                {/*            viewBox="0 0 24 24"*/}
                {/*        >*/}
                {/*            <path d="M22.675 0H1.325A1.32 1.32 0 000 1.318v21.363C0 23.684.316 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.797c0-3.1 1.894-4.787 4.659-4.787 1.325 0 2.464.098 2.795.143v3.242h-1.918c-1.504 0-1.796.715-1.796 1.762v2.311h3.591l-.467 3.622h-3.124V24h6.116A1.32 1.32 0 0024 22.682V1.318A1.32 1.32 0 0022.675 0z" />*/}
                {/*        </svg>*/}
                {/*    </a>*/}
                {/*    <a*/}
                {/*        href="https://instagram.com"*/}
                {/*        className="hover:opacity-80"*/}
                {/*        aria-label="Instagram"*/}
                {/*    >*/}
                {/*        <svg*/}
                {/*            xmlns="http://www.w3.org/2000/svg"*/}
                {/*            className="w-6 h-6 text-pink-500"*/}
                {/*            fill="currentColor"*/}
                {/*            viewBox="0 0 24 24"*/}
                {/*        >*/}
                {/*            <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5A3.75 3.75 0 0020 16.25v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm5.25-3a.75.75 0 110 1.5.75.75 0 010-1.5z" />*/}
                {/*        </svg>*/}
                {/*    </a>*/}
                {/*</div>*/}
            </div>
        </footer>
    );
}