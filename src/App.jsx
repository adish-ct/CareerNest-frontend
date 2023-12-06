// App.js
import React from "react";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployerDashboard from "./pages/Employer/EmployerDashboardPage";
import CreateJob from "./pages/Employer/CreateJob";
import SignupPage from "./pages/Register/SignupPage";
import EmployerProfile from "./pages/Employer/EmployerProfile";
// import Profile from './pages/Common/Profile';
import HomePage from "./pages/Candidate/HomePage";
import Jobs from "./pages/Candidate/Jobs";
import PrivateRoute from "./components/PrivateRoute";
import EmployerJobs from "./pages/Employer/EmployerJobsPage";
import UpdateJob from "./pages/Employer/UpdateJob";
import ViewJob from "./pages/Employer/ViewJob";
import Profile from "./pages/Candidate/Profile";
import AdminLogin from "./components/Register/AdminLogin";
import DashboardPage from "./pages/Admin/DashboardPage";
import EmployeerManagementPage from "./pages/Admin/EmployeerManagementPage";
import CandidateManagementPage from "./pages/Admin/CandidateManagementPage";
import BannerManagementPage from "./pages/Admin/BannerManagementPage";

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
          <Route path="employer/dashboard/" element={<EmployerDashboard />} />
          <Route path="employer/create-job/" element={<CreateJob />} />
          <Route path="employer/jobs/" element={<EmployerJobs />} />
          <Route path="employer/update-job/:id/" element={<UpdateJob />} />
          <Route path="employer/view-job/:jobId/" element={<ViewJob />} />
          <Route path="employer/profile" element={<EmployerProfile />} />
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
          <Route path="bannermanagement/" element={<BannerManagementPage />} />
          {/* .................. */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
