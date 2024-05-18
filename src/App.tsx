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
import Job from "./Page/Job";
import Info from "./Page/Employer/Info";
import NavEm from "./Page/Employer/Nav";
import Job1 from "./Page/Employer/Job";
import { AuthContextProvider } from "./Context/AuthContext";
import { ToastContainer } from "react-toastify";
import JobDetail from "./Page/JobDetail";

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dangnhap" element={<Login />} />
          <Route path="/dangki" element={<Singup />} />
          <Route path="/congty" element={<Company />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/companydetail/:companyId" element={<CompanyDetail />} />
          <Route path="/timvieclam" element={<Job />} />
          <Route path="/jobdetail/:jobId" element={<JobDetail />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/nhatuyendung" element={<Lan />} />
          <Route path="/nhatuyendung/info" element={<Info />} />
          <Route path="/nhatuyendung/job" element={<Job1 />} />
          {/* <Route path="/Nhatuyendung/Info2" element={<Info2 />} /> */}
        </Routes>
      </Router>
    </AuthContextProvider>
  );
};

export default App;
