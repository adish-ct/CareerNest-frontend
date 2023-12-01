import { Card, CardBody, Typography } from '@material-tailwind/react'
import Navbar from '../../components/Header/Accounts/Navbar'
import React, { useState } from 'react'


const TabPanel = ({ id, children, isActive }) => (
    <div className={`bg-[#fff] rounded-lg dark:bg-gray-800 border-none ${isActive ? 'block' : 'hidden'}`} id={id} role="tabpanel" aria-labelledby={`${id}-tab`}>
        {children}
    </div>
);

const TabButton = ({ id, label, isActive, onClick }) => (
    <div className="">
        <button
            id={`${id}-tab`}
            data-tabs-target={`#${id}`}
            type="button"
            role="tab"
            aria-controls={id}
            aria-selected={isActive}
            className={`border-none inline-block p-3 ${isActive ? 'text-[#952828]' : 'hover:text-gray-600'} rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500 dark:hover:text-gray-300`}
            onClick={onClick}
        >
            {label}
        </button>
    </div>
);




function Profile() {

    // profile component set as default
    const [activeTab, setActiveTab] = useState('profile');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <>
            <Navbar />
            <div className="w-full h-1/3 ps-2 pe-2 md:ps-5 md:pe-5 lg:ps-8 lg:pe-8  rounded-lg">
                <img className='rounded-xl w-full h-48 sm:h-60 md:h-60 xl:h-64 2xl:h-72  ' src="https://raspberry-valley.azurewebsites.net/img/Python-01.jpg" alt="banner image" />
            </div>
            <div className="ps-8 pe-8 md:ps-16 md:pe-16 lg:ps-20 lg:pe-20 2xl:ps-80 2xl:pe-80">
                <div className="flex flex-col gap-8">
                    <div className="flex gap-8 items-end mt-[-30px] lg:mt-[-50px]">
                        <div className="rounded-xl shadow">
                            <img className=' rounded-3xl h-36 w-36 md:h-40 md:w-40 xl:w-44 xl:h-44 2xl:h-48 2xl:w-48' src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="profile pic" />
                        </div>
                        <div className="flex flex-col">
                            <h1>username</h1>
                            <h1>username</h1>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1>about</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sapiente obcaecati saepe, possimus quasi veritatis aut dicta natus nobis commodi magni hic nisi, laboriosam exercitationem delectus tempora. Vero, cumque alias.</p>
                    </div>
                </div>
                <hr className='mt-10 mb-10' />
                <div className="flex flex-row gap-2 w-full bg-[#787777]">
                    <div className="w-1/4">
                        <Card className="shadow rounded-l-none">
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                                    Quick Link
                                </Typography>
                                <hr />
                                <div className="text-left ps-10">
                                    <TabButton id="profile" label="Profile" isActive={activeTab === 'profile'} onClick={() => handleTabClick('profile')} />
                                    <TabButton id="appliedJobs" label="Applied Jobs" isActive={activeTab === 'appliedJobs'} onClick={() => handleTabClick('appliedJobs')} />
                                    <TabButton id="resume" label="Resume" isActive={activeTab === 'resume'} onClick={() => handleTabClick('resume')} />
                                    <TabButton id="experience" label="Experience" isActive={activeTab === 'experience'} onClick={() => handleTabClick('experience')} />
                                    <TabButton id="education" label="Education" isActive={activeTab === 'education'} onClick={() => handleTabClick('education')} />
                                    <TabButton id="skills" label="Skills" isActive={activeTab === 'skills'} onClick={() => handleTabClick('skills')} />
                                    <TabButton id="language" label="Language" isActive={activeTab === 'language'} onClick={() => handleTabClick('language')} />
                                    <TabButton id="project" label="Projects" isActive={activeTab === 'project'} onClick={() => handleTabClick('project')} />
                                    <TabButton id="socialMedia" label="Social Platforms" isActive={activeTab === 'socialMedia'} onClick={() => handleTabClick('socialMedia')} />
                                    <TabButton id="networks" label="My Networks" isActive={activeTab === 'networks'} onClick={() => handleTabClick('networks')} />
                                    <TabButton id="settings" label="Settings" isActive={activeTab === 'settings'} onClick={() => handleTabClick('settings')} />
                                </div>
                            </CardBody>

                        </Card>
                    </div>
                    <div className="w-3/4">
                        <Card className="shadow rounded-r-none">
                            <CardBody>

                                {/* Profile section */}
                                <TabPanel id="profile" isActive={activeTab === 'profile'}>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">
                                        Profile
                                    </Typography>
                                    <hr />
                                    <div className="p-3">
                                        <h1>hello</h1>
                                    </div>
                                </TabPanel>
                                {/* Profile section end */}

                                {/* Applied job section */}
                                <TabPanel id="appliedJobs" isActive={activeTab === 'appliedJobs'}>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">
                                        Applied Jobs
                                    </Typography>
                                    <hr />
                                    <div className="p-3">
                                        <h1>hello</h1>
                                    </div>
                                </TabPanel>
                                {/* Applied job section end */}

                                {/* Resume section */}
                                <TabPanel id="resume" isActive={activeTab === 'resume'}>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">
                                        Your Resume
                                    </Typography>
                                    <hr />

                                    <div className="flex gap-3 flex-row p-3" >
                                        <h1>hello</h1>
                                    </div>
                                </TabPanel>
                                {/* Resume section end */}

                                {/* Experience section */}
                                <TabPanel id="experience" isActive={activeTab === 'experience'}>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">
                                        Work Experience
                                    </Typography>
                                    <hr />

                                    <div className="flex gap-3 flex-row p-3" >
                                        <h1>hello</h1>
                                    </div>
                                </TabPanel>
                                {/* Experience section end */}

                                {/* Education section */}
                                <TabPanel id="education" isActive={activeTab === 'education'}>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">
                                        Work Experience
                                    </Typography>
                                    <hr />

                                    <div className="flex gap-3 flex-row p-3" >
                                        <h1>hello</h1>
                                    </div>
                                </TabPanel>
                                {/* Education section end */}

                                {/* Skills section end */}
                                <TabPanel id="skills" isActive={activeTab === 'skills'}>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">
                                        Your Skills
                                    </Typography>
                                    <hr />
                                    <div className="flex gap-3 flex-row p-3" >
                                        <h1>hello</h1>
                                    </div>
                                </TabPanel>
                                {/* Skills section end */}

                                {/* Language section end */}
                                <TabPanel id="language" isActive={activeTab === 'language'}>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">
                                        Languages
                                    </Typography>
                                    <hr />
                                    <div className="flex gap-3 flex-row p-3" >
                                        <h1>hello</h1>
                                    </div>
                                </TabPanel>
                                {/* Language section end */}

                                {/* Project section end */}
                                <TabPanel id="project" isActive={activeTab === 'project'}>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">
                                        Projects
                                    </Typography>
                                    <hr />
                                    <div className="flex gap-3 flex-row p-3" >
                                        <h1>hello</h1>
                                    </div>
                                </TabPanel>
                                {/* Project section end */}

                                {/* Social Media section end */}
                                <TabPanel id="socialMedia" isActive={activeTab === 'socialMedia'}>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">
                                        Socail Platforms
                                    </Typography>
                                    <hr />
                                    <div className="flex gap-3 flex-row p-3" >
                                        <h1>hello</h1>
                                    </div>
                                </TabPanel>
                                {/* Social Media section end */}

                                {/* Network section end */}
                                <TabPanel id="networks" isActive={activeTab === 'networks'}>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">
                                        My Networks
                                    </Typography>
                                    <hr />
                                    <div className="flex gap-3 flex-row p-3" >
                                        <h1>hello</h1>
                                    </div>
                                </TabPanel>
                                {/* Network section end */}

                                {/* Settings section end */}
                                <TabPanel id="settings" isActive={activeTab === 'settings'}>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">
                                        My Networks
                                    </Typography>
                                    <hr />
                                    <div className="flex gap-3 flex-row p-3" >
                                        <h1>hello</h1>
                                    </div>
                                </TabPanel>
                                {/* Settings section end */}

                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Profile
