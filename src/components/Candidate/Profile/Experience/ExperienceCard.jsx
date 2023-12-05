import { Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import { FaRegStar } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import ExperienceEditModal from '../../../Modal/Candidate/ExperienceEditModal';

function ExperienceCard() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    return (
        <>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center  mb-2">
                    <div className="flex gap-4 items-center">
                        <FaRegStar className='text-[#000]' />
                        <Typography variant="h5" color="blue-gray" className="">
                            Job
                        </Typography>
                    </div>
                    <CiEdit onClick={handleOpen} variant="gradient" className='text-blue-800 hover:text-red-600' />
                </div>

                <h1>organization</h1>
                <h1>period </h1>
                <h1>skills </h1>
                <h1>description </h1>
            </div>
            <hr />

            {/* Render the ExperienceDialog component and pass the necessary props */}
            <ExperienceEditModal open={open} handleOpen={handleOpen} />
        </>
    )
}

export default ExperienceCard;
