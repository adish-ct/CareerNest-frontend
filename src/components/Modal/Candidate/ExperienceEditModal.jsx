import React, { useEffect } from 'react'
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Input, Textarea } from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { experienceDetailsAction } from '../../../redux/Actions/ExperienceAction'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { ToastContainer } from 'react-toastify';


function ExperienceEditModal({ open, handleOpen }) {

    const selectedExperience = useSelector((state) => state.selectedExperience)
    const dispatch = useDispatch()

    const handleCancel = () => {
        dispatch(experienceDetailsAction(null))
        handleOpen();
    }


    const formik = useFormik({
        initialValues: {
            enableReinitialize: true,
            job_role: selectedExperience?.job_role || '',
            organization: selectedExperience?.organization || '',
            job_type: selectedExperience?.job_type || '',
            location: selectedExperience?.location || '',
            work_type: selectedExperience?.work_type || '',
            state: selectedExperience?.state || '',
            start_date: selectedExperience?.start_date || null,
            end_date: selectedExperience?.end_date || null,
            currently_working: selectedExperience?.currently_working || false,
            time_period: selectedExperience?.time_period || '',
            description: selectedExperience?.description || '',
            skills: selectedExperience?.skills || '',
            documents: null,
        },
        validationSchema: Yup.object({
            job_role: Yup.string().required("* required field"),
            organization: Yup.string().matches(/^[a-zA-Z\s]+$/, 'organization should only contain alphabets').required("* required field"),
            job_type: Yup.string().required("* required field"),
            location: Yup.string().matches(/^[a-zA-Z\s]+$/, 'location should only contain alphabets'),
            work_type: Yup.string().required("* required field"),
            state: Yup.string().matches(/^[a-zA-Z\s]+$/, "state should only contain alphabets"),
            start_date: Yup.date().required("* required field"),
            description: Yup.string().required("* required field"),
            skills: Yup.string().required("* required field"),
        }),
        onSubmit: async (values) => {
            console.log(formik.values);
            console.log("working");
        }
    })

    if (!selectedExperience) {
        return null
    }

    return (
        <>
            <ToastContainer />
            <Dialog open={open} handler={handleOpen}>
                <ToastContainer />
                <form action="" onSubmit={formik.handleSubmit} encType='multipart/form-data'>
                    <DialogHeader>Edit Experience</DialogHeader>
                    <DialogBody>
                        <div className="grid grid-cols-2 gap-4">

                            {/* job role */}
                            <div className="flex flex-col gap-1">
                                <Input
                                    type="text"
                                    label="Job Role"
                                    name="job_role"  // Added name attribute
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.job_role}
                                    className={
                                        formik.errors.job_role && formik.touched.job_role
                                            ? 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                                            : 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    }
                                />
                                {formik.errors.job_role && formik.touched.job_role && (
                                    <small className="text-red-500 text-xs italic">{formik.errors.job_role}</small>
                                )}
                            </div>
                            {/* job role */}

                            {/* organization */}
                            <div className="flex flex-col gap-1">
                                <Input
                                    type="text"
                                    label="Organization"
                                    name="organization"  // Added name attribute
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.organization}
                                    className={
                                        formik.errors.organization && formik.touched.organization
                                            ? 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                                            : 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    }
                                />
                                {formik.errors.organization && formik.touched.organization && (
                                    <small className="text-red-500 text-xs italic">{formik.errors.organization}</small>
                                )}
                            </div>
                            {/* organization */}

                            {/* job type */}
                            <div className="flex flex-col gap-1">
                                <select
                                    label="Job Type"
                                    name="job_type"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.job_type}
                                    className={
                                        formik.errors.job_type && formik.touched.job_type
                                            ? 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                                            : 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    }
                                >
                                    <option value="">Job Type</option>
                                    <option value="full time">Full Time</option>
                                    <option value="part time">Part Time</option>
                                    <option value="internship">Internship</option>
                                    <option value="freelance">Freelance</option>
                                </select>
                                {formik.errors.job_type && formik.touched.job_type && (
                                    <small className="text-red-500 text-xs italic">{formik.errors.job_type}</small>
                                )}
                            </div>
                            {/* job type */}

                            {/* location */}
                            <div className="flex flex-col gap-1">
                                <Input
                                    type="text"
                                    label="Location"
                                    name="location"  // Added name attribute
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.location}
                                    className={
                                        formik.errors.location && formik.touched.location
                                            ? 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                                            : 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    }
                                />
                                {formik.errors.location && formik.touched.location && (
                                    <small className="text-red-500 text-xs italic">{formik.errors.location}</small>
                                )}
                            </div>
                            {/* location */}

                            {/* work type */}
                            <div className="flex flex-col gap-1">
                                <select
                                    label="Work Type"
                                    name="work_type"  // Added name attribute
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.work_type}
                                    className={
                                        formik.errors.work_type && formik.touched.work_type
                                            ? 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                                            : 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    }
                                >
                                    <option value="">Work Type</option>
                                    <option value="on site">On-site</option>
                                    <option value="remote">Remote</option>
                                    <option value="hybrid">Hybrid</option>
                                </select>
                                {formik.errors.work_type && formik.touched.work_type && (
                                    <small className="text-red-500 text-xs italic">{formik.errors.work_type}</small>
                                )}
                            </div>
                            {/* work type */}

                            {/* state */}
                            <div className="flex flex-col gap-1">
                                <Input
                                    type="text"
                                    label="State"
                                    name="state"  // Added name attribute
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.state}
                                    className={
                                        formik.errors.state && formik.touched.state
                                            ? 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                                            : 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    }
                                />
                                {formik.errors.state && formik.touched.state && (
                                    <small className="text-red-500 text-xs italic">{formik.errors.state}</small>
                                )}
                            </div>
                            {/* state */}

                            {/* start date */}
                            <div className="flex flex-col gap-1">
                                <Input
                                    type="date"
                                    label="Start Date"
                                    name="start_date"  // Added name attribute
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.start_date}
                                    className={
                                        formik.errors.start_date && formik.touched.start_date
                                            ? 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                                            : 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    }
                                />
                                {formik.errors.start_date && formik.touched.start_date && (
                                    <small className="text-red-500 text-xs italic">{formik.errors.start_date}</small>
                                )}
                            </div>
                            {/* start date */}

                            {/* end date */}
                            <Input
                                type="date"
                                label="End Date"
                                name="end_date"  // Added name attribute
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.end_date}
                                disabled={formik.values.currently_working}
                            />
                            {/* end date */}

                            {/* check box */}
                            <div className="flex justify-start gap-3 items-center">
                                <label htmlFor="checkbox">Currently working here </label>
                                <input
                                    name='currently_working'
                                    onChange={e => {
                                        formik.handleChange(e);
                                        if (e.target.checked) {
                                            formik.setFieldValue('end_date', null)
                                        }
                                    }}
                                    onBlur={formik.handleBlur}
                                    type="checkbox"
                                    className='w-5 h-5 text-green-500'
                                    style={{ color: 'blue' }}
                                    checked={formik.values.currently_working}
                                />
                            </div>
                            {/* check box */}

                            {/* time period */}
                            <Input
                                type="text"
                                label="Time Period"
                                name="time_period"
                                readOnly
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {/* time period */}

                            {/* description */}
                            <div className="flex flex-col gap-1">
                                <Textarea
                                    label="Description"
                                    name="description"
                                    rows={4}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.description}
                                    className={
                                        formik.errors.description && formik.touched.description
                                            ? 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                                            : 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    }
                                />
                                {formik.errors.description && formik.touched.description && (
                                    <small className='text-red-500 text-xs- italic'> {formik.errors.description} </small>
                                )}
                            </div>
                            {/* description */}

                            {/* skills */}
                            <div className="flex flex-col gap-1">
                                <Textarea
                                    label="Skills"
                                    name="skills"  // Added name attribute
                                    rows={2}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.skills}
                                    className={
                                        formik.errors.skills && formik.touched.skills
                                            ? 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                                            : 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    }
                                />
                                {formik.errors.skills && formik.touched.skills && (
                                    <small className='text-red-500 text-xs- italic'> {formik.errors.skills} </small>
                                )}
                            </div>
                            {/* skills */}
                        </div>
                        <div className="grid grid-cols-1 mt-5">
                            <div className="flex gap-2 justify-start items-center">
                                <label htmlFor="document">Related document:</label>
                                <input
                                    type="file"
                                    label="Documents"
                                    name='documents'
                                    onChange={(event) => {
                                        const file = event.currentTarget.files[0];
                                        formik.setFieldValue('documents', file);
                                    }}
                                />
                            </div>
                        </div>
                    </DialogBody>
                    <DialogFooter>
                        <Button
                            variant="text"
                            color="red"
                            onClick={handleCancel}
                            className="mr-1"
                        >
                            <span>Cancel</span>
                        </Button>
                        <Button variant="gradient" color="green" type='submit'>
                            <span>Confirm</span>
                        </Button>
                    </DialogFooter>
                </form>
            </Dialog>

        </>
    )
}

export default ExperienceEditModal
