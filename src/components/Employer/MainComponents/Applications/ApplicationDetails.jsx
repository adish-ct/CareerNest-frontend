import React from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";

function ApplicationDetails() {
    return (
        <>
            <div className="w-full bg-[#f0efef] p-2 rounded-md">
                <div className="w-full rounded-md">
                    <div className="p-2 bg-white shadow-sm border rounded">
                        <h1 className="text-2xl my-4 mx-auto font-extrabold text-center sm:text-2xl lg:text-3xl">
                            APPLICATION
                        </h1>
                    </div>
                    <div className="relative block p-8 overflow-hidden border bg-white border-slate-100 rounded-lg ml-6 mr-6 mt-5">
                        <div className="pb-8 font-medium">
                            Application Details
                        </div>
                        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" />
                        <div className="sm:flex pl-2">
                            <div className="flex-shrink-0 hidden ml-3 sm:block">
                                <img
                                    className="object-cover w-16 h-16 rounded-lg shadow-sm"
                                    src="https://github.com/creativetimofficial/argon-design-system/blob/master/assets/img/faces/team-2.jpg?raw=true"
                                    alt=""
                                />
                            </div>
                            <div className="pl-4 pb-1">
                                <h5 className="text-xl font-bold text-slate-900">
                                    Vishnu Krishnakumar
                                </h5>
                                <p className="mt-1 text-base font-medium text-slate-600">
                                    Python Developer
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button className="bg-[#3533ae] text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-purple-500 focus:outline-none focus:ring focus:border-blue-300">
                                <div className="flex items-center">
                                    <IoCloudDownloadOutline className="text-base mr-2" />
                                    <span className="text-base">
                                        Download Resume
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ApplicationDetails;
