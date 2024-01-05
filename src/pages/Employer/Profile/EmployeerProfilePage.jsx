import React from "react";
import Navbar from "../../../components/Employer/SideNavBar/Navbar";
import Sidebar from "../../../components/Employer/SideNavBar/Sidebar";
import EmployerProfile from "../../../components/Employer/Profile/EmployerProfile";
import { Helmet } from "react-helmet";

function EmployeerProfilePage() {
    return (
        <div className="flex flex-col h-screen">
            <Helmet>
                <title>Profile | CareerNest</title>
            </Helmet>
            <Navbar />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <div className="flex-1 overflow-y-auto bg-[#f0efef]">
                    <EmployerProfile />
                </div>
            </div>
        </div>
    );
}

export default EmployeerProfilePage;
