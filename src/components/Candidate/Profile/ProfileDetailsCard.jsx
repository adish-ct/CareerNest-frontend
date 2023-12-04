import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getLocal from '../../../helper/Auth'
import { toggleLoading } from '../../../redux/Actions/AuthAction'
import profileAction from '../../../redux/Actions/ProfileAction'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import { baseUrl } from '../../../api/Api'
import { useFormik, useFormikContext } from 'formik'
import * as Yup from 'yup';
import { FiEdit } from "react-icons/fi";
import { Button } from '@material-tailwind/react'

function ProfileDetailsCard() {

    const user = useSelector((state) => state.user)
    const profile = useSelector((state) => state.profile)
    const loading = useSelector((state) => state.loading)
    const [profileToggle, setProfileToggle] = useState(false)
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            about: profile?.about || '',
            phone: profile?.phone || '',
            address: profile?.address || '',
            place: profile?.place || '',
            city: profile?.city || '',
            state: profile?.state || '',
            zip_code: profile?.zip_code || '',
            candidate_designation: profile?.candidate_designation || '',
            candidate_date_of_birth: profile?.candidate_date_of_birth || '',
            candidate_expecting_salary: profile?.candidate_expecting_salary || ''
        },
        validationSchema: Yup.object({
            phone: Yup.string().matches(/^[0-9]{10}$/, 'Invalid phone number'),
            place: Yup.string().matches(/^[a-zA-Z]+$/, 'place should only contain alphabets'),
            zip_code: Yup.number().typeError('must be integers').min(100000, 'must be 6 digits').max(999999, 'must be 6 digits'),
            candidate_designation: Yup.string().matches(/^[a-zA-Z]+$/, 'designation only contain alphabets'),
            candidate_expecting_salary: Yup.number().min(0, 'minimum 0 required')
        }),
        onSubmit: async (values) => {
            console.log("working");
        }
    })

    const fetchProfile = async () => {
        try {
            const token = getLocal();
            if (token) {
                const decodedToken = jwtDecode(token);
                const response = await axios.get(`${baseUrl}/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                dispatch(profileAction(response.data[0]));
            }
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            await Promise.all([fetchProfile()]);
            dispatch(toggleLoading());
        };

        fetchData();
    }, [dispatch]);

    if (loading || !profile) {
        return (
            <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    return (
        <>
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
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                value={profile?.address}
                            />
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
                                type="email"
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                defaultValue="New York"
                            />
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
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                defaultValue=""
                            />
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
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                defaultValue="Postal Code"
                            />
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
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                defaultValue="New York"
                            />
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
                                type="email"
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                defaultValue=""
                            />
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
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                defaultValue="Postal Code"
                            />
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
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                defaultValue="lucky.jesse"
                            />
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
                                type="text"
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                defaultValue="lucky.jesse"
                            />
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
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                defaultValue="9876543210"
                            />
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
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                rows={4}
                                defaultValue={
                                    " A beautiful UI Kit and Admin for JavaScript & Tailwind CSS. It is Freeand Open Source."
                                }
                            />
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
