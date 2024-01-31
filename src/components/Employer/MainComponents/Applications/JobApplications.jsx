import React, { useState } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import AllJobs from "./AllJobs";
import { FaSort } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const TabPanel = ({ id, children, isActive }) => (
  <div
    className={`bg-[#fff] rounded-lg dark:bg-gray-800 border-none ${
      isActive ? "block" : "hidden"
    }`}
    id={id}
    role="tabpanel"
    aria-labelledby={`${id}-tab`}
  >
    {children}
  </div>
);

const TabButton = ({ id, label, isActive, onClick }) => (
  <div className="">
    <button
      id={`${id}-tab`}
      data-tabs-target={`#${id}`}
      type="button"
      role="tab"
      aria-controls={id}
      aria-selected={isActive}
      className={` border-none inline-block p-3 ${
        isActive ? "text-[#952828]" : "hover:text-gray-600"
      } rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500 dark:hover:text-gray-300`}
      onClick={onClick}
    >
      {label}
    </button>
  </div>
);

function JobApplications() {
  const handleOpen = () => setOpen(!open);
  const [activeTab, setActiveTab] = useState("profile");
  const handleEducation = () => setOpenEducation(!openEducation);
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="w-full bg-[#f0efef] p-2 rounded-md">
        <div className="w-full rounded-md">
          <div className="p-2 bg-white shadow-sm border rounded">
            <h1 className="text-2xl my-4 mx-auto font-extrabold text-center sm:text-2xl lg:text-3xl">
              JOB APPLICATIONS
            </h1>
          </div>
          <div className="flex flex-col pt-4 gap-2 w-full">
            <div className="w-full border border-[#686464]">
              <Card className="shadow rounded-none">
                <CardBody>
                  <hr />
                  <div className="text-center border-black flex justify-between overflow-hidden hover-scrollbar">
                    <div className="border-r-2 w-full border-[#6d6b6b]">
                      <TabButton
                        id="all"
                        label="All"
                        isActive={activeTab === "all"}
                        onClick={() => handleTabClick("all")}
                      />
                    </div>
                    <div className="border-r-2 w-full border-[#6d6b6b]">
                      <TabButton
                        id="pending"
                        label="Pending"
                        isActive={activeTab === "pending"}
                        onClick={() => handleTabClick("pending")}
                      />
                    </div>
                    <div className="border-r-2 w-full border-[#6d6b6b]">
                      <TabButton
                        id="shortlisted"
                        label="Shortlisted"
                        isActive={activeTab === "shortlisted"}
                        onClick={() => handleTabClick("shortlisted")}
                      />
                    </div>
                    <div className="w-full">
                      <TabButton
                        id="rejected"
                        label="Rejected"
                        isActive={activeTab === "rejected"}
                        onClick={() => handleTabClick("rejected")}
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div className="flex flex-row justify-end items-center pt-2 pr-20 gap-4 cursor-pointer">
              <div className="text-2xl text-gray-600 hover:text-gray-800">
                <FaSort />
              </div>
              <div className="flex items-center bg-[#f7f7f7] rounded-lg shadow">
                <input
                  className="pl-3 py-2 bg-transparent bg-[#ffffff] rounded-l-lg focus:outline-none"
                  type="text"
                  placeholder="Search..."
                />
                <div className="p-2 text-[#000] hover:text-gray-800">
                  <IoSearch />
                </div>
              </div>
            </div>
            {/* ................ */}
            <div className="flex">
              <div className="container mx-auto p-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <TabPanel id="all" isActive={activeTab === "all"}>
                    <div className="flex items-start px-4 py-6">
                      <img
                        className="w-12 h-12 rounded-full object-cover mr-4 shadow"
                        src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        alt="avatar"
                      />
                      <div className="">
                        <div className="flex items-center justify-between">
                          <Link to={"/employer/applicantproflie"}>
                            <h2 className="text-lg font-semibold text-gray-900 -mt-1">
                              Vishnu Krishnakumar
                            </h2>
                          </Link>
                        </div>
                        <p className="text-gray-700">Applied on 01 JAN 2024.</p>
                        <h1 className="pt-6 text-gray-700 text-base font-semibold">
                          Designation
                        </h1>
                        <h1 className="pt-2 text-gray-700 text-sm">
                          Python Developer
                        </h1>
                        <h1 className="pt-6 text-gray-700 text-base font-semibold">
                          Experiance
                        </h1>
                        <h1 className="pt-2 text-gray-700 text-sm">
                          1 year 2 Month
                        </h1>
                        <h1 className="pt-6 text-gray-700 text-base font-semibold">
                          Key Skills
                        </h1>
                        <h1 className="pt-2 text-gray-700 text-sm">
                          Celery, Redis, Python, Django
                        </h1>
                      </div>
                    </div>
                    <div className="flex justify-end pr-10">
                      <h1 className="">
                        Status :
                        <span className="pl-2 text-green-800">Active</span>
                      </h1>
                    </div>
                  </TabPanel>
                  <TabPanel id="all" isActive={activeTab === "all"}>
                    <div className="flex items-start px-4 py-6">
                      <img
                        className="w-12 h-12 rounded-full object-cover mr-4 shadow"
                        src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        alt="avatar"
                      />
                      <div className="">
                        <div className="flex items-center justify-between">
                          <h2 className="text-lg font-semibold text-gray-900 -mt-1">
                            Vishnu Krishnakumar
                          </h2>
                        </div>
                        <p className="text-gray-700">Applied on 01 JAN 2024.</p>
                        <h1 className="pt-6 text-gray-700 text-base font-semibold">
                          Designation
                        </h1>
                        <h1 className="pt-2 text-gray-700 text-sm">
                          Python Developer
                        </h1>
                        <h1 className="pt-6 text-gray-700 text-base font-semibold">
                          Experiance
                        </h1>
                        <h1 className="pt-2 text-gray-700 text-sm">
                          1 year 2 Month
                        </h1>
                        <h1 className="pt-6 text-gray-700 text-base font-semibold">
                          Key Skills
                        </h1>
                        <h1 className="pt-2 text-gray-700 text-sm">
                          Celery, Redis, Python, Django
                        </h1>
                      </div>
                    </div>
                    <div className="flex justify-end pr-10">
                      <h1 className="">
                        Status :
                        <span className="pl-2 text-green-800">Active</span>
                      </h1>
                    </div>
                  </TabPanel>
                  <TabPanel id="all" isActive={activeTab === "all"}>
                    <div className="flex items-start px-4 py-6">
                      <img
                        className="w-12 h-12 rounded-full object-cover mr-4 shadow"
                        src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        alt="avatar"
                      />
                      <div className="">
                        <div className="flex items-center justify-between">
                          <h2 className="text-lg font-semibold text-gray-900 -mt-1">
                            Vishnu Krishnakumar
                          </h2>
                        </div>
                        <p className="text-gray-700">Applied on 01 JAN 2024.</p>
                        <h1 className="pt-6 text-gray-700 text-base font-semibold">
                          Designation
                        </h1>
                        <h1 className="pt-2 text-gray-700 text-sm">
                          Python Developer
                        </h1>
                        <h1 className="pt-6 text-gray-700 text-base font-semibold">
                          Experiance
                        </h1>
                        <h1 className="pt-2 text-gray-700 text-sm">
                          1 year 2 Month
                        </h1>
                        <h1 className="pt-6 text-gray-700 text-base font-semibold">
                          Key Skills
                        </h1>
                        <h1 className="pt-2 text-gray-700 text-sm">
                          Celery, Redis, Python, Django
                        </h1>
                      </div>
                    </div>
                    <div className="flex justify-end pr-10 pb-3">
                      <h1 className="">
                        Status :
                        <span className="pl-2 text-green-800">Active</span>
                      </h1>
                    </div>
                  </TabPanel>
                  <TabPanel id="pending" isActive={activeTab === "pending"}>
                    <div className="flex items-start px-4 py-6">
                      <img
                        className="w-12 h-12 rounded-full object-cover mr-4 shadow"
                        src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        alt="avatar"
                      />
                      <div className="">
                        <div className="flex items-center justify-between">
                          <h2 className="text-lg font-semibold text-gray-900 -mt-1">
                            Vishnu Krishnakumar
                          </h2>
                        </div>
                        <p className="text-gray-700">Applied on 01 JAN 2024.</p>
                        <h1 className="pt-6 text-gray-700 text-base font-semibold">
                          Designation
                        </h1>
                        <h1 className="pt-2 text-gray-700 text-sm">
                          Python Developer
                        </h1>
                        <h1 className="pt-6 text-gray-700 text-base font-semibold">
                          Experiance
                        </h1>
                        <h1 className="pt-2 text-gray-700 text-sm">
                          1 year 2 Month
                        </h1>
                        <h1 className="pt-6 text-gray-700 text-base font-semibold">
                          Key Skills
                        </h1>
                        <h1 className="pt-2 text-gray-700 text-sm">
                          Celery, Redis, Python, Django
                        </h1>
                      </div>
                    </div>
                    <div className="flex justify-end pr-10 pb-3">
                      <h1 className="">
                        Status :
                        <span className="pl-2 text-green-800">Active</span>
                      </h1>
                    </div>
                  </TabPanel>
                  <TabPanel id="pending" isActive={activeTab === "pending"}>
                    <div className="flex items-start px-4 py-6">
                      <img
                        className="w-12 h-12 rounded-full object-cover mr-4 shadow"
                        src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        alt="avatar"
                      />
                      <div className="">
                        <div className="flex items-center justify-between">
                          <h2 className="text-lg font-semibold text-gray-900 -mt-1">
                            Vishnu Krishnakumar
                          </h2>
                        </div>
                        <p className="text-gray-700">Applied on 01 JAN 2024.</p>
                        <h1 className="pt-6 text-gray-700 text-base font-semibold">
                          Designation
                        </h1>
                        <h1 className="pt-2 text-gray-700 text-sm">
                          Python Developer
                        </h1>
                        <h1 className="pt-6 text-gray-700 text-base font-semibold">
                          Experiance
                        </h1>
                        <h1 className="pt-2 text-gray-700 text-sm">
                          1 year 2 Month
                        </h1>
                        <h1 className="pt-6 text-gray-700 text-base font-semibold">
                          Key Skills
                        </h1>
                        <h1 className="pt-2 text-gray-700 text-sm">
                          Celery, Redis, Python, Django
                        </h1>
                      </div>
                    </div>
                    <div className="flex justify-end pr-10 pb-3">
                      <h1 className="">
                        Status :
                        <span className="pl-2 text-green-800">Active</span>
                      </h1>
                    </div>
                  </TabPanel>
                  <TabPanel
                    id="shortlisted"
                    isActive={activeTab === "shortlisted"}
                  >
                    <div className="flex items-start px-4 py-6">
                      <img
                        className="w-12 h-12 rounded-full object-cover mr-4 shadow"
                        src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        alt="avatar"
                      />
                      <div className="">
                        <div className="flex items-center justify-between">
                          <h2 className="text-lg font-semibold text-gray-900 -mt-1">
                            Vishnu Krishnakumar
                          </h2>
                        </div>
                        <p className="text-gray-700">Applied on 01 JAN 2024.</p>
                        <h1 className="pt-6 text-gray-700 text-base font-semibold">
                          Designation
                        </h1>
                        <h1 className="pt-2 text-gray-700 text-sm">
                          Python Developer
                        </h1>
                        <h1 className="pt-6 text-gray-700 text-base font-semibold">
                          Experiance
                        </h1>
                        <h1 className="pt-2 text-gray-700 text-sm">
                          1 year 2 Month
                        </h1>
                        <h1 className="pt-6 text-gray-700 text-base font-semibold">
                          Key Skills
                        </h1>
                        <h1 className="pt-2 text-gray-700 text-sm">
                          Celery, Redis, Python, Django
                        </h1>
                      </div>
                    </div>
                    <div className="flex justify-end pr-10 pb-3">
                      <h1 className="">
                        Status :
                        <span className="pl-2 text-green-800">Active</span>
                      </h1>
                    </div>
                  </TabPanel>
                  <TabPanel id="rejected" isActive={activeTab === "rejected"}>
                    <div className="flex items-start px-4 py-6">
                      <img
                        className="w-12 h-12 rounded-full object-cover mr-4 shadow"
                        src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        alt="avatar"
                      />
                      <div className="">
                        <div className="flex items-center justify-between">
                          <h2 className="text-lg font-semibold text-gray-900 -mt-1">
                            Vishnu Krishnakumar
                          </h2>
                        </div>
                        <p className="text-gray-700">Applied on 01 JAN 2024.</p>
                        <h1 className="pt-6 text-gray-700 text-base font-semibold">
                          Designation
                        </h1>
                        <h1 className="pt-2 text-gray-700 text-sm">
                          Python Developer
                        </h1>
                        <h1 className="pt-6 text-gray-700 text-base font-semibold">
                          Experiance
                        </h1>
                        <h1 className="pt-2 text-gray-700 text-sm">
                          1 year 2 Month
                        </h1>
                        <h1 className="pt-6 text-gray-700 text-base font-semibold">
                          Key Skills
                        </h1>
                        <h1 className="pt-2 text-gray-700 text-sm">
                          Celery, Redis, Python, Django
                        </h1>
                      </div>
                    </div>
                    <div className="flex justify-end pr-10 pb-3">
                      <h1 className="">
                        Status :
                        <span className="pl-2 text-green-800">Active</span>
                      </h1>
                    </div>
                  </TabPanel>
                  <TabPanel id="rejected" isActive={activeTab === "rejected"}>
                    <div className="flex items-start px-4 py-6">
                      <img
                        className="w-12 h-12 rounded-full object-cover mr-4 shadow"
                        src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        alt="avatar"
                      />
                      <div className="">
                        <div className="flex items-center justify-between">
                          <h2 className="text-lg font-semibold text-gray-900 -mt-1">
                            Vishnu Krishnakumar
                          </h2>
                        </div>
                        <p className="text-gray-700">Applied on 01 JAN 2024.</p>
                        <h1 className="pt-6 text-gray-700 text-base font-semibold">
                          Designation
                        </h1>
                        <h1 className="pt-2 text-gray-700 text-sm">
                          Python Developer
                        </h1>
                        <h1 className="pt-6 text-gray-700 text-base font-semibold">
                          Experiance
                        </h1>
                        <h1 className="pt-2 text-gray-700 text-sm">
                          1 year 2 Month
                        </h1>
                        <h1 className="pt-6 text-gray-700 text-base font-semibold">
                          Key Skills
                        </h1>
                        <h1 className="pt-2 text-gray-700 text-sm">
                          Celery, Redis, Python, Django
                        </h1>
                      </div>
                    </div>
                    <div className="flex justify-end pr-10 pb-3">
                      <h1 className="">
                        Status :
                        <span className="pl-2 text-green-800">Active</span>
                      </h1>
                    </div>
                  </TabPanel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobApplications;
