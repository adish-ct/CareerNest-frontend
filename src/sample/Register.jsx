import React from 'react'
import { Button } from '@material-tailwind/react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { baseUrl } from '../api/Api';

function Register() {

    const [message, setMessage] = useState()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')

    const [store, setSetstore] = useState([])

    // fetch role from backend
    const getRole = () => {
        axios.get(`${baseUrl}/accounts/`).then((response) => {
            setSetstore(response.data)
        })
    };
    const registerHandler = async (e) => {
        e.preventDefault()
        const response = await axios.post(`${baseUrl}/accounts/register/`, {
            username,
            email,
            phone,
            password,
            role
        })
        console.log(response.data);
    }

    useEffect(() => {
        // trigger fuction for fetching role when rerender the component
        getRole();
    }, []);

    return (
        <div className='text-center'>
            <h2 className='h-20'>Registration</h2>
            <div className="text-center">
                <form action="POST" className='text-center' onSubmit={registerHandler}>
                    <div className="text-center flex justify-center">
                        <div className="flex justify-start gap-3 items-center">
                            <label htmlFor="username">User name</label> &nbsp;
                            <input onChange={(e) => setUsername(e.target.value)} type="text" className='border-2 border-[#e74f4f] w-60 h-10 rounded-2xl' name='username' />
                        </div>
                    </div>
                    <div className="text-center flex justify-center">
                        <div className="flex justify-center gap-3 items-center">
                            <label htmlFor="email">Email</label> &nbsp;
                            <input onChange={(e) => setEmail(e.target.value)} type="email" className='border-2 border-[#e74f4f] w-60 h-10 rounded-2xl' name='email' />
                        </div>
                    </div>

                    <div className="text-center flex justify-center">
                        <div className="flex justify-center gap-3 items-center">
                            <label htmlFor="phone">Phone</label> &nbsp;
                            <input onChange={(e) => setPhone(e.target.value)} type="text" className='border-2 border-[#e74f4f] w-60 h-10 rounded-2xl' name='phone' />
                        </div>
                    </div>

                    <div className="flex justify-center gap-3 items-center">
                        <div className="text-center flex justify-center">
                            <label htmlFor="email">password</label> &nbsp;
                            <input onChange={(e) => setPassword(e.target.value)} type="password" className='border-2 border-[#e74f4f] w-60 h-10 rounded-2xl' name='password' />
                        </div>
                    </div>

                    <div className="flex justify-center gap-3 items-center">
                        <div className="text-center flex justify-center">
                            <label htmlFor="email">Role</label> &nbsp;

                            <select name="role" id="role" className='w-60 border-gray-500' onChange={(e) => {
                                const selectValue = e.target.value;
                                setRole(selectValue)
                            }}>
                                {
                                    store.map((q, index) => (
                                        <option key={index} value={q.id}>{q.role}</option>
                                    )
                                    )
                                }
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-center gap-3 items-center">
                        <div className="text-center flex justify-center">
                            <label htmlFor="email">Role</label> &nbsp;
                            {
                                store.map((i, index) => (
                                    <div>
                                        <label htmlFor="type">{i.role}</label>
                                        <input key={index} type="radio" name='type' value={i.id} onChange={(e) => {
                                            setRole(e.target.value)
                                            console.log(role);
                                        }} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <Button type='submit'>Sign in</Button>

                </form>

            </div>
        </div>
    )
}

export default Register
