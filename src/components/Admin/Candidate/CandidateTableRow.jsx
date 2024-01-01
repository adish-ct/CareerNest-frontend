import React from 'react'
import EmployerAction from '../Employer/EmployerAction'
import { ToastContainer } from 'react-toastify'

function CandidateTableRow({ candidatedetails }) {


    return (
        <>
            <ToastContainer />
            {
                candidatedetails && (
                    candidatedetails.map((data, index) => (
                        <tr className="w-full" key={index}>
                            <td className="text-center whitespace-nowrap">
                                <div className="flex text-center justify-center pt-2">
                                    <img
                                        className="object-cover w-12 h-12 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                        alt=""
                                    />
                                </div>
                            </td>
                            <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                    {data.username}
                                </div>
                            </td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                    {data.email}
                                </div>
                            </td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                    123456
                                </div>
                            </td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                    {/* {data.profile.candidate_designation} */}
                                </div>
                            </td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                                    <EmployerAction index={index} user={data} />
                                </button>
                            </td>
                        </tr>
                    ))
                )
            }

        </>
    )
}

export default CandidateTableRow
