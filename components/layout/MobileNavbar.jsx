"use client";

import React from 'react';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

import { IoCloseSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

const MobileNavbar = () => {

    const mobileNavbarLinks = [
        { name: "Página principal", path: "/" },
        { name: "Habilidades", path: "/skills" },
        { name: "Currículum", path: "/resume" }, 
        { name: "Contacto", path: "/contact" },
    ];

    const pathname = usePathname();
    const [ menuOpen, setMenuOpen ] = useState(false);

    return (
        <div className="flex justify-end">
            <button className="text-xl bg-primarycolor rounded p-2" onClick={ () => setMenuOpen(true) }>
                <FaBars />
            </button>
            { menuOpen &&
                <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} transition={{ duration: 0.5, type: "spring" }} 
                className={`w-full min-h-screen flex justify-center items-center fixed top-0 left-0 bg-primarycolor`}>
                    <button className="fixed top-5 right-5 bg-black rounded-3xl text-4xl p-1" onClick={ () => setMenuOpen(false) }><IoCloseSharp/></button>
                    <ul className="w-full flex justify-center flex-col gap-4 items-center h-full">
                        { mobileNavbarLinks.map(( link, index ) => (
                            <li key={ index } className={`text-xl font-bold ${pathname === link.path ? "text-black" : "text-white"}
                            hover:text-secondarycolor transition-all duration-150`}>
                                <Link href={ link.path } onClick={ () => setMenuOpen(false) }> { link.name } </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            }
        </div>
    )
};

export default MobileNavbar;