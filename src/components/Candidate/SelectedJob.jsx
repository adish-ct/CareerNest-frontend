import React from 'react';
import { useSelector } from 'react-redux';

function SelectedJob() {
    // Use the useSelector hook to access the selected job from the Redux state
    const selectedJob = useSelector((state) => state.job);

    if (!selectedJob) {
        return null; // If no job is selected, don't render the card
    }

    return (
        <div className="w-full bg-white p-5 shadow-md rounded-lg">
            <h1 className="text-xl font-bold">{selectedJob.job_role}</h1>
            <div className="flex flex-col gap-2">
                <h1>{selectedJob.job_location}</h1>
                <h1>{selectedJob.job_ctc}</h1>
            </div>
        </div>
    );
}

export default SelectedJob;
