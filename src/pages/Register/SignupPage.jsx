import React from "react";
import Navbar from "../../components/Header/Accounts/Navbar";
import Footer from "../../components/Header/Accounts/Footer";
import SignUp from "../../components/Register/SignUp";
import { Helmet } from "react-helmet";

function SignupPage() {
    return (
        <div>
            <Helmet>
                <title>Registration | CareerNest</title>
            </Helmet>
            <Navbar />
            <SignUp />
            {/* <Footer /> */}
        </div>
    );
}

export default SignupPage;
