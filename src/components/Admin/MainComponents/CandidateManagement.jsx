import React, { useEffect, useState } from "react";
import { FaSort } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoCloudDownloadOutline } from "react-icons/io5";
import CandidateTableRow from "../Candidate/CandidateTableRow";
import { fetchUserApi } from "../../../api/UserApi";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoading } from "../../../redux/Actions/AuthAction";

function CandidateManagement() {

  const [candidatedetails, setCandidatedetails] = useState([])
  const loading = useSelector((state) => state.loading)
  const dispatch = useDispatch()

  const fetchCandidate = async () => {
    try {
      const role = "Candidate"
      const responce = await fetchUserApi(role)
      setCandidatedetails(responce)
      dispatch(toggleLoading())
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCandidate()
  }, [])

  if (loading) {
    return;
  }

  return (
    <>
      <div className="bg-[#ecebeb] w-full p-2 rounded-md">
        <div className="w-fullrounded-md">
          <div className="p-5 bg-white shadow-sm border rounded">
            <h1 class="text-2xl my-auto mx-auto font-extrabold text-center">
              CANDIDATE MANAGEMENT
            </h1>
          </div>
          <div class="p-5 border border-gray-300 mt-2 bg-white rounded flex flex-row justify-between items-center shadow-sm">
            <h1 class="text-xl font-semibold text-gray-800">
              Candidate Table
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
          <div className="flex flex-col pt-6">
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
                        Candidate Email
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Candidate Id
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Registered
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Status
                      </th>
                      <th scope="col" className="relative">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#dddcdc] divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    <CandidateTableRow candidatedetails={candidatedetails} />
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

export default CandidateManagement;
