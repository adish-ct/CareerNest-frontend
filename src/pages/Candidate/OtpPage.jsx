import React, { useState } from 'react'
import Footer from "../../components/Header/Accounts/Footer";
import logo from "../../images/logo.png"
import FirstHeader from '../../components/Header/Accounts/FirstHeader';
import OtpVerification from '../../components/Candidate/Accounts/OtpVerification';


function OtpPage() {



    return (
        <div className="flex flex-col min-h-screen">
            <FirstHeader />
            <header className="relative w-full h-20 border-b-2 z-[999]">
                <div className="container mx-auto flex items-center justify-between h-full max-w-6xl px-8 sm:px-6 lg:px-8 xl:px-0">
                    <a
                        href="/"
                        className="relative flex items-center h-full font-black transition-transform duration-300 hover:translate-x-2"
                    >
                        <img className="h-5 sm:h-4 md:h-6 lg:h-6" src={logo} alt="" />
                        <span className="ml-3 text-xl text-gray-800 sm:text-lg md:text-xl lg:text-2xl"></span>
                    </a>
                </div>
            </header>
            <OtpVerification />
            <Footer />
        </div>
    )
}

export default OtpPage;
