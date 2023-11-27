// App.js
import React from 'react';
import Login from './pages/Login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployerDashboard from './pages/Employer/EmployerDashboard';
import CreateJob from './pages/Employer/CreateJob';
import SignupPage from './pages/Register/SignupPage';
import EmployerProfile from './pages/Employer/EmployerProfile';
import Profile from './pages/Common/Profile';
import HomePage from './pages/Candidate/HomePage';
import Jobs from './pages/Candidate/Jobs';
import PrivateRoute from './components/PrivateRoute';

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path="register/" element={<SignupPage />} />
          <Route path="login/" element={<Login />} />
          <Route path="/" element={<PrivateRoute element={<HomePage />} accessType='user' />} />
          <Route path="jobs/" element={<PrivateRoute element={<Jobs />} accessType="user" />} />
          <Route path="employer/dashboard/" element={<PrivateRoute element={<EmployerDashboard />} accessType="employer" />} />
          <Route path="employer/create-job/" element={<PrivateRoute element={<CreateJob />} accessType="employer" />} />
          <Route path="employer/profile" element={<PrivateRoute element={<EmployerProfile />} accessType="employer" />} />
          <Route path="profile/" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
