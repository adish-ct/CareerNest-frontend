import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, Spinner, Typography } from '@material-tailwind/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleLoading } from '../../../redux/Actions/AuthAction';
import { fetchEmployerJobApi } from '../../../api/JobApi';

const JobCard = ({ job, onViewClick, onUpdateClick }) => (
    <Card className="mt-6 w-1/2 bg-[#f8f8f8]">
        <CardBody>
            <div className="flex justify-between ps-10 pe-10">
                <div className="flex flex-col text-start">
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        {job.job_role}
                    </Typography>
                    <Typography>Location: {job.job_location}</Typography>
                </div>
                <div className="flex flex-col gap-5 text-end">
                    <Button onClick={() => onViewClick(job.id)}>View</Button>
                    <Button onClick={() => onUpdateClick(job.id)}>Update</Button>
                </div>
            </div>
        </CardBody>
    </Card>
);

const AllJobs = () => {
    const [jobs, setJobs] = useState([]);
    const loading = useSelector((state) => state.loading);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fetchEmployerJobs = async () => {
        try {
            dispatch(toggleLoading(true));
            const jobData = await fetchEmployerJobApi();
            setJobs(jobData);
        } catch (error) {
            console.error('Error fetching employer jobs:', error.message);
        } finally {
            dispatch(toggleLoading(false));
        }
    };

    useEffect(() => {
        fetchEmployerJobs();
    }, []);

    const handleViewClick = (jobId) => {
        navigate(`/employer/view-job/${jobId}`);
    };

    const handleUpdateClick = (jobId) => {
        navigate(`/employer/update-job/${jobId}`);
    };

    return (
        <div className="flex">
            <div className="w-full">
                <div className="text-center p-14">
                    {loading ? (
                        <Spinner />
                    ) : (
                        <div className="text-center flex gap-12 mb-12">
                            {jobs?.map((job, index) => (
                                <JobCard
                                    key={index}
                                    job={job}
                                    onViewClick={handleViewClick}
                                    onUpdateClick={handleUpdateClick}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllJobs;

