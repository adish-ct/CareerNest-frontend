import React, { useEffect, useState } from "react";
import { FaSort } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoCloudDownloadOutline } from "react-icons/io5";
import EmployerTableRow from "../Employer/EmployerTableRow";
import { fetchUserApi } from "../../../api/UserApi";

function EmployeerManagement() {

  const [employers, setEmployers] = useState([])

  const fetchEmployer = async () => {
    const role = "Employer"
    const response = await fetchUserApi(role)
    console.log(response);
    setEmployers(response)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchEmployer();
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);


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

                    <EmployerTableRow employers={employers} />

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
