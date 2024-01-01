import React, { useEffect, useState } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { FaSort } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoading } from "../../../../redux/Actions/AuthAction";
import { useParams } from "react-router-dom";
import { fetchApplicationsApi } from "../../../../api/ApplicationApi";
import getLocal from "../../../../helper/Auth";
import { jwtDecode } from "jwt-decode";
import ApplicationCard from "./ApplicationCard";

const TabPanel = ({ id, children, isActive }) => (
    <div
        className={`bg-white rounded-lg dark:bg-gray-800 border-none ${isActive ? "block" : "hidden"
            }`}
        id={id}
        role="tabpanel"
        aria-labelledby={`${id}-tab`}
    >
        {children}
    </div>
);

const TabButton = ({ id, label, isActive, onClick }) => (
    <div className="border-r-2 w-full border-[#6d6b6b]">
        <button
            id={`${id}-tab`}
            data-tabs-target={`#${id}`}
            type="button"
            role="tab"
            aria-controls={id}
            aria-selected={isActive}
            className={`border-none inline-block p-3 ${isActive ? "text-[#952828]" : "hover:text-gray-600"
                } rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500 dark:hover:text-gray-300`}
            onClick={onClick}
        >
            {label}
        </button>
    </div>
);

const SearchBar = () => (
    <div className="w-full md:w-72 h-8 md:h-8 shadow-sm rounded-lg bg-[#555353] mt-2 md:mt-0">
        <input
            className="w-full h-full pl-2 bg-[#ecebeb] rounded-lg border text-sm md:text-base"
            type="text"
            placeholder="Search..."
        />
    </div>
);

const SortingIcon = () => (
    <div className="text-2xl md:text-2xl pr-3 pl-2 text-[#555353]">
        <FaSort />
    </div>
);

function TabContent({ id, title, isActive, handleTabClick, applicaionDetails }) {
    return (
        <TabPanel id={id} isActive={isActive}>
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:mb-2">
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        {title}
                    </Typography>
                </div>
                <div className="flex flex-col md:flex-row items-center md:justify-end mt-4 md:mt-0 gap-4 md:gap-10 cursor-pointer">
                    <SortingIcon />
                    <SearchBar />
                </div>
            </div>
            <hr className="mt-4" />
            <div className="p-3">{applicaionDetails && <ApplicationCard applicaionDetails={applicaionDetails} />}</div>
        </TabPanel>
    );
}


function JobApplications() {
    const [activeTab, setActiveTab] = useState("all");
    const [applicaionDetails, setApplicaionDetails] = useState([]);
    const loading = useSelector((state) => state.loading);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const params = useParams();

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const fetchApplications = async (jobId) => {
        const token = getLocal();
        if (token) {
            const decodedToken = jwtDecode(token);
            try {
                console.log();
                if (jobId !== undefined) {
                    const response = await fetchApplicationsApi(jobId, decodedToken.role);
                    setApplicaionDetails(response);
                }
            } catch (error) { }
        }
    };

    useEffect(() => {
        const token = getLocal();
        const decodedToken = jwtDecode(token);
        if (token) {
            const fetchData = async () => {
                await fetchApplications(params.jobId, token.role);
                dispatch(toggleLoading());
            };
            fetchData();
        }
    }, []);

    const tabConfig = [
        { id: "all", title: "All Jobs" },
        { id: "pending", title: "Pending Jobs" },
        { id: "shortlisted", title: "Shortlisted Jobs" },
        { id: "rejected", title: "Rejected Jobs" },
    ];

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
                                        {tabConfig.map((tab) => (
                                            <TabButton
                                                key={tab.id}
                                                id={tab.id}
                                                label={tab.title}
                                                isActive={activeTab === tab.id}
                                                onClick={() => handleTabClick(tab.id)}
                                            />
                                        ))}
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="w-full p-2 rounded-xl bg-[#f7f7f7]">
                            <Card className="shadow">
                                <CardBody>
                                    {tabConfig.map((tab) => (
                                        <TabContent
                                            key={tab.id}
                                            id={tab.id}
                                            title={tab.title}
                                            isActive={activeTab === tab.id}
                                            handleTabClick={() => handleTabClick(tab.id)}
                                            applicaionDetails={applicaionDetails}
                                        />
                                    ))}
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
