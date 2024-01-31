import React from "react";
import Navbar from "../../../components/Employer/SideNavBar/Navbar";
import Sidebar from "../../../components/Employer/SideNavBar/Sidebar";
import { Helmet } from "react-helmet";
import ApplicationDetails from "../../../components/Employer/MainComponents/Applications/ApplicationDetails";

function ApplicationDetailsPage() {
  return (
    <div className="flex flex-col h-screen">
      <Helmet>
        <title>Application Details | CareerNest</title>
      </Helmet>
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-y-auto bg-[#f0efef]">
          <ApplicationDetails />
        </div>
      </div>
    </div>
  );
}

export default ApplicationDetailsPage;
