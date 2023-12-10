// App.js
import React from 'react';
import Login from './pages/Login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateJob from './pages/Employer/CreateJobPage';
import SignupPage from './pages/Register/SignupPage';
import EmployerProfile from './pages/Employer/EmployerProfile';
// import Profile from './pages/Common/Profile';
import HomePage from './pages/Candidate/HomePage';
import Jobs from './pages/Candidate/Jobs';
import PrivateRoute from './components/PrivateRoute';
import EmployerJobs from './pages/Employer/EmployerJobs';
import UpdateJob from './pages/Employer/UpdateJob';
import ViewJob from './pages/Employer/ViewJob';
import Profile from './pages/Candidate/Profile';
import AdminLogin from './components/Register/AdminLogin';
import DashboardPage from './pages/Admin/DashboardPage';
import EmployeerManagementPage from './pages/Admin/EmployeerManagementPage';
import CandidateManagementPage from './pages/Admin/CandidateManagementPage';
import BannerManagementPage from './pages/Admin/BannerManagementPage';
import EmployerDashboardPage from './pages/Employer/EmployerDashboardPage';
import ApplicationPage from "./pages/Employer/Applications/ApplicationPage";
import CandidateDetailsPage from "./pages/Employer/Candidate/CandidateDetailsPage";
import InterviewsPage from "./pages/Employer/InterviewsPage";
import MaintenancePage from "./components/MaintenancePage";



const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path="register/" element={<SignupPage />} />
          <Route path="login/" element={<Login />} />
          <Route path="/" element={<PrivateRoute element={<HomePage />} accessType='user' />} />
          <Route path="jobs/" element={<PrivateRoute element={<Jobs />} accessType="user" />} />
          <Route path="profile/" element={<PrivateRoute element={<Profile />} accessType="user" />} />

          <Route path="employer/dashboard/" element={<PrivateRoute element={<EmployerDashboardPage />} accessType="employer" />} />
          <Route path="employer/create-job/" element={<PrivateRoute element={<CreateJob />} accessType="employer" />} />
          <Route path="employer/jobs/" element={<PrivateRoute element={<EmployerJobs />} accessType="employer" />} />
          <Route path="employer/update-job/:id/" element={<PrivateRoute element={<UpdateJob />} accessType="employer" />} />
          <Route path="employer/view-job/:jobId/" element={<PrivateRoute element={<ViewJob />} accessType="employer" />} />
          <Route path="employer/profile" element={<PrivateRoute element={<EmployerProfile />} accessType="employer" />} />
          <Route path="employer/application/" element={<ApplicationPage />} />
          <Route path="employer/candidatedetails/" element={<CandidateDetailsPage />} />
          <Route path="employer/interviews/" element={<InterviewsPage />} />

          <Route path="super-admin/login" element={<AdminLogin />} />
          <Route path="super-admin/dashboard" element={<DashboardPage />} />
          <Route path="super-admin/employermanagement" element={<EmployeerManagementPage />} />
          <Route path="super-admin/candidatemanagement" element={<CandidateManagementPage />} />
          <Route path="super-admin/bannermanagement" element={<BannerManagementPage />} />

          <Route path="/*" element={<MaintenancePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
