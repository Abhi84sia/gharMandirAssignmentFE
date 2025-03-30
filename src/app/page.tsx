"use client";

import React from "react";
import ZodiacSignsCarousel from "./components/ZodiacSignsCarousel";
import CalendarHeader from "./components/calendarHeader";
import Festivals from "./components/festivals";
import Hinducalendar from "./components/hinduCalendar";
import PanchaangDetails from "./components/panchangDetails";
import IndianPanchaang from "./components/indianPanchaang";
import LunarMonth from "./components/lunarMonthList";
import Footer from "./components/footer";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("");
  const [currentImage, setCurrentImage] = useState("/panchaang.png");

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth < 768) {
        setCurrentImage("/Placeholder.png");
      } else {
        setCurrentImage("/panchaang.png");
      }
    };

    updateImage(); 

    window.addEventListener("resize", updateImage); 

    return () => {
      window.removeEventListener("resize", updateImage); 
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="relative bg-[#fae6b8] px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="md:hidden order-first">
            <button
              onClick={toggleMenu}
              className="text-[#8B4513] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="flex items-center justify-center flex-grow md:flex-grow-0">
            <Image
              src="/Ghar-Mandir-logo_vFINAL 1.png"
              alt="Ghar Mandir Logo"
              width={269}
              height={84}
              className="h-20 w-64"
            />
          </div>

          <div className="md:hidden w-6"></div>
          <nav
            className={`fixed inset-0 bg-[#fae6b8] z-50 flex flex-col items-center justify-center
            md:static md:flex md:flex-row md:space-x-2 md:bg-transparent md:z-auto 
            ${isMenuOpen ? "block" : "hidden"}
          `}
          >
            <button
              onClick={toggleMenu}
              className="md:hidden absolute top-4 right-4 text-[#8B4513]"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            {[
              { name: "Home", link: "/" },
              { name: "Upcoming Chadawa", link: "/upcoming-chadawa" },
              { name: "Upcoming Puja", link: "/upcoming-puja" },
              { name: "Panchang", link: "/panchang" },
              { name: "VIP Puja", link: "/vip-puja" },
              { name: "At Home Guided Pujas", link: "/guided-pujas" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className={`px-3 py-2 rounded-md text-lg font-medium transition-all
                  ${
                    activeButton === item.name
                      ? "bg-[#b75500] text-white scale-105"
                      : "text-[#00000] hover:bg-[#b75500] hover:text-white"
                  }`}
                onClick={() => handleClick(item.name)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <div className="relative w-full mt-[10px]">
        <Image
          src={currentImage}
          alt="Full-screen Background"
          width={1920}
          height={800}
          className="w-full h-200px"
          priority
        />
      </div>
      <ZodiacSignsCarousel />
      <CalendarHeader />
      <Festivals />
      <Hinducalendar />
      <PanchaangDetails />
      <IndianPanchaang />
      <LunarMonth />
      <Footer />
    </>
  );
}
