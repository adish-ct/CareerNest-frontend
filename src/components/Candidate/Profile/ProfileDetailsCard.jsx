import React from 'react'

function ProfileDetailsCard() {



    return (
        <>
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
        </>
    )
}

export default ProfileDetailsCard
