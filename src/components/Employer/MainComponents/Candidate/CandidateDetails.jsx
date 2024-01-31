import React from "react";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { FaSort } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoCloudDownloadOutline } from "react-icons/io5";

function CandidateDetails() {
  return (
    <>
      <div className="w-full bg-[#f0efef] p-2 rounded-md">
        <div className="w-full rounded-md">
          <div className="p-5 bg-white shadow-sm border rounded">
            <h1 className="text-2xl my-auto mx-auto font-extrabold text-center">
              CANDIDATE DETAILS
            </h1>
          </div>
          <div className="flex flex-col md:flex-row md:flex-wrap justify-around pt-3">
            {[
              { title: "Followers", count: "45,6334" },
              { title: "Blocked Candidate", count: "10" },
              { title: "Profile Visited", count: "104,434" },
              { title: "Selected", count: "2,434" },
            ].map((item, index) => (
              <Card
                key={index}
                className="mt-6 w-full md:w-52 lg:w-64 bg-blue-gray-600 text-white md:mx-2 rounded-lg shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                <CardBody className="text-center">
                  <Typography variant="h5" className="mb-2">
                    {item.title}
                  </Typography>
                  <Typography className="font-bold text-xl">
                    {item.count}
                  </Typography>
                </CardBody>
              </Card>
            ))}
          </div>

          <div className="text-center pt-5">
            <div className="p-5 border border-gray-300 mt-2 bg-white rounded flex flex-row justify-between items-center shadow-sm">
              <h1 className="text-xl font-semibold text-gray-800">
                Candidate Table
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
            <div className="flex flex-col pt-3">
              <div className="inline-block w-full  py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden w-full border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 text-center dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr className="text-center w-full">
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Candidate
                        </th>
                        <th
                          scope="col"
                          className="px-12 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Candidate Name
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Designation
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Experience
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Action
                        </th>
                        <th scope="col" className="relative">
                          <span className="sr-only">View</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-[#dddcdc] divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      <tr className="w-full">
                        <t-mx-1d className="pl-12 text-center py-4 whitespace-nowrap">
                          <div className="flex text-center justify-center pt-2">
                            <img
                              className="object-cover w-12 h-12 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                              alt=""
                            />
                          </div>
                        </t-mx-1d>
                        <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                          <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                            Vishnu Krishnakumar
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                            Python Developer
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                            3 year
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                            Block
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CandidateDetails;
