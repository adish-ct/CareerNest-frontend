import React from "react";
import Navbar from "../../components/Header/Accounts/Navbar";
import Banner from "../../components/Candidate/Banner";
import TopCompanies from "../../components/Candidate/TopCompanies";
import Jobs from "../../components/Candidate/Jobs";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <TopCompanies />
      <Jobs />
    </div>
  );
}

export default HomePage;
