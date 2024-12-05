"use client"

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log('Scroll Y: ', window.scrollY);
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener( "scroll", handleScroll);
    return () => {
      window.removeEventListener( "scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full flex justify-center items-center transition-all duration-300 ${
        isScrolled ? "bg-slate-900/90 backdrop-blur-md shadow-sm z-50" : "bg-transparent"
      } z-50`}
    >
      <div className="w-11/12 flex justify-center px-4 py-6 items-center z-40">
        <div className="flex-1">
          <a href="/">
            <h4 className="lg:text-xl md:text-lg text-sm">
            Javier <span className="text-primarycolor">Díaz Gigante</span>
            </h4>
          </a>
          
        </div>
        <div className="flex-1">
          <div className="sm:block w-full hidden">
            <Navbar />
          </div>
          <div className="sm:hidden w-full block">
            <MobileNavbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
