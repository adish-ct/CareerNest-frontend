import React, { useState } from 'react'
import EmployerAction from './EmployerAction'

function EmployerTableRow({ employers }) {

    const [isVisible, setIsVisible] = useState(false)

    const handleAction = () => setIsVisible(!isVisible)

    const handleEmployer = (index) => {
        console.log("working");
        handleAction()
    }


    return (
        <>
            {
                employers && (
                    employers.map((data, index) => (
                        <tr className={index % 2 === 1 ? 'bg-white w-full' : 'w-full'} key={index}>
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
                                    May 15, 2015
                                </div>
                            </td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                <EmployerAction index={index} user={data} />
                            </td>
                        </tr>
                    ))
                )
            }
        </>
    )
}

export default EmployerTableRow
