import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
} from "@material-tailwind/react";
import { jwtDecode } from "jwt-decode";

import Navbar from "../../components/Header/Accounts/Navbar";
import { baseUrl } from "../../api/Api";
import {
    toggleAuthentication,
    toggleLoading,
} from "../../redux/Actions/AuthAction";
import setUserDetails from "../../redux/Actions/UserAction";
import { Helmet } from "react-helmet";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("Field Required"),
            password: Yup.string().required("Required"),
        }),
        onSubmit: async (values) => {
            try {
                const response = await axios.post(
                    `${baseUrl}/accounts/login/`,
                    values
                );
                toast.success("Login Successful");

                const token = response.data.access;
                localStorage.setItem("jwtToken", token);

                const decodedToken = jwtDecode(token);
                dispatch(setUserDetails(decodedToken));

                if (decodedToken.role === "Candidate") {
                    navigate("/");
                } else if (decodedToken.role === "Employer") {
                    toast.success("Logged in successfully");
                    navigate("/employer/dashboard");
                } else {
                    console.log("super admin");
                }
            } catch (error) {
                toast.error("Credentials not matched");
            }
        },
    });

    return (
        <>
            <Helmet>
                <title>Login | CareerNest</title>
            </Helmet>
            <ToastContainer />
            <div className="flex flex-col h-screen justify-between">
                <Navbar />
                <form action="" onSubmit={formik.handleSubmit}>
                    <div className="h-full md:gap-20 flex flex-col md:justify-center items-center">
                        <div className="flex md:flex-row flex-col gap-3 md:gap-0 justify-center md:h-full md:w-full">
                            <div className=" md:border-r border-r-black w-full md:w-1/2 flex flex-col justify-center items-center">
                                <div className="flex flex-col gap-3 justify-center items-center">
                                    <div className="md:w-4/5 lg:w-3/4 w-80 text-center">
                                        <h1 className="lg:text-3xl md:text-xl text-xl font-bold">
                                            WELCOME TO CAREERNEST JOB PORTAL
                                        </h1>
                                    </div>
                                    <img src="" alt="image" />
                                </div>
                            </div>
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
                                        <Input
                                            {...formik.getFieldProps("email")}
                                            label="Email"
                                            size="lg"
                                            className={`form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                        ${
                            formik.errors.email && formik.touched.email
                                ? "border-red-500"
                                : ""
                        }`}
                                        />
                                        {formik.errors.email &&
                                            formik.touched.email && (
                                                <p className="text-red-500 text-xs italic">
                                                    {formik.errors.email}
                                                </p>
                                            )}
                                        <Input
                                            {...formik.getFieldProps(
                                                "password"
                                            )}
                                            label="Password"
                                            type="password"
                                            size="lg"
                                            className={`form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                        ${
                            formik.errors.password && formik.touched.password
                                ? "border-red-500"
                                : ""
                        }`}
                                        />
                                        {formik.errors.password &&
                                            formik.touched.password && (
                                                <p className="text-red-500 text-xs italic">
                                                    {formik.errors.password}
                                                </p>
                                            )}
                                        <div className="-ml-2.5">
                                            <Checkbox label="Remember Me" />
                                        </div>
                                    </CardBody>
                                    <CardFooter className="pt-0">
                                        <Typography
                                            variant="small"
                                            className="mt-6 flex justify-center"
                                        >
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
                        <div className="text-center">
                            <button
                                type="submit"
                                className="rounded-full bg-red-500 w-28 md:p-10 h-28 text-2xl sm:p-8 p-8 text-white"
                            >
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
    );
};

export default Login;
