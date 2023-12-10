import React from 'react';
import Navbar from '../../components/Employer/SideNavBar/Navbar';
import Sidebar from '../../components/Employer/SideNavBar/Sidebar';
import CreateJob from '../../components/Employer/MainComponents/CreateJob';


function CreateJobPage() {
    return (
        <>
            <div className="flex flex-col h-screen">
                <Navbar />
                <div className="flex flex-1 overflow-hidden">
                    <Sidebar />
                    <div className="flex-1 overflow-y-auto bg-[#f0efef]">
                        <CreateJob />
                    </div>
                </div>
            </div>
        </>
    );
}
export default CreateJobPage;
