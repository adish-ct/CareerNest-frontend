import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
import { baseUrl } from '../../../api/Api';

function OtpVerification() {

    const [otp, setOtp] = useState('');

    // Retrieve email from URL parameters
    const searchParams = new URLSearchParams(window.location.search);
    const email = searchParams.get('email') || '';


    // Formik configuration
    const formik = useFormik({
        initialValues: {
            otp: '',
        },
        validationSchema: Yup.object({
            otp: Yup.number()
                .integer('OTP must be an integer')
                .positive('OTP must be a positive number')
                .test('len', 'OTP must be exactly 6 characters', (val) => val && val.toString().length === 6)
                .required('OTP is required'),
        }),
        onSubmit: async (values) => {

            const response = await axios.post(`${baseUrl}/accounts/user-verification/`, {
                'email': email,
                'otp': values.otp,
            })
            console.log(response);
            // Perform OTP submission logic here
        },
    });

    return (
        <>
            <div className="flex-1 flex items-center justify-center">
                <div className="bg-white p-8 rounded-md shadow-md max-w-md">
                    <h1 className="text-2xl font-semibold mb-6">Enter OTP</h1>

                    {/* Formik Form */}
                    <form onSubmit={formik.handleSubmit}>
                        <input
                            type="text"
                            name="otp"
                            placeholder="Enter OTP"
                            value={formik.values.otp}
                            onChange={formik.handleChange}
                            className="w-full p-3 mb-6 border rounded-md focus:outline-none focus:border-blue-500"
                        />

                        <button
                            type="submit"
                            className="w-full bg-red-500 text-white p-3 rounded-md cursor-pointer"
                        >
                            Submit
                        </button>
                    </form>
                    {/* End of Formik Form */}

                </div>
            </div>
        </>
    )
}

export default OtpVerification
