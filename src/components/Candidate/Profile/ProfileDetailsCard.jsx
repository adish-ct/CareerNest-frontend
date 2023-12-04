import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { FiEdit } from "react-icons/fi";
import { Button } from '@material-tailwind/react'
import axios from 'axios';
import { baseUrl } from '../../../api/Api';
import getLocal from '../../../helper/Auth';
import { ToastContainer, toast } from 'react-toastify';


function ProfileDetailsCard() {

    const user = useSelector((state) => state.user)
    const profile = useSelector((state) => state.profile)
    const [profileToggle, setProfileToggle] = useState(false)

    const formik = useFormik({
        initialValues: {
            about: profile?.about || '',
            mobile: profile?.mobile || '',
            address: profile?.address,
            place: profile?.place || '',
            city: profile?.city || '',
            state: profile?.state || '',
            additional_email: profile.additional_email || '',
            zip_code: profile?.zip_code || '',
            candidate_designation: profile?.candidate_designation || '',
            candidate_date_of_birth: profile?.candidate_date_of_birth || '',
            candidate_expecting_salary: profile?.candidate_expecting_salary || '',
        },
        validationSchema: Yup.object({
            about: Yup.string().required("* required field"),
            mobile: Yup.string().matches(/^[0-9]{10}$/, 'Invalid phone number'),
            address: Yup.string().required("* required field"),
            place: Yup.string().matches(/^[a-zA-Z]+$/, 'place should only contain alphabets').required("* required field"),
            city: Yup.string().required("* required field"),
            state: Yup.string().required("* required field"),
            additional_email: Yup.string().email('Invalid email address'),
            zip_code: Yup.number().typeError('must be integers').min(100000, 'must be 6 digits').max(999999, 'must be 6 digits').required("* required field"),
            candidate_designation: Yup.string().matches(/^[a-zA-Z]+$/, 'designation only contain alphabets').required("* required field"),
            candidate_expecting_salary: Yup.number().min(0, 'minimum 0 required').required("* required field"),
            candidate_date_of_birth: Yup.date().required("* required field")
        }),
        onSubmit: async (values) => {
            try {
                if (profile) {
                    const token = getLocal()
                    const response = await axios.put(`${baseUrl}/profile/${profile.id}/`, values, {
                        headers: {
                            Authorization: `Bearer ${token}`, // Add a space after "Bearer" mandatory
                        }
                    });
                    toast.success("profie updated")
                }
            } catch (error) {
                console.log(error);
                toast.error("something wrong")
            }
        }
    })

    return (
        <>
            <ToastContainer />
            <form onSubmit={formik.handleSubmit}>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
                <div className="flex justify-between items-center">
                    <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                        Contact Information
                    </h6>
                    <FiEdit
                        className='text-lg text-[#5456d8] cursor-pointer hover:text-[#f16565]'
                        onClick={() => setProfileToggle(!profileToggle)}
                    />
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                Address
                            </label>
                            <input
                                type="text"
                                name="address"
                                value={formik.values.address}
                                onChange={formik.handleChange}
                                readOnly={!profileToggle}
                                className={
                                    formik.errors.address && formik.touched.address
                                        ? 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                                        : 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                }
                            />
                            {formik.errors.address && formik.touched.address && (
                                <small className='text-red-500 text-xs- italic'> {formik.errors.address} </small>
                            )}
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                place
                            </label>
                            <input
                                type="text"
                                name='place'
                                value={formik.values.place}
                                onChange={formik.handleChange}
                                readOnly={!profileToggle}
                                className={
                                    formik.errors.place && formik.touched.place
                                        ? 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                                        : 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                }
                            />
                            {formik.errors.place && formik.touched.place && (
                                <small className='text-red-500 text-xs- italic'> {formik.errors.place} </small>
                            )}
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                city
                            </label>
                            <input
                                type="text"
                                name='city'
                                value={formik.values.city}
                                onChange={formik.handleChange}
                                readOnly={!profileToggle}
                                className={
                                    formik.errors.city && formik.touched.city
                                        ? 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                                        : 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                }
                            />
                            {formik.errors.city && formik.touched.city && (
                                <small className='text-red-500 text-xs- italic'> {formik.errors.city} </small>
                            )}
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                state
                            </label>
                            <input
                                type="text"
                                name='state'
                                value={formik.values.state}
                                onChange={formik.handleChange}
                                readOnly={!profileToggle}
                                className={
                                    formik.errors.state && formik.touched.state
                                        ? 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                                        : 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                }
                            />
                            {formik.errors.state && formik.touched.state && (
                                <small className='text-red-500 text-xs- italic'> {formik.errors.state} </small>
                            )}
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                mobile
                            </label>
                            <input
                                type="text"
                                name='mobile'
                                value={formik.values.mobile}
                                onChange={formik.handleChange}
                                readOnly={!profileToggle}
                                className={
                                    formik.errors.mobile && formik.touched.mobile
                                        ? 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                                        : 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                }
                            />
                            {formik.errors.mobile && formik.touched.mobile && (
                                <small className='text-red-500 text-xs- italic'> {formik.errors.mobile} </small>
                            )}
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                email
                            </label>
                            <input
                                type="text"
                                name='additional_email'
                                value={formik.values.additional_email}
                                onChange={formik.handleChange}
                                readOnly={!profileToggle}
                                className={
                                    formik.errors.additional_email && formik.touched.additional_email
                                        ? 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                                        : 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                }
                            />
                            {formik.errors.additional_email && formik.touched.additional_email && (
                                <small className='text-red-500 text-xs- italic'> {formik.errors.additional_email} </small>
                            )}
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                Postal Code
                            </label>
                            <input
                                type="text"
                                name='zip_code'
                                value={formik.values.zip_code}
                                onChange={formik.handleChange}
                                className={
                                    formik.errors.zip_code && formik.touched.zip_code
                                        ? 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                                        : 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                }
                            />
                            {formik.errors.zip_code && formik.touched.zip_code && (
                                <small className='text-red-500 text-xs- italic'> {formik.errors.zip_code} </small>
                            )}
                        </div>
                    </div>
                </div>


                <hr className="mt-6 border-b-1 border-blueGray-300" />
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Proffessional Information
                </h6>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                Designation
                            </label>
                            <input
                                type="text"
                                name='candidate_designation'
                                value={formik.values.candidate_designation}
                                onChange={formik.handleChange}
                                readOnly={!profileToggle}
                                className={
                                    formik.errors.candidate_designation && formik.touched.candidate_designation
                                        ? 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                                        : 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                }
                            />
                            {formik.errors.candidate_designation && formik.touched.candidate_designation && (
                                <small className='text-red-500 text-xs- italic'> {formik.errors.candidate_designation} </small>
                            )}
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                Expecting Salary
                            </label>
                            <input
                                type="number"
                                name='candidate_expecting_salary'
                                value={formik.values.candidate_expecting_salary}
                                onChange={formik.handleChange}
                                readOnly={!profileToggle}
                                className={
                                    formik.errors.candidate_expecting_salary && formik.touched.candidate_expecting_salary
                                        ? 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                                        : 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                }
                            />
                            {formik.errors.candidate_expecting_salary && formik.touched.candidate_expecting_salary && (
                                <small className='text-red-500 text-xs- italic'> {formik.errors.candidate_expecting_salary} </small>
                            )}
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                Date of birth
                            </label>
                            <input
                                type="date"
                                name="candidate_date_of_birth"
                                value={formik.values.candidate_date_of_birth}
                                onChange={formik.handleChange}
                                readOnly={!profileToggle}
                                className={
                                    formik.errors.candidate_date_of_birth && formik.touched.candidate_date_of_birth
                                        ? 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                                        : 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                }
                            />
                            {formik.errors.candidate_date_of_birth && formik.touched.candidate_date_of_birth && (
                                <small className='text-red-500 text-xs- italic'> {formik.errors.candidate_date_of_birth} </small>
                            )}
                        </div>
                    </div>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    About Me
                </h6>
                <div className="flex flex-wrap">

                    <div className="w-full lg:w-12/12 px-4">

                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                About me
                            </label>
                            <textarea
                                type="text"
                                name='about'
                                value={formik.values.about}
                                onChange={formik.handleChange}
                                readOnly={!profileToggle}
                                rows={4}
                                className={
                                    formik.errors.about && formik.touched.about
                                        ? 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                                        : 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                }
                            />
                            {formik.errors.about && formik.touched.about && (
                                <small className='text-red-500 text-xs- italic'> {formik.errors.about} </small>
                            )}
                        </div>
                    </div>
                </div>
                <div className="text-right">
                    {profileToggle && <Button type='submit' className='border bg-transparent text-red-400'>Update</Button>}
                </div>
            </form>
        </>
    )
}

export default ProfileDetailsCard
