import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footter from "./Components/Footter";
import Landing from "./Page/Landing/Landing";
import Login from "./Page/Login";
import Singup from "./Page/Signup";
import Company from "./Page/Company";
import CompanyDetail from "./Page/CompanyDetail";
import Blog from "./Page/Blog";
import Profile from "./Page/Profile";
import Lan from "./Page/Employer/Lan";
import Nav from "./Page/Employer/Nav";
import Job from "./Page/Job";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Landing />
              <Footter />
            </>
          }
        />
        <Route
          path="/Dangnhap"
          element={
            <>
              <Navbar />
              <Login />
              <Footter />
            </>
          }
        />
        <Route
          path="/Dangki"
          element={
            <>
              <Navbar />
              <Singup />
              <Footter />
            </>
          }
        />
        <Route
          path="/Congty"
          element={
            <>
              <Navbar />
              <Company />
              <Footter />
            </>
          }
        />
        <Route
          path="/Profile"
          element={
            <>
              <Navbar />
              <Profile />
              <Footter />
            </>
          }
        />
        <Route
          path="/companydetail/:companyId"
          element={
            <>
              <Navbar />
              <CompanyDetail />
              <Footter />
            </>
          }
        />
        <Route
          path="/Timvieclam"
          element={
            <>
              <Navbar />
              <Job />
              <Footter />
            </>
          }
        />

        <Route
          path="/Blog"
          element={
            <>
              <Blog />
              <Footter />
            </>
          }
        />
        <Route
          path="/Nhatuyendung"
          element={
            <>
              <Nav />
              <Lan />
              <Footter />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
