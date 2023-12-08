import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input } from '@material-tailwind/react';
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import getLocal from '../../../helper/Auth';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { baseUrl } from '../../../api/Api';
import axios from 'axios';

function EducationCreateModal({ open, handler }) {

    const token = getLocal()
    const user = useSelector((state) => state.user)

    const formik = useFormik({
        initialValues: {
            user: user?.user_id,
            stream: '',
            organization: '',
            location: '',
            state: '',
            course_type: '',
            start_date: null,
            end_date: null,
            duration: '',
            currently_studying: false,
            score: 5,
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
                if (user && values && token) {
                    const formValues = {
                        ...values,
                        user: user?.user_id,
                    };
                    console.log(values);
                    const response = await axios.post(`${baseUrl}/education/`, formValues, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    handler();
                    toast.success("Education added")
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
            }
        }
    })

    return (
        <>
            <ToastContainer />
            <Dialog open={open}>
                <ToastContainer />

                {/* form should be inside the Dialog block */}
                <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                    <DialogHeader>Add Education</DialogHeader>
                    <DialogBody>
                        <div className="grid grid-cols-2 gap-4">

                            {/* Stream */}
                            <div className="flex flex-col gap-1">
                                <Input
                                    type="text"
                                    label="Stream"
                                    name="stream"  // Added name attribute
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
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
                                />
                            </div>
                            {/* check box */}

                            {/* Duration */}
                            <Input
                                type="text"
                                label="Duration"
                                name="duration"
                                readOnly
                            />
                            {/* Duration */}

                            {/* skills */}
                            <div className="flex flex-col gap-1">
                                <Input
                                    label="Score"
                                    name="score"  // Added name attribute
                                    rows={2}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
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
                            onClick={handler}
                            className="mr-1"
                        >
                            <span>Cancel</span>
                        </Button>
                        <Button color="green" type='submit'>
                            <span>Confirm</span>
                        </Button>
                    </DialogFooter>
                </form>
            </Dialog>
        </>
    )
}

export default EducationCreateModal
