import React from "react";

const ApplicantProfile = () => {
  return (
    <div>
      <h1 className="font-bold text-black font-serif text-lg">Personal Info</h1>
      <div className="flex flex-row ">
        <div className="flex flex-col w-1/2 pt-2 ">
          <h3 className="text-gray-500 font-serif">Full Name</h3>
          <span className="text-black font-medium font-serif">
            {" "}
            Vishnu Krishnakumar{" "}
          </span>
        </div>
        <div className="flex flex-col items-left w-1/2 pt-2">
          <h3 className="text-gray-500 font-serif">Gender</h3>
          <span className="text-black font-medium font-serif">Male</span>
        </div>
      </div>
      <div className="flex flex-row ">
        <div className="flex flex-col items-left w-1/2 pt-2 ">
          <h3 className="text-gray-500 font-serif">Date of Birth</h3>
          <span className="text-black font-medium font-serif">
            March 23 2012,(12 y.o)
          </span>
        </div>
        <div className="flex flex-col items-left w-1/2 pt-2">
          <h3 className="text-gray-500 font-serif">Language</h3>
          <span className="text-black font-medium font-serif">English</span>
        </div>
      </div>
      <div className="flex flex-row ">
        <div className="flex flex-col items-left w-1/2  pt-2">
          <h3 className="font-body text-gray-500 ">Address</h3>
          <span className="text-black font-medium font-serif">
            4517 Washington Ave.
            <br />
            Manchester,Ketuncky 39495
          </span>
        </div>
      </div>
      <hr className="m-3 mt-4 dark:border-gray-900" />
      <div>
        <h1 className="font-bold text-black font-serif text-lg">
          Proffessional Info{" "}
        </h1>
        <h3 className="text-gray-500 font-serif">About me</h3>
        <p className="text-black font-medium font-serif">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi quo
          reprehenderit quia. Magnam ab sapiente repellendus esse facere quae
          officiis, ex quisquam numquam eius, optio nostrum. At id est facilis.
        </p>
        <div className="flex flex-row ">
          <div className="flex flex-col w-1/2 pt-2 ">
            <h3 className="text-gray-500 font-serif">Current Job</h3>
            <span className="text-black font-medium font-serif">
              Sr. Python Developer
            </span>
          </div>
          <div className="flex flex-col items-left w-1/2 pt-2">
            <h3 className="text-gray-500 font-serif">Experiance in Years</h3>
            <span className="text-black font-medium font-serif">4 Years</span>
          </div>
        </div>
        <div className="flex flex-row ">
          <div className="flex flex-col items-left w-1/2 pt-2">
            <h3 className="text-gray-500 font-serif">
              High Qualification Held
            </h3>
            <span className="text-black font-medium font-serif">
              Bachelor in Engineering
            </span>
          </div>
          <div className="flex flex-col w-full md:w-1/2 lg:w-1/2 sm:w-full pt-2 ">
            <h3 className="text-gray-500">Skill set</h3>
            <div className="flex flex-row  ">
              <div className="choice-box border-1 bg-gray-100 text-blue-800 p-1 font-medium font-serif">
                Project Management
              </div>
              <div className="choice-box border-1 ml-2 bg-gray-100 text-blue-800 p-1 font-medium font-serif">
                Copy writing
              </div>
              <div className="choice-box border-1 ml-2 bg-gray-100 text-blue-800 p-1 font-medium font-serif">
                English
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantProfile;
