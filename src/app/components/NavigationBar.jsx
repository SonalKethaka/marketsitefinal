// 'use client';
//
// import React from "react";
// import {
//     Navbar,
//     NavbarBrand,
//     NavbarContent,
//     NavbarItem,
//     Link,
//     Button,
//     Modal,
//     ModalContent,
//     ModalBody,
//     useDisclosure,
//     Image
// } from "@heroui/react";
// import { usePathname, useSearchParams } from "next/navigation";
// import NextLink from "next/link";
// import {useRouter} from "next/router";
//
// export default function NavigationBar() {
//     const pathname = usePathname(); // Get the current route
//     const searchParams = useSearchParams(); // Get query parameters
//
//     // Define role-based navLinks
//
//     const NavLinks = [
//         { name: "Home", path: "#hero" },
//         { name: "Our Mission", path: "#mission"},
//         { name: "Services", path: "#service" },
//         { name: "Unique", path: "#unique" },
//         { name: "Team", path: "#team" },
//         { name: "Contact", path: "#contact" },
//     ];
//     const { isOpen, onOpen, onClose } = useDisclosure(); // For mobile modal menu
//
//     return (
//         <>
//             <Navbar
//                 className=" text-white bg-white bg-opacity-40 backdrop-blur fixed"
//                 shouldHideOnScroll
//             >
//                 {/* Brand */}
//                 <NavbarBrand className="pt-2">
//                     <NextLink href="#" className="font-bold text-customWhite flex items-center">
//                         <img src="/imgs/logo.png" alt="star" className="w-16"/>
//                         <p className="text-3xl pb-3 pl-2 text-logoColor">Schoolify</p>
//                     </NextLink>
//                 </NavbarBrand>
//
//                 {/* Desktop Links */}
//                 <NavbarContent justify="center" className="hidden sm:flex">
//                     {NavLinks.map((link) => (
//                         <NavbarItem key={link.name}>
//                             <NextLink
//                                 href={link.path}
//                                 className={`relative ${
//                                     pathname === link.path
//                                         ? "text-logoColor font-bold"
//                                         : "text-white font-normal"
//                                 }`}
//                             >
//                                 {link.name}
//                                 {/* Underline Bar */}
//                                 <span
//                                     className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] w-6 bg-black rounded ${
//                                         pathname === link.path ? "block" : "hidden"
//                                     }`}
//                                 ></span>
//                             </NextLink>
//                         </NavbarItem>
//                     ))}
//                 </NavbarContent>
//
//
//                 {/* Hamburger Menu (Mobile) */}
//                 <NavbarContent className="sm:hidden flex items-center justify-end">
//                     <Button
//                         isIconOnly
//                         variant="light"
//                         onPress={onOpen}
//                         aria-label="Open menu"
//                         className="ml-24 text-black"
//                     >
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             strokeWidth="1.5"
//                             stroke="currentColor"
//                             className="w-6 h-6"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 d="M4.5 12h15M4.5 6h15M4.5 18h15"
//                             />
//                         </svg>
//                     </Button>
//                 </NavbarContent>
//             </Navbar>
//
//             {/* Mobile Menu */}
//             <Modal
//                 backdrop="blur"
//                 isOpen={isOpen}
//                 onClose={onClose}
//                 className="absolute top-4 right-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-customLightBlue"
//                 placement="top-right"
//             >
//                 <ModalContent>
//                     {(onClose) => (
//                         <>
//                             {/* Close Icon */}
//                             <button
//                                 className="absolute top-2 right-2 text-gray-400 hover:text-black"
//                                 onClick={onClose}
//                                 aria-label="Close"
//                             >
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     strokeWidth="2"
//                                     stroke="currentColor"
//                                     className="w-6 h-6"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         d="M6 18L18 6M6 6l12 12"
//                                     />
//                                 </svg>
//                             </button>
//
//                             <ModalBody>
//                                 <div className="flex flex-col items-center gap-4 bg">
//                                     {NavLinks.map((link) => (
//                                         <NextLink
//                                             key={link.name}
//                                             href={link.path}
//                                             onClick={onClose}
//                                             className={`relative ${
//                                                 pathname === link.path
//                                                     ? "text-black font-bold"
//                                                     : "text-white font-normal"
//                                             }`}
//                                         >
//                                             {link.name}
//                                             <span
//                                                 className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] w-6 bg-black rounded ${
//                                                     pathname === link.path ? "block" : "hidden"
//                                                 }`}
//                                             ></span>
//                                         </NextLink>
//                                     ))}
//                                 </div>
//                             </ModalBody>
//                         </>
//                     )}
//                 </ModalContent>
//             </Modal>
//         </>
//     );
// }



'use client';

import React, { useState, useEffect } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
    Modal,
    ModalContent,
    ModalBody,
    useDisclosure,
} from "@heroui/react";
import NextLink from "next/link";

export default function NavigationBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [activeSection, setActiveSection] = useState("#hero");

    // Define sections for tracking
    const NavLinks = [
        { name: "Home", path: "#hero" },
        { name: "Our Mission", path: "#mission" },
        { name: "Services", path: "#service" },
        { name: "Unique", path: "#unique" },
        { name: "Team", path: "#team" },
        { name: "Contact", path: "#contact" },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);

        const handleScroll = () => {
            let currentSection = "#hero"; // Default section

            NavLinks.forEach((link) => {
                const section = document.querySelector(link.path);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        currentSection = link.path;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Navbar className="text-white bg-white bg-opacity-40 backdrop-blur fixed" shouldHideOnScroll>
                {/* Brand */}
                <NavbarBrand className="pt-2">
                    <NextLink href="#" className="font-bold text-customWhite flex items-center">
                        <img src="/imgs/logo.png" alt="logo" className="w-16"/>
                        <p className="text-3xl pb-3 pl-2 text-logoColor">Schoolify</p>
                    </NextLink>
                </NavbarBrand>

                {/* Desktop Links */}
                <NavbarContent justify="center" className="hidden sm:flex">
                    {NavLinks.map((link) => (
                        <NavbarItem key={link.name}>
                            <a
                                href={link.path}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActiveSection(link.path);
                                    document.querySelector(link.path)?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className={`relative ${
                                    activeSection === link.path
                                        ? "text-logoColor font-bold"
                                        : "text-white font-normal"
                                }`}
                            >
                                {link.name}
                                {/* Underline Bar */}
                                <span
                                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] w-6 bg-logoColor rounded ${
                                        activeSection === link.path ? "block" : "hidden"
                                    }`}
                                ></span>
                            </a>
                        </NavbarItem>
                    ))}
                </NavbarContent>

                {/* Hamburger Menu (Mobile) */}
                <NavbarContent className="sm:hidden flex items-center justify-end ">
                    <Button isIconOnly variant="light" onPress={onOpen} aria-label="Open menu" className="ml-auto text-logoColor justify-end">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15M4.5 6h15M4.5 18h15"/>
                        </svg>
                    </Button>
                </NavbarContent>
            </Navbar>

            {/* Mobile Menu */}
            <Modal backdrop="blur" isOpen={isOpen} onClose={onClose} className="absolute top-4 right-4 w-full max-w-xs bg-customLightBlue" placement="top-right">
                <ModalContent>
                    {(onClose) => (
                        <>
                            {/* Close Icon */}
                            <button className="absolute top-2 right-2 text-gray-400 hover:text-black" onClick={onClose} aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>

                            <ModalBody>
                                <div className="flex flex-col items-center gap-4">
                                    {NavLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.path}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setActiveSection(link.path);
                                                document.querySelector(link.path)?.scrollIntoView({ behavior: "smooth" });
                                                onClose();
                                            }}
                                            className={`relative ${
                                                activeSection === link.path
                                                    ? "text-logoColor font-bold"
                                                    : "text-white font-normal"
                                            }`}
                                        >
                                            {link.name}
                                            <span
                                                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] w-6 bg-logoColor rounded ${
                                                    activeSection === link.path ? "block" : "hidden"
                                                }`}
                                            ></span>
                                        </a>
                                    ))}
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}