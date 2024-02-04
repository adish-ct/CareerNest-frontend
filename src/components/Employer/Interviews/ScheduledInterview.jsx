import React, { useState } from "react";
import { Card, CardBody, Button } from "@material-tailwind/react";
import { IoCopyOutline, IoCopy } from "react-icons/io5";

function ScheduledInterview() {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };
    
    return (
        <>
            <div className="w-full bg-[#f0efef] p-2 rounded-md">
                <div className="w-full rounded-md">
                    <div className="p-5 bg-white shadow-sm border rounded">
                        <h1 class="text-2xl my-auto mx-auto font-extrabold text-center">
                            SCHEDULED INTERVIEWS
                        </h1>
                    </div>

                    <div className="text-center pt-10">
                        <div className="text-center">
                            <Card className="w-5/6 mx-auto border-[#807f7f] border shadow-none">
                                <CardBody className="shadow-none">
                                    <div className="flex justify-between">
                                        <div className="flex flex-col w-full gap-1 text-sm md:text-base lg:text-lg">
                                            <div className="flex w-full ">
                                                <div className="w-2/6 font-bold text-left">
                                                    Applicant Id :
                                                </div>
                                                <div className="w-4/6 text-start font-bold">
                                                    ID : CB234545-23-01
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div className="w-1/3 font-bold text-left">
                                                    Applicant :
                                                </div>
                                                <div className="w-3/6 text-start">
                                                    Vishnu Krishnakumar
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div className="w-1/3 font-bold text-left">
                                                    Date :
                                                </div>
                                                <div className="w-3/6 text-start">
                                                    01 / 01 / 2024
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div className="w-1/3 font-bold text-left">
                                                    Interview Time :
                                                </div>
                                                <div className="w-3/6 text-start">
                                                    04.00 PM
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div className="w-1/3 font-bold text-left">
                                                    Interview Link :
                                                </div>
                                                <div className="w-3/6 text-start">
                                                    https://ningalude_interview_link_job_venamenkil_kayaram
                                                </div>
                                                <div className="mx-auto">
                                                    <div
                                                        className="flex gap-6 font-bold cursor-pointer"
                                                        onClick={
                                                            handleCopyClick
                                                        }
                                                    >
                                                        {isCopied ? (
                                                            <IoCopy className="text-2xl text-black" />
                                                        ) : (
                                                            <IoCopyOutline className="text-2xl text-black" />
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ScheduledInterview;