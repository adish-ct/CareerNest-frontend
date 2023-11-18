import React, { useState } from 'react'
import { Button } from '@material-tailwind/react'
import axios from 'axios'
import { baseUrl } from '../api/Api'


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
        <div>
            <form action="post" onSubmit={loginHandler}>
                <div>
                    <label htmlFor="username">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="username" className="border-5 border-[#111010]" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" className="border-5 border-[#111010]" />

                </div>
                <Button type='submit'>Signin</Button>
            </form>
        </div>
    )
}

export default Login
