import React, { useEffect, useState } from 'react'
import { LiaUserEditSolid } from "react-icons/lia";
import getLocal from '../../../helper/Auth';
import { jwtDecode } from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLoading } from '../../../redux/Actions/AuthAction'
import profileAction from '../../../redux/Actions/ProfileAction'
import { baseUrl } from '../../../api/Api';
import axios from 'axios'
import ProfileBasicInformationForm from './ProfileBasicInformationForm';


function ProfileViewCard() {

    const user = useSelector((state) => state.user)
    const profile = useSelector((state) => state.profile)
    const loading = useSelector((state) => state.loading)
    const dispatch = useDispatch()

    const [userDetails, setUserDetails] = useState(null)

    const fetchProfile = async () => {
        try {
            const token = getLocal()
            if (token) {
                const decoded_token = jwtDecode(token)
                const response = await axios.get(`${baseUrl}/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                dispatch(profileAction(response.data[0]))
            }
        } catch (error) {
            console.error("Error fetching profile:", error);
        }
    }

    const fetchUser = async () => {
        try {
            const token = getLocal()
            const decoded_token = jwtDecode(token)
            if (token) {
                const response = await axios.get(`${baseUrl}/accounts/get-user/${decoded_token.user_id}`)
                setUserDetails(response.data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProfile()
        fetchUser()
        dispatch(toggleLoading())
    }, [])

    if (loading) {
        return (
            <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    if (!profile) {
        return null; // or render a loading state or a message
    }

    return (
        <section className=" py-1 bg-blueGray-50">
            <div className="relative flex flex-col min-w-0 break-words w-full rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 text-xl font-bold">My account</h6>
                        <LiaUserEditSolid className='text-2xl text-[#5456d8]' />
                    </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <ProfileBasicInformationForm userDetails={userDetails} />
                    <form>
                        <hr className="mt-6 border-b-1 border-blueGray-300" />
                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                            Contact Information
                        </h6>
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
                                        value={profile.address}
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
                    </form>


                </div>
            </div>
        </section>
    )
}

export default ProfileViewCard
