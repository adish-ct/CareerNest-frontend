import { Card, CardBody, Typography } from '@material-tailwind/react'
import React from 'react'

function JobKeySkillsCard({ job }) {
    return (
        <>
            <Card className="mt-6 w-full">
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Key Skills
                    </Typography>
                    <hr />
                    <div className="flex gap-3 flex-row p-3" >
                        {job && (
                            <>
                                {job.skills.split(',').map((value, index) => (
                                    <div className='border pe-3 ps-3 pt-1 pb-1 rounded-lg bg-[#f5f5f5]' key={index}>{value.trim()}</div>
                                ))}
                            </>
                        )}
                    </div>
                </CardBody>
            </Card>
        </>
    )
}

export default JobKeySkillsCard
