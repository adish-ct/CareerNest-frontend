import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input, Spinner, spinner } from '@material-tailwind/react';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from 'yup'
import getLocal from '../../../helper/Auth';
import axios from 'axios';
import { baseUrl } from '../../../api/Api';

function EducationEditModal({ open, handleOpen, selectedEducation }) {


    const formik = useFormik({
        initialValues: {
            stream: selectedEducation?.stream || '',
            organization: selectedEducation?.organization || '',
            location: selectedEducation?.location || '',
            state: selectedEducation?.state || '',
            course_type: selectedEducation?.course_type || '',
            start_date: selectedEducation?.start_date || null,
            end_date: selectedEducation?.end_date || null,
            duration: selectedEducation?.duration || '',
            currently_studying: selectedEducation?.currently_studying || false,
            score: selectedEducation?.score || 5,
            // description: '',
            documents: null,
        },
        validationSchema: Yup.object({
            stream: Yup.string().required("* required field"),
            organization: Yup.string().matches(/^[a-zA-Z\s]+$/, 'organization should only contain alphabets').required("* required field"),
            location: Yup.string().matches(/^[a-zA-Z\s]+$/, 'location should only contain alphabets'),
            course_type: Yup.string().required("* required field"),
            state: Yup.string().matches(/^[a-zA-Z\s]+$/, "state should only contain alphabets"),
            start_date: Yup.date().required("* required field"),
            score: Yup.number().required("* required field").min(1, "should not be less than 0").max(10, "should not be greater than 0"),
            // description: Yup.string().required("* required field"),
        }),
        onSubmit: async (values) => {
            try {
                console.log(values);
                const token = getLocal()
                if (token && selectedEducation) {
                    const response = await axios.put(`${baseUrl}/education/${selectedEducation.id}/`, values, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    toast.success("Document updated")
                }
            } catch (error) {
                console.log(error);
                if (error.response && error.response.data) {
                    // Extract validation errors from the error response
                    const validationErrors = error.response.data;

                    // Display validation errors on the front-end
                    Object.keys(validationErrors).forEach(field => {
                        if (field && field !== 'non_field_errors') {
                            toast.error(`${field} ${validationErrors[field].join(", ")}`);
                        } else {
                            toast.error(`${validationErrors[field].join(", ")}`);

                        }
                    });
                } else {
                    console.log(error);
                    toast.error("Something went wrong");
                }
            } finally {
                handleOpen()
            }
        }
    })

    const handleClose = async () => {
        handleOpen()
    }

    useEffect(() => {
        if (selectedEducation) {
            formik.setValues({
                stream: selectedEducation?.stream || '',
                organization: selectedEducation?.organization || '',
                location: selectedEducation?.location || '',
                state: selectedEducation?.state || '',
                course_type: selectedEducation?.course_type || '',
                start_date: selectedEducation?.start_date || null,
                end_date: selectedEducation?.end_date || null,
                duration: selectedEducation?.duration || '',
                currently_studying: selectedEducation?.currently_studying || false,
                score: selectedEducation?.score || 5,
                // description: '',
                documents: null,
            });
        }
    }, [selectedEducation, open])

    if (!selectedEducation) {
        <spinner />
    }

    return (
        <>
            <ToastContainer />
            <Dialog open={open}>
                <ToastContainer />

                {/* form should be inside the Dialog block */}
                {selectedEducation && (
                    <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                        <DialogHeader>Edit Education</DialogHeader>
                        <DialogBody>
                            <div className="grid grid-cols-2 gap-4">

                                {/* Stream */}
                                <div className="flex flex-col gap-1">
                                    <Input
                                        type="text"
                                        label="Stream"
                                        name="stream"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.stream}  // Use formik values instead of selectedEducation
                                        className={
                                            formik.errors.stream && formik.touched.stream
                                                ? 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                                                : 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                        }
                                    />
                                    {formik.errors.stream && formik.touched.stream && (
                                        <small className="text-red-500 text-xs italic">{formik.errors.stream}</small>
                                    )}
                                </div>
                                {/* Stream */}

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

                                {/* Course Type */}
                                <div className="flex flex-col gap-1">
                                    <select
                                        label="Job Type"
                                        name="course_type"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.course_type}
                                        className={
                                            formik.errors.course_type && formik.touched.course_type
                                                ? 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                                                : 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                        }
                                    >
                                        <option value="">Course Type</option>
                                        <option value="full time">Full Time</option>
                                        <option value="part time">Part Time</option>
                                        <option value="internship">Internship</option>
                                    </select>
                                    {formik.errors.course_type && formik.touched.course_type && (
                                        <small className="text-red-500 text-xs italic">{formik.errors.course_type}</small>
                                    )}
                                </div>
                                {/* Course type */}

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
                                    disabled={formik.values.currently_studying}
                                />
                                {/* end date */}

                                {/* check box */}
                                <div className="flex justify-start gap-3 items-center">
                                    <label htmlFor="checkbox">Currently studying here </label>
                                    <input
                                        name='currently_studying'
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
                                        checked={formik.values.currently_studying}
                                    />
                                </div>
                                {/* check box */}

                                {/* Duration */}
                                <Input
                                    type="text"
                                    label="Duration"
                                    name="duration"
                                    value={formik.values.duration}
                                    readOnly
                                />
                                {/* Duration */}

                                {/* score */}
                                <div className="flex flex-col gap-1">
                                    <Input
                                        label="Score"
                                        name="score"  // Added name attribute
                                        rows={2}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.score}
                                        className={
                                            formik.errors.score && formik.touched.score
                                                ? 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                                                : 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                        }
                                    />
                                    {formik.errors.score && formik.touched.score && (
                                        <small className='text-red-500 text-xs- italic'> {formik.errors.score} </small>
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
                                onClick={handleClose}
                                className="mr-1"
                            >
                                <span>Cancel</span>
                            </Button>
                            <Button color="green" type='submit'>
                                <span>Confirm</span>
                            </Button>
                        </DialogFooter>
                    </form>
                )}
            </Dialog>
        </>
    )
}

export default EducationEditModal
