import React, { useState } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import AllJobs from "./AllJobs";
import { FaSort } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const TabPanel = ({ id, children, isActive }) => (
    <div
        className={`bg-[#fff] rounded-lg dark:bg-gray-800 border-none ${isActive ? "block" : "hidden"
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
            className={` border-none inline-block p-3 ${isActive ? "text-[#952828]" : "hover:text-gray-600"
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
                            APPLICATIONS
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
                        <div className="w-full p-2 rounded-xl bg-[#f7f7f7]">
                            <Card className="shadow">
                                <CardBody>
                                    <TabPanel id="all" isActive={activeTab === "all"}>
                                        <div className="flex flex-col md:flex-row items-center justify-between">
                                            <div className="md:mb-2">
                                                <Typography
                                                    variant="h5"
                                                    color="blue-gray"
                                                    className="mb-2"
                                                >
                                                    All Jobs
                                                </Typography>
                                            </div>
                                            <div className="flex flex-col md:flex-row items-center md:justify-end mt-4 md:mt-0 gap-4 md:gap-10 cursor-pointer">
                                                <div className="text-2xl md:text-2xl text-[#7c7c7c]">
                                                    <FaSort />
                                                </div>
                                                <div className="w-full md:w-72 h-8 md:h-8 shadow-sm rounded-lg bg-[#555353] mt-2 md:mt-0">
                                                    <input
                                                        className="w-full h-full pl-2 bg-[#ecebeb] rounded-lg border text-sm md:text-base"
                                                        type="text"
                                                        placeholder="Search..."
                                                    />
                                                </div>
                                                <div className="text-2xl md:text-2xl pr-3 pl-2 text-[#555353]">
                                                    <IoSearch />
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="mt-4" />
                                        <div className="p-3">
                                            <AllJobs />
                                        </div>
                                    </TabPanel>

                                    <TabPanel id="pending" isActive={activeTab === "pending"}>
                                        <div className="flex flex-col md:flex-row items-center justify-between">
                                            <div className="md:mb-2">
                                                <Typography
                                                    variant="h5"
                                                    color="blue-gray"
                                                    className="mb-2"
                                                >
                                                    Pending Jobs
                                                </Typography>
                                            </div>
                                            <div className="flex flex-col md:flex-row items-center md:justify-end mt-4 md:mt-0 gap-4 md:gap-10 cursor-pointer">
                                                <div className="text-2xl md:text-2xl text-[#7c7c7c]">
                                                    <FaSort />
                                                </div>
                                                <div className="w-full md:w-72 h-8 md:h-8 shadow-sm rounded-lg bg-[#555353] mt-2 md:mt-0">
                                                    <input
                                                        className="w-full h-full pl-2 bg-[#ecebeb] rounded-lg border text-sm md:text-base"
                                                        type="text"
                                                        placeholder="Search..."
                                                    />
                                                </div>
                                                <div className="text-2xl md:text-2xl pr-3 pl-2 text-[#555353]">
                                                    <IoSearch />
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="mt-4" />
                                        <div className="p-3">
                                            <AllJobs />
                                        </div>
                                    </TabPanel>
                                    <TabPanel
                                        id="shortlisted"
                                        isActive={activeTab === "shortlisted"}
                                    >
                                        <div className="flex flex-col md:flex-row items-center justify-between">
                                            <div className="md:mb-2">
                                                <Typography
                                                    variant="h5"
                                                    color="blue-gray"
                                                    className="mb-2"
                                                >
                                                    Shortlisted Jobs
                                                </Typography>
                                            </div>
                                            <div className="flex flex-col md:flex-row items-center md:justify-end mt-4 md:mt-0 gap-4 md:gap-10 cursor-pointer">
                                                <div className="text-2xl md:text-2xl text-[#7c7c7c]">
                                                    <FaSort />
                                                </div>
                                                <div className="w-full md:w-72 h-8 md:h-8 shadow-sm rounded-lg bg-[#555353] mt-2 md:mt-0">
                                                    <input
                                                        className="w-full h-full pl-2 bg-[#ecebeb] rounded-lg border text-sm md:text-base"
                                                        type="text"
                                                        placeholder="Search..."
                                                    />
                                                </div>
                                                <div className="text-2xl md:text-2xl pr-3 pl-2 text-[#555353]">
                                                    <IoSearch />
                                                </div>
                                            </div>
                                        </div>

                                        <hr className="mt-4" />
                                        <div className="p-3">
                                            <AllJobs />
                                        </div>
                                    </TabPanel>
                                    <TabPanel id="rejected" isActive={activeTab === "rejected"}>
                                        <div className="flex flex-col md:flex-row items-center justify-between">
                                            <div className="md:mb-2">
                                                <Typography
                                                    variant="h5"
                                                    color="blue-gray"
                                                    className="mb-2"
                                                >
                                                    Rejected Jobs
                                                </Typography>
                                            </div>
                                            <div className="flex flex-col md:flex-row items-center md:justify-end mt-4 md:mt-0 gap-4 md:gap-10 cursor-pointer">
                                                <div className="text-2xl md:text-2xl text-[#7c7c7c]">
                                                    <FaSort />
                                                </div>
                                                <div className="w-full md:w-72 h-8 md:h-8 shadow-sm rounded-lg bg-[#555353] mt-2 md:mt-0">
                                                    <input
                                                        className="w-full h-full pl-2 bg-[#ecebeb] rounded-lg border text-sm md:text-base"
                                                        type="text"
                                                        placeholder="Search..."
                                                    />
                                                </div>
                                                <div className="text-2xl md:text-2xl pr-3 pl-2 text-[#555353]">
                                                    <IoSearch />
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="mt-4" />
                                        <div className="p-3">
                                            <AllJobs />
                                        </div>
                                    </TabPanel>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default JobApplications;
