import { Card, CardBody, Typography } from '@material-tailwind/react'
import React from 'react'
import { IoMdStar } from 'react-icons/io'

function JobDescriptionsCard({ job }) {
    return (
        <>
            <Card className="mt-6 w-full">
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Job Descriptions
                    </Typography>
                    <hr />
                    <div className="p-3">
                        {job && (
                            <>
                                <ul>
                                    {job.description.split(',').map((value, index) => (
                                        <div className="flex gap-2" key={index}>
                                            <IoMdStar />
                                            <li>{value.trim()}</li>
                                        </div>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </CardBody>
            </Card>
        </>
    )
}

export default JobDescriptionsCard
