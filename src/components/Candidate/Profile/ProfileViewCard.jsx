import React, { useEffect, useState } from 'react'
import { LiaUserEditSolid } from "react-icons/lia";
import getLocal from '../../../helper/Auth';
import { jwtDecode } from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLoading } from '../../../redux/Actions/AuthAction'
import profileAction from '../../../redux/Actions/ProfileAction'
import { baseUrl } from '../../../api/Api';
import axios from 'axios'
import ProfileBasicInformationForm from './ProfileBasicInformationForm';
import ProfileDetailsCard from './ProfileDetailsCard';


function ProfileViewCard() {

    const user = useSelector((state) => state.user)
    const profile = useSelector((state) => state.profile)
    const loading = useSelector((state) => state.loading)
    const dispatch = useDispatch()
    const [userDetails, setUserDetails] = useState(null)



    const fetchUser = async () => {
        try {
            const token = getLocal();
            const decodedToken = jwtDecode(token);
            if (token) {
                const response = await axios.get(`${baseUrl}/accounts/get-user/${decodedToken.user_id}`);
                setUserDetails(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            await Promise.all([fetchUser()]);
            dispatch(toggleLoading());
        };

        fetchData();
    }, [dispatch]);


    if (loading) {
        return (
            <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        );
    }

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
