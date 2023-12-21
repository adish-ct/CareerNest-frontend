import React from "react";
import { Card, CardBody, Button } from "@material-tailwind/react";

function ScheduledInterview() {
    return (
        <>
            <div className="w-full bg-[#f0efef] p-2 rounded-md">
                <div className="w-full rounded-md">
                    <div className="p-2 bg-white shadow-sm border rounded">
                        <h1 className="text-2xl my-4 mx-auto font-extrabold text-center sm:text-2xl lg:text-3xl">
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
                                                    https://gslhlfhllf/dfjdjlf/dfjflwal
                                                </div>
                                                <div className="text-end">
                                                    <div className="flex gap-6 font-bold cursor-pointer">
                                                        <div className="bg-[#312f97] text-white ps-6 pe-6 p-0.5 rounded-md">
                                                            Copy
                                                        </div>
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
