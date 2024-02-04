
import logo from "../../../images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import setUserDetails from "../../../redux/Actions/UserAction";
import React, { useState } from "react";


function Navbar() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user)

    const [open, setOpen] = useState(false);

    const logoutHandler = () => {

        localStorage.removeItem("jwtToken");
        dispatch(setUserDetails(null));
        navigate("/");
    };

    const toggleOpen = (e) => {
        e.stopPropagation();
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    return (
        <>
            <nav className="font-sans flex flex-col sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-[#e0e0e0] shadow sm:items-baseline w-full h-20">
                <div className="flex flex-row my-auto justify-between items-center w-full">
                    <div className="flex justify-center items-center lb-2 pl-10 sm:mb-0 inner">
                        <a
                            href="#"
                            className="relative flex items-center h-full font-black transition-transform duration-300 hover:translate-x-2"
                        >
                            <img
                                className="h-5 sm:h-4 md:h-6 lg:h-6"
                                src={logo}
                                alt=""
                            />
                            <span className="ml-3 text-xl text-gray-800 sm:text-lg md:text-xl lg:text-2xl"></span>
                        </a>
                    </div>

                    <div
                        className={`flex-col flex-grow pb-4 md:pb-0 ${!open && "hidden"
                            } md:flex md:justify-end md:flex-row`}
                    >
                        <div onClick={handleClickAway} className="relative">
                            <button
                                onClick={toggleOpen}
                                className="flex flex-row items-center space-x-2 rounded-2xl w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent md:w-auto md:inline md:mt-0 md:ml-4 hover:bg-gray-200 focus:outline-none focus:shadow-outline"
                            >
                                <span>Vishnu Krishnakumar</span>
                                <img
                                    className="inline h-8 rounded-full"
                                    src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4"
                                    alt="Profile"
                                />
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    className={`inline w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"
                                        }`}
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                            <div
                                className={`absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 ${open ? "block" : "hidden"
                                    }`}
                            >
                                <div className="py-2 bg-white rounded-lg text-black text-sm border border-main-color shadow-sm">
                                    <a
                                        className="block px-4 py-2 mt-2 text-sm bg-white md:mt-0 focus:text-gray-900 hover:bg-indigo-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                        href="#"
                                    >
                                        Settings
                                    </a>
                                    <a
                                        className="block px-4 py-2 mt-2 text-sm bg-white md:mt-0 focus:text-gray-900 hover:bg-indigo-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                        href="#"
                                    >
                                        Help
                                    </a>
                                    <div className="border-b"></div>
                                    <a
                                        onClick={logoutHandler}
                                        className="block px-4 py-2 mt-2 text-sm bg-white md:mt-0 focus:text-gray-900 hover:bg-indigo-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                        href="#"
                                    >
                                        Logout
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
