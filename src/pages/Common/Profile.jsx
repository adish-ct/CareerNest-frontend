import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { Button, Input } from "@material-tailwind/react";
import Navbar from '../../components/Header/Accounts/Navbar';
import indianStates from '../../components/HelperFile/IndianStates';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

function Profile() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [dob, setDob] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    const handleDateChange = (date) => {
        setDob(date);
    };

    return (
        <>
            <Navbar />
            {/* profile page heading */}
            <div className="text-center md:pt-20">
                <h1 className="text-4xl font-bold text-gray-800">Make Your Profile</h1>
            </div>
            {/* profile page heading */}

            {/* main page section */}
            <form action="" method='post'>
                <div className=" w-100 text-center flex flex-col pe-20 ps-20 pt-10 sm:ps-10 sm:pe-10  md:flex md:flex-row gap-8 md:justify-between md:ps-20 md:pe-20 lg:ps-30 lg:pe-30 xl:ps-44 xl:pe-44 2xl:ps-80 2xl:pe-80  ">

                    {/* left section */}
                    <div className="flex flex-col w-100 md:w-2/5">
                        <div className="mt-4 text-center flex flex-col gap-5 items-center">
                            <div className="relative w-72 h-72 rounded-full bg-[#d4d4d4]">
                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    accept="image/*"
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    onChange={handleImageChange}
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {selectedImage ? (
                                        <img
                                            src={URL.createObjectURL(selectedImage)}
                                            alt="Selected Image"
                                            className="w-full h-full rounded-full"
                                        />
                                    ) : (
                                        <FaCamera className="text-white text-3xl" />
                                    )}
                                </div>
                            </div>
                            <label htmlFor="image" className="text-lg font-semibold flex gap-5 text-gray-700">
                                <p>Profile Photo</p> <FaCamera className=" text-3xl" />
                            </label>
                        </div>
                    </div>
                    {/* left section */}

                    {/* right section */}
                    <div className="flex flex-col gap-10 text-start  md:w-3/5">
                        <div className="w-96 ">
                            <Input label="First Name" />
                        </div>
                        <div className="w-96">
                            <Input label="Last Name" />
                        </div>
                        <div className="flex lg:flex-row lg:gap-10 sm:flex-col gap-5">
                            <div className="w-72 ">
                                <Input label="Place" />
                            </div>
                            <div className="w-72">
                                <Input label="City " />
                            </div>
                        </div>
                        <div className="w-72 ">
                            <label htmlFor="state" className='text-[#918f8f]'>* state</label>
                            <select className='border border-[#e3e3e3] p-3' name='state'>
                                {
                                    indianStates.map((state, index) => (
                                        <option value={state} key={index}> {state} </option>
                                    ))
                                }
                            </select>
                        </div>
                        {/* date of birth is only for candidate */}

                        <DatePicker

                            selected={dob}
                            onChange={handleDateChange}
                            dateFormat="yyyy-MM-dd"
                            customInput={<Input type="text" id="dob" label="Date of Birth" value={dob ? format(dob, 'yyyy-MM-dd') : ''} readOnly />}
                        />
                        <Button className='p-2 lg:mt-20 w-52   bg-[#5d77f9] text-lg'> Create Profile </Button>
                    </div>
                    {/* right section */}
                </div>
            </form>
        </>
    );
}

export default Profile;
