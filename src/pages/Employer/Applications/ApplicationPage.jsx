import React from "react";
import Navbar from "../../../components/Employer/SideNavBar/Navbar";
import Sidebar from "../../../components/Employer/SideNavBar/Sidebar";
import JobApplications from "../../../components/Employer/MainComponents/Applications/JobApplications";
import { Helmet } from "react-helmet";

function ApplicationPage() {
    return (
        <div className="flex flex-col h-screen">
            <Helmet>
                <title>Application | CareerNest</title>
            </Helmet>
            <Navbar />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <div className="flex-1 overflow-y-auto bg-[#f0efef]">
                    <JobApplications />
                </div>
            </div>
        </div>
    );
}

export default ApplicationPage;
