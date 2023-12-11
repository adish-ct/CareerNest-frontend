import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';


function JobDetails({ selectedJob }) {

    const params = useParams();

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' }
        const formattedDate = new Date(date).toLocaleString('en-US', options);
        return formattedDate;
    }

    return (
        <>
            <div className="w-full bg-[#f0efef] p-2 rounded-md">
                <div className="w-full rounded-md">
                    <div className="p-2 bg-white shadow-sm border rounded">
                        <h1 className="text-2xl my-4 mx-auto font-extrabold text-center sm:text-2xl lg:text-3xl">
                            JOB DETAILS
                        </h1>
                    </div>
                    {
                        selectedJob && (
                            <div>
                                <div className="p-4 md:p-5 lg:p-8 border border-[#b4b3b3] mt-2 w-full md:w-full mx-auto bg-white rounded flex flex-col md:flex-row md:justify-between items-center">
                                    <div className="flex flex-col gap-2 pl-2 md:pl-10">
                                        <h1 className="text-lg font-extrabold text-start md:text-center md:mb-0">
                                            Details of the Job
                                        </h1>
                                        <h1 className="font-bold">ID : #CN234545-23</h1>
                                    </div>
                                </div>
                                <div className="p-2 md:p-4 lg:p-8 border border-[#b3acac] mt-2 md:mt-4 lg:mt-8">
                                    <div className="rounded-xl shadow bg-[#f7f7f7]">
                                        <div className="flex flex-col shadow text-sm md:text-base lg:text-lg p-7 md:p-6 lg:p-11 gap-1 md:gap-2 lg:gap-3">
                                            <div className="flex">
                                                <div className="w-1/4 font-bold">Role:</div>
                                                <div className="w-3/4 text-start font-bold">
                                                    {selectedJob.job_role}
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div className="w-1/4 font-bold">Location :  </div>
                                                <div className="w-3/4 text-start">{selectedJob.job_location}</div>
                                            </div>
                                            <div className="flex">
                                                <div className="w-1/4 font-bold">CTC :</div>
                                                <div className="w-3/4 text-start"> {selectedJob.job_ctc} Lpa </div>
                                            </div>
                                            <div className="flex">
                                                <div className="w-1/4 font-bold">Job type :</div>
                                                <div className="w-3/4 text-start"> {selectedJob.job_type} </div>
                                            </div>
                                            <div className="flex">
                                                <div className="w-1/4 font-bold">Work type :</div>
                                                <div className="w-3/4 text-start"> {selectedJob.work_type} </div>
                                            </div>
                                            <div className="flex">
                                                <div className="w-1/4 font-bold">Total Vacancy :</div>
                                                <div className="w-3/4 text-start"> {selectedJob.vaccancy} </div>
                                            </div>
                                            <div className="flex">
                                                <div className="w-1/4 font-bold">Minimum Experience :</div>
                                                <div className="w-3/4 text-start"> {selectedJob.experience} years </div>
                                            </div>
                                            <div className="flex">
                                                <div className="w-1/4 font-bold">Created at :</div>
                                                <div className="w-3/4 text-start"> {formatDate(selectedJob.created_at)} </div>
                                            </div>
                                            <div className="flex">
                                                <div className="w-1/4 font-bold">Job Description :</div>
                                                <div className="w-3/4 text-start"> {selectedJob.description} </div>
                                            </div>
                                            <div className="flex">
                                                <div className="w-1/4 font-bold">Required skills :</div>
                                                <div className="w-3/4 text-start"> {selectedJob.skills} </div>
                                            </div>
                                            <div className="flex">
                                                <div className="w-1/4 font-bold">Education :</div>
                                                <div className="w-3/4 text-start"> {selectedJob.education} </div>
                                            </div>
                                            <div className="flex">
                                                <div className="w-1/4 font-bold">About company: </div>
                                                <div className="w-3/4 text-start"> {selectedJob.employer} </div>
                                            </div>
                                            <div className="flex gap-6 font-bold justify-end  cursor-pointer">
                                                <div className="bg-[#817d7d] text-white ps-10 pe-10 pt-2 pb-1 rounded-lg">
                                                    <Link>UPDATE</Link>
                                                </div>
                                                <div className="bg-[#312f97] text-white ps-10 pe-10 pt-2 pb-1 rounded-lg">
                                                    <Link to={`/employer/application/`}>APPLICATIONS</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default JobDetails;
