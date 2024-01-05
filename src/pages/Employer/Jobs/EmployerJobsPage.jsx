import React from "react";
import Navbar from "../../../components/Employer/SideNavBar/Navbar";
import JobDetails from "../../../components/Employer/MainComponents/JobDetails";
import Sidebar from "../../../components/Employer/SideNavBar/Sidebar";
import { Helmet } from "react-helmet";

function EmployerJobs() {
    return (
        <div className="flex flex-col h-screen">
            <Helmet>
                <title>Jobs | CareerNest</title>
            </Helmet>
            <Navbar />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <div className="flex-1 overflow-y-auto bg-[#f0efef]">
                    <JobDetails />
                </div>
            </div>
        </div>
    );
}

export default EmployerJobs;
