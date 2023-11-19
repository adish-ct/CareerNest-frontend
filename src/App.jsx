import React from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import Login from './sample/Login';
import { BrowserRouter as Router, Route, Routes, Navigate, } from "react-router-dom";
import EmployerDashboard from './sample/EmployerDashboard';

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
          <Route path="/" element={<Login />} />
          <Route path="dash/" element={<EmployerDashboard />} />

          <Route />
        </Routes>
      </Router>
    </>
  )
}

export default App;