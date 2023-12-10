import React from "react";
import Navbar from "../../../components/Employer/SideNavBar/Navbar";
import Sidebar from "../../../components/Employer/SideNavBar/Sidebar";
import CandidateDetails from "../../../components/Employer/MainComponents/Candidate/CandidateDetails";

function CandidateDetailsPage() {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <div className="flex-1 overflow-y-auto bg-[#f0efef]">
                    <CandidateDetails />
                </div>
            </div>
        </div>
    );
}

export default CandidateDetailsPage;