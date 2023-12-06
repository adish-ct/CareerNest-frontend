import React from "react";
import Sidebar from "../../components/Admin/SideNavBar/Sidebar";
import Navbar from "../../components/Admin/SideNavBar/Navbar";
import Dashboard from "../../components/Admin/MainComponents/Dashboard";

function DashboardPage() {
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

export default DashboardPage;
