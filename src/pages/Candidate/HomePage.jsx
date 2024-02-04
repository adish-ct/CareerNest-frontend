import React from "react";
import Navbar from "../../components/Header/Accounts/Navbar";
import Banner from "../../components/Candidate/Banner";
import TopCompanies from "../../components/Candidate/TopCompanies";
import Jobs from "../../components/Candidate/Jobs";
import { ToastContainer } from "react-toastify";

function HomePage() {

  const token = localStorage.getItem("jwtToken");
  console.log(token);
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Banner />
      <TopCompanies />
      <Jobs />
    </div>
  );
}

export default HomePage;
