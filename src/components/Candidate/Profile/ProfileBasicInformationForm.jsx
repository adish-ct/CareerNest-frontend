import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LiaUserEditSolid } from 'react-icons/lia';
import { Button } from '@material-tailwind/react';
import axios from 'axios';
import { baseUrl } from '../../../api/Api';
import { useSelector } from 'react-redux';

function ProfileBasicInformationForm({ userDetails }) {

    const user = useSelector((state) => state.user)
    const [userToggle, setUserToggle] = useState(false);

    const formik = useFormik({
        initialValues: {
            username: userDetails?.username || '',
            first_name: userDetails?.first_name || '',
            last_name: userDetails?.last_name || '',
            phone: userDetails?.phone || '',
        },
        validationSchema: Yup.object({
            username: Yup.string().matches(/^[a-zA-Z]+$/, 'Username should only contain alphabets').required("* required field"),
            first_name: Yup.string().matches(/^[a-zA-Z]+$/, 'First name should only contain alphabets').required("* required field"),
            phone: Yup.string().matches(/^[0-9]{10}$/, 'Invalid phone number').required("* required field")
        }),
        onSubmit: async (values, { setSubmitting }) => {
            if (user) {
                const response = await axios.put(`${baseUrl}/accounts/get-user/${user.user_id}/`, values)
                toast.success('Form submitted successfully!');
                setUserToggle(!userToggle)
            }

        }
    });

    useEffect(() => {
    }, [formik.errors]);

    return (
        <>
            <ToastContainer />
            <form onSubmit={formik.handleSubmit}>
                <div className="flex justify-between mt-3 mb-6">
                    <h6 className="text-blueGray-400 text-sm font-bold uppercase items-center">
                        User Information
                    </h6>
                    <Button type='submit'>Update</Button>
                    <LiaUserEditSolid
                        className='text-2xl text-[#5456d8] cursor-pointer hover:text-[#f16565]'
                        onClick={() => setUserToggle(!userToggle)}
                    />
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                name="username" // Add name attribute for formik
                                value={formik.values.username}
                                onChange={formik.handleChange} // Use formik's handleChange
                                onBlur={formik.handleBlur} // Use formik's handleBlur
                                className={
                                    formik.errors.username && formik.touched.username
                                        ? 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                                        : 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                }
                            />
                            {formik.errors.username && formik.touched.username && (
                                <small className="text-red-500 text-xs italic">{formik.errors.username}</small>
                            )}
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                Phone
                            </label>
                            <input
                                type="text"
                                name='phone'
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                className={
                                    formik.errors.phone && formik.touched.phone
                                        ? 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                                        : 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                }
                            />
                            {formik.errors.phone && formik.touched.phone && (
                                <small className="text-red-500 text-xs italic">{formik.errors.phone}</small>
                            )}
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                First Name
                            </label>
                            <input
                                type="text"
                                name='first_name'
                                value={formik.values.first_name}
                                onChange={formik.handleChange}
                                className={
                                    formik.errors.first_name && formik.touched.first_name
                                        ? 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                                        : 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                }
                            />
                            {formik.errors.first_name && formik.touched.first_name && (
                                <small className="text-red-500 text-xs italic">{formik.errors.first_name}</small>
                            )}
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                Last Name
                            </label>
                            <input
                                type="text"
                                name='last_name'
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                value={formik.values.last_name}
                                onChange={formik.handleChange}
                            />
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default ProfileBasicInformationForm;
