import { Typography } from '@material-tailwind/react'
import React from 'react'
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";

function ExperienceCard() {
    return (
        <>
            <div className="flex flex-col gap-2">
                <div className="flex gap-5 items-center mb-5">
                    <FaRegStar className='text-[#000]' />
                    <Typography variant="h5" color="blue-gray" className="">
                        Job
                    </Typography>
                </div>

                <h1>organization</h1>
                <h1>period </h1>
                <h1>skills </h1>
                <h1>description </h1>
            </div>
            <hr />
        </>
    )
}

export default ExperienceCard
