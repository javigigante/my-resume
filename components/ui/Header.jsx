"use client"

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Cambia el estado si se hace scroll más allá de 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Limpia el listener
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full flex justify-center items-center transition-all duration-300 ${
        isScrolled ? "bg-slate-900/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-11/12 flex justify-center px-4 py-6 items-center">
        <div className="flex-1">
          <h4 className="md:text-xl text-lg">
            Javier <span className="text-primarycolor">Díaz Gigante</span>
          </h4>
        </div>
        <div className="flex-1">
          <div className="md:block w-full hidden">
            <Navbar />
          </div>
          <div className="md:hidden w-full block">
            <MobileNavbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
