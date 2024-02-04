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
          <div className="p-5 bg-white shadow-sm border rounded">
            <h1 class="text-2xl my-auto mx-auto font-extrabold text-center">
              EMPLOYER MANAGEMENT
            </h1>
          </div>

          <div class="p-5 border border-gray-300 mt-2 bg-white rounded flex flex-row justify-between items-center shadow-sm">
            <h1 class="text-xl font-semibold text-gray-800">
              Employeer Table
            </h1>
            <div class="flex flex-row justify-end items-center pr-8 gap-4 cursor-pointer">
              <div class="text-2xl text-gray-600 hover:text-gray-800">
                <FaSort />
              </div>
              <div class="flex items-center bg-gray-100 rounded-lg shadow">
                <input
                  class="pl-3 py-2 bg-transparent rounded-l-lg focus:outline-none"
                  type="text"
                  placeholder="Search..."
                />
                <div class="p-2 text-gray-600 hover:text-gray-800">
                  <IoSearch />
                </div>
              </div>
              <div class="text-2xl text-gray-600 hover:text-gray-800">
                <IoCloudDownloadOutline />
              </div>
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
