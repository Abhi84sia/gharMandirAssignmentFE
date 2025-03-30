"use client";

import React from "react";
import Image from "next/image";

const zodiacSigns = [
  { src: "/cancer.png", alt: "Cancer" },
  { src: "/leo.png", alt: "Leo" },
  { src: "/virgo.png", alt: "Virgo" },
  { src: "/libra.png", alt: "Libra" },
  { src: "/scorpio.png", alt: "Scorpio" },
  { src: "/aries.png", alt: "Aries" },
];

const ZodiacSignsCarousel = () => {
  return (
    <div className="relative w-full overflow-hidden py-6 bg-white">
      <h2 className="text-center text-[40px] font-bold text-gray-800 mt-[20px] mb-4">
        Zodiac Signs
      </h2>

      <div className="w-full overflow-hidden relative">
        <div className="flex items-center animate-marquee">
          {[...zodiacSigns, ...zodiacSigns, ...zodiacSigns].map(
            (sign, index) => (
              <div key={index} className="mx-4 flex-shrink-0">
                <Image
                  src={sign.src}
                  alt={sign.alt}
                  width={136}
                  height={136}
                  className="object-contain"
                  priority
                />
              </div>
            )
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-20%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ZodiacSignsCarousel;
