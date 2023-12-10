import React, { useState, useEffect } from "react";
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import axios from "axios";
import { baseUrl } from "../../../api/Api";
import getLocal from "../../../helper/Auth";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import setJobDetails from "../../../redux/Actions/JobActions";
import { toggleLoading } from "../../../redux/Actions/AuthAction";

function JobDetails() {
    const [jobs, setJobs] = useState([]);
    const job = useSelector((state) => state.job);
    const loading = useSelector((state) => state.loading);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fetchEmployerJobs = async () => {
        try {
            const token = getLocal();
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            const response = await axios.get(`${baseUrl}/employer/jobs/`, {
                headers,
            });
            dispatch(setJobDetails(response.data));
            setJobs(response.data);
        } catch (error) {
            console.error("Error fetching employer jobs:", error);
        }
    };

    useEffect(() => {
        fetchEmployerJobs();
        dispatch(toggleLoading());
    }, []);

    const handleViewClick = (jobId) => {
        console.log("Clicked on job ID:", jobId);
        navigate(`/employer/view-job/${jobId}`);
    };

    const handleUpdateClick = (jobId) => {
        navigate(`/employer/update-job/${jobId}`);
    };

    if (loading) {
        return (
            <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        );
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
                                        Senior Python Developer
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="w-1/4 font-bold">Location :</div>
                                    <div className="w-3/4 text-start">Bangalore</div>
                                </div>
                                <div className="flex">
                                    <div className="w-1/4 font-bold">CTC :</div>
                                    <div className="w-3/4 text-start">600000</div>
                                </div>
                                <div className="flex">
                                    <div className="w-1/4 font-bold">Job type :</div>
                                    <div className="w-3/4 text-start">Full Time</div>
                                </div>
                                <div className="flex">
                                    <div className="w-1/4 font-bold">Work type :</div>
                                    <div className="w-3/4 text-start">Remote</div>
                                </div>
                                <div className="flex">
                                    <div className="w-1/4 font-bold">Total Vacancy :</div>
                                    <div className="w-3/4 text-start">30</div>
                                </div>
                                <div className="flex">
                                    <div className="w-1/4 font-bold">Minimum Experience :</div>
                                    <div className="w-3/4 text-start">2 years</div>
                                </div>
                                <div className="flex">
                                    <div className="w-1/4 font-bold">Created at :</div>
                                    <div className="w-3/4 text-start">10/12/2023</div>
                                </div>
                                <div className="flex">
                                    <div className="w-1/4 font-bold">Job Description :</div>
                                    <div className="w-3/4 text-start">
                                        Design, development, and deployment in web development
                                        process to build modern user interface components to enhance
                                        application. Developing, implementing highly responsive user
                                        interface components using React concepts and modifying as
                                        well.
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="w-1/4 font-bold">Required skills :</div>
                                    <div className="w-3/4 text-start">
                                        Django, React Js, Redux
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="w-1/4 font-bold">Education :</div>
                                    <div className="w-3/4 text-start">
                                        Computer Science Bsc, BE
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="w-1/4 font-bold">About company: </div>
                                    <div className="w-3/4 text-start">
                                        We're making communications more flexible, intelligent, and
                                        personal, to help enterprises worldwide stay ahead. We
                                        provide unified communications.
                                    </div>
                                </div>
                                <div className="flex gap-6 font-bold justify-end  cursor-pointer">
                                    <div className="bg-[#817d7d] text-white ps-10 pe-10 pt-2 pb-1 rounded-lg">
                                        <Link>UPDATE</Link>
                                    </div>
                                    <div className="bg-[#312f97] text-white ps-10 pe-10 pt-2 pb-1 rounded-lg">
                                        <Link>APPLICATIONS</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default JobDetails;
