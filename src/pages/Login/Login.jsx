import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { baseUrl } from '../../api/Api'
import { Card, CardHeader, CardBody, CardFooter, Typography, Input, Checkbox } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import Navbar from "../../components/Header/Accounts/Navbar"
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux';
import { toggleAuthentication, toggleLoading } from '../../redux/Actions/AuthAction'
import setUserDetails from '../../redux/Actions/UserAction'
import { jwtDecode } from "jwt-decode";




function Login() {

    const dispatch = useDispatch()
    const user = useSelector((state) => {
        return state.user;
    })


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    useEffect(() => {

    }, [])

    // useFormik: It's a hook from the Formik library that helps in managing form state, handling form submissions, and validation.
    const formik = useFormik({

        // initialValues: It defines the initial values for your form fields (email and password).
        initialValues: {
            email: "",
            password: "",
        },

        // validationSchema: It defines the validation rules for the form fields using Yup, a validation library
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Field Required'),
            password: Yup.string().required('Required')
        }),

        // onSubmit: This is a callback function that is executed when the form is submitted
        onSubmit: async (values) => {
            try {
                const response = await axios.post(`${baseUrl}/accounts/login/`, {
                    email: values.email,
                    password: values.password,
                })
                toast.success("Login Successfull")
                const token = response.data.access

                localStorage.setItem('jwtToken', token)
                const decoded_token = jwtDecode(token);
                console.log(token);
                console.log(decoded_token);
                dispatch(setUserDetails(decoded_token))
                navigate('/')
            } catch (error) {
                toast.error('Credentials not matched')
            }
        }
    })


    return (
        <>
            <ToastContainer />
            <div className="flex flex-col h-screen justify-between">
                <Navbar />
                <form action="" onSubmit={formik.handleSubmit}>
                    <div className="h-full md:gap-20 flex flex-col md:justify-center items-center">

                        {/* top section */}
                        <div className="flex md:flex-row flex-col gap-3 md:gap-0 justify-center md:h-full md:w-full">

                            {/* left section */}
                            <div className=" md:border-r border-r-black w-full md:w-1/2 flex flex-col  justify-center items-center">
                                <div className="flex flex-col gap-3 justify-center items-center">
                                    <div className="md:w-4/5 lg:w-3/4 w-80 text-center">
                                        <h1 className="lg:text-3xl md:text-xl text-xl font-bold">WELCOME TO CAREERNEST JOB PORTAL</h1>
                                    </div>
                                    <img src="" alt="image" />
                                </div>
                            </div>

                            {/* right */}
                            <div className=" w-full md:w-1/2 flex flex-col justify-center items-center sm:mt-10 mt-4">

                                <Card className="md:w-80 sm:w-80 w-80 lg:w-96 mt-10 md:mt-0 h-">
                                    <CardHeader
                                        variant="gradient"
                                        color="red"
                                        className="mb-4 sm:h-20 md:h-28 grid h-20 place-items-center"
                                    >
                                        <Typography variant="h3" color="white">
                                            Sign In
                                        </Typography>
                                    </CardHeader>

                                    <CardBody className="flex flex-col gap-4">

                                        <Input {...formik.getFieldProps("email")} label="Email" size="lg" className={
                                            formik.errors.email && formik.touched.email
                                                ? "form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500"
                                                : "form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        } />
                                        {formik.errors.email && formik.touched.email && (
                                            <p className="text-red-500 text-xs italic">
                                                {formik.errors.email}
                                            </p>
                                        )}

                                        <Input {...formik.getFieldProps("password")} label="Password" type='password' size="lg" className={
                                            formik.errors.email && formik.touched.email
                                                ? "form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500"
                                                : "form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        } />

                                        {formik.errors.password && formik.touched.password && (
                                            <p className="text-red-500 text-xs italic">
                                                {formik.errors.password}
                                            </p>
                                        )}
                                        <div className="-ml-2.5">
                                            <Checkbox label="Remember Me" />
                                        </div>

                                    </CardBody>

                                    <CardFooter className="pt-0">
                                        <Typography variant="small" className="mt-6 flex justify-center">
                                            Don&apos;t have an account?
                                            <Typography
                                                as="a"
                                                href="#signup"
                                                variant="small"
                                                className="ml-1 font-bold transition-transform transform hover:scale-105 hover:bg-red-500 hover:text-white hover:animate-ping"
                                            >
                                                Sign up
                                            </Typography>
                                        </Typography>
                                    </CardFooter>
                                </Card>

                            </div>

                        </div>

                        {/* bottom section */}
                        <div className="text-center">
                            <button type='submit' className="rounded-full bg-red-500 w-28 md:p-10 h-28 text-2xl sm:p-8 p-8 text-white">
                                GO
                            </button>
                        </div>

                    </div>
                </form>
                <div>
                    <h1>footer</h1>
                </div>

            </div>

        </>
    )
}

export default Login
