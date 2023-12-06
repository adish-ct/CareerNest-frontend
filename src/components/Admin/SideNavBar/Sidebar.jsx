import React, { useState } from "react";
import { FaUserTie, FaRegImage } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsCaretLeftSquareFill } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { FaBuildingUser } from "react-icons/fa6";
import { RiMessage2Fill } from "react-icons/ri";

function Sidebar() {
  const [open, setOpen] = useState(true);
  const [activeLink, setActiveLink] = useState("");

  const menus = [
    {
      name: "Dashboard",
      link: "/super-admin/dashboard",
      icon: MdDashboard,
    },
    {
      name: "Employeers",
      link: "/super-admin/employermanagement",
      icon: FaBuildingUser,
    },
    {
      name: "Candidates",
      link: "/super-admin/candidatemanagement",
      icon: FaUserTie,
    },
    {
      name: "Messages",
      link: "/messages",
      icon: RiMessage2Fill,
    },
    {
      name: "Banners",
      link: "/super-admin/bannermanagement",
      icon: FaRegImage,
    },
  ];

  const handleLinkClick = (menu) => {
    setActiveLink(menu.link);
  };

  return (
    <div
      className={`h-screen bg-white shadow-lg text-center shadow-indigo-400 ${open ? "w-72" : "w-16"
        } duration-500 text-dark-900 px-4`}
    >
      <div className="py-3 flex justify-end">
        <BsCaretLeftSquareFill
          size={32}
          color="gray"
          className="cursor-pointer rounded-xl"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="mt-4 flex flex-col md:gap-7 gap-1 relative">
        {menus?.map((menu, i) => (
          <Link
            to={menu?.link}
            key={i}
            onClick={() => handleLinkClick(menu)}
            className={` ${menu?.margin && "mt-5"
              } group flex items-center text-sm 
                  gap-10 font-medium p-2 rounded-xl ${activeLink === menu.link && open
                ? "bg-indigo-900  font-bold rounded-lg shadow-md"
                : ""
              }`}
          >
            <div className="">
              {React.createElement(menu?.icon, { size: "25" })}
            </div>
            <h2
              style={{ transitionDelay: `${i + 3}00ms` }}
              className={`whitespace-pre duration-500 text-xl font-medium ${!open && "opacity-0 -translate-x-1 overflow-hidden"
                } ${activeLink === menu.link
                  ? "bg-indigo-500 text-white"
                  : "hover:bg-indigo-500 hover:text-white"
                } rounded-lg duration-500`}
            >
              {menu?.name}
            </h2>
            <h2
              className={`${open && "hidden"
                } absolute left-20 font-bold whitespace-pre 
                  text-gray-900 bg-indigo-400 rounded-xl drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 
                  group-hover:py-1 group-hover:left-14 group-hover:duration-100 group-hover:w-fit ${activeLink === menu.link
                  ? "hover:bg-indigo-500 hover:text-white"
                  : "hover:bg-cyan-800 hover:text-white"
                }`}
            >
              {menu?.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
