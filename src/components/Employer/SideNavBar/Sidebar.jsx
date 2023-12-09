import React, { useState } from "react";
import { FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { PiUsersThreeFill } from "react-icons/pi";
import { RiMessage2Fill, RiUserSearchFill } from "react-icons/ri";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

function Sidebar() {
  const [open, setOpen] = useState(true);
  const [activeLink, setActiveLink] = useState("");
  const [showJobSubmenus, setShowJobSubmenus] = useState(false);

  const menus = [
    {
      name: "Dashboard",
      link: "/employer/dashboard/",
      icon: MdDashboard,
    },
    {
      name: "Candidates",
      link: "/employer/candidatedetails/",
      icon: FaUserTie,
    },
    {
      name: "Jobs",
      link: "#",
      icon: RiUserSearchFill,
      submenus: [
        {
          name: "View Jobs",
          link: "/employer/jobs/",
        },
        {
          name: "Create Jobs",
          link: "2",
        },
      ],
    },
    {
      name: "Interviews",
      link: "3",
      icon: PiUsersThreeFill,
    },
    {
      name: "Services",
      link: "4",
      icon: RiMessage2Fill,
    },
  ];

  const handleLinkClick = (menu) => {
    setActiveLink(menu.link);

    if (menu.name === "Jobs") {
      setShowJobSubmenus(!showJobSubmenus);
    } else {
      setShowJobSubmenus(false);
    }
  };

  return (
    <div
      className={`bg-white h-screen shadow-lg text-center shadow-indigo-400 ${
        open ? "w-72" : "w-16"
      } duration-500 text-dark-900 px-4`}
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
          <div key={i}>
            <Link
              to={menu?.link}
              onClick={() => handleLinkClick(menu)}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm 
                                gap-10 font-medium p-2 rounded-xl ${
                                  activeLink === menu.link && open
                                    ? "bg-indigo-900  font-bold rounded-lg shadow-md"
                                    : ""
                                } ${
                showJobSubmenus && menu.name === "Jobs"
                  ? "bg-indigo-900  font-bold rounded-lg shadow-md"
                  : ""
              }`}
            >
              <div className="">
                {React.createElement(menu?.icon, { size: "25" })}
              </div>
              <h2
                style={{ transitionDelay: `${i + 3}00ms` }}
                className={`whitespace-pre duration-500 text-xl font-medium ${
                  !open && "opacity-0 -translate-x-1 overflow-hidden"
                } ${
                  activeLink === menu.link
                    ? " text-white"
                    : " hover:text-blue-900"
                } rounded-lg duration-500`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                }    absolute left-20 font-bold whitespace-pre 
                                    text-gray-900 bg-indigo-400 rounded-xl drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 
                                    group-hover:py-1 group-hover:left-14 group-hover:duration-100 group-hover:w-fit ${
                                      activeLink === menu.link
                                        ? "hover:bg-indigo-500 hover:text-white"
                                        : "hover:bg-cyan-800 hover:text-white"
                                    }`}
              >
                {menu?.name}
              </h2>
            </Link>
            {showJobSubmenus && menu.submenus && (
              <div className="">
                <div className="mx-auto flex flex-col w-1/2 gap-3 pt-2">
                  {menu.submenus.map((submenu, j) => (
                    <Link
                      key={j}
                      to={submenu.link}
                      onClick={() => handleLinkClick(submenu)}
                      className={`group flex items-center text-sm font-medium rounded-xl ${
                        activeLink === submenu.link && open
                          ? "bg-indigo-900  font-bold rounded-lg shadow-md"
                          : ""
                      }`}
                    >
                      {/* <div className="">
                      {React.createElement(submenu?.icon, { size: "25" })}
                    </div> */}
                      <h2
                        className={`whitespace-pre duration-500 text-base font-medium ${
                          !open && "opacity-0 -translate-x-1 overflow-hidden"
                        } ${
                          activeLink === submenu.link
                            ? "bg-indigo-500 text-white"
                            : "hover:bg-indigo-500 hover:text-white"
                        } rounded-lg duration-500`}
                      >
                        <div>{submenu?.name}</div>
                      </h2>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
