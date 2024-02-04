import React from "react";
import Sidebar from "../../components/Employer/SideNavBar/Sidebar";
import Navbar from "../../components/Employer/SideNavBar/Navbar";
import Dashboard from "../../components/Employer/MainComponents/Dashboard";
import { Helmet } from "react-helmet";

function EmployerDashboardPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Helmet>
                <title>Dashboard | CareerNest</title>
            </Helmet>
            <Navbar />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <div className="flex-1 overflow-y-auto bg-[#f0efef]">
                    <Dashboard />
                </div>
            </div>
        </div>
    );
}

export default EmployerDashboardPage;
