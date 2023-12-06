// JobDetails.js

import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Employer/Sidebar";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { useNavigate, useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import setUserDetails from "../../redux/Actions/UserAction";
import { Formik } from "formik";
import { toggleLoading } from "../../redux/Actions/AuthAction";
import { useDispatch } from "react-redux";
import axios from "axios";
import { baseUrl } from "../../api/Api";

function JobDetails() {
  const { jobId } = useParams();
  const [jobDetails, setJobDetails] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("jwtToken");
      const decoded_token = await jwtDecode(token);
      dispatch(setUserDetails(decoded_token));

      const existingJobData = await axios.get(`${baseUrl}/jobs/${jobId}/`);
      setJobDetails(existingJobData);
      dispatch(toggleLoading());
    };
    fetchData();
  }, [jobId]);

  const handleBackClick = () => {
    navigate("/employer/jobs"); // Navigate back to the jobs page
  };

  if (!jobDetails) {
    return <h1>Loading...</h1>; // Add a loading indicator or error handling
  }

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="h-screen w-5/6">
          {/* Dashboard Heading */}
          {/* You can customize the header based on your requirements */}
          <div className="text-center p-28">
            <Typography variant="h3" color="blue-gray" className="mb-5">
              Job Details
            </Typography>
            <Card className="w-full bg-[#f8f8f8]">
              <CardBody>
                {/* Display job details here */}
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {jobDetails.job_role}
                </Typography>
                <Typography>Location: {jobDetails.job_location}</Typography>
                {/* Add more details as needed */}
              </CardBody>
            </Card>
            <Button onClick={handleBackClick} className="mt-4">
              Back to Jobs
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobDetails;
