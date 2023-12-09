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
          <div className="p-2 bg-white shadow-sm border rounded">
            <h1 className="text-2xl my-4 mx-auto font-extrabold text-center sm:text-2xl lg:text-3xl">
              DASHBOARD
            </h1>
          </div>

          {/* Dashboard cards */}
          <div className="flex flex-col md:flex-row md:flex-wrap md:justify-around pt-6">
            <Card className="mt-6 w-full md:w-80 bg-[#6d7ea3] text-white md:mx-2">
              <CardBody className="text-center">
                <Typography variant="h5" color="white" className="mb-2">
                  Followers
                </Typography>
                <Typography>45,6334</Typography>
                <Typography>Decreased by 10%</Typography>
              </CardBody>
            </Card>
            <Card className="mt-6 w-full md:w-80 bg-[#6d7ea3] text-white md:mx-2">
              <CardBody className="text-center">
                <Typography variant="h5" color="white" className="mb-2">
                  Job Posted
                </Typography>
                <Typography>454</Typography>
                <Typography>Closed 430</Typography>
              </CardBody>
            </Card>
            <Card className="mt-6 w-full md:w-80 bg-[#6d7ea3] text-white md:mx-2">
              <CardBody className="text-center">
                <Typography variant="h5" color="white" className="mb-2">
                  Contacted
                </Typography>
                <Typography>4,434</Typography>
                <Typography>Missed 23</Typography>
              </CardBody>
            </Card>
            <Card className="mt-6 w-full md:w-80 bg-[#6d7ea3] text-white md:mx-2">
              <CardBody className="text-center">
                <Typography variant="h5" color="white" className="mb-2">
                  Selected
                </Typography>
                <Typography>2,434</Typography>
                <Typography>Rejected 245</Typography>
              </CardBody>
            </Card>
          </div>
          {/* Dashboard cards */}

          {/* Dashboard content */}
          <div className="text-center pt-10">
            <div className="p-5 border border-[#b4b3b3] mt-2 w-full md:w-5/6 mx-auto bg-white rounded flex flex-col md:flex-row md:justify-between items-center">
              <h1 className="text-xl font-medium text-start md:text-center md:mb-0">
                Posted Jobs
              </h1>
              <div className="flex flex-row justify-center md:justify-end items-center mt-4 md:mt-0 gap-4 md:gap-10 cursor-pointer">
                <h1 className="text-2xl md:text-3xl text-[#7c7c7c]">
                  <FaSort />
                </h1>
                <div className="w-40 md:w-72 h-8 md:h-10 shadow-sm rounded-lg bg-[#555353]">
                  <input
                    className="w-full h-full pl-2 bg-[#ecebeb] rounded-lg border text-sm md:text-base"
                    type="text"
                    placeholder="Search..."
                  />
                </div>
                <h1 className="text-2xl md:text-3xl pr-2 text-[#555353]">
                  <IoSearch />
                </h1>
                <h1 className="text-2xl md:text-3xl pr-4 md:pr-7 text-[#555353]">
                  <IoCloudDownloadOutline />
                </h1>
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
                        Status: <span className="text-green-700">active</span>
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
