import React from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import Login from './pages/Login/Login';
import { BrowserRouter as Router, Route, Routes, Navigate, } from "react-router-dom";
import EmployerDashboard from './sample/EmployerDashboard';
import CreateJob from './sample/CreateJob';
import SignupPage from './pages/Register/SignupPage';
import Navbar from './components/Header/Accounts/Navbar';


const App = () => {
  const value = useSelector((state) => {
    return state.value;
  })

  const loading = useSelector((state) => {
    return state.loading;
  })
  const dispatch = useDispatch()

  return (
    <>
      <Router>
        <Routes>
          <Route path="register/" element={<SignupPage />} />
          <Route path="login/" element={<Login />} />
          <Route path="dash/" element={<EmployerDashboard />} />
          <Route path="create-job/" element={<CreateJob />} />
          <Route path="/" element={<Navbar />} />

          <Route />
        </Routes>
      </Router>
    </>
  )
}

export default App;
