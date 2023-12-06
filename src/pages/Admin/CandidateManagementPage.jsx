import React from "react";
import Navbar from "../../components/Admin/SideNavBar/Navbar";
import Sidebar from "../../components/Admin/SideNavBar/Sidebar";
import CandidateManagement from "../../components/Admin/MainComponents/CandidateManagement";

function CandidateManagementPage() {
  return (
    <div className="flex flex-col h-screen">
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
