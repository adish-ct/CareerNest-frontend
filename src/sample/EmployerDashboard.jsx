import React from 'react'
import { MdDashboard } from "react-icons/md";
import { FaSuitcase, FaRegCalendarTimes, FaUserFriends, FaFilter, FaSearch } from "react-icons/fa";
import { IoSettings, IoFilter } from "react-icons/io5";
import { Typography, Card, CardBody, Button, Input } from '@material-tailwind/react';

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
                    <div className="md:flex-row md:justify-around flex flex-col items-center">
                        {
                            ar.map(() => (
                                <Card className="mt-6 w-44 md:w-72">
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
                    <div className="text-center md:p-24 sm:p-5">
                        <div className="flex justify-between">
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                Posted Jobs
                            </Typography>
                            <div className="flex gap-3 items-center">
                                <FaFilter />
                                <IoFilter />
                                <div className="flex gap-3 items-center">
                                    <div className="relative flex w-full max-w-[24rem]">
                                        <Input
                                            type="email"
                                            label="search...."
                                            value=''
                                            className="pr-20"
                                            containerProps={{
                                                className: "min-w-0",
                                            }}
                                        />
                                        <Button
                                            size="sm"
                                            color="blue-gray"

                                            className="!absolute right-1 top-1 rounded"
                                        >
                                            <FaSearch />
                                        </Button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <Card className="mt-6 w-full">
                                <CardBody className=''>
                                    <div className="flex justify-between md:ps-10 md:pe-10">
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
