import React from "react";
import Navbar from "../Header/Accounts/Navbar";
import { FaArrowRight } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { IoSearchCircle } from "react-icons/io5";
import { PiPhoneCallFill } from "react-icons/pi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import boy from "../../images/boy.png";

function SignUp() {
  return (
    <div>
      <Navbar />
      <div className="sm:w-full md:w-screen h-full md:pb-30 pb-16 mt-2 bg-gray-100">
        <h1 className="pt-8 text-3xl text-center">
          How to get a job on
          <span className="font-extrabold"> CareerNest</span>
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-around mt-8 text-center">
          <div className="flex flex-col gap-4 bg-white items-center shadow text-lg font-medium justify-center w-80 h-32 border rounded-3xl">
            <FaUserCircle className="text-4xl text-green-700" />
            <p>Create your Profile</p>
          </div>
          <FaArrowRight className="items-center mt-4 md:mt-3 justify-center text-3xl text-yellow-700" />
          <div className="flex flex-col gap-4 items-center shadow bg-white text-lg font-medium justify-center w-80 h-32 border rounded-3xl">
            <IoSearchCircle className="text-4xl text-yellow-600" />
            <p>Apply for Jobs</p>
          </div>
          <FaArrowRight className="items-center mt-4 md:mt-3 justify-center text-3xl text-yellow-700" />
          <div className="flex flex-col gap-4 items-center shadow bg-white text-lg font-medium justify-center w-80 h-32 border rounded-3xl">
            <PiPhoneCallFill className="text-4xl text-blue-700" />
            <p>Contact HR Directly</p>
          </div>
        </div>
      </div>
      {/* ........................................................ */}
      <div className="w-full flex">
        {/* Image section */}
        <div className="w-1/3 h-96 text-center">
          <div className="flex flex-col gap-3 pt-5">
            <div className="flex flex-col gap-2 items-center">
              <img className="w-40" src={boy} alt="" />
              <h1 className="text-xl font-medium">On registering, you can</h1>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col gap-3">
                <div className="flex flex-row justify-start">
                  <BsFillCheckCircleFill className="text-lg text-green-600 mr-2" />
                  <span>Build your profile and let recruiters find you</span>
                </div>
                <div className="flex flex-row justify-start">
                  <BsFillCheckCircleFill className="text-lg text-green-600 mr-2" />
                  <span>Get job postings delivered right to your email</span>
                </div>
                <div className="flex flex-row justify-start">
                  <BsFillCheckCircleFill className="text-lg text-green-600 mr-2" />
                  <span>Find a job and grow your career</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* .................End................. */}
        {/* Form */}
        <div className="w-2/3 h-96 text-center border rounded-xl">
          <div>
            <h1 className="text-4xl pt-3">Create an account</h1>
            <h1 className="font-thin pt-3">
              It only takes a couple of minutes to get started!
            </h1>
            <h1 className="font-thin pt-1 text-green-800">it's free!</h1>
          </div>
          <div className="flex justify-between pt-10 bg-brown-300">
            <div className="flex items-center justify-center w-1/3 h-10 ml-20 rounded-xl bg-orange-700">
              Google
            </div>
            <div className="flex items-center justify-center w-1/3 h-10 mr-20 rounded-xl bg-orange-700">
              LinkedIn
            </div>
          </div>
        </div>
        {/* ....................End..................... */}
      </div>
    </div>
  );
}

export default SignUp;
