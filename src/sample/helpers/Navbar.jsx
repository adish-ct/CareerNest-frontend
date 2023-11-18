import React, { useState } from 'react'
import { MdOutlineHorizontalRule } from "react-icons/md";


function Navbar() {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const [isIconClicked, setIconClicked] = useState(false);

    const handleIconClick = () => {
        setIconClicked(!isIconClicked);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Main Navbar */}
            <header className="relative w-full h-20 border-b-2 z-[999]">
                <div className="container mx-auto flex items-center justify-between h-full max-w-6xl px-8 sm:px-6 lg:px-8 xl:px-0">
                    <a
                        href="/"
                        className="relative flex items-center h-full font-black transition-transform duration-300 hover:translate-x-2"
                    >
                        <img className="h-5 sm:h-4 md:h-6 lg:h-6" src={logo} alt="" />
                        <span className="ml-3 text-xl text-gray-800 sm:text-lg md:text-xl lg:text-2xl"></span>
                    </a>

                    <nav
                        id=""
                        className={`${isMobileMenuOpen ? "flex animate-waveMotion" : "hidden"
                            } absolute top-0 left-0  flex flex-col items-center justify-between w-full h-64 pt-5 mt-24 text-sm text-gray-800 bg-white border-t border-gray-200 md:w-auto md:flex-row md:h-24 lg:text-base md:bg-transparent md:mt-0 md:border-none md:py-0 md:flex md:relative transition-all duration-300`}
                    >
                        <a
                            href="#"
                            className="group relative ml-0 mr-0 font-bold md:ml-2 md:mr-2 lg:mr-4 sm:mr-4 transition-color hover:text-red-600 transition-transform duration-300 hover:translate-x-1"
                        >
                            <span className="">Home</span>
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform origin-bottom scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </a>
                        <a
                            href="#"
                            className="group relative ml-0 mr-0 font-bold md:ml-2 md:mr-2 lg:mr-4 sm:mr-4 transition-color hover:text-red-600 transition-transform duration-300 hover:translate-x-1"
                        >
                            Jobs
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform origin-bottom scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </a>
                        <a
                            href="#"
                            className="group relative ml-0 mr-0 font-bold md:ml-2 md:mr-2 lg:mr-4 sm:mr-4 transition-color hover:text-red-600 transition-transform duration-300 hover:translate-x-1"
                        >
                            Companies
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform origin-bottom scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </a>
                        <a
                            href="#"
                            className="group relative ml-0 mr-0 font-bold md:ml-2 md:mr-2 lg:mr-4 sm:mr-4 transition-color hover:text-red-600 transition-transform duration-300 hover:translate-x-1"
                        >
                            Services
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform origin-bottom scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </a>
                        <div className="flex flex-col w-full font-medium border-t border-gray-200 md:hidden">
                            <a
                                href="#"
                                className="w-full py-2 font-bold text-base text-center text-red-600"
                            >
                                Login
                            </a>
                            <a
                                href="#"
                                className="relative inline-block w-full font-bold px-5 py-3 text-base leading-none text-center text-red-600"
                            >
                                Signup
                            </a>
                        </div>
                    </nav>
                    {/* <div className="absolute left-0 mt-0 flex-col items-center justify-center hidden w-full pb-8 border-b border-gray-100 md:relative md:w-auto md:bg-transparent md:border-none md:mt-0 md:flex-row md:p-0 md:items-end md:flex md:justify-between">
            <a
              href="#"
              className="relative mb-1 mt-0 z-40 px-3 py-2 mr-0 text-base outline-4 font-bold text-red-600 md:px-5 sm:mr-3 md:mt-0 transition-transform duration-300 hover:translate-x-1"
            >
              Login
            </a>
            <div
              className="mr-2"
              style={{
                transform: "rotate(90deg) scaleX(0.5)",
                color: "grey",
                fontSize: "45px",
              }}
            >
              <MdOutlineHorizontalRule />
            </div>
            <a
              href="#"
              className="relative mb-1 z-40 inline-block w-auto h-full px-5 py-3 text-base font-bold text-red-600 leading-none fold-bold sm:w-full transition-transform duration-300 hover:translate-x-1"
            >
              Signup
            </a>
          </div> */}
                    {/* <div className="flex-initial">
            <div className="flex justify-end items-center relative">
              <div className="hidden md:inline">
                <div className="inline relative">
                  <button
                    type="button"
                    className="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg"
                  >
                    <div className="pl-1">
                      <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                          display: "block",
                          fill: "none",
                          height: "16px",
                          width: "16px",
                          stroke: "currentcolor",
                          strokeWidth: "3",
                          overflow: "visible",
                        }}
                      >
                        <g fill="none" fillRule="nonzero">
                          <path d="m2 16h28"></path>
                          <path d="m2 24h28"></path>
                          <path d="m2 8h28"></path>
                        </g>
                      </svg>
                    </div>

                    <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                      <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                          display: "block",
                          height: "100%",
                          width: "100%",
                          fill: "currentcolor",
                        }}
                      >
                        <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div> */}

                    <div className="flex-initial">
                        <div className="flex justify-end items-center relative">
                            <div className="hidden md:inline">
                                <div className="inline relative">
                                    <button
                                        type="button"
                                        className="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg"
                                        onClick={handleIconClick}
                                    >
                                        <div className="pl-1">
                                            {/* SVG for the user icon */}
                                            <svg
                                                viewBox="0 0 32 32"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                                role="presentation"
                                                focusable="false"
                                                style={{
                                                    display: "block",
                                                    fill: "none",
                                                    height: "16px",
                                                    width: "16px",
                                                    stroke: "currentcolor",
                                                    strokeWidth: "3",
                                                    overflow: "visible",
                                                }}
                                            >
                                                <g fill="none" fillRule="nonzero">
                                                    <path d="m2 16h28"></path>
                                                    <path d="m2 24h28"></path>
                                                    <path d="m2 8h28"></path>
                                                </g>
                                            </svg>
                                        </div>

                                        <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5 relative">
                                            <svg
                                                viewBox="0 0 32 32"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                                role="presentation"
                                                focusable="false"
                                                style={{
                                                    display: "block",
                                                    height: "100%",
                                                    width: "100%",
                                                    fill: "currentcolor",
                                                }}
                                            >
                                                <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
                                            </svg>
                                            {isIconClicked && (
                                                <div className="animate-wave absolute left-[-3.4rem] w-32 mr-1 py-2 border border-gray-200 divide-y divide-gray-100 rounded-xl shadow-lg outline-none z-0">
                                                    <div className="px-4 py-3">
                                                        <p className="text-base leading-6 hover:text-red-500">
                                                            Profile
                                                        </p>
                                                        <p className="text-base leading-5 mt-1 hover:text-red-500">
                                                            Settings
                                                        </p>
                                                        <p className="text-base leading-5 mt-1 border hover:text-red-500">
                                                            Logout
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        id="nav-mobile-btn"
                        className="absolute top-0 right-0  block w-8 md:w-10 mt-7 mr-6 md:mr-10 cursor-pointer select-none md:hidden sm:mt-7 transition-transform duration-300 ease-in-out"
                        onClick={toggleMobileMenu}
                    >
                        <span
                            className={`block w-full h-1 transform bg-red-800 rounded-full ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                                }`}
                        ></span>
                        <span
                            className={`block w-full h-1 mt-1 transform bg-red-800 rounded-full ${isMobileMenuOpen ? "opacity-0" : ""
                                }`}
                        ></span>
                        <span
                            className={`block w-full h-1 mt-1 transform bg-red-800 rounded-full ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                                }`}
                        ></span>
                    </div>
                </div>
            </header>
            {/* .............................................. */}
        </div>
    )
}

export default Navbar
