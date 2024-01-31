import React, { useState } from "react";
import images from "../../../images/images.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { ApplicantDashboard } from "./ApplicantDashboard";
import { TbMessage2 } from "react-icons/tb";
import Rate from "./Rate";
const Applicant = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  return (
    <>
      <div className="w-full bg-[#f0efef] p-2 rounded-md">
        <div className="w-full rounded-md">
          <div className="p-2 bg-white shadow-sm border rounded">
            <h1 className="text-2xl my-4 mx-auto font-extrabold text-center sm:text-2xl lg:text-3xl">
              APPLICANT PROFILE
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col gap-2 p-4">
            <div className="bg-white h-full w-full md:w-2/4 sm:w-full lg:w-2/4 border-black-500 border-2 rounded-xl">
              <div className="flex flex-row">
                <img src={images} className="rounded-2xl m-3 h-20 w-20"></img>
                <div className="m-2 mt-4">
                  <h2 className="font-bold text-xl font-serif">
                    {" "}
                    Vishnu Krishnakumar
                  </h2>
                  <p className="font-extralight text-gray-700 font-serif">
                    Sr. Python Developer
                  </p>
                  <div className="flex flex-row">
                    <Rate
                      totalStars={5}
                      initialRating={rating}
                      onRatingChange={handleRatingChange}
                      className=""
                    />
                  </div>
                  <div className="">
                    <span className="font-serif text-gray-500 pr-3">
                      Your Rating:
                    </span>
                    {rating}
                  </div>
                </div>
              </div>
              <div className=" bg-gray-100 border-solid shadow-sm shadow-transparent m-3 ">
                <div className="flex flex-row justify-between m-3">
                  <h3 className="mt-4 text-sm font-serif">Applied Jobs</h3>
                  <span className="mt-4 text-sm text-gray-500 font-serif">
                    {" "}
                    2 days ago
                  </span>
                </div>
                <hr className="m-2 mt-2 border border-gray-300 " />
                <div className="flex flex-col m-2 pl-1  ">
                  <h1 className="text-md font-serif">Product Development</h1>
                  <div className="flex flex-row pb-4 text-gray-700">
                    <p className="text-sm font-serif">Marketing</p>
                    <p className="pl-5 text-sm font-serif">Full-Time</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row ">
                <div className="border-gray-300 border-2 h-auto w-full m-3 flex items-center justify-center hover:bg-gray-200 hover:shadow-md">
                  <h1 className="text-center text-blue-700 font-bold text-lg  font-serif">
                    Schedule Interview{" "}
                  </h1>
                </div>
                <div className="border-2 border-gray-300 h-auto w-1/4 m-3 ml-4 flex items-center justify-center hover:bg-gray-200 hover:shadow-md">
                  <h1 className="text-center text-3xl text-blue-700">
                    <TbMessage2 />
                  </h1>
                </div>
              </div>
              <hr className="m-3 mt-5 border-gray-300 " />
              <div className="">
                <h1 className="m-3 text-lg font-bold font-serif">Contact</h1>

                <div className="Email m-3  flex flex-row  ">
                  <FontAwesomeIcon icon={faMessage} className="pt-1" />
                  <div className="flex flex-col pl-3 ">
                    <h2 className="mt-0 text-gray-500 font-serif">Email</h2>
                    <p className="font-serif hover:text-blue-700 hover:pointer">
                      JermoneBell@gmail.com
                    </p>
                  </div>
                </div>

                <div className="instagram m-3 flex flex-row ">
                  <FontAwesomeIcon icon={faInstagram} className="pt-1" />
                  <div className="flex flex-col pl-3 ">
                    <h2 className="mt-0 text-gray-500 font-serif">Instgram</h2>
                    <p className="font-serif hover:text-blue-700">
                      instgram.com/JermoneBell
                    </p>
                  </div>
                </div>
                <div className="twitter m-3 flex flex-row ">
                  <FontAwesomeIcon icon={faTwitter} className="pt-1" />
                  <div className="flex flex-col pl-3 ">
                    <h2 className="mt-0 text-gray-500 font-serif">Twitter</h2>
                    <p className="font-serif hover:text-blue-700">
                      twitter.com/JermoneBell
                    </p>
                  </div>
                </div>
                <div className="website m-3 flex flex-row ">
                  <FontAwesomeIcon icon={faGlobe} className="pt-1" />
                  <div className="flex flex-col pl-3 ">
                    <h2 className="mt-0 text-gray-500 font-serif">Website</h2>
                    <p className="font-serif hover:text-blue-700">
                      www.JermoneBell.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white h-auto w-full  border-black-500 border-2 rounded-xl">
              <ApplicantDashboard className="font-serif" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Applicant;
