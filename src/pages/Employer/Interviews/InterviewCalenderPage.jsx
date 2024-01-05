import React from "react";
import Navbar from "../../../components/Employer/SideNavBar/Navbar";
import Sidebar from "../../../components/Employer/SideNavBar/Sidebar";
import InterviewCalender from "../../../components/Employer/Interviews/InterviewCalender";
import { Helmet } from "react-helmet";

function InterviewCalenderPage() {
    return (
        <div className="flex flex-col h-screen">
            <Helmet>
                <title>Calender | CareerNest</title>
            </Helmet>
            <Navbar />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <div className="flex-1 overflow-y-auto bg-[#f0efef]">
                    <InterviewCalender />
                </div>
            </div>
        </div>
    );
}

export default InterviewCalenderPage;