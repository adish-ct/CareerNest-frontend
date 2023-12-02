import React from "react";
import Sidebar from "../../components/Admin/SideNavBar/Sidebar";
import Navbar from "../../components/Admin/SideNavBar/Navbar";
import Dashboard from "../../components/Admin/MainComponents/Dashboard";

function DashboardPage() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default DashboardPage;
