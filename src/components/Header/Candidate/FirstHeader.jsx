import React, { useState } from "react";
import logo from "../../../images/logo.png";
import { MdOutlineHorizontalRule } from "react-icons/md";

function FirstHeader() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="w-full h-8 flex items-center justify-end bg-blue-gray-50">
        <a href="">
          <p className="mr-2 sm:mr-10">For Employer</p>
        </a>
        <div
          className="mr-2 sm:mr-10"
          style={{ transform: "rotate(90deg)", fontSize: "24px" }}
        >
          <MdOutlineHorizontalRule />
        </div>
        <a href="">
          <p className="mr-2 sm:mr-16">Help</p>
        </a>
      </div>
      <header className="relative w-full h-20 z-50">
        <div className="container mx-auto flex items-center justify-between h-full max-w-6xl px-8 sm:px-6 lg:px-8 xl:px-0">
          <a
            href="/"
            className="relative flex items-center h-full font-black transition-transform duration-300 hover:translate-x-2"
          >
            <img className="h-6" src={logo} alt="" />
            <span className="ml-3 text-xl text-gray-800 sm:text-lg md:text-xl lg:text-2xl">
            
            </span>
          </a>

          <nav
            id=""
            className={`${
              isMobileMenuOpen ? "flex" : "hidden"
            } absolute top-0 left-0 z-50 flex flex-col items-center justify-between w-full h-64 pt-5 mt-24 text-sm text-gray-800 bg-white border-t border-gray-200 md:w-auto md:flex-row md:h-24 lg:text-base md:bg-transparent md:mt-0 md:border-none md:py-0 md:flex md:relative`}
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
                className="relative inline-block w-full px-5 py-3 text-base leading-none text-center text-red-600"
              >
                Signup
              </a>
            </div>
          </nav>

          <div className="absolute left-0 flex-col items-center justify-center hidden w-full pb-8 mt-48 border-b border-gray-200 md:relative md:w-auto md:bg-transparent md:border-none md:mt-0 md:flex-row md:p-0 md:items-end md:flex md:justify-between">
            <a
              href="#"
              className="relative z-40 px-3 py-2 mr-0 text-base outline-4 font-bold text-red-600 md:px-5 sm:mr-3 md:mt-0 transition-transform duration-300 hover:translate-x-1"
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
              className="relative z-40 inline-block w-auto h-full px-5 py-3 text-base font-bold text-red-600 leading-none fold-bold sm:w-full transition-transform duration-300 hover:translate-x-1"
            >
              Signup
            </a>
          </div>

          <div
            id=""
            className="absolute top-0 right-0 z-50 block w-6 mt-8 mr-10 cursor-pointer select-none md:hidden sm:mt-10"
            onClick={toggleMobileMenu}
          >
            <span className="block w-full h-1 mt-2 duration-200 transform bg-gray-800 rounded-full sm:mt-1"></span>
            <span className="block w-full h-1 mt-1 duration-200 transform bg-gray-800 rounded-full"></span>
          </div>
        </div>
      </header>
    </>
  );
}

export default FirstHeader;
