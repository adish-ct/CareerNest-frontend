import { Card, CardBody, Typography } from '@material-tailwind/react'
import React from 'react'
import { MdAttachMoney, MdWorkOutline } from 'react-icons/md'
import { GrOrganization } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { CiMoneyCheck1 } from "react-icons/ci";

function JobDetailCard({ job }) {
    return (
        <>
            <Card className="mt-6 w-full">
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Job Details
                    </Typography>
                    <hr />
                    <div className="flex flex-col p-3 gap-1">
                        <div className='flex gap-2 items-center'>
                            <MdWorkOutline className="text-md text-[#616161]" />
                            <h5 className="card-title">Job Role -</h5>
                            <div className="card-text"><b>{job.job_role}</b></div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <GrOrganization className="text-md text-[#616161]" />
                            <h5 className="card-title">Organization -</h5>
                            <div className="card-text"><b>{job.organization}</b></div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <IoLocationOutline className="text-md text-[#616161]" />
                            <h5 className="card-title">Job Location -</h5>
                            <div className="card-text">{job.job_location}</div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <CiMoneyCheck1 className="text-md text-[#616161]" />
                            <h5 className="card-title">Job CTC -</h5>
                            <div className="card-text">{job.job_ctc} Lpa</div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}

export default JobDetailCard
