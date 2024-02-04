import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import setJobDetails from '../../redux/Actions/JobActions';
import Navbar from '../../components/Header/Accounts/Navbar';
import JobCard from '../../components/Jobs/JobCard';
import SelectedJob from '../../components/Candidate/SelectedJob';
import SelectedJobDetails from '../../components/Candidate/SelectedJobDetails';
import { baseUrl } from '../../api/Api';

import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from 'react-query'

const Jobs = () => {

    const dispatch = useDispatch();

    const queryClient = useQueryClient();


    const { isLoading, isError, data: jobsData, error } = useQuery('jobs', async () => {
        try {
            const response = await axios.get(`${baseUrl}/jobs/`);
            dispatch(setJobDetails(response.data[0]));
            return response.data;
        } catch (error) {
            throw error;
        }
    }, {
        refetchOnMount: true
    });


    if (isLoading) {
        return (
            <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    const handleJobCardClick = async (job) => {

        try {
            // Dispatch an action to set job details in the local state (optional)
            dispatch(setJobDetails(job));

        } catch (error) {
            // Handle errors if needed
            console.error('Error updating job details:', error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="bg-blue-gray-400 p-4 lg:p-8 xl:p-12 2xl:px-24">
                <div className="flex flex-col lg:flex-row justify-between md:justify-around items-center">
                    <div className="mb-4 lg:mb-0 lg:mr-8 text-center lg:text-left">
                        <h1 className="text-4xl lg:text-5xl font-bold text-blue-gray-800 mb-2">Welcome to Our Platform</h1>
                        <p className="text-lg lg:text-xl text-blue-gray-600">Discover the best opportunities.</p>
                    </div>
                    <button className="bg-[#e83e3e] text-white px-6 py-3 rounded-md">Get Started</button>

                </div>
            </div>
            <div className=" p-4 lg:p-8 xl:px-24 2xl:px-72">
                {jobsData && (
                    <div className="flex flex-col justify-between md:flex-row ">
                        <div className="w-1/3 flex gap-2 p-2 md:flex-col">
                            {jobsData.map((job, index) => (
                                <JobCard key={index} job={job} onClick={() => handleJobCardClick(job)} />
                            ))}
                        </div>
                        <div className="w-2/3 p-2 flex flex-col gap-2">
                            <SelectedJob />
                            <SelectedJobDetails />
                        </div>
                    </div>
                )}

            </div>
        </>
    );
};

export default Jobs;
