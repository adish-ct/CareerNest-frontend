import React, { useState } from 'react'
import { Button, Navbar } from '@material-tailwind/react'
import axios from 'axios'
import { baseUrl } from '../api/Api'
import { Card, CardHeader, CardBody, CardFooter, Typography, Input, Checkbox } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";


function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginHandler = async (e) => {
        e.preventDefault()
        // post request to backend
        const response = await axios.post(`${baseUrl}/accounts/login/`, {
            "email": email,
            "password": password
        })
        // get token from the response
        const token = response.data.access
        // store data to local storage
        localStorage.setItem("jwtToken", token)

        const storedToken = localStorage.getItem("jwtToken")
        const [header, payload, signature] = storedToken.split(".");
        const decodePayload = JSON.parse(atob(payload))
        console.log(decodePayload);

    }
    return (
        <>
            {/* <FirstHeader />
            <Navbar /> */}
            {/* <form action="post" onSubmit={loginHandler}>
                <div>
                    <label htmlFor="username">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="username" className="border-5 border-[#111010]" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" className="border-5 border-[#111010]" />

                </div>
                <Button type='submit'>Signin</Button>
            </form> */}
            <div className=" h-screen gap-8 flex flex-col md:justify-center items-center">
                <div className="h-28"></div>

                {/* top section */}
                <div className="flex md:flex-row flex-col gap-3 md:gap-0 justify-center md:h-full md:w-full">

                    {/* left section */}
                    <div className=" md:border-r border-r-black w-full md:w-1/2 flex flex-col sm:mt-10 justify-center mt-4 items-center">
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

                                <Input label="Email" size="lg" />

                                <Input label="Password" size="lg" />

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
                    <IconButton variant="text" className="rounded-full bg-red-500 w-32 md:p-10 h-32 text-lg sm:p-8 p-8 text-white">
                        GO
                    </IconButton>
                </div>
                <div className="h-28"></div>

            </div>

        </>
    )
}

export default Login
