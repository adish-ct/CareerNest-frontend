import React from "react";
import Navbar from "../../../components/Employer/SideNavBar/Navbar";
import Sidebar from "../../../components/Employer/SideNavBar/Sidebar";
import ScheduledInterview from "../../../components/Employer/Interviews/ScheduledInterview";
import { Helmet } from "react-helmet";

function ScheduledInterviewPage() {
    return (
        <div>
            <div className="flex flex-col h-screen">
                <Helmet>
                    <title>Scheduled Interviews | CareerNest</title>
                </Helmet>
                <Navbar />
                <div className="flex flex-1 overflow-hidden">
                    <Sidebar />
                    <div className="flex-1 overflow-y-auto bg-[#f0efef]">
                        <ScheduledInterview />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScheduledInterviewPage;