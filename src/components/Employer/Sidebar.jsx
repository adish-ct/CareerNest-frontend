import React, { useState } from 'react'
import { MdDashboard } from "react-icons/md";
import { FaSuitcase, FaRegCalendarTimes, FaUserFriends } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Sidebar() {

    const [jobToggle, setJobToggle] = useState(false)

    const logoutHandler = () => {
        localStorage.removeItem("jwtToken");
        // clear user details from redux store
        dispatch(setUserDetails(null));
        dispatch(toggleLoading());
        setTimeout(() => {
            navigate('/login/')
        }, 0)
    };

    return (
        <div className="text-center bg-black w-1/6">
            <div className="flex flex-col items-center gap-5">
                <div className="text-start flex flex-col gap-7 text-white">
                    <Link className='flex flex-row gap-3 items-center' to='/employer/dashboard/'>
                        <MdDashboard /><h1>Dashboard</h1>
                    </Link>

                    <div className="flex flex-row gap-3 cursor-pointer items-center" onClick={() => setJobToggle(!jobToggle)}>
                        <FaSuitcase /><h1>Jobs</h1>
                    </div>

                    {jobToggle && (
                        <div className="job-toggle-content flex flex-col gap-2">
                            <Link to='/employer/create-job/'>Create Job</Link>
                            <Link to='/employer/jobs/'>View Job</Link>
                        </div>
                    )}

                    <div className="flex flex-row gap-3 items-center">
                        <FaUserFriends /><h1>Candidates</h1>
                    </div>

                    <div className="flex flex-row gap-3 items-center">
                        <FaRegCalendarTimes /><h1>Interviews</h1>
                    </div>

                    <div className="flex flex-row gap-3 items-center">
                        <IoSettings /><h1>Settings</h1>
                    </div>

                    <Link onClick={logoutHandler} className="text-base leading-5 mt-1 border-t border-b hover:text-red-500">
                        Logout
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Sidebar
