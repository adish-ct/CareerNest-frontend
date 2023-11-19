import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignUp from "./components/Register/SignUp";
import Footer from "./components/Header/Accounts/Footer";
import Banner from "./components/Candidate/Banner";
import HomePage from "./pages/Candidate/HomePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          {/* <Route path="dash/" element={<EmployerDashboard />} /> */}

          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
