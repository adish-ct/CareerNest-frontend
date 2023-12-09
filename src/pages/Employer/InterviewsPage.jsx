import React from "react";
import Interviews from "../../components/Employer/Interviews/Interviews";
import Navbar from "../../components/Employer/SideNavBar/Navbar";
import Sidebar from "../../components/Employer/SideNavBar/Sidebar";

function InterviewsPage() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-y-auto bg-[#f0efef]">
          <Interviews />
        </div>
      </div>
    </div>
  );
}

export default InterviewsPage;
