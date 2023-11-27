import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLoading } from '../../redux/Actions/AuthAction';
import { IoMdStar } from 'react-icons/io';
import employerAction from '../../redux/Actions/EmployerAction';
import axios from 'axios';
import { baseUrl } from '../../api/Api';

const TabPanel = ({ id, children, isActive }) => (
    <div className={`p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 ${isActive ? 'block' : 'hidden'}`} id={id} role="tabpanel" aria-labelledby={`${id}-tab`}>
        {children}
    </div>
);

const TabButton = ({ id, label, isActive, onClick }) => (
    <li className="me-2">
        <button
            id={`${id}-tab`}
            data-tabs-target={`#${id}`}
            type="button"
            role="tab"
            aria-controls={id}
            aria-selected={isActive}
            className={`inline-block p-4 ${isActive ? 'text-[#952828]' : 'hover:text-gray-600'} rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500 dark:hover:text-gray-300`}
            onClick={onClick}
        >
            {label}
        </button>
    </li>
);

function SelectedJobDetails() {
    const [activeTab, setActiveTab] = useState('jobDetails');
    const dispatch = useDispatch();
    const job = useSelector((state) => state.job);
    const loading = useSelector((state) => state.loading);
    const employer = useSelector((state) => state.employer);

    const getEmployer = async (job) => {
        try {
            const response = await axios.get(`${baseUrl}/accounts/get-user/${job.employer}`);
            dispatch(employerAction(response.data));
            return response.data;
        } catch (error) {
            console.error('Error fetching employer:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                dispatch(toggleLoading(true));
                const employerData = await getEmployer(job);
                // Do something with employerData if needed
                console.log(employerData);
            } finally {
                dispatch(toggleLoading(false));
            }
        };

        fetchData();
    }, [dispatch, job]);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" id="defaultTab" role="tablist">
                <TabButton id="jobDetails" label="Job Details" isActive={activeTab === 'jobDetails'} onClick={() => handleTabClick('jobDetails')} />
                <TabButton id="keySkills" label="Key Skills" isActive={activeTab === 'keySkills'} onClick={() => handleTabClick('keySkills')} />
                <TabButton id="recruiterDetails" label="Recruiter Details" isActive={activeTab === 'recruiterDetails'} onClick={() => handleTabClick('recruiterDetails')} />
            </ul>
            <div id="defaultTabContent">
                <TabPanel id="jobDetails" isActive={activeTab === 'jobDetails'}>
                    {job && (
                        <>
                            <ul>
                                {job.description.split(',').map((value, index) => (
                                    <div className="flex gap-2" key={index}>
                                        <IoMdStar />
                                        <li>{value.trim()}</li>
                                    </div>
                                ))}
                            </ul>
                        </>
                    )}
                </TabPanel>
                <TabPanel id="keySkills" isActive={activeTab === 'keySkills'}>
                    {job && (
                        <>
                            {job.skills.split(',').map((value, index) => (
                                <div className="flex gap-2" key={index}>
                                    <li>{value.trim()}</li>
                                </div>
                            ))}
                        </>
                    )}
                </TabPanel>
                <TabPanel id="recruiterDetails" isActive={activeTab === 'recruiterDetails'}>
                    {employer && (
                        <>
                            <h1>Company: {employer.username}</h1>
                            <h1>Email: {employer.email}</h1>
                            <h1>Website: www.{employer.username}.com</h1>
                            <p>You can share your resume through mail also.</p>
                        </>
                    )}
                </TabPanel>
            </div>
        </div>
    );
}

export default SelectedJobDetails;
