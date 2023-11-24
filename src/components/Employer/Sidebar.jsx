import React, { useState } from 'react'
import { MdDashboard } from "react-icons/md";
import { FaSuitcase, FaRegCalendarTimes, FaUserFriends } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Sidebar() {

    const [jobToggle, setJobToggle] = useState(false)

    return (
        <div className="h-screen text-center bg-black w-1/6">
            <div className="flex flex-col items-center gap-5">
                <div className="text-start flex flex-col gap-7 text-white">
                    <div className="flex flex-row gap-3">
                        <MdDashboard /><h1>Dashboard</h1>
                    </div>
                    <div className="flex flex-row gap-3 cursor-pointer" onClick={() => setJobToggle(!jobToggle)}>
                        <FaSuitcase /><h1>Jobs</h1>
                    </div>
                    {
                        jobToggle ? (
                            <div div className="job-toggle-content">
                                <Link to='/employer/create-job/'>Create Job</Link>
                                <p>Vies Jobs</p>
                            </div>
                        ) : (
                            ""
                        )
                    }

                    <div className="flex flex-row gap-3">
                        <FaUserFriends /><h1>Candidates</h1>
                    </div>
                    <div className="flex flex-row gap-3">
                        <FaRegCalendarTimes /><h1>Interviews</h1>
                    </div>
                    <div className="flex flex-row gap-3">
                        <IoSettings /><h1>Settings</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
