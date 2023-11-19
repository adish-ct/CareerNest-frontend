import React from 'react'
import Sidebar from '../myComponents/employer/Sidebar'
import DashboardSmallCard from '../myComponents/DashboardSmallCard'
import { Button, Card, CardBody, Typography } from '@material-tailwind/react'
import { Input } from "@material-tailwind/react";

function CreateJob() {
    return (
        <>
            <div className="flex">
                <Sidebar />
                {/* main dashboard */}
                <div className="h-screen bg-deep-orange-100 w-5/6">
                    {/* Dashboard Heading */}
                    <div className="text-center md:p-10 border-b border-black">
                        <Typography variant="body1" className="text-3xl font-bold">
                            CREATE JOB
                        </Typography>
                    </div>
                    {/* Dashboard Heading */}

                    {/* Dashboard cards */}
                    <div className="text-start p-5 md:ps-20 ps-10">
                        <Typography variant="body1" className="text-3xl font-bold">
                            Provide the job details
                        </Typography>
                    </div>
                    {/* Dashboard cards */}

                    {/* Dashboard content */}
                    <div className="text-center p-28">
                        <div className="text-center bg-orange-100">
                            <Card className="mt-6 w-full md:w-3/4">
                                <div className="flex flex-col gap-4">
                                    <div className="flex gap-3">
                                        <div className="w-2/4">
                                            <Input label="Job role" />
                                        </div>
                                        <div className="w-2/4">
                                            <Input label="Location" />
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-2/4">
                                            <Input label="Job CTC" />
                                        </div>
                                        <div className="w-2/4">
                                            <Input label="Work type" />
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-2/4">
                                            <Input label="Job type" />
                                        </div>
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
                                    <div className="w-full">

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
