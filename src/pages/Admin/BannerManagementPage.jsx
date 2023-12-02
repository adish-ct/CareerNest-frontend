import React from "react";
import Navbar from "../../components/Admin/SideNavBar/Navbar";
import Sidebar from "../../components/Admin/SideNavBar/Sidebar";
import BannerManagement from "../../components/Admin/MainComponents/BannerManagement";

function BannerManagementPage() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <BannerManagement />
      </div>
    </div>
  );
}

export default BannerManagementPage;
