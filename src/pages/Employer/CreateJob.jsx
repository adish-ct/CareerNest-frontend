import React from 'react'
import Sidebar from '../../components/Employer/Sidebar'
import { Card, Typography } from '@material-tailwind/react'
import { Input } from "@material-tailwind/react";
import "./CreateJob.css"

function CreateJob() {

    const locations = [
        "Mumbai, Maharashtra", "Delhi, Delhi", "Bangalore, Karnataka", "Hyderabad, Telangana", "Chennai, Tamil Nadu",
        "Kolkata, West Bengal", "Jaipur, Rajasthan", "Ahmedabad, Gujarat", "Pune, Maharashtra",
        "Lucknow, Uttar Pradesh", "Chandigarh", "Bhopal, Madhya Pradesh", "Visakhapatnam, Andhra Pradesh", "Kochi, Kerala", "Indore, Madhya Pradesh",
        "Agra, Uttar Pradesh", "Amritsar, Punjab", "Patna, Bihar", "Bhubaneswar, Odisha", "Dehradun, Uttarakhand"
    ];
    const workType = ["Permanent", "Contract", "Intern"]
    const jobType = ["Work from home", "Work from office", "Hybrid"]

    return (
        <>
            <div className="flex">
                <Sidebar />
                {/* main dashboard */}
                <div className="h-screen w-5/6">
                    {/* Dashboard Heading */}
                    <div className="text-center md:p-10 p-5 bg-[#eee] border-black">
                        <Typography variant="body1" className="text-3xl font-bold">
                            CREATE JOB
                        </Typography>
                    </div>
                    {/* Dashboard Heading */}

                    {/* Dashboard cards */}
                    <div className="text-start p-5 md:ps-20 ps-10 md:pt-10">
                        <Typography variant="body1" className="text-3xl font-bold">
                            Provide the job details
                        </Typography>
                    </div>
                    {/* Dashboard cards */}

                    {/* Dashboard content */}
                    <div className="text-center p-10 md:pe-20 md:ps-20 rounded-3xl">
                        <div className="text-center ">
                            <Card className="w-full p-10 job-box">
                                <div className="flex flex-col gap-4">
                                    <div className="flex gap-3">
                                        <div className="w-2/4">
                                            <Input label="Job role" />
                                        </div>
                                        <select className='border w-96' id="location" color="lightBlue" size="lg" placeholder="Select a location">
                                            {locations.map((location, index) => (
                                                <option key={index} value={location}>
                                                    {location}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-2/4">
                                            <Input label="Job CTC" />
                                        </div>
                                        <select className='border w-96' id="workType" color="lightBlue" size="lg" placeholder="Select a location">
                                            {workType.map((value, index) => (
                                                <option key={index} value={value}>
                                                    {value}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="flex gap-3">
                                        <select className='border w-80' id="jobType" color="lightBlue" size="lg" placeholder="Select a location">
                                            {jobType.map((value, index) => (
                                                <option key={index} value={value}>
                                                    {value}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="w-2/4">
                                            <Input label="Total vaccancy" />
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-2/4">
                                            <Input label="Required skills" />
                                        </div>
                                        <div className="w-2/4">
                                            <Input label="Qualifications" />
                                        </div>
                                    </div>
                                    <div className="w-full text-left p-5">
                                        <label htmlFor="description">Job Description</label>
                                        <textarea className='w-full mt-5' rows="3" placeholder="Enter your text here"></textarea>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                    {/* Dashboard content */}
                </div>
                {/* main dashboard */}
            </div>
        </>
    )
}

export default CreateJob
