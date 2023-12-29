import React, { useState } from "react";
import { FaUserTie, FaRegImage } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaBuildingUser } from "react-icons/fa6";
import { RiMessage2Fill } from "react-icons/ri";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

function Sidebar() {
    const [open, setOpen] = useState(true);
    const [activeLink, setActiveLink] = useState("");

    const menus = [
        {
            name: "Dashboard",
            link: "/admindashboard",
            icon: MdDashboard,
        },
        {
            name: "Employeers",
            link: "/employeermanagement",
            icon: FaBuildingUser,
        },
        {
            name: "Candidates",
            link: "/candidatemanagement",
            icon: FaUserTie,
        },
        {
            name: "Messages",
            link: "/messages",
            icon: RiMessage2Fill,
        },
        {
            name: "Banners",
            link: "/bannermanagement",
            icon: FaRegImage,
        },
    ];

    const handleLinkClick = (menu) => {
        setActiveLink(menu.link);
    };

    return (
        <div
            className={`h-screen shadow-lg text-center  ${
                open ? "w-72" : "w-16"
            } duration-500 text-black px-4`}
        >
            <div className="py-3 flex justify-end">
                {open ? (
                    <TfiArrowCircleLeft
                        size={32}
                        color="gray"
                        className="cursor-pointer rounded-xl"
                        onClick={() => setOpen(!open)}
                    />
                ) : (
                    <TfiArrowCircleRight
                        size={32}
                        color="gray"
                        className="cursor-pointer rounded-xl"
                        onClick={() => setOpen(!open)}
                    />
                )}
            </div>
            <div className="mt-4 flex flex-col md:gap-7 gap-1 relative">
                {menus?.map((menu, i) => (
                    <Link
                        to={menu?.link}
                        key={i}
                        onClick={() => handleLinkClick(menu)}
                        className={` ${
                            menu?.margin && "mt-5"
                        } group flex items-center text-sm 
                  gap-10 font-medium p-2 rounded-xl ${
                      activeLink === menu.link
                          ? "font-bold rounded-lg bg-[#cccaca]"
                          : ""
                  }`}
                    >
                        <div
                            className={`${
                                activeLink === menu.link && !open ? "" : ""
                            }`}
                        >
                            {React.createElement(menu?.icon, { size: "25" })}
                        </div>

                        <div
                            style={{ transitionDelay: `${i + 3}00ms` }}
                            className={`whitespace-pre duration-500 text-xl font-medium ${
                                !open &&
                                "opacity-0 -translate-x-1 overflow-hidden"
                            } ${
                                activeLink === menu.link ? "text-black" : ""
                            } rounded-lg duration-500`}
                        >
                            {menu?.name}
                        </div>
                        <div
                            className={`${
                                open && "hidden"
                            } absolute left-20 font-bold whitespace-pre rounded-xl drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-100 group-hover:w-fit ${
                                activeLink === menu.link
                                    ? "bg-blue-gray-400 hover:text-black"
                                    : "bg-blue-gray-400 hover:text-black"
                            }`}
                        >
                            {menu?.name}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
