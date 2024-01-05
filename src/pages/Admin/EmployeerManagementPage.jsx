import React from "react";
import Navbar from "../../components/Admin/SideNavBar/Navbar";
import Sidebar from "../../components/Admin/SideNavBar/Sidebar";
import EmployeerManagement from "../../components/Admin/MainComponents/EmployeerManagement";
import { Helmet } from "react-helmet";

function EmployeerManagementPage() {
    return (
        <div className="flex flex-col h-screen">
            <Helmet>
                <title>Employeer | CareerNest</title>
            </Helmet>
            <Navbar />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <div className="flex-1 overflow-y-auto bg-[#f0efef]">
                    <EmployeerManagement />
                </div>
            </div>
        </div>
    );
}

export default EmployeerManagementPage;
