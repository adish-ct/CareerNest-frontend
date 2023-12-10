import React from "react";
import { Card, CardBody } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function AllInterviews() {
    return (
        <div className="text-center">
            <Card className="mt-6 w-11/12 md:w-5/6 mx-auto border-[#807f7f] border shadow-none">
                <CardBody className="p-4 md:p-6">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="text-left mb-4 md:mb-0">
                            <h1>ID : CB234545-23-01</h1>
                            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-10">
                                <h1 className="text-lg font-bold">Vishnu Krishnakumar</h1>
                                <h1 className="font-medium">Python Developer</h1>
                            </div>
                        </div>
                        <div className="flex items-center justify-center md:justify-end">
                            <div className="flex flex-col gap-2 pr-5 md:gap-4 font-bold cursor-pointer">
                                <div className="bg-[#312f97] text-white px-3 sm:p-1 md:px-4 py-1 rounded-lg">
                                    <Link to="#">Manage</Link>
                                </div>
                                <div className="">
                                    <h1>
                                        Status :<span className="text-green-600"> Accepted</span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}

export default AllInterviews;
