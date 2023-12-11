import React from "react";
import Navbar from "../../components/Employer/SideNavBar/Navbar";
import JobDetails from "../../components/Employer/MainComponents/JobDetails";
import Sidebar from "../../components/Employer/SideNavBar/Sidebar";
import AllJobs from "../../components/Employer/Jobs/AllJobs";

function EmployerJobsPage() {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <div className="flex-1 overflow-y-auto bg-[#f0efef]">
                    <AllJobs />
                </div>
            </div>
        </div>
    );
}

export default EmployerJobsPage;

