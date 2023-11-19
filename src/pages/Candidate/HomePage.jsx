import React from "react";
import Navbar from "../../components/Header/Accounts/Navbar";
import Banner from "../../components/Candidate/Banner";
import TopCompanies from "../../components/Candidate/TopCompanies";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <TopCompanies />
    </div>
  );
}

export default HomePage;
