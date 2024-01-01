import React, { useEffect, useState } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { FaSort } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";



const TabPanel = ({ id, children, isActive }) => {
    <div
        className={`bg-white rounded-lg dark:bg-gray-800 border-none ${isActive ? "block" : "hidden"}`}
        id={id}
        role="tabpanel"
        aria-labelledby={`${id}-tab`}
    >
        {children}
    </div>
}

const TabButton = ({ id, label, isActive, onClick }) => {
    <div className="border-r-2 w-full border-[#6d6b6b]">
        <button
            id={`${id}-tab`}
            data-tabs-target={`#${id}`}
            type="button"
            role="tab"
            aria-controls={id}
            aria-selected={isActive}
            className={`border-none inline-block p-3 ${isActive ? "text-[#952828]" : "hover:text-gray-600"
                } rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500 dark:hover:text-gray-300`}
            onClick={onClick}
        >
            {label}
        </button>
    </div>
}

const SearchBar = () => {
    <div className="w-full md:w-72 h-8 md:h-8 shadow-sm rounded-lg bg-[#555353] mt-2 md:mt-0">
        <input
            className="w-full h-full pl-2 bg-[#ecebeb] rounded-lg border text-sm md:text-base"
            type="text"
            placeholder="Search..."
        />
    </div>
}

const SortingIcon = () => {
    <div className="text-2xl md:text-2xl pr-3 pl-2 text-[#555353]">
        <FaSort />
    </div>
}

function ApplicationTabPanel({ id, title, children }) {

    const isActive = activeTab === id;

    return (
        <TabPanel id={id} isActive={isActive}>
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:mb-2">
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        {title}
                    </Typography>
                </div>
                <div className="flex flex-col md:flex-row items-center md:justify-end mt-4 md:mt-0 gap-4 md:gap-10 cursor-pointer">
                    <SortingIcon />
                    <SearchBar />
                </div>
            </div>
            <hr className="mt-4" />
            <div className="p-3">{children}</div>
        </TabPanel>
    )
}

export default ApplicationTabPanel
