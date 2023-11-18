import React from "react";
import Navbar from "../Header/Accounts/Navbar";
import { FaArrowRight } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { IoSearchCircle } from "react-icons/io5";
import { PiPhoneCallFill } from "react-icons/pi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
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
          <div className="flex justify-center gap-16 pt-5">
            <div className="flex flex-row gap-10 items-center justify-center shadow-lg w-1/3 h-12 ml-20 rounded-xl bg-blue-gray-400">
              <div className="flex flex-row gap-2 items-center ">
                <FcGoogle className="text-2xl" />
                <p className="text-xl">Google</p>
              </div>
            </div>
            <div className="flex items-center  justify-center shadow-lg w-1/3 h-12 mr-20 rounded-xl bg-blue-gray-400">
              <div className="flex flex-row gap-2 items-center ">
                <FaLinkedin className="text-blue-800 text-2xl" />
                <p className="text-xl">LinkedIn</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-16 pt-5">
            <div className="flex flex-row gap-10 items-center justify-center shadow-lg w-52 h-10 ml-20 rounded-xl bg-blue-gray-400">
              <div className="flex flex-row gap-2 items-center ">
                <label
                  className="relative flex cursor-pointer items-center rounded-full p-3"
                  htmlFor="indigo"
                >
                  <input
                    id="indigo"
                    name="color"
                    type="radio"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-indigo-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-indigo-500 checked:before:bg-indigo-500 hover:before:opacity-10"
                  />
                  <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-indigo-500 opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                    </svg>
                  </div>
                </label>
                <p className="text-xl">Employeer</p>
              </div>
            </div>
            <div className="flex items-center  justify-center shadow-lg w-52 h-10 mr-20 rounded-xl bg-blue-gray-400">
              <div className="flex flex-row gap-2 items-center ">
                <label
                  className="relative flex cursor-pointer items-center rounded-full p-3"
                  htmlFor="indigo"
                >
                  <input
                    id="indigo"
                    name="color"
                    type="radio"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-indigo-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-indigo-500 checked:before:bg-indigo-500 hover:before:opacity-10"
                  />
                  <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-indigo-500 opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                    </svg>
                  </div>
                </label>
                <p className="text-xl">Candidate</p>
              </div>
            </div>
          </div>
          {/* Input Fields */}
          <form class="mt-8 mb-2 w-80 ">
            <div class="mb-4 flex flex-col gap-6">
              <div class="relative h-11 ">
                <input
                  class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeHolder=" "
                />
                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Name <span className="text-red-600">*</span>
                </label>
              </div>
              <div class="relative h-11 w-full min-w-[200px]">
                <input
                  class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeHolder=" "
                />
                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Email <span className="text-red-600">*</span>
                </label>
              </div>
              <div class="relative h-11 w-full min-w-[200px]">
                <input
                  type="password"
                  class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeHolder=" "
                />
                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Password <span className="text-red-600">*</span>
                </label>
              </div>
              <div class="relative h-11 w-full min-w-[200px]">
                <input
                  type="password"
                  class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeHolder=" "
                />
                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Mobile Number <span className="text-red-600">*</span>
                </label>
              </div>
            </div>
          </form>
        </div>
        {/* ....................End..................... */}
      </div>
    </div>
  );
}

export default SignUp;
