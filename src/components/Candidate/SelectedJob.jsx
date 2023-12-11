import React, { useEffect, useState } from 'react';
import { Button, Typography } from '@material-tailwind/react';
import { useSelector } from 'react-redux';
import { MdAccessTime, MdLocationOn } from 'react-icons/md';
import { TfiLightBulb } from "react-icons/tfi";
import getLocal from '../../helper/Auth';
import axios from 'axios';
import { baseUrl } from '../../api/Api';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function SelectedJob() {
    const selectedJob = useSelector((state) => state.job);
    const user = useSelector((state) => state.user);
    const [isApplied, setIsApplied] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkExistingApplication = async () => {
            try {
                const { data } = await axios.get(`${baseUrl}/application/`, {
                    params: { user: user?.user_id, job: selectedJob?.id, role: user?.role },
                    headers: { Authorization: `Bearer ${getLocal()}` },
                });
                setIsApplied(data.length > 0);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        if (getLocal() && user && selectedJob) {
            checkExistingApplication();
        }

        
    }, [user, selectedJob]);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };


    const handleApplyJob = async () => {
        const token = getLocal();

        if (!token || !user) {
            toast.warn("Login first");
            return navigate('/login/');
        }

        if (!selectedJob || isApplied) {
            toast.warn("You have already applied or no job selected");
            return;
        }

        try {
            const applicationData = { user: user.user_id, job: selectedJob.id, status: "applied" };
            const response = await axios.post(`${baseUrl}/application/`, applicationData, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.status === 201) {
                setIsApplied(true);
                toast.success("Job applied");
            } else {
                toast.error("Failed to apply for the job");
            }
        } catch (error) {
            console.error("Error applying for the job:", error);
            toast.error("An error occurred while applying for the job");
        }
    };

    const renderActionButton = () => {
        if (isApplied) {
            return <Button className='bg-[#5e90ed]'>Applied</Button>;
        } else {
            return <Button onClick={handleApplyJob} className='bg-[#f44]'>Apply Job</Button>;
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="flex bg-white p-5 justify-between items-center shadow-md w-full rounded-lg">
                <div className="flex flex-col gap-3">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        {selectedJob?.job_role}
                    </Typography>
                    <div className="flex flex-col">
                        <Typography variant="h6" color="blue-gray" className="flex gap-2 items-center">
                            <MdLocationOn className="text-md text-red-500" />
                            {selectedJob?.job_location}
                        </Typography>
                        <Typography color="blue-gray" className="flex gap-2 items-center">
                            <MdAccessTime className="text-sm text-blue-500" />
                            {formatDate(selectedJob?.created_at)}
                        </Typography>
                        <Typography color="blue-gray" className="flex gap-2 items-center">
                            <TfiLightBulb className="text-md text-yellow-500" />
                            {selectedJob?.application_count} applicants
                        </Typography>
                    </div>
                </div>
                <div className="text-center">{renderActionButton()}</div>
            </div>
        </>
    );
}

export default SelectedJob;
