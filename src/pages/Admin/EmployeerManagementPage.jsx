import React from "react";
import Navbar from "../../components/Admin/SideNavBar/Navbar";
import Sidebar from "../../components/Admin/SideNavBar/Sidebar";
import EmployeerManagement from "../../components/Admin/MainComponents/EmployeerManagement";

function EmployeerManagementPage() {
  return (
    <div className="flex flex-col h-screen">
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
