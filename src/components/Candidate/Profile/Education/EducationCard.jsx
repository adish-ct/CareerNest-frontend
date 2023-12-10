import { Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import { FaRegStar } from 'react-icons/fa';
import getLocal from '../../../../helper/Auth';
import axios from 'axios';
import { baseUrl } from '../../../../api/Api';
import { useDispatch, useSelector } from 'react-redux';
import educationAction from '../../../../redux/Actions/EducationsAction';
import EducationEditModal from '../../../Modal/Candidate/ProfileModals/EducationEditModal';

function EducationCard() {
    const [open, setOpen] = useState(false);
    const [selectedEducation, setSelectedEducation] = useState(null);

    const education = useSelector((state) => state.education);
    
    const handleOpen = () => setOpen(!open);
    const dispatch = useDispatch();

    const fetchData = async () => {
        try {
            const token = getLocal();
            if (token) {
                const response = await axios.get(`${baseUrl}/education/`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                dispatch(educationAction(response.data));
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleEducation = (index) => {
        const data = education[index]
        setSelectedEducation(data)
        handleOpen();
    };

    useEffect(() => {
        try {
            fetchData();
        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <>
            {education && (
                education.map((data, index) => (
                    <div className='mt-2' key={index}>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center  mb-2">
                                <div className="flex gap-4 items-center">
                                    <FaRegStar className='text-[#000]' />
                                    <Typography variant="h5" color="blue-gray" className="">
                                        {data.stream}
                                    </Typography>
                                </div>
                                <CiEdit onClick={() => handleEducation(index)} variant="gradient" className='text-blue-800 hover:text-red-600' />
                            </div>
                            <h1> {data.organization} </h1>
                            <h1> {data.start_date} - {data.currently_studying ? "Currently Studying" : data.end_date} </h1>
                            <h1> {data.score} </h1>
                            <h1> desc </h1>
                        </div>
                        <hr className='mt-4' />

                        {/* Render the ExperienceDialog component and pass the necessary props */}
                    </div>
                ))
            )}
            <EducationEditModal open={open} handleOpen={handleOpen} selectedEducation={selectedEducation} />
        </>
    );
}

export default EducationCard;
