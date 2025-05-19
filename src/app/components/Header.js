"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MainLogo from "../../../public/assets/images/main-logo.png";
import { FavTop, YoutubeTop } from "./Icons";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [showHeader, setShowHeader] = useState(true);
  const [isFixed, setIsFixed] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentPath, setCurrentPath] = useState("");

  // UseEffect to set the initial path and listen to route changes
  useEffect(() => {
    setCurrentPath(window.location.pathname);

    const handleRouteChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsFixed(false); // Smoothly return to normal when at the top
        setShowHeader(true);
      } else {
        setIsFixed(true);
        setShowHeader(currentScrollY < lastScrollY); // Show when scrolling up, hide when scrolling down
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`w-full  z-50 transition-all duration-500 ease-in-out ${
        isFixed ? "fixed top-0" : "absolute"
      } ${
        showHeader ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className=" px-4 md:px-8 lg:px-[65px]   pt-7 pb-3 ">
        <div className="flex gap-10 py-1 items-center rounded-[15px] border px-5 bg-[linear-gradient(0deg,_rgba(0,0,0,0.2)_0%,_rgba(0,0,0,0.2)_100%),linear-gradient(90deg,_rgba(64,64,64,0.48)_0%,_rgba(77,77,77,0.48)_100%)]">
          <div>
            <Link href="/">
              <Image
                src={MainLogo}
                alt="main icon"
                className="w-[150px] md:w-[250px]"
                width={500}
                height={500}
              />
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block md:hidden text-white focus:outline-none z-20 ms-auto"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="36"
                viewBox="0 0 37 36"
                fill="none"
              >
                <line
                  x1="0.646447"
                  y1="35.6464"
                  x2="35.2947"
                  y2="0.998215"
                  stroke="white"
                />
                <line
                  x1="1.35355"
                  y1="0.646447"
                  x2="36.0018"
                  y2="35.2947"
                  stroke="white"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="49"
                height="10"
                viewBox="0 0 49 10"
                fill="none"
              >
                <path d="M0 0.5H49M0 9.5H49" stroke="white" />
              </svg>
            )}
          </button>

          {/* Navigation Links */}
          <div
            className={`fixed top-0 left-0  w-full md:bg-transparent bg-primary md:h-full  h-screen  shadow-lg transform ${
              isMenuOpen
                ? "translate-x-0"
                : "-translate-x-full md:translate-x-0"
            } transition-transform duration-300 md:relative z-10 md:shadow-none md:flex md:items-center md:w-full`}
          >
            <ul className="flex flex-col md:flex-row items-start  md:items-center gap-6 md:gap-12 p-4 md:h-auto md:pt-4 pt-20 pe-0">
              <li
                className={`text-[16px] hover-text-gradient  md:text-[16px]  text-secondary relative group ${
                  [
                    "/digital-transformation",
                    "/artificial-intelligence",
                    "/software-development",
                  ].includes(currentPath)
                    ? "header_active"
                    : ""
                }`}
              >
                <Link href="#" className="">
                  Licensing
                </Link>
                {/* <ul className="absolute md:left-0 left-[100px]  top-0 z-50 md:top-full hidden border border-[#101010] bg-primary shadow-md rounded-md w-60 group-hover:flex flex-col">
                                <li className='p-3 border-b border-[#101010]'>
                                    <Link onClick={() => setIsMenuOpen(false)} href="/digital-transformation" className=" text-secondary text-[18px] font-[300] opacity-50 hover:opacity-100">
                                        Digital Transformation
                                    </Link>
                                </li>
                                <li className='p-3 border-b border-[#101010]'>
                                    <Link onClick={() => setIsMenuOpen(false)} href="/artificial-intelligence" className=" text-secondary text-[18px] font-[300] opacity-50 hover:opacity-100">
                                        Artificial intelligence
                                    </Link>
                                </li>
                                <li className='p-3 border-b border-[#101010]'>
                                    <Link onClick={() => setIsMenuOpen(false)} href="/software-development" className=" text-secondary text-[18px] font-[300] opacity-50 hover:opacity-100">
                                        Software Development
                                    </Link>
                                </li>
                            </ul> */}
              </li>

              <li className="text-[16px] hover-text-gradient   text-secondary md:text-[16px] font-">
                <Link
                  href="/industries"
                  className={` ${
                    currentPath === "/industries" && "header_active"
                  }   `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Guide
                </Link>
              </li>

              <li
                className={`text-[16px] hover-text-gradient  text-secondary md:text-[16px] relative group ${
                  ["/prudentaly", "/nexivo", "/testnut", "/docurator"].includes(
                    currentPath
                  )
                    ? "header_active"
                    : ""
                }`}
              >
                <Link
                  href="#"
                  className={` ${
                    currentPath === "/products" && "header_active"
                  }   `}
                >
                  Service
                </Link>
                {/* <ul className="absolute md:left-0 left-[100px]  top-0 z-50 md:top-full hidden border border-[#101010] bg-primary shadow-md rounded-md w-40 group-hover:flex flex-col">

                                <li className='p-3 border-b border-[#101010]'>
                                    <Link onClick={() => setIsMenuOpen(false)} href="/prudentaly" className=" text-secondary text-[18px] font-[300] opacity-50 hover:opacity-100">
                                        Prudentaly
                                    </Link>
                                </li>
                                <li className='p-3 border-b border-[#101010]'>
                                    <Link onClick={() => setIsMenuOpen(false)} href="/nexivo" className=" text-secondary text-[18px] font-[300] opacity-50 hover:opacity-100">
                                        Nexivo
                                    </Link>
                                </li>
                                <li className='p-3 border-b border-[#101010]'>
                                    <Link onClick={() => setIsMenuOpen(false)} href="/testnut" className=" text-secondary text-[18px] font-[300] opacity-50 hover:opacity-100">
                                        Testnut
                                    </Link>
                                </li>
                                <li className='p-3 border-b border-[#101010]'>
                                    <Link onClick={() => setIsMenuOpen(false)} href="/docurator" className=" text-secondary text-[18px] font-[300] opacity-50 hover:opacity-100">
                                        Docurator
                                    </Link>
                                </li>
                            </ul> */}
              </li>
              <li className="text-[16px] hover-text-gradient  text-secondary md:text-[16px]">
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  href="/process"
                  className={` ${
                    currentPath === "/process" && "header_active"
                  }   `}
                >
                  Workspace
                </Link>
              </li>
              <li className="text-[16px] hover-text-gradient  text-secondary md:text-[16px] font-">
                <Link
                  href="/about"
                  className={` ${
                    currentPath === "/about" && "header_active"
                  }   `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Accounting
                </Link>
              </li>
              <li className="text-[16px] hover-text-gradient  text-secondary md:text-[16px] font-">
                <Link
                  href="/about"
                  className={` ${
                    currentPath === "/about" && "header_active"
                  }   `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Visa
                </Link>
              </li>
              <li className="text-[16px] hover-text-gradient  text-secondary md:text-[16px] font-">
                <Link
                  href="/about"
                  className={` ${
                    currentPath === "/about" && "header_active"
                  }   `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Company
                </Link>
              </li>
            </ul>

            <ul className="flex ms-auto flex-col md:flex-row items-start  md:items-center gap-6 md:gap-4 p-4 md:h-auto  md:pt-4 pt-20 pe-0">
              <li className="text-[16px] text-secondary hover:bg-white hover:text-primary md:text-[16px] border border-[#BFB6C3] rounded-[5px] px-3 py-2">
                <Link href="/" className="flex items-center gap-2">
                  <YoutubeTop /> Watch
                </Link>
              </li>
              <li className="text-[16px] text-secondary hover:bg-white hover:text-primary md:text-[16px] border border-[#BFB6C3] rounded-[5px] px-3 py-2">
                <Link href="/" className="flex items-center gap-2">
                  <FavTop /> Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
