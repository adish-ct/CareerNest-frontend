import React from "react";
import InterviewsList from "../../../components/Employer/Interviews/InterviewsList";
import Navbar from "../../../components/Employer/SideNavBar/Navbar";
import Sidebar from "../../../components/Employer/SideNavBar/Sidebar";

function InterviewsListPage() {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <div className="flex-1 overflow-y-auto bg-[#f0efef]">
                    <InterviewsList />
                </div>
            </div>
        </div>
    );
}

export default InterviewsListPage;
