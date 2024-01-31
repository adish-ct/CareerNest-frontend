import React from "react";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { ToastContainer } from "react-toastify";
import { FaSort } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoCloudDownloadOutline } from "react-icons/io5";

function Dashboard() {
  return (
    <>
      {/* main dashboard */}
      <ToastContainer />
      <div className="w-full bg-[#f0efef] p-2 rounded-md">
        <div className="w-fullrounded-md">
          <div className="p-5 bg-white shadow-sm border rounded">
            <h1 className="text-2xl my-auto mx-auto font-extrabold text-center">
              DASHBOARD
            </h1>
          </div>
          {/* Dashboard cards */}
          <div className="flex flex-col md:flex-row md:flex-wrap justify-around pt-6">
            <Card className="mt-6 w-full md:w-80 bg-gradient-to-r bg-blue-gray-600 text-white md:mx-2 rounded-md shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <CardBody className="text-center">
                <Typography variant="h5" color="white" className="mb-2">
                  Followers
                </Typography>
                <Typography>45,6334</Typography>
                <Typography className="text-xs opacity-70">
                  Decreased by 10%
                </Typography>
              </CardBody>
            </Card>
            <Card className="mt-6 w-full md:w-80 bg-gradient-to-r bg-blue-gray-600 text-white md:mx-2 rounded-md shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <CardBody className="text-center">
                <Typography variant="h5" color="white" className="mb-2">
                  Job Posted
                </Typography>
                <Typography>454</Typography>
                <Typography className="text-xs opacity-70">
                  Closed 430
                </Typography>
              </CardBody>
            </Card>
            <Card className="mt-6 w-full md:w-80 bg-gradient-to-r bg-blue-gray-600 text-white md:mx-2 rounded-md shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <CardBody className="text-center">
                <Typography variant="h5" color="white" className="mb-2">
                  Contacted
                </Typography>
                <Typography>4,434</Typography>
                <Typography className="text-xs opacity-70">
                  Missed 23
                </Typography>
              </CardBody>
            </Card>
            <Card className="mt-6 w-full md:w-80 bg-gradient-to-r bg-blue-gray-600 text-white md:mx-2 rounded-md shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <CardBody className="text-center">
                <Typography variant="h5" color="white" className="mb-2">
                  Selected
                </Typography>
                <Typography>2,434</Typography>
                <Typography className="text-xs opacity-70">
                  Rejected 245
                </Typography>
              </CardBody>
            </Card>
          </div>

          {/* Dashboard cards */}
          {/* Dashboard content */}

          <div className="text-center pt-10">
            <div className="p-5 border border-[#b4b3b3] mt-2 w-full md:w-5/6 mx-auto bg-white rounded flex flex-col md:flex-row md:justify-between items-center">
              <h1 className="text-xl font-semibold text-gray-800">
                Posted Jobs
              </h1>
              <div className="flex flex-row justify-end items-center pr-8 gap-4 cursor-pointer">
                <div className="text-2xl text-gray-600 hover:text-gray-800">
                  <FaSort />
                </div>
                <div className="flex items-center bg-gray-100 rounded-lg shadow">
                  <input
                    className="pl-3 py-2 bg-transparent rounded-l-lg focus:outline-none"
                    type="text"
                    placeholder="Search..."
                  />
                  <div className="p-2 text-gray-600 hover:text-gray-800">
                    <IoSearch />
                  </div>
                </div>
                <div className="text-2xl text-gray-600 hover:text-gray-800">
                  <IoCloudDownloadOutline />
                </div>
              </div>
            </div>

            <div className="text-center">
              <Card className="mt-6 w-5/6 mx-auto border-[#807f7f] border shadow-none">
                <CardBody className="">
                  <div className="flex justify-between ps-10 pe-10">
                    <div className="flex flex-col text-start">
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-2"
                      >
                        Senior Python Developer
                      </Typography>
                      <Typography>count</Typography>
                    </div>
                    <div className="flex flex-col gap-5 text-end">
                      <Button className="bg-[#48639c]">View</Button>
                      <Typography>
                        Status:
                        <span className="text-green-700">active</span>
                      </Typography>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div className="text-center">
              <Card className="mt-6 w-5/6 mx-auto border-[#807f7f] border shadow-none">
                <CardBody className="">
                  <div className="flex justify-between ps-10 pe-10">
                    <div className="flex flex-col text-start">
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-2"
                      >
                        Senior React.js Developer
                      </Typography>
                      <Typography>count</Typography>
                    </div>
                    <div className="flex flex-col gap-5 text-end">
                      <Button className="bg-[#48639c]">View</Button>
                      <Typography>
                        Status: <span className="text-green-700">active</span>
                      </Typography>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
          {/* Dashboard content */}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
