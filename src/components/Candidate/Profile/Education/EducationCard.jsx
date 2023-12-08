import { Typography } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { FaRegStar } from 'react-icons/fa'
import getLocal from '../../../../helper/Auth';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { baseUrl } from '../../../../api/Api';

function EducationCard() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const token = getLocal()

    const fetchData = async () => {
        try {
            if (token) {
                const decodedToken = jwtDecode(token)
                const response = await axios.get(`${baseUrl}/education/`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                console.log(response);
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        
    }, [])

    return (
        <>
            <div className='mt-2 bg-blue-gray-50'>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center  mb-2">
                        <div className="flex gap-4 items-center">
                            <FaRegStar className='text-[#000]' />
                            <Typography variant="h5" color="blue-gray" className="">
                                stream
                            </Typography>
                        </div>
                        <CiEdit onClick={handleOpen} variant="gradient" className='text-blue-800 hover:text-red-600' />
                    </div>
                    <h1>organization</h1>
                    <h1>date </h1>
                    <h1> score </h1>
                    <h1> desc </h1>
                </div>
                <hr className='mt-4' />

                {/* Render the ExperienceDialog component and pass the necessary props */}
                {/* <ExperienceEditModal open={open} handleOpen={handleOpen} selectedExperience={experience} /> */}
            </div>
        </>
    )
}

export default EducationCard
