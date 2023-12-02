import React from "react";
import Navbar from "../../components/Admin/SideNavBar/Navbar";
import Sidebar from "../../components/Admin/SideNavBar/Sidebar";
import CandidateManagement from "../../components/Admin/MainComponents/CandidateManagement";

function CandidateManagementPage() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <CandidateManagement />
      </div>
    </div>
  );
}

export default CandidateManagementPage;
