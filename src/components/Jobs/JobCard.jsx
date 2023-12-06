import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import employerAction from '../../redux/Actions/EmployerAction'
import axios from 'axios';
import { baseUrl } from '../../api/Api';
import { IoMdStar } from 'react-icons/io';
import { PiSuitcaseSimpleThin } from "react-icons/pi";

function JobCard({ job, onClick }) {
    const employer = useSelector((state) => state.employer);
    const dispatch = useDispatch();

    const handleCardClick = async () => {
        onClick && onClick(job);
    };



    useEffect(() => {
    }, []);

    return (
        <div className='w-full bg-white p-5 shadow-md rounded-lg' onClick={handleCardClick}>
            <h1 className='text-xl font-bold mb-4'>{job.job_role}</h1>
            <div className="flex flex-col">
                <div className="flex gap-2 items-center">
                    <PiSuitcaseSimpleThin />
                    <h2> {job.experience} years experience</h2>
                </div>
                <div className="flex gap-2 items-center">
                    <IoMdStar className="text-[#f7b32b]" />
                    <h1>{job.organization}</h1>
                </div>

            </div>
        </div>
    );
}

export default JobCard;
