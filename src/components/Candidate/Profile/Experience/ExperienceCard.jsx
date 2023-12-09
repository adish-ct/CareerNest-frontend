import { Typography } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { FaRegStar } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import ExperienceEditModal from '../../../Modal/Candidate/ProfileModals/ExperienceEditModal';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { baseUrl } from '../../../../api/Api';
import getLocal from '../../../../helper/Auth';
import experienceAction, { experienceDetailsAction } from '../../../../redux/Actions/ExperienceAction'

function ExperienceCard() {

    const experience = useSelector((state) => state.experience)
    const dispatch = useDispatch()
    const [selectedExperience, setSelectedExperience] = useState(null)
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    const fetchExperience = async () => {
        try {
            const token = getLocal()
            if (token) {
                const response = await axios.get(`${baseUrl}/experience/`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                dispatch(experienceAction(response.data))
            }
        } catch (error) {
            console.log(error);
        } finally {
        }
    }

    useEffect(() => {
        try {
            fetchExperience();
        } catch (error) {
            console.log(error);
        }
    }, [])

    const handleExperience = (index) => {
        if (experience) {
            const data = experience[index]
            setSelectedExperience(data)
        }
        handleOpen()
    }

    return (
        <>
            {experience && (
                experience.map((experience, index) => (
                    <div key={index} className='mt-2'>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center  mb-2">
                                <div className="flex gap-4 items-center">
                                    <FaRegStar className='text-[#000]' />
                                    <Typography variant="h5" color="blue-gray" className="">
                                        {experience.job_role}
                                    </Typography>
                                </div>
                                <CiEdit onClick={() => handleExperience(index)} variant="gradient" className='text-blue-800 hover:text-red-600' />
                            </div>
                            <h1>{experience.organization}</h1>
                            <h1>{experience.start_date} - {experience.end_date} </h1>
                            <h1> {experience.skills} </h1>
                            <h1> {experience.description} </h1>
                        </div>
                        <hr className='mt-4' />

                        {/* Render the ExperienceDialog component and pass the necessary props */}
                        <ExperienceEditModal open={open} handleOpen={handleOpen} selectedExperience={selectedExperience} />
                    </div>
                ))
            )}
        </>
    )
}

export default ExperienceCard;
