import React from "react";
import Navbar from "../../components/Admin/SideNavBar/Navbar";
import Sidebar from "../../components/Admin/SideNavBar/Sidebar";
import EmployeerManagement from "../../components/Admin/MainComponents/EmployeerManagement";

function EmployeerManagementPage() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <EmployeerManagement />
      </div>
    </div>
  );
}

export default EmployeerManagementPage;
