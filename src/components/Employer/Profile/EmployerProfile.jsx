import React from "react";

function EmployerProfile() {
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
                        <div className="sm:mx-24 lg:mx-24 xl:mx-32">
                            <div className="flex justify-between container mx-auto">
                                <div className="w-full">
                                    <div className="mt-2 px-2">
                                        <h1 className="font-thin drop-shadow-md text-2xl pt-10 px-5">
                                            Profile
                                        </h1>
                                        <form className="mx-2 my-2">
                                            <div className="flex flex-col md:flex-row justify-center md:items-center gap-4">
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
                                            </div>
                                            <div className="flex flex-col md:flex-row gap-4">
                                                <label className="relative drop-shadow-md block p-2 mt-5 border-2 border-gray-400 rounded md:w-1/2">
                                                    <span
                                                        className="text-sm font-semibold text-zinc-900"
                                                        htmlFor="name"
                                                    >
                                                        Employer Name1
                                                    </span>
                                                    <input
                                                        className="w-full bg-transparent p-1 text-xs text-gray-500 focus:outline-none"
                                                        id="name"
                                                        type="text"
                                                        placeholder="Name"
                                                    />
                                                </label>
                                                <label className="relative drop-shadow-md block p-2 mt-5 border-2 border-gray-400 rounded md:w-1/2">
                                                    <span
                                                        className="text-sm font-semibold text-zinc-900"
                                                        htmlFor="name"
                                                    >
                                                        Employer Name2
                                                    </span>
                                                    <input
                                                        className="w-full bg-transparent p-1 text-xs text-gray-500 focus:outline-none"
                                                        id="name"
                                                        type="text"
                                                        placeholder="Name"
                                                    />
                                                </label>
                                            </div>

                                            <div className="flex flex-col md:flex-row gap-4">
                                                <label className="relative drop-shadow-md block p-2 mt-5 border-2 border-gray-400 rounded md:w-1/2">
                                                    <span
                                                        className="text-sm font-semibold text-zinc-900"
                                                        htmlFor="name"
                                                    >
                                                        Employer Name3
                                                    </span>
                                                    <input
                                                        className="w-full bg-transparent p-1 text-xs text-gray-500 focus:outline-none"
                                                        id="name"
                                                        type="text"
                                                        placeholder="Name"
                                                    />
                                                </label>
                                                <label className="relative drop-shadow-md block p-2 mt-5 border-2 border-gray-400 rounded md:w-1/2">
                                                    <span
                                                        className="text-sm font-semibold text-zinc-900"
                                                        htmlFor="name"
                                                    >
                                                        Employer Name4
                                                    </span>
                                                    <input
                                                        className="w-full bg-transparent p-1 text-xs text-gray-500 focus:outline-none"
                                                        id="name"
                                                        type="text"
                                                        placeholder="Name"
                                                    />
                                                </label>
                                            </div>
                                            <div className="flex flex-col md:flex-row gap-4">
                                                <label className="relative drop-shadow-md block p-2 mt-5 border-2 border-gray-400 rounded md:w-1/2">
                                                    <span
                                                        className="text-sm font-semibold text-zinc-900"
                                                        htmlFor="name"
                                                    >
                                                        Employer Name5
                                                    </span>
                                                    <input
                                                        className="w-full bg-transparent p-1 text-xs text-gray-500 focus:outline-none"
                                                        id="name"
                                                        type="text"
                                                        placeholder="Name"
                                                    />
                                                </label>
                                                <label className="relative drop-shadow-md block p-2 mt-5 border-2 border-gray-400 rounded md:w-1/2">
                                                    <span
                                                        className="text-sm font-semibold text-zinc-900"
                                                        htmlFor="name"
                                                    >
                                                        Employer Name6
                                                    </span>
                                                    <input
                                                        className="w-full bg-transparent p-1 text-xs text-gray-500 focus:outline-none"
                                                        id="name"
                                                        type="text"
                                                        placeholder="Name"
                                                    />
                                                </label>
                                            </div>
                                            <button className="mt-5 border-2 drop-shadow-md px-5 py-2 rounded-lg border-gray-900  border-b-4 font-black translate-y-2 border-l-4">
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
