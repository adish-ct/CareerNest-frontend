import React, { useEffect } from 'react';
import Sidebar from '../../components/Employer/Sidebar';
import { Button, Card, Typography } from '@material-tailwind/react';
import { useSelector, useDispatch } from 'react-redux'
import { Input } from "@material-tailwind/react";
import "./CreateJob.css";
import { locations } from '../../components/HelperFile/Locations';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { baseUrl } from '../../api/Api';
import { jwtDecode } from 'jwt-decode';
import setUserDetails from '../../redux/Actions/UserAction'
import { toggleLoading } from '../../redux/Actions/AuthAction'

function CreateJob() {

    const workType = ["Work type", "Permanent", "Contract", "Intern"];
    const jobType = ["Job type", "Work from office", "Work from home", "Hybrid"];
    const dispatch = useDispatch()

    const user = useSelector((state) => {
        return state.user
    })

    const loading = useSelector((state) => {
        return state.loading
    })

    useEffect(() => {
        const token = localStorage.getItem("jwtToken")
        const decoded_token = jwtDecode(token)
        dispatch(setUserDetails(decoded_token))
        dispatch(toggleLoading())
        console.log(user.username);
    }, [])

    const formik = useFormik({
        initialValues: {
            employer: "",
            jobRole: "",
            location: "",
            ctc: "",
            experience: 0,
            jobType: "",
            workType: "",
            vacancy: 1,
            department: "",
            skills: "",
            qualifications: "",
            description: "",
            highlight: ""
        },
        validationSchema: Yup.object({
            jobRole: Yup.string().required("* Required field"),
            location: Yup.string().required("* Required field"),
            workType: Yup.string().required("* Required field"),
            jobType: Yup.string().required("* Required field"),
            department: Yup.string().required("* Required field"),
            description: Yup.string().required("* Required field"),
            vacancy: Yup.number().min(1, "* Vacancy cannot be less than 1").required("* Required field"),
            ctc: Yup.number().min(1, "* ctc cannot be less than 1"),
            experience: Yup.number().min(0, "* Experience cannot be less than 0").required("* Required field"),
        }),
        onSubmit: async (values) => {
            try {
                console.log("Form submitted with values:", values);
                // Add your logic here, such as making an API call
                // Example:
                // const response = await axios.post(baseUrl, values);
                // console.log("API Response:", response.data);
            } catch (error) {
                console.error("Error submitting form:", error);
            }
        }
    });

    const handleInputChange = (fieldName, value) => {
        formik.setFieldValue(fieldName, value);
    };

    return (
        <>
            <div className="flex">
                <Sidebar />
                {/* main dashboard */}
                <div className="h-screen w-5/6">
                    {/* Dashboard Heading */}
                    <div className="text-center md:p-10 p-5 bg-[#eee] border-black">
                        <Typography variant="h1" className="text-3xl font-bold">
                            CREATE JOB
                        </Typography>
                    </div>
                    {/* Dashboard Heading */}

                    {/* Dashboard cards */}
                    <div className="text-start p-5 md:ps-20 ps-10 md:pt-10">
                        <Typography variant="h1" className="text-3xl font-bold">
                            Provide the job details
                        </Typography>
                    </div>
                    {/* Dashboard cards */}

                    {/* Dashboard content */}
                    <div className="text-center p-10 md:pe-20 md:ps-20 rounded-3xl">
                        <div className="text-center">
                            <form onSubmit={formik.handleSubmit}>
                                <Card className="w-full p-14 job-box">
                                    <div className="flex flex-col gap-7">

                                        {/* Job Role and Location */}
                                        <div className="flex flex-col md:flex-row gap-5">
                                            <div className="w-full text-left md:w-2/4">
                                                <Input
                                                    label="Job Role"
                                                    type="text"
                                                    name="jobRole"
                                                    value={formik.values.jobRole}
                                                    onChange={(e) => handleInputChange("jobRole", e.target.value)}
                                                    className={
                                                        formik.errors.jobRole && formik.touched.jobRole
                                                            ? "form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                                            : "form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    }
                                                />
                                                {formik.errors.jobRole && formik.touched.jobRole && (
                                                    <small className="text-red-500 text-xs italic">
                                                        {formik.errors.jobRole}
                                                    </small>
                                                )}
                                            </div>
                                            <div className='flex flex-col text-left'>
                                                <select
                                                    id="location"
                                                    name='location'
                                                    color="lightBlue"
                                                    size="lg"
                                                    placeholder="Select a location"
                                                    value={formik.values.location}
                                                    onChange={(e) => handleInputChange("location", e.target.value)}
                                                    className={
                                                        formik.errors.location && formik.touched.location
                                                            ? "form-control shadow appearance-none border  rounded w-full  py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                                            : "form-control shadow appearance-none border   rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    }
                                                >
                                                    {locations.map((location, index) => (
                                                        <option key={index} value={location}>
                                                            {location}
                                                        </option>
                                                    ))}
                                                </select>
                                                {formik.errors.location && formik.touched.location && (
                                                    <small className="text-red-500 text-xs italic">
                                                        {formik.errors.location}
                                                    </small>

                                                )}
                                            </div>
                                        </div>

                                        {/* Job CTC, Required Experience, and Work Type */}
                                        <div className="flex flex-col md:flex-row gap-5 w-full">
                                            <div className="w-full md:w-1/4">
                                                <Input
                                                    label="Job CTC"
                                                    type='number'
                                                    name='ctc'
                                                    value={formik.values.ctc}
                                                    onChange={(e) => handleInputChange("ctc", e.target.value)}
                                                    className={
                                                        formik.errors.ctc && formik.touched.ctc
                                                            ? "form-control shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                                            : "form-control shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    }
                                                />
                                                {
                                                    formik.errors.ctc && formik.touched.ctc && (
                                                        <small className='text-red-500 text-xs'>
                                                            {formik.errors.ctc}
                                                        </small>
                                                    )
                                                }
                                            </div>
                                            <div className="w-full md:w-1/4 text-left">
                                                <Input
                                                    label="Required Experience"
                                                    type='number'
                                                    name='experience'
                                                    value={formik.values.experience}
                                                    onChange={(e) => handleInputChange("experience", e.target.value)}
                                                    className={
                                                        formik.errors.experience && formik.touched.experience
                                                            ? "form-control shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                                            : "form-control shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    }
                                                />
                                                {
                                                    formik.errors.experience && formik.touched.experience && (
                                                        <small className='text-red-500 text-xs'>
                                                            {formik.errors.experience}
                                                        </small>
                                                    )
                                                }

                                            </div>
                                            <div className="flex flex-col md:w-1/4 w-full text-left">
                                                <select
                                                    // className='border w-4/5'
                                                    id="workType"
                                                    color="lightBlue"
                                                    size="lg"
                                                    placeholder="Select a work type"
                                                    value={formik.values.workType}
                                                    onChange={(e) => handleInputChange("workType", e.target.value)}
                                                    className={
                                                        formik.errors.workType && formik.touched.workType
                                                            ? "form-control shadow appearance-none border w-full md:w-4/5 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                                            : "form-control shadow appearance-none border w-full md:w-4/5 rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    }
                                                >
                                                    {workType.map((value, index) => (
                                                        <option key={index} value={value}>
                                                            {value}
                                                        </option>
                                                    ))}
                                                </select>
                                                {
                                                    formik.errors.workType && formik.touched.workType && (
                                                        <small className='text-red-500 text-xs'>
                                                            {formik.errors.workType}
                                                        </small>
                                                    )
                                                }
                                            </div>

                                        </div>

                                        {/* Job Type, Total Vacancy, and Department */}
                                        <div className="flex flex-col md:flex-row gap-5 w-full">
                                            <div className="flex flex-col md:w-1/4 w-full text-left">
                                                <select
                                                    id="jobType"
                                                    color="lightBlue"
                                                    size="lg"
                                                    placeholder="Select a location"
                                                    value={formik.values.jobType}
                                                    onChange={(e) => handleInputChange("jobType", e.target.value)}
                                                    className={
                                                        formik.errors.jobType && formik.touched.jobType
                                                            ? "form-control shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                                            : "form-control shadow appearance-none border w-full rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    }
                                                >
                                                    {jobType.map((value, index) => (
                                                        <option key={index} value={value}>
                                                            {value}
                                                        </option>
                                                    ))}
                                                </select>
                                                {
                                                    formik.errors.jobType && formik.touched.jobType && (
                                                        <small className='text-red-500 text-xs'>
                                                            {formik.errors.jobType}
                                                        </small>
                                                    )
                                                }
                                            </div>
                                            <div className="w-full md:w-1/4">
                                                <div className="flex flex-col">
                                                    <Input
                                                        label="Total Vacancy"
                                                        type='number'
                                                        name='vacancy'
                                                        value={formik.values.vacancy}
                                                        onChange={(e) => handleInputChange("vacancy", e.target.value)}
                                                        className={
                                                            formik.errors.vacancy && formik.touched.vacancy
                                                                ? "form-control shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                                                : "form-control shadow appearance-none border w-full rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        }
                                                    />
                                                    {
                                                        formik.errors.vacancy && formik.touched.vacancy && (
                                                            <small className='text-red-500 text-xs'>
                                                                {formik.errors.vacancy}
                                                            </small>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                            <div className="w-full md:w-1/4">
                                                <div className="flex flex-col text-left">
                                                    <Input
                                                        label="Department"
                                                        type='text'
                                                        name='department'
                                                        value={formik.values.department}
                                                        onChange={(e) => handleInputChange("department", e.target.value)}
                                                        className={
                                                            formik.errors.department && formik.touched.department
                                                                ? "form-control shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                                                : "form-control shadow appearance-none border w-full rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        }
                                                    />
                                                    {
                                                        formik.errors.department && formik.touched.department && (
                                                            <small className='text-red-500 text-xs'>
                                                                {formik.errors.department}
                                                            </small>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                        {/* Required Skills and Qualifications */}
                                        <div className="flex flex-col md:flex-row gap-3 w-full">
                                            <div className="w-full md:w-2/4">
                                                <Input
                                                    label="Required Skills"
                                                    type='text'
                                                    name='skills'
                                                    value={formik.values.skills}
                                                    onChange={(e) => handleInputChange("skills", e.target.value)}
                                                />
                                            </div>
                                            <div className="w-full md:w-2/4">
                                                <Input
                                                    label="Qualifications"
                                                    type='text'
                                                    name='qualifications'
                                                    value={formik.values.qualifications}
                                                    onChange={(e) => handleInputChange("qualifications", e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        {/* Job Description and Highlight */}
                                        <div className="w-full text-left">
                                            <label htmlFor="highlight">Highlight</label>
                                            <textarea
                                                name='highlight'
                                                className='w-full border box-border'
                                                rows="3"
                                                value={formik.values.highlight}
                                                onChange={(e) => handleInputChange("highlight", e.target.value)}
                                                placeholder="Enter your text here"
                                            ></textarea>
                                        </div>
                                        <div className="w-full text-left">
                                            <label htmlFor="description">Job Description</label>
                                            <textarea
                                                name='description'
                                                rows="3"
                                                value={formik.values.description}
                                                onChange={(e) => handleInputChange("description", e.target.value)}
                                                placeholder="Enter your text here"
                                                className={
                                                    formik.errors.description && formik.touched.description
                                                        ? "form-control shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                                        : "form-control shadow appearance-none border w-full rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                }
                                            ></textarea>
                                            {
                                                formik.errors.description && formik.touched.description && (
                                                    <small className='text-red-500 text-xs'>
                                                        {formik.errors.description}
                                                    </small>
                                                )
                                            }
                                        </div>

                                        {/* Create Job Button */}
                                        <Button type='submit' className='w-full md:w-1/2 mx-auto'>Create Job</Button>

                                    </div>
                                </Card>
                            </form>
                        </div>
                    </div>
                    {/* Dashboard content */}
                </div>
                {/* main dashboard */}
            </div>
        </>
    );
}

export default CreateJob;
