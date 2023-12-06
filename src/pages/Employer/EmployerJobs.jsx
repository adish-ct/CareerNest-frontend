import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Employer/Sidebar";
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import axios from "axios";
import { baseUrl } from "../../api/Api";
import getLocal from "../../helper/Auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import setJobDetails from "../../redux/Actions/JobActions";
import { toggleLoading } from "../../redux/Actions/AuthAction";

function EmployerJobs() {
  const [jobs, setJobs] = useState([]);
  const job = useSelector((state) => state.job);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchEmployerJobs = async () => {
    try {
      const token = getLocal();
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.get(`${baseUrl}/employer/jobs/`, {
        headers,
      });
      dispatch(setJobDetails(response.data));
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching employer jobs:", error);
    }
  };

  useEffect(() => {
    fetchEmployerJobs();
    dispatch(toggleLoading());
  }, []);

  const handleViewClick = (jobId) => {
    console.log("Clicked on job ID:", jobId);
    navigate(`/employer/view-job/${jobId}`);
  };

  const handleUpdateClick = (jobId) => {
    navigate(`/employer/update-job/${jobId}`);
  };

  if (loading) {
    return (
      <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }
  return (
    <>
      <div className="flex">
        <Sidebar />
        {/* main dashboard */}
        <div className="h-screen w-5/6">
          {/* Dashboard Heading */}
          {/* Dashboard Heading */}

          {/* Dashboard content */}
          <div className="text-center p-28">
            <div className="text-center">
              {jobs.map((job) => (
                <Card key={job.id} className="mt-6 w-full bg-[#f8f8f8]">
                  <CardBody className="">
                    <div className="flex justify-between ps-10 pe-10">
                      <div className="flex flex-col text-start">
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="mb-2"
                        >
                          {job.job_role}
                        </Typography>
                        <Typography>Location: {job.job_location}</Typography>
                      </div>
                      <div className="flex flex-col gap-5 text-end">
                        <Button onClick={() => handleViewClick(job.id)}>
                          View
                        </Button>
                        <Button onClick={() => handleUpdateClick(job.id)}>
                          Update
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
          {/* Dashboard content */}
        </div>
        {/* main dashboard */}
      </div>
    </>
  );
}

export default EmployerJobs;
