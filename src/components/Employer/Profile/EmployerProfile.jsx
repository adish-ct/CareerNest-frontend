import React, { useEffect } from "react";
import { useQuery, useMutation } from 'react-query'
import { useFormik } from 'formik';
import fetchProfile from "../../../hooks/ProfileApiFetch";
import { Textarea, Input } from "@material-tailwind/react";
import * as Yup from 'yup';
import axios from "axios";
import { baseUrl } from "../../../api/Api";


const validationSchema = Yup.object({
    // username: Yup.string().required('Username is required'),
    // email: Yup.string().email('Invalid email address').required('Email is required'),
    place: Yup.string().required('Place is required'),
    state: Yup.string().required('State is required'),
    zipcode: Yup.number().max(6),
    organization: Yup.string().required('organization is required'),
    employer_head_quarters: Yup.string().required('Head quarters is required'),
    employer_avarage_salary: Yup.number().min(10000, 'Minimum salary is 10000'),
    employer_description: Yup.string().required('employer_description is required'),
    // Add more validation as needed
});


function EmployerProfile() {

    const { isLoading, isError, data: profile, error, refetch } = useQuery('profile', fetchProfile, {
        onSuccess: (data) => {
            formik.setValues({
                username: profile?.username,
                email: profile?.email,
                phone: profile?.phone,
                place: profile?.profile.place,
                state: profile?.profile.state,
                city: profile?.profile.city,
                zipcode: profile?.profile.zip_code,
                organization: profile?.profile.organization,
                employer_head_quarters: profile?.profile.employer_head_quarters,
                averageSalary: profile?.profile.employer_avarage_salary,
                employer_description: profile?.profile.employer_description,
                profile_image: profile?.profile.profile_image,
                banner_image: profile?.profile.banner_image,
            })
        }
    })

    useEffect(() => {
        // Fetch profile data when the component mounts
        refetch();
    }, []); // Empty dependency array ensures it runs only once on mount

    useEffect(() => {
        // When the profile data changes, update the formik values
        if (profile) {
            formik.setValues({
                username: profile?.username || '',
                email: profile?.email || '',
                phone: profile?.phone || '',
                place: profile?.profile.place || '',
                state: profile?.profile.state || '',
                city: profile?.profile.city || '',
                zipcode: profile?.profile.zip_code || '',
                organization: profile?.profile.organization || '',
                employer_head_quarters: profile?.profile.employer_head_quarters || '',
                averageSalary: profile?.profile.employer_avarage_salary || '',
                employer_description: profile?.profile.employer_description || '',
                banner_image: profile?.profile.banner_image || null,
                profile_image: profile?.profile.profile_image || null,
            });
        }
    }, [profile]); // Run this effect whenever profile data changes


    // Assuming profile is an array and you want to take the first item
    const profileData = profile && profile.length > 0 ? profile[0] : null;

    // formik state for form
    const formik = useFormik({
        initialValues: {
            // Set initial values based on fetched data
            username: profile?.username || '',
            email: profile?.email || '',
            phone: profile?.phone || '',
            place: profile?.place || '',
            state: profile?.state || '',
            city: profile?.city || '',
            zipcode: profile?.zip_code || '',
            organization: profile?.organization || '',
            employer_head_quarters: profile?.employer_head_quarters || '',
            employer_avarage_salary: profile?.employer_avarage_salary || '5000',
            employer_description: profile?.employer_description || '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {

            try {
                // Create a new object with the desired structure
                const requestData = {
                    email: values.email,
                    phone: values.phone,
                    username: values.username,
                    first_name: values.first_name,
                    last_name: values.last_name,
                    profile: {
                        place: values.place || '',
                        city: values.city || '',
                        state: values.state || '',
                        zip_code: values.zipcode || '',
                        organization: values.organization || '',
                        employer_description: values.employer_description || '',
                        employer_avarage_salary: values.employer_avarage_salary || 5000,
                        employer_head_quarters: values.employer_head_quarters || '',
                        profile_image,
                        banner_image
                    }
                };

                // Perform the update with react-query mutation
                await updateProfileMutation.mutateAsync(requestData);
            } catch (error) {
                console.error('Error updating data:', error);
            } finally {
            }
        },
    });


    const updateProfileMutation = useMutation((updateData) => {
        return axios.put(`${baseUrl}/recruiter-update/${profile?.id}/`, updateData, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
            },
            withCredentials: true,
        })
    }
    )


    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>{error.message}</div>
    }


    return (
        <>
            <div className="w-full bg-[#f0efef] p-2 rounded-md">
                <div className="w-full rounded-md">
                    <div className="p-2 bg-white shadow-sm border rounded">
                        <h1 className="text-2xl my-4 mx-auto font-extrabold text-center sm:text-2xl lg:text-3xl">
                            EMPLOYER PROFILE
                        </h1>
                    </div>
                    <div className="p-4 md:p-5 lg:p-8 mt-5 w-full md:w-full mx-auto bg-white rounded-lg">
                        <div className="md:mx-10 lg:mx-20 xl:mx-28">
                            <div className="flex justify-between container mx-auto">
                                <div className="w-full">
                                    <div className="mt-2 px-2 ">
                                        <h1 className="font-thin drop-shadow-md text-2xl pt-10 px-5">
                                            Profile
                                        </h1>
                                        <form className="mx-2 my-2" onSubmit={formik.handleSubmit}>
                                            <div className="flex flex-col lg:flex-row justify-center md:items-center gap-4 w-full " >
                                                <div className="shrink-0 mt-5">
                                                    <img
                                                        className="h-24 w-24 object-cover rounded-full"
                                                        src="https://picsum.photos/200/300"
                                                        alt="Current banner photo"
                                                    />
                                                </div>
                                                <div className="flex items-center pl-2">
                                                    <label className="block pt-2 drop-shadow-md">
                                                        <span className="sr-only t-2">
                                                            Choose Banner photo
                                                        </span>
                                                        <input
                                                            type="file"
                                                            className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#dad5d5] file:text-zinc-900 hover:file:bg-rose-300"
                                                        />
                                                    </label>
                                                </div>
                                                <div className="shrink-0 mt-5">
                                                    <img
                                                        className="h-24 w-24 object-cover rounded-full"
                                                        src="https://picsum.photos/200/300"
                                                        alt="Current profile photo"
                                                    />
                                                </div>
                                                <div className="flex items-center pl-2 ">
                                                    <label className="block pt-2 drop-shadow-md ">
                                                        <span className="sr-only t-2">
                                                            Choose Banner photo
                                                        </span>
                                                        <input
                                                            type="file"
                                                            className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#dad5d5] file:text-zinc-900 hover:file:bg-rose-300"
                                                        />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="flex flex-col lg:flex-row gap-4 bg-[#fff]" >
                                                <label className="relative drop-shadow-md block p-2 mt-5 border-2 border-gray-400 rounded w-full lg:w-1/2">
                                                    <span
                                                        className="text-sm font-semibold text-zinc-900"
                                                        htmlFor="name"
                                                    >
                                                        Username
                                                    </span>
                                                    <input
                                                        id="username"
                                                        type="text"
                                                        placeholder="username"
                                                        readOnly={true}
                                                        value={formik.values.username ? formik.values.username : 'Username'}
                                                        onChange={formik.handleChange}
                                                        className={
                                                            formik.errors.username && formik.touched.username
                                                                ? 'w-full bg-transparent p-1 text-xs text-gray-500 focus:outline-none border-red-500"'
                                                                : 'w-full bg-transparent p-1 text-xs text-gray-500 focus:outline-none'
                                                        }
                                                    />
                                                    {formik.errors.username && formik.touched.username && (
                                                        <small className='text-red-500 text-xs- italic'> {formik.errors.username} </small>
                                                    )}
                                                </label>
                                                <label className="relative drop-shadow-md block p-2 mt-5 border-2 border-gray-400 rounded w-full lg:w-1/2">
                                                    <span
                                                        className="text-sm font-semibold text-zinc-900"
                                                        htmlFor="name"
                                                    >
                                                        Email
                                                    </span>
                                                    <input
                                                        id="email"
                                                        type="text"
                                                        placeholder="email"
                                                        value={formik.values.email ? formik.values.email : "email"}
                                                        onChange={formik.handleChange}
                                                        readOnly={true}
                                                        className={
                                                            formik.errors.email && formik.touched.email
                                                                ? 'w-full bg-transparent p-1 text-xs text-gray-500 focus:outline-none border-red-500"'
                                                                : 'w-full bg-transparent p-1 text-xs text-gray-500 focus:outline-none'
                                                        }
                                                    />
                                                    {formik.errors.email && formik.touched.email && (
                                                        <small className='text-red-500 text-xs- italic'> {formik.errors.email} </small>
                                                    )}
                                                </label>
                                            </div>

                                            <div className="flex flex-col lg:flex-row gap-4">
                                                <label className="relative drop-shadow-md block p-2 mt-5 border-2 border-gray-400 rounded w-full lg:w-1/2">
                                                    <span
                                                        className="text-sm font-semibold text-zinc-900"
                                                        htmlFor="name"
                                                    >
                                                        Phone
                                                    </span>
                                                    <input
                                                        id="phone"
                                                        type="text"
                                                        placeholder="phone number"
                                                        value={formik.values.phone ? formik.values.phone : ''}
                                                        onChange={formik.handleChange}
                                                        readOnly={true}
                                                        className={
                                                            formik.errors.phone && formik.touched.phone
                                                                ? 'w-full bg-transparent p-1 text-xs text-gray-500 focus:outline-none border-red-500"'
                                                                : 'w-full bg-transparent p-1 text-xs text-gray-500 focus:outline-none'
                                                        }
                                                    />
                                                    {formik.errors.phone && formik.touched.phone && (
                                                        <small className='text-red-500 text-xs- italic'> {formik.errors.phone} </small>
                                                    )}
                                                </label>
                                                <label className="relative drop-shadow-md block p-2 mt-5 border-2 border-gray-400 rounded w-full lg:w-1/2">
                                                    <span
                                                        className="text-sm font-semibold text-zinc-900"
                                                        htmlFor="name"
                                                    >
                                                        Place
                                                    </span>
                                                    <input
                                                        id="place"
                                                        type="text"
                                                        placeholder="place"
                                                        value={formik.values.place ? formik.values.place : ''}
                                                        onChange={formik.handleChange}
                                                        className={
                                                            formik.errors.place && formik.touched.place
                                                                ? 'w-full bg-transparent p-1 text-xs text-gray-500 focus:outline-none border-red-500"'
                                                                : 'w-full bg-transparent p-1 text-xs text-gray-500 focus:outline-none'
                                                        }
                                                    />
                                                    {formik.errors.place && formik.touched.place && (
                                                        <small className='text-red-500 text-xs- italic'> {formik.errors.place} </small>
                                                    )}
                                                </label>
                                            </div>
                                            <div className="flex flex-col lg:flex-row gap-4">
                                                <label className="relative drop-shadow-md block p-2 mt-5 border-2 border-gray-400 rounded w-full lg:w-1/2">
                                                    <span
                                                        className="text-sm font-semibold text-zinc-900"
                                                        htmlFor="name"
                                                    >
                                                        State
                                                    </span>
                                                    <input
                                                        id="state"
                                                        type="text"
                                                        placeholder="state"
                                                        value={formik.values.state ? formik.values.state : ""}
                                                        onChange={formik.handleChange}
                                                        className={
                                                            formik.errors.place && formik.touched.place
                                                                ? 'w-full bg-transparent p-1 text-xs text-gray-500 focus:outline-none border-red-500"'
                                                                : 'w-full bg-transparent p-1 text-xs text-gray-500 focus:outline-none'
                                                        }
                                                    />
                                                </label>
                                                <label className="relative drop-shadow-md block p-2 mt-5 border-2 border-gray-400 rounded w-full lg:w-1/2">
                                                    <span
                                                        className="text-sm font-semibold text-zinc-900"
                                                        htmlFor="name"
                                                    >
                                                        City
                                                    </span>
                                                    <input
                                                        id="city"
                                                        type="text"
                                                        placeholder="city name"
                                                        value={formik.values.city ? formik.values.city : ''}
                                                        onChange={formik.handleChange}
                                                        className={
                                                            formik.errors.city && formik.touched.city
                                                                ? 'w-full bg-transparent p-1 text-xs text-gray-500 focus:outline-none border-red-500"'
                                                                : 'w-full bg-transparent p-1 text-xs text-gray-500 focus:outline-none'
                                                        }
                                                    />
                                                    {formik.errors.city && formik.touched.city && (
                                                        <small className='text-red-500 text-xs- italic'> {formik.errors.city} </small>
                                                    )}
                                                </label>
                                            </div>
                                            <div className="flex flex-col lg:flex-row gap-4">
                                                <label className="relative drop-shadow-md block p-2 mt-5 border-2 border-gray-400 rounded w-full lg:w-1/2">
                                                    <span
                                                        className="text-sm font-semibold text-zinc-900"
                                                        htmlFor="name"
                                                    >
                                                        Zip code
                                                    </span>
                                                    <input
                                                        id="zipcode"
                                                        type="text"
                                                        placeholder="zip code"
                                                        value={formik.values.zipcode ? formik.values.zipcode : ''}
                                                        onChange={formik.handleChange}
                                                        className={
                                                            formik.errors.zipcode && formik.touched.zipcode
                                                                ? 'w-full bg-transparent p-1 text-xs text-gray-500 focus:outline-none border-red-500"'
                                                                : 'w-full bg-transparent p-1 text-xs text-gray-500 focus:outline-none'
                                                        }
                                                    />
                                                    {formik.errors.zipcode && formik.touched.zipcode && (
                                                        <small className='text-red-500 text-xs- italic'> {formik.errors.zipcode} </small>
                                                    )}
                                                </label>
                                                <label className="relative drop-shadow-md block p-2 mt-5 border-2 border-gray-400 rounded w-full lg:w-1/2">
                                                    <span
                                                        className="text-sm font-semibold text-zinc-900"
                                                        htmlFor="name"
                                                    >
                                                        Organization
                                                    </span>
                                                    <input
                                                        id="organization"
                                                        type="text"
                                                        placeholder="organization"
                                                        value={formik.values.organization ? formik.values.organization : ''}
                                                        onChange={formik.handleChange}
                                                        className={
                                                            formik.errors.organization && formik.touched.organization
                                                                ? 'w-full bg-transparent p-1 text-xs text-gray-500 focus:outline-none border-red-500"'
                                                                : 'w-full bg-transparent p-1 text-xs text-gray-500 focus:outline-none'
                                                        }
                                                    />
                                                    {formik.errors.organization && formik.touched.organization && (
                                                        <small className='text-red-500 text-xs- italic'> {formik.errors.zipcode} </small>
                                                    )}
                                                </label>
                                            </div>
                                            <div className="flex flex-col lg:flex-row gap-4 w-full">
                                                <label className="relative drop-shadow-md block p-2 mt-5 border-2 border-gray-400 rounded w-full lg:w-1/2 ">
                                                    <span
                                                        className="text-sm font-semibold text-zinc-900"
                                                        htmlFor="name"
                                                    >
                                                        Head Quarters
                                                    </span>
                                                    <input
                                                        id="employer_head_quarters"
                                                        type="text"
                                                        placeholder="header quarters"
                                                        value={formik.values.employer_head_quarters ? formik.values.employer_head_quarters : ''}
                                                        onChange={formik.handleChange}
                                                        className={
                                                            formik.errors.zipcode && formik.touched.zipcode
                                                                ? 'w-full bg-transparent p-1 text-xs text-gray-500 focus:outline-none border-red-500"'
                                                                : 'w-full bg-transparent p-1 text-xs text-gray-500 focus:outline-none'
                                                        }
                                                    />
                                                </label>
                                                <label className="relative drop-shadow-md block p-2 mt-5 border-2 border-gray-400 rounded w-full lg:w-1/2">
                                                    <span
                                                        className="text-sm font-semibold text-zinc-900"
                                                        htmlFor="name"
                                                    >
                                                        Avarage Salary
                                                    </span>
                                                    <input
                                                        id="employer_avarage_salary"
                                                        type="text"
                                                        placeholder="avarage salary"
                                                        value={formik.values.employer_avarage_salary ? formik.values.employer_avarage_salary : ''}
                                                        onChange={formik.handleChange}
                                                        className={
                                                            formik.errors.employer_avarage_salary && formik.touched.employer_avarage_salary
                                                                ? 'w-full bg-transparent p-1 text-xs text-gray-500 focus:outline-none border-red-500"'
                                                                : 'w-full bg-transparent p-1 text-xs text-gray-500 focus:outline-none'
                                                        }

                                                    />
                                                    {formik.errors.employer_avarage_salary && formik.touched.employer_avarage_salary && (
                                                        <small className='text-red-500 text-xs- italic'> {formik.errors.employer_avarage_salary} </small>
                                                    )}
                                                </label>
                                            </div>
                                            <div className="flex flex-col lg:flex-row gap-4">

                                                <label className="relative drop-shadow-md block p-2 mt-5 border-2 border-gray-400 rounded w-full">
                                                    <span
                                                        className="text-sm font-semibold text-zinc-900"
                                                        htmlFor="name"
                                                    >
                                                        employer_description
                                                    </span>
                                                    <Textarea
                                                        id="employer_description"
                                                        name="employer_description"
                                                        placeholder="Description"
                                                        value={formik.values.employer_description ? formik.values.employer_description : ''}
                                                        onChange={formik.handleChange}
                                                        className={
                                                            formik.errors.employer_description && formik.touched.employer_description
                                                                ? 'w-full bg-transparent p-1 text-xs text-gray-500 focus:outline-none border-red-500"'
                                                                : 'w-full bg-transparent p-1 text-xs text-gray-500 focus:outline-none'
                                                        }
                                                    />
                                                    {formik.errors.employer_description && formik.touched.employer_description && (
                                                        <small className='text-red-500 text-xs- italic'> {formik.errors.employer_description} </small>
                                                    )}
                                                </label>
                                            </div>
                                            <button className="mt-5 border-2 drop-shadow-md px-5 py-2 rounded-lg border-gray-900  border-b-4 font-black translate-y-2 border-l-4" type="submit" >
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EmployerProfile;