// App.js
import React from "react";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployerDashboard from "./pages/Employer/EmployerDashboardPage";
import CreateJob from "./components/Jobs/CreateJob";
import SignupPage from "./pages/Register/SignupPage";
// import Profile from './pages/Common/Profile';
import HomePage from "./pages/Candidate/HomePage";
import Jobs from "./pages/Candidate/Jobs";
import PrivateRoute from "./components/PrivateRoute";
import EmployerJobs from "./pages/Employer/Jobs/EmployerJobsPage";
import UpdateJob from "./pages/Employer/Jobs/UpdateJob";
import ViewJob from "./pages/Employer/Jobs/ViewJob";
import Profile from "./pages/Candidate/Profile";
import AdminLogin from "./components/Register/AdminLogin";
import DashboardPage from "./pages/Admin/DashboardPage";
import EmployeerManagementPage from "./pages/Admin/EmployeerManagementPage";
import CandidateManagementPage from "./pages/Admin/CandidateManagementPage";
import BannerManagementPage from "./pages/Admin/BannerManagementPage";
import MaintenancePage from "./components/MaintenancePage";
import ApplicationPage from "./pages/Employer/Applications/ApplicationPage";
import CandidateDetailsPage from "./pages/Employer/Candidate/CandidateDetailsPage";
import InterviewCalenderPage from "./pages/Employer/Interviews/InterviewCalenderPage";
import InterviewsListPage from "./pages/Employer/Interviews/InterviewsListPage";
import ScheduledInterviewPage from "./pages/Employer/Interviews/ScheduledInterviewPage";
import EmployerProfilePage from "./pages/Employer/Profile/EmployerProfilePage";
import TestPage from "./TestPage";
import ApplicationDetailsPage from "./pages/Employer/Applications/ApplicationDetailsPage";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    {/* ........Registrations.......... */}
                    <Route path="register/" element={<SignupPage />} />
                    <Route path="login/" element={<Login />} />
                    {/* ........User Interface.......... */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="jobs/" element={<Jobs />} />
                    <Route path="profile/" element={<Profile />} />
                    {/* ........Employeer Side.......... */}
                    <Route
                        path="employer/dashboard/"
                        element={<EmployerDashboard />}
                    />
                    <Route
                        path="employer/create-job/"
                        element={<CreateJob />}
                    />
                    <Route path="employer/jobs/" element={<EmployerJobs />} />
                    <Route
                        path="employer/update-job/:id/"
                        element={<UpdateJob />}
                    />
                    <Route
                        path="employer/view-job/:jobId/"
                        element={<ViewJob />}
                    />
                    <Route
                        path="employer/profile"
                        element={<EmployerProfilePage />}
                    />
                    <Route
                        path="employer/jobapplication/"
                        element={<ApplicationPage />}
                    />
                    <Route
                        path="employer/applicationdetails/"
                        element={<ApplicationDetailsPage />}
                    />
                    <Route
                        path="employer/candidatedetails/"
                        element={<CandidateDetailsPage />}
                    />
                    <Route
                        path="employer/interviewslist/"
                        element={<InterviewsListPage />}
                    />
                    <Route
                        path="employer/interviewcalender/"
                        element={<InterviewCalenderPage />}
                    />
                    <Route
                        path="employer/scheduledinterview/"
                        element={<ScheduledInterviewPage />}
                    />

                    {/* ........Company Side.......... */}
                    <Route path="adminlogin/" element={<AdminLogin />} />
                    <Route path="admindashboard/" element={<DashboardPage />} />
                    <Route
                        path="employeermanagement/"
                        element={<EmployeerManagementPage />}
                    />
                    <Route
                        path="candidatemanagement/"
                        element={<CandidateManagementPage />}
                    />
                    <Route
                        path="bannermanagement/"
                        element={<BannerManagementPage />}
                    />
                    {/* .................. */}
                    <Route path="/*" element={<MaintenancePage />} />
                    <Route path="testpage" element={<TestPage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
