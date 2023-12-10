import React, { useEffect } from 'react';
import { Button, Card } from '@material-tailwind/react';
import { useSelector, useDispatch } from 'react-redux'
import { Input } from "@material-tailwind/react";
import { locations } from '../../../components/HelperFile/Locations';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { baseUrl } from '../../../api/Api';
import { jwtDecode } from 'jwt-decode';
import setUserDetails from '../../../redux/Actions/UserAction'
import { toggleLoading } from '../../../redux/Actions/AuthAction'
import { useNavigate } from 'react-router-dom';
import { jobType, workType } from '../../../components/HelperFile/Types';




function CreateJob() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector((state) => {
        return state.user
    })

    const loading = useSelector((state) => {
        return state.loading
    })

    const formik = useFormik({
        initialValues: {
            employer: "",
            organization: "",
            job_role: "",
            job_location: "",
            job_ctc: "",
            job_type: "",
            experience: 0,
            work_type: "",
            vaccancy: 1,
            skills: "",
            qualifications: "",
            description: "",
            department: "",
            highlight: ""
        },
        validationSchema: Yup.object({
            job_role: Yup.string().required("* Required field"),
            job_location: Yup.string().required("* Required field"),
            job_ctc: Yup.number().min(1, "* ctc cannot be less than 1"),
            job_type: Yup.string().required("* Required field"),
            work_type: Yup.string().required("* Required field"),
            vaccancy: Yup.number().min(1, "* Vacancy cannot be less than 1").required("* Required field"),
            department: Yup.string().required("* Required field"),
            description: Yup.string().required("* Required field"),
            experience: Yup.number().min(0, "* Experience cannot be less than 0").required("* Required field"),
        }),
        onSubmit: async (values) => {
            try {
                const response = await axios.post(`${baseUrl}/jobs/`, values)
                if (response.data) {

                    navigate('/employer/dashboard')
                }
            } catch (error) {
                console.error("Error submitting form:", error);
            }
        }
    });

    const handleInputChange = (fieldName, value) => {
        formik.setFieldValue(fieldName, value);
    };

    useEffect(() => {
        const token = localStorage.getItem("jwtToken");
        const fetchData = async () => {
            const decoded_token = await jwtDecode(token);
            dispatch(setUserDetails(decoded_token));
            if (decoded_token) {
                handleInputChange("employer", decoded_token.user_id);
                handleInputChange("organization", decoded_token.username);
            }
            dispatch(toggleLoading());
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="w-full bg-[#f0efef] p-2 rounded-md">
                <div className="w-fullrounded-md">
                    <div className="p-2 bg-white shadow-sm border rounded">
                        <h1 className="text-2xl my-4 mx-auto font-extrabold text-center sm:text-2xl lg:text-3xl">
                            CREATE
                        </h1>
                    </div>
                    {/* Dashboard cards */}

                    {/* Dashboard content */}
                    <div className="text-center p-10 md:pe-20 md:ps-20 rounded-3xl">
                        <div className="text-center">
                            <form onSubmit={formik.handleSubmit}>
                                <Card className="w-full p-14 job-box">
                                    <div className="flex flex-col gap-7">

                                        {/* Job Role and Location */}
                                        <div className="flex flex-col lg:flex-row gap-5">
                                            <div className="w-full text-left lg:w-2/4">
                                                <Input
                                                    label="Job Role"
                                                    type="text"
                                                    name="job_role"
                                                    value={formik.values.job_role}
                                                    onChange={(e) => handleInputChange("job_role", e.target.value)}
                                                    className={
                                                        formik.errors.job_role && formik.touched.job_role
                                                            ? "form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                                            : "form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    }
                                                />
                                                {formik.errors.job_role && formik.touched.job_role && (
                                                    <small className="text-red-500 text-xs italic">
                                                        {formik.errors.job_role}
                                                    </small>
                                                )}
                                            </div>
                                            <div className='flex flex-col text-left'>
                                                <select
                                                    id="job_location"
                                                    name='job_location'
                                                    color="lightBlue"
                                                    size="lg"
                                                    placeholder="Select a location"
                                                    value={formik.values.job_location}
                                                    onChange={(e) => handleInputChange("job_location", e.target.value)}
                                                    className={
                                                        formik.errors.job_location && formik.touched.job_location
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
                                                {formik.errors.job_location && formik.touched.job_location && (
                                                    <small className="text-red-500 text-xs italic">
                                                        {formik.errors.job_location}
                                                    </small>
                                                )}
                                            </div>
                                        </div>

                                        {/* Job CTC, Required Experience, and Work Type */}
                                        <div className="flex flex-col md:flex-row gap-5 w-full">
                                            <div className="w-full lg:w-1/4">
                                                <Input
                                                    label="Job CTC"
                                                    type='number'
                                                    name='job_ctc'
                                                    value={formik.values.job_ctc}
                                                    onChange={(e) => handleInputChange("job_ctc", e.target.value)}
                                                    className={
                                                        formik.errors.job_ctc && formik.touched.job_ctc
                                                            ? "form-control shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                                            : "form-control shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    }
                                                />
                                                {
                                                    formik.errors.job_ctc && formik.touched.job_ctc && (
                                                        <small className='text-red-500 text-xs'>
                                                            {formik.errors.job_ctc}
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
                                                    id="work_type"
                                                    color="lightBlue"
                                                    size="lg"
                                                    type="text"
                                                    placeholder="Select a work type"
                                                    value={formik.values.work_type}
                                                    onChange={(e) => handleInputChange("work_type", e.target.value)}
                                                    className={
                                                        formik.errors.work_type && formik.touched.work_type
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
                                                    formik.errors.work_type && formik.touched.work_type && (
                                                        <small className='text-red-500 text-xs'>
                                                            {formik.errors.work_type}
                                                        </small>
                                                    )
                                                }
                                            </div>

                                        </div>

                                        {/* Job Type, Total Vacancy, and Department */}
                                        <div className="flex flex-col md:flex-row gap-5 w-full">
                                            <div className="flex flex-col md:w-1/4 w-full text-left">
                                                <select
                                                    id="job_type"
                                                    color="lightBlue"
                                                    size="lg"
                                                    type="text"
                                                    placeholder="Select a location"
                                                    value={formik.values.job_type}
                                                    onChange={(e) => handleInputChange("job_type", e.target.value)}
                                                    className={
                                                        formik.errors.job_type && formik.touched.job_type
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
                                                    formik.errors.job_type && formik.touched.job_type && (
                                                        <small className='text-red-500 text-xs'>
                                                            {formik.errors.job_type}
                                                        </small>
                                                    )
                                                }
                                            </div>
                                            <div className="w-full md:w-1/4">
                                                <div className="flex flex-col">
                                                    <Input
                                                        label="Total Vacancy"
                                                        type='number'
                                                        name='vaccancy'
                                                        value={formik.values.vaccancy}
                                                        onChange={(e) => handleInputChange("vaccancy", e.target.value)}
                                                        className={
                                                            formik.errors.vaccancy && formik.touched.vaccancy
                                                                ? "form-control shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                                                : "form-control shadow appearance-none border w-full rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        }
                                                    />
                                                    {
                                                        formik.errors.vaccancy && formik.touched.vaccancy && (
                                                            <small className='text-red-500 text-xs'>
                                                                {formik.errors.vaccancy}
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
                                                type="text"
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
                                                type="text"
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
