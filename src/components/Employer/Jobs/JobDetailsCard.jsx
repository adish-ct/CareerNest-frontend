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
        </>
    )
}

export default JobDetailsCard
