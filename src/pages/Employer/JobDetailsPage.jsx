import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Employer/SideNavBar/Navbar'
import Sidebar from '../../components/Employer/SideNavBar/Sidebar'
import JobDetails from '../../components/Employer/MainComponents/JobDetails'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLoading } from '../../redux/Actions/AuthAction';
import { fetchSelectedJobApi } from '../../api/JobApi';

function JobDetailsPage() {

    // taking parameters from api-end point.
    const params = useParams()
    const [selectedJob, setSelectedJob] = useState(null)
    const loading = useSelector((state) => state.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            await fetchSelectedJob();
            dispatch(toggleLoading());
        }
        fetchData();
    }, [params.jobId]);

    const fetchSelectedJob = async () => {
        try {
            if (params.jobId !== undefined) {
                // use await if you are calling an api.
                const response = await fetchSelectedJobApi(params.jobId);
                setSelectedJob(response.data);
            }
        } catch (error) {
            console.error("Error fetching employer job details:", error);
        }
    };


    if (loading) {
        return;

    }

    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <div className="flex-1 overflow-y-auto bg-[#f0efef]">
                    <JobDetails selectedJob={selectedJob} />
                </div>
            </div>
        </div>
    )
}

export default JobDetailsPage
