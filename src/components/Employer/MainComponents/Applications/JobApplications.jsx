import React, { useState } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { FiPlus } from "react-icons/fi";

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
                        id="networks"
                        label="All"
                        isActive={activeTab === "networks"}
                        onClick={() => handleTabClick("networks")}
                      />
                    </div>
                    <div className="border-r-2 w-full border-[#6d6b6b]">
                      <TabButton
                        id="profile"
                        label="Pending"
                        isActive={activeTab === "profile"}
                        onClick={() => handleTabClick("profile")}
                      />
                    </div>
                    <div className="border-r-2 w-full border-[#6d6b6b]">
                      <TabButton
                        id="appliedJobs"
                        label="Shortlisted"
                        isActive={activeTab === "appliedJobs"}
                        onClick={() => handleTabClick("appliedJobs")}
                      />
                    </div>
                    <div className="w-full">
                      <TabButton
                        id="resume"
                        label="Rejected"
                        isActive={activeTab === "resume"}
                        onClick={() => handleTabClick("resume")}
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div className="w-full p-2 rounded-xl bg-[#f7f7f7]">
              <Card className="shadow rounded-r-none">
                <CardBody>
                  <TabPanel id="profile" isActive={activeTab === "profile"}>
                    <div className=""></div>
                  </TabPanel>
                  <TabPanel
                    id="appliedJobs"
                    isActive={activeTab === "appliedJobs"}
                  >
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      Applied Jobs
                    </Typography>
                    <hr />
                    <div className="p-3">
                      <h1>hello</h1>
                    </div>
                  </TabPanel>
                  <TabPanel id="resume" isActive={activeTab === "resume"}>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      Your Resume
                    </Typography>
                    <hr />

                    <div className="flex gap-3 flex-row p-3">
                      <h1>hello</h1>
                    </div>
                  </TabPanel>
                  <TabPanel
                    id="experience"
                    isActive={activeTab === "experience"}
                  >
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      Work Experience
                    </Typography>
                    <hr />

                    <div className="flex flex-col gap-3 p-3"></div>
                    <div
                      onClick={handleOpen}
                      className="flex justify-end items-center gap-1 text-blue-900 hover:text-red-400 cursor-pointer"
                    >
                      <FiPlus />
                      <h1>add</h1>
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
