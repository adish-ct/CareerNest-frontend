import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import setUserDetails from '../../redux/Actions/UserAction'
import { jwtDecode } from "jwt-decode";
import ClipLoader from 'react-spinners/ClipLoader';
import { toggleLoading } from '../../redux/Actions/AuthAction'


function Jobs() {

  const dispatch = useDispatch()

  // select user state from redux
  const user = useSelector((state) => {
    return state.user;
  })

  // select loading state from redux
  const loading = useSelector((state) => {
    return state.loading
  })

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');

    if (token) {
      const decode_token = jwtDecode(token);
      console.log(decode_token);
      dispatch(setUserDetails(decode_token));
    }
    dispatch(toggleLoading())
    // setLoading(false);
  }, [dispatch]);

  if (loading) {
    // You can render a loading spinner or any other loading indicator
    return (
      < div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center" >
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div >
    )
  }

  return (
    <>
      <div>Jobs</div>
      {user && <div>{user.username}</div>}
    </>
  );
}

export default Jobs;