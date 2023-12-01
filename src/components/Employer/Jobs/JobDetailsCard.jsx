import { Card, CardBody, Typography } from '@material-tailwind/react';
import React from 'react'
import { IoMdStar } from 'react-icons/io';
import { MdBusiness, MdWork, MdLocationOn, MdAttachMoney, MdStar } from 'react-icons/md';
import JobKeySkillsCard from './JobKeySkillsCard';
import JobDescriptionsCard from './JobDescriptionsCard';
import JobHighlightsCard from './JobHighlightsCard';
import JobDetailCard from './JobDetailCard';

function JobDetailsCard({ job }) {


    return (
        <>
            <JobDetailCard job={job} />
            <JobKeySkillsCard job={job} />
            <JobDescriptionsCard job={job} />
            <JobHighlightsCard job={job} />

            <div className="grid grid-cols-1 gap-4">
                {/* Application Count Card */}
                <div className="card col-span-2">
                    <div className="card-body">
                        <MdStar className="text-4xl mb-2 text-yellow-500" />
                        <h5 className="card-title">Application Count</h5>
                        <div className="card-text">{job.application_count}</div>
                    </div>
                </div>

                {/* Department Card */}
                <div className="card col-span-2">
                    <div className="card-body">
                        <MdStar className="text-4xl mb-2 text-yellow-500" />
                        <h5 className="card-title">Department</h5>
                        <div className="card-text">{job.department}</div>
                    </div>
                </div>

                
            </div>
        </>
    )
}

export default JobDetailsCard
