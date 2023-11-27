import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaUserCircle, FaWhatsapp } from "react-icons/fa";
import { IoSearchCircle } from "react-icons/io5";
import { PiPhoneCallFill } from "react-icons/pi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import boy from "../../images/boy.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import axios from 'axios'
import { baseUrl } from '../../api/Api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isChecked, setIsChecked] = useState(false);
  const [setstore, setSetstore] = useState([])
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const getRole = () => {
    axios.get(`${baseUrl}/accounts/`).then((response) => {
      setSetstore(response.data)
    })
  };

  useEffect(() => {
    getRole();
  }, [])

  const signUpHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseUrl}/accounts/register/`, {
        username,
        email,
        phone,
        password,
        role
      });

      if (response.data) {
        toast.success("Successfully registered");
        navigate('/login/')
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error response data:", error.response.data);
        toast.error("Registration failed. Please check your inputs.");
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Error request data:", error.request);
        toast.error("No response from the server. Please try again later.");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error message:", error.message);
        toast.error("An unexpected error occurred. Please try again.");
      }
    }

  }
  return (
    <div>
      <ToastContainer />
      <div className="sm:w-full p-10 bg-gray-100">
        <h1 className="text-3xl text-center">
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

      <div className="w-full flex  p-10">

        {/* --------------------left section--------------------- */}

        <div className="text-center hidden md:block lg:w-1/3 xl:w-1/3 md:w-1/3 p-10">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-4 items-center">
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
        {/* .................left section End................. */}

        {/*--------------------- right section ---------------------*/}

        <div className="w-2/3 text-center :w-3/3">
          <div className="border rounded-3xl shadow-xl p-10">
            <p> { } </p>
            <form action="" onSubmit={signUpHandler} >
              <div>
                <h1 className="text-4xl">Create an account</h1>
                <h1 className="font-thin pt-3 text-gray-500">
                  It only takes a couple of minutes to get started!
                </h1>
                <h1 className="font-thin pt-1 text-green-800">it's free!</h1>
              </div>
              <div className="flex justify-center gap-16 pt-5">

                <div className="flex flex-row gap-10 cursor-pointer items-center justify-center shadow-lg w-1/3 h-12 ml-20 rounded-xl border">
                  <div className="flex flex-row gap-2 items-center transition-transform duration-300 hover:translate-x-1">
                    <FcGoogle className="text-2xl" />
                    <p className="text-xl">Google</p>
                  </div>
                </div>

                <div className="flex items-center cursor-pointer justify-center shadow-lg w-1/3 h-12 mr-20 rounded-xl border ">
                  <div className="flex flex-row gap-2 items-center transition-transform duration-300 hover:translate-x-1">
                    <FaLinkedin className="text-blue-800 text-2xl" />
                    <p className="text-xl">LinkedIn</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <hr className="h-px border-b border-solid border-gray-200 grow" />
                <p className="mx-4 text-gray-600">or</p>
                <hr className="h-px border-b border-solid border-gray-200 grow" />
              </div>
              <div className="flex justify-center gap-16 pt-5">
                {
                  setstore.map((role, index) => (
                    <div className="flex flex-row gap-10 p-2 ps-6 pe-6 items-center justify-center shadow-lg rounded-2xl border" key={index}>
                      <label
                        className="relative flex cursor-pointer items-center rounded-full"
                        htmlFor="indigo"
                      >
                        <input id={index} name="role" type="radio" value={role.id} onChange={(e) => setRole(e.target.value)}
                          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-indigo-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-indigo-500 checked:before:bg-indigo-500 hover:before:opacity-10"
                        />
                        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-indigo-500 opacity-0 transition-opacity peer-checked:opacity-100">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                          </svg>
                        </div>
                      </label>
                      <p className="text-lg">{role.role}</p>
                    </div>
                  ))
                }

              </div>

              {/* Input Fields */}
              <div className="flex justify-center pt-1 items-center">
                <div className="lg:w-3/5 ">
                  <div>
                    <label className="text-gray-800 font-medium text-start block my-3 text-md" htmlFor="username">
                      Full Name
                    </label>
                    <input onChange={(e) => { setUsername(e.target.value) }} className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="username" id="username" placeholder="full name" />
                  </div>
                  <div>
                    <label className="text-gray-800 text-start font-medium block my-3 text-md" htmlFor="email">
                      Email
                    </label>
                    <input onChange={(e) => { setEmail(e.target.value) }} className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="email" id="email" placeholder="email" />
                  </div>
                  <div>
                    <label className="text-gray-800 text-start font-medium block my-3 text-md" htmlFor="phone">
                      Mobile Number
                    </label>
                    <PhoneInput
                      country={"in"}
                      enableSearch={true}
                      inputStyle={{
                        width: "100%",
                        maxWidth: "100%",
                        height: "42px",
                        fontSize: "14px",
                        color: "black",
                        border: "None",
                        background: "rgb(245,245,245)",
                        borderRadius: "8px",
                      }}
                      value={phone}
                      onChange={(phone) => setPhone(phone)}
                    />
                  </div>
                  <div>
                    <label
                      className="text-gray-800 text-start font-medium block my-3 text-md"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="password"
                    />
                  </div>
                  <div>
                    <label
                      className="text-gray-800 text-start font-medium block my-3 text-md"
                      htmlFor="confirm"
                    >
                      Confirm password
                    </label>
                    <input
                      className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                      type="password"
                      name="confirm"
                      id="confirm"
                      placeholder="confirm password"
                    />
                  </div>
                  <div className="justify-center items-start pt-5">
                    <div className="flex">
                      <div className="">
                        <label className="autoSaverSwitch inline-flex cursor-pointer select-none ">
                          <input
                            type="checkbox"
                            name="autoSaver"
                            className="sr-only"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                          />
                          <span
                            className={`slider mr-3 flex h-[20px] w-[40px] items-center rounded-full p-1 duration-200 ${isChecked ? "bg-green-800" : "bg-[#CCCCCE]"
                              }`}
                          >
                            <span
                              className={`dot h-[13px] w-[13px] rounded-full bg-white duration-200 ${isChecked ? "translate-x-6" : ""
                                }`}
                            ></span>
                          </span>
                        </label>
                      </div>
                      <div className="flex gap-4 text-base">
                        <h1 className="">Receive recruiter notifications on</h1>
                        <h1 className="text-green-800 flex gap-2">
                          <FaWhatsapp className="mt-1" />
                          WhatsApp
                        </h1>
                      </div>
                    </div>
                    <div className="flex gap-3 pt-2 font-thin text-sm text-gray-600">
                      I agree to foundit’s
                      <span className="text-blue-800 cursor-pointer transition-transform duration-300 hover:translate-x-1">
                        Terms and Conditions
                      </span>{" "}
                      <span className="text-blue-800 cursor-pointer transition-transform duration-300 hover:translate-x-1">
                        Privacy Policy
                      </span>
                    </div>
                    <div className="flex gap-2 pt-2 text-sm text-gray-600">
                      and default mailer and communications settings governing
                      the use of{" "}
                      <span className="text-blue-800 cursor-pointer transition-transform duration-300 hover:translate-x-1">
                        careernest.in
                      </span>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans transition-transform duration-300 hover:translate-x-1"
                  >
                    Register
                  </button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div >
  );
}

export default SignUp;
