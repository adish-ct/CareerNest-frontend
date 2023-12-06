import React from "react";
import { FaSort } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoCloudDownloadOutline } from "react-icons/io5";

function EmployeerManagement() {
  return (
    <>
      <div className="w-full bg-[#f0efef] p-2 rounded-md">
        <div className="w-fullrounded-md">
          <div className="p-2 bg-white shadow-sm border rounded">
            <h1 className="text-2xl my-4 mx-auto font-extrabold text-center sm:text-2xl lg:text-3xl">
              EMPLOYER MANAGEMENT
            </h1>
          </div>
          <div className="p-5 border border-[#b4b3b3] mt-2 w-full md:w-full mx-auto bg-white rounded flex flex-col md:flex-row md:justify-between items-center">
            <h1 className="text-xl font-medium text-start md:text-center md:mb-0">
              Employeer Table
            </h1>
            <div className="flex flex-row justify-center md:justify-end items-center mt-4 md:mt-0 gap-4 md:gap-10 cursor-pointer">
              <h1 className="text-2xl md:text-3xl text-[#7c7c7c]">
                <FaSort />
              </h1>
              <div className="w-40 md:w-72 h-8 md:h-10 shadow-sm rounded-lg bg-[#555353]">
                <input
                  className="w-full h-full bg-[#ecebeb] rounded-lg border text-sm md:text-base"
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
          <div className="flex flex-col mt-6">
            <div className="inline-block w-full  py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden w-full border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 text-center dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr className="text-center w-full">
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Employer
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Employer Name
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Amount
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Validity
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Action
                      </th>
                      <th scope="col" className="relative">
                        <span className="sr-only">Edit</span>
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
                          $245.30
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                          May 15, 2015
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
    </>
  );
}

export default EmployeerManagement;
