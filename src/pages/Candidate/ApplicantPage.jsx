import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Employer/SideNavBar/Navbar";
import Sidebar from "../../components/Employer/SideNavBar/Sidebar";
import Applicant from "../../components/Candidate/Profile/Applicant";

function ApplicantPage() {
  return (
    <div className="flex flex-col h-screen">
      <Helmet>
        <title>Applicant Profile | CareerNest</title>
      </Helmet>
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-y-auto bg-[#f0efef]">
          <Applicant />
        </div>
      </div>
    </div>
  );
}

export default ApplicantPage;
