import React from "react";
import Navbar from "../../components/Header/Accounts/Navbar";
import Footer from "../../components/Header/Accounts/Footer";
import SignUp from "../../components/Register/SignUp";

function SignupPage() {
  return (
    <div>
      <Navbar />
      <SignUp />
      {/* <Footer /> */}
    </div>
  );
}

export default SignupPage;
