import React from 'react';

function JobCard({ job, onClick }) {

    const handleCardClick = () => {
        // Call the onClick function with the job as an argument
        onClick && onClick(job);
    };

    return (
        <div className='w-full bg-white p-5 shadow-md rounded-lg' onClick={handleCardClick}>
            <h1 className='text-xl font-bold'>Developer</h1>
            <div className="flex flex-col gap-2">
                <h1>{job.job_role}</h1>
                {job.employer && (
                    <>
                        <h1>Employer: {job.employer.username}</h1>
                        <h1>Email: {job.employer.email}</h1>
                        {/* Add more employer details as needed */}
                    </>
                )}
                <h1>Hello</h1>
            </div>
        </div>
    );
}

export default JobCard;