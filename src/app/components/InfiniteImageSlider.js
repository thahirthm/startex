"use client"
import Image from "next/image";
import React from "react";
import Cr1 from "../../../public/assets/images/home/cr1.png";
import CraftBg from "../../../public/assets/images/home/craft-bg.png";



// Replace with your image imports or URLs
const images = [
    Cr1,
    Cr1,
    Cr1,
    Cr1,
    Cr1,
    Cr1,
    Cr1,
    Cr1,
    Cr1,
    Cr1
];

const rows = 3; // Number of rows

const InfiniteImageSlider = () => {
    return (
        <div className="w-full py-10 ] overflow-hidden relative">
            {[...Array(rows)].map((_, rowIdx) => (
                <div
                    key={rowIdx}
                    className="flex items-center mb-4"
                    style={{
                        animation: `slide-${rowIdx % 2 === 0 ? "left" : "right"} 30s linear infinite`
                    }}
                >
                    {/* Duplicate images for seamless loop */}
                    {[...images, ...images].map((img, idx) => (
                        <div
                            key={idx}
                            className="mx-2 rounded-lg overflow-hidden shadow-lg"
                            style={{ width: 120, height: 90, flex: "0 0 auto" }}
                        >
                            <Image
                                src={img}
                                alt=""
                                className="w-full h-full object-cover"
                                draggable={false}
                            />
                        </div>
                    ))}
                </div>
            ))}
            <style jsx>{`
        @keyframes slide-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes slide-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        div[style*="animation: slide-left"] {
          animation-duration: 30s;
        }
        div[style*="animation: slide-right"] {
          animation-duration: 40s;
        }
      `}</style>


      <div className="absolute top-0 left-0 w-full h-full z-1">
        <Image
            src={CraftBg}
            alt="Crafting Entrepreneurs"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
            />
      </div>
        </div>
    );
};

export default InfiniteImageSlider;