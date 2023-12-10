import { Typography } from '@material-tailwind/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { baseUrl } from '../../../../api/Api'
import getLocal from '../../../../helper/Auth'
import { useDispatch, useSelector } from 'react-redux'
import projectAction from '../../../../redux/Actions/ProjectAction'
import { PiProjectorScreenDuotone } from "react-icons/pi";
import ProjectEditModal from '../../../Modal/Candidate/ProfileModals/ProjectEditModal'

function ProjectCard() {

    const [open, setOpen] = useState(false)
    const [selectedProject, setSelectedProject] = useState({})

    const project = useSelector((state) => state.project)

    const dispatch = useDispatch()

    const handleOpen = () => setOpen(!open);

    const fetchProfile = async () => {
        const token = getLocal()
        if (token) {
            const response = await axios.get(`${baseUrl}/project/`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch(projectAction(response.data))
        }
    }

    const handleProject = (index) => {
        const choosedProject = project[index]
        setSelectedProject(choosedProject)
        handleOpen()
    }

    useEffect(() => {
        const fetchData = async () => {
            await fetchProfile();
        }
        fetchData()
    }, [])


    return (
        <>
            {project && (
                project.map((data, index) => (
                    <div className='mt-2' key={index}>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center  mb-2">
                                <div className="flex gap-4 items-center">
                                    <PiProjectorScreenDuotone className='text-[#000]' />
                                    <Typography variant="h5" color="blue-gray" className="">
                                        {data.project_name}
                                    </Typography>
                                </div>
                                <CiEdit onClick={() => handleProject(index)} variant="gradient" className='text-blue-800 hover:text-red-600' />
                            </div>
                            <h1>{data.category}</h1>
                            <div className="flex gap-3">

                                <h1> {data.start_date} </h1> - {data.currently_working ? <p>Currently working on the project</p> : data.end_date}
                            </div>
                            <h1> {data.description} </h1>
                            <h1> {data.features} </h1>
                        </div>
                        <hr className='mt-4' />

                        {/* Render the ExperienceDialog component and pass the necessary props */}
                    </div>
                ))
            )}
            <ProjectEditModal open={open} handler={handleOpen} selectedProject={selectedProject} />
        </>
    )
}

export default ProjectCard
