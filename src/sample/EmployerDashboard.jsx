import React from 'react'
import { MdDashboard } from "react-icons/md";
import { FaSuitcase, FaRegCalendarTimes, FaUserFriends } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { Typography, Card, CardBody, Button } from '@material-tailwind/react';

function EmployerDashboard() {
    var ar = ['a', 'b', 'c', 'd']
    return (
        <>
            <div className="flex">
                {/* side bar */}
                <div className="h-screen text-center bg-black w-1/6">
                    <div className="flex flex-col items-center gap-5">
                        <div className="text-start flex flex-col gap-7 text-white">
                            <div className="flex flex-row gap-3">
                                <MdDashboard /><h1>Dashboard</h1>
                            </div>
                            <div className="flex flex-row gap-3">
                                <FaSuitcase /><h1>Jobs</h1>
                            </div>
                            <div className="flex flex-row gap-3">
                                <FaUserFriends /><h1>Candidates</h1>
                            </div>
                            <div className="flex flex-row gap-3">
                                <FaRegCalendarTimes /><h1>Interviews</h1>
                            </div>
                            <div className="flex flex-row gap-3">
                                <IoSettings /><h1>Settings</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* side bar end */}
                {/* main dashboard */}
                <div className="h-screen bg-deep-orange-100 w-5/6">
                    {/* Dashboard Heading */}
                    <div className="text-center md:p-10 border-b border-black">
                        <Typography variant="body1" className="text-3xl font-bold">
                            DASHBOARD
                        </Typography>
                    </div>
                    {/* Dashboard Heading */}

                    {/* Dashboard cards */}
                    <div className="flex flex-row justify-around">
                        {
                            ar.map(() => (
                                <Card className="mt-6 w-80">
                                    <CardBody className='text-center'>
                                        <Typography variant="h5" color="blue-gray" className="mb-2">
                                            Followers
                                        </Typography>
                                        <Typography>
                                            count
                                        </Typography>
                                        <Typography>
                                            Additional
                                        </Typography>
                                    </CardBody>
                                </Card>
                            ))
                        }
                    </div>
                    {/* Dashboard cards */}

                    {/* Dashboard content */}
                    <div className="text-center p-28">
                        <div className="flex justify-between">
                            <h1>hello</h1>
                            <h1>hello</h1>
                        </div>
                        <div className="text-center">
                            <Card className="mt-6 w-full">
                                <CardBody className=''>
                                    <div className="flex justify-between ps-10 pe-10">
                                        <div className="flex flex-col text-start">
                                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                                Followers
                                            </Typography>
                                            <Typography>
                                                count
                                            </Typography>
                                        </div>
                                        <div className="flex flex-col gap-5 text-end">
                                            <Button>
                                                View
                                            </Button>
                                            <Typography>
                                                Additional
                                            </Typography>
                                        </div>
                                    </div>



                                </CardBody>
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

export default EmployerDashboard
