import React from "react";
import logo from "../../../images/logo.png";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("jwtToken");
    dispatch(setUserDetails(null));
    dispatch(toggleLoading());
    setTimeout(() => {
      navigate("/");
    }, 0);
  };

  return (
    <>
      <nav className="font-sans flex flex-col sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-[#e0e0e0] shadow sm:items-baseline w-full h-20">
        <div className="flex flex-row my-auto justify-between items-center w-full">
          <div className="flex justify-center items-center mb-2 ml-10 sm:mb-0 inner">
            <a
              href="#"
              className="relative flex items-center h-full font-black transition-transform duration-300 hover:translate-x-2"
            >
              <img className="h-5 sm:h-4 md:h-6 lg:h-6" src={logo} alt="" />
              <span className="ml-3 text-xl text-gray-800 sm:text-lg md:text-xl lg:text-2xl"></span>
            </a>
          </div>
          <div className="sm:mb-0 self-center">
            <Link
              onClick={logoutHandler}
              className="text-xl no-underline border shadow-xl text-black hover:text-blue-dark mr-10 px-1"
            >
              Logout
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
