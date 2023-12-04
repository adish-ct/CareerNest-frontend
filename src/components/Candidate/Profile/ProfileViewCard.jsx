import React, { useEffect, useState } from 'react'
import ProfileBasicInformationForm from './ProfileBasicInformationForm';
import ProfileDetailsCard from './ProfileDetailsCard';


function ProfileViewCard({ userDetails }) {

    return (
        <section className=" py-1 bg-blueGray-50">
            <div className="relative flex flex-col min-w-0 break-words w-full rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 text-xl font-bold">My account</h6>
                    </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    {userDetails && <ProfileBasicInformationForm userDetails={userDetails} />}
                    {<ProfileDetailsCard />}
                </div>
            </div>
        </section>
    )
}

export default ProfileViewCard
