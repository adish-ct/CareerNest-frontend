import React from 'react';
import { Button, Typography } from '@material-tailwind/react';
import { useSelector } from 'react-redux';
import { MdAccessTime, MdLocationOn } from 'react-icons/md';
import { TfiLightBulb } from "react-icons/tfi";

function SelectedJob() {

    // accessing the selected job from redux store.
    const selectedJob = useSelector((state) => state.job);

    if (!selectedJob) {
        return null; // If no job is selected, don't render the card
    }

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
        return formattedDate;
    };

    return (
        <div className="flex bg-white p-5 justify-between items-center shadow-md w-full rounded-lg">
            <div className="flex flex-col gap-3">
                <Typography variant="h5" color="blue-gray" className="mb-2">{selectedJob.job_role}</Typography>
                <div className="flex flex-col">
                    <Typography variant="" color="blue-gray" className="flex gap-2 items-center">
                        <MdLocationOn className="text-md text-red-500" />
                        {selectedJob.job_location}
                    </Typography>
                    <Typography variant="" color="blue-gray" className="flex gap-2 items-center">
                        <MdAccessTime className="text-sm text-blue-500" />
                        {formatDate(selectedJob.created_at)}
                    </Typography>
                    <Typography variant="" color="blue-gray" className="flex gap-2 items-center">
                        <TfiLightBulb className="text-md text-yellow-500" />
                        {selectedJob.application_count} applicants
                    </Typography>
                </div>
            </div>
            <div className="text-center">
                <Button className='bg-[#f44]'>Apply Job</Button>
            </div>
        </div>
    );
}

export default SelectedJob;
