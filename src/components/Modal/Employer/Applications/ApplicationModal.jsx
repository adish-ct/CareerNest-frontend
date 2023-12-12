import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from '@material-tailwind/react'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { RxCross2 } from "react-icons/rx";
import { GiCrossedBones } from "react-icons/gi";
import { updateApplicationApi } from '../../../../api/ApplicationApi';
import getLocal from '../../../../helper/Auth';
import { jwtDecode } from 'jwt-decode';

function ApplicationModal({ open, handler, selectedApplication }) {

    if (!selectedApplication) {
        return;
    }


    const handleAccept = async (applicationId) => {
        try {
            const values = {
                "is_pending": false,
                "is_accept": true,
                "is_reject": false,
                "status": "Accepted",
            }
            const response = await updateApplicationApi(applicationId, values)
            toast.success("Application shortlisted")
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    const handleReject = async (applicationId) => {
        console.log(applicationId);
        try {
            const values = {
                "is_pending": false,
                "is_accept": false,
                "is_reject": true,
                "status": "Rejected",
            }
            const response = await updateApplicationApi(applicationId, values)
            console.log(response);
            toast.error("Application Rejected")
        } catch (error) {

        }
        console.log("reject");
    }

    return (
        <>
            <Dialog open={open}>
                <ToastContainer />

                {/* form should be inside the Dialog block */}
                <DialogHeader className='flex justify-between'>
                    <div></div>
                    <h1>Verify Application</h1>
                    <Typography
                        color="red"
                        onClick={handler}
                        className="mr-1 cursor-pointer"
                    >
                        <GiCrossedBones className='text-xl' />
                    </Typography>

                </DialogHeader>
                <hr />
                <DialogBody>
                    <div className="grid grid-cols-1">
                        <div className="grid grid-cols-2  p-4">
                            <div className="flex flex-col gap-2">
                                <h1 className="font-bold">Applicant name</h1>
                                <h1 className="font-bold">Designation</h1>
                                <h1 className="font-bold">Experience</h1>
                                <h1 className="font-bold">Email</h1>
                                <h1 className="font-bold">Place</h1>
                                <h1 className="font-bold">Related document</h1>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h1>: {selectedApplication.user.username}</h1>
                                <h1>: {selectedApplication.user.profile.candidate_designation}</h1>
                                <h1>: {`${selectedApplication.user.profile.candidate_experience_year} year ${selectedApplication.user.profile.candidate_experience_month} months`}</h1>
                                <h1>: {selectedApplication.user.email}</h1>
                                <h1>: {`${selectedApplication.user.profile.place}, ${selectedApplication.user.profile.city}`}</h1>
                                <h1>: Document </h1>
                            </div>
                        </div>
                    </div>


                </DialogBody>
                <DialogFooter className='pb-10'>
                    <div className="text-center mx-auto flex gap-3 ">
                        <div className="ps-4 pe-4 my-auto rounded-lg text-white bg-green-500 cursor-pointer" onClick={() => handleAccept(selectedApplication.id)}>Accept</div>
                        <div className="ps-4 pe-4 text-[#fff] bg-red-500 rounded-lg cursor-pointer" onClick={() => handleReject(selectedApplication.id)}>Reject</div>
                    </div>
                </DialogFooter>
            </Dialog>
        </>
    )
}

export default ApplicationModal
