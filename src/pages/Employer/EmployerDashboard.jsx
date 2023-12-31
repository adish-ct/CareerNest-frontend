import React from 'react'
import { Typography, Card, CardBody, Button } from '@material-tailwind/react';
import Sidebar from '../../components/Employer/Sidebar';
import DashboardSmallCard from '../../components/Employer/Dashboard/DashboardSmallCard';
import { ToastContainer } from 'react-toastify';
import PageHeader from '../../components/Employer/PageHeader';



function EmployerDashboard() {

    var ar = ['a', 'b', 'c', 'd']

    return (
        <>
            <ToastContainer />
            <div className="flex">
                <Sidebar />
                {/* main dashboard */}
                <div className="h-screen w-5/6">
                    <PageHeader header='DASHBOARD' />

                    {/* Dashboard cards */}
                    <div className="flex flex-row justify-around">
                        {
                            ar.map((index) => (
                                <DashboardSmallCard key={index} />
                            ))
                        }
                    </div>
                    {/* Dashboard cards */}

                    {/* Dashboard content */}
                    <div className="text-center p-28">
                        <div className="flex justify-between">
                            <h1></h1>
                            <h1></h1>
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
