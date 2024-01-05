import React from "react";
import Navbar from "../../components/Admin/SideNavBar/Navbar";
import Sidebar from "../../components/Admin/SideNavBar/Sidebar";
import CandidateManagement from "../../components/Admin/MainComponents/CandidateManagement";
import { Helmet } from "react-helmet";

function CandidateManagementPage() {
    return (
        <div className="flex flex-col h-screen">
            <Helmet>
                <title>Candidate | CareerNest</title>
            </Helmet>
            <Navbar />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <div className="flex-1 overflow-y-auto bg-[#f0efef]">
                    <CandidateManagement />
                </div>
            </div>
        </div>
    );
}

export default CandidateManagementPage;
