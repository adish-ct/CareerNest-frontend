import React from "react";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { ToastContainer } from "react-toastify";
import Sidebar from "../../components/Employer/SideNavBar/Sidebar";
import Navbar from "../../components/Employer/SideNavBar/Navbar";
import Dashboard from "../../components/Employer/MainComponents/Dashboard";

function EmployerDashboardPage() {
  return (
    <div className="flex flex-col h-screen">
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
